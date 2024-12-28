<?php
namespace App\Http\Controllers\Api\System;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Validator;

use App\Http\Constant\Code;
use App\Http\Constant\RedisKey;
use App\Events\Common\Message\SmsEvent;
use App\Models\Api\Module\Member\Member;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-10-21
 *
 * 登录控制器
 */
class LoginController extends BaseController
{
  /**
   * @api {post} /api/login 01. 密码登录
   * @apiDescription 通过账户密码进行登录操作
   * @apiGroup 01. 登录模块
   *
   * @apiParam {string} username 登录账户（18201018926）
   * @apiParam {string} password 登录密码（123456）
   *
   * @apiSuccess (basic params) {String} token 身份令牌
   * @apiSuccess (user_info params) {Number} id 会员编号
   * @apiSuccess (user_info params) {Number} organization_id 会员所属机构编号（暂时用不上）
   * @apiSuccess (user_info params) {Number} open_id 第三方登录编号
   * @apiSuccess (user_info params) {Number} member_no 会员号
   * @apiSuccess (user_info params) {String} avatar 会员头像
   * @apiSuccess (user_info params) {String} qr_code 会员二维码
   * @apiSuccess (user_info params) {String} username 登录账户
   * @apiSuccess (user_info params) {String} nickname 会员昵称
   * @apiSuccess (user_info params) {Number} is_freeze 是否冻结 1 冻结 2 不冻结
   * @apiSuccess (user_info params) {Number} condition 成为条件 1 系统添加 2 完成任务
   * @apiSuccess (user_info params) {String} create_time 注册时间
   * @apiSuccess (role params) {String} id 角色编号
   * @apiSuccess (role params) {String} title 角色名称
   * @apiSuccess (role params) {String} content 角色描述
   *
   * @apiSampleRequest /api/login
   * @apiVersion 1.0.0
   */
  public function login(Request $request)
  {
    if($request->isMethod('post'))
    {
      $messages = [
        'username.required'  => '请输入用户名称',
        'username.regex'     => '手机号码不合法',
        'password.required'  => '请输入用户密码',
      ];

      $rule = [
        'username' => 'required',
        'username' => 'regex:/^1[3456789][0-9]{9}$/',     //正则验证
        'password' => 'required',
      ];

      // 验证用户数据内容是否正确
      $validation = self::validation($request, $messages, $rule);

      if(!$validation['status'])
      {
        return $validation['message'];
      }
      else
      {
        try
        {
          $username = $request->username;
          $password = $request->password;

          $response = Member::getRow(['username' => $username], ['role']);

          // 用户不存在
          if(is_null($response))
          {
            return self::error(Code::MEMBER_EMPTY);
          }

          // 用户已禁用
          if(2 == $response->status['value'])
          {
            return self::error(Code::MEMBER_DISABLE);
          }

          // 在特定时间内访问次数过多，就触发访问限制
          if(Member::AccessRestrictions($response))
          {
            return self::error(Code::ACCESS_RESTRICTIONS);
          }

          // 检验用户输入的密码是否正确
          if(Member::checkPassword($response, $password))
          {
            // 设置密码尝试信息
            Member::setTryNumber($response);

            return self::error(Code::PASSWORD_ERROR);
          }

          $credentials = [
            'username' => $username,
            'password' => $password,
          ];

          // 认证用户密码是否可以登录
          if (! $token = auth('api')->attempt($credentials))
          {
            return self::error(Code::USER_EXIST);
          }

          // 获取客户端ip地址
          $response->last_login_ip = $request->getClientIp();

          $old_token = $response->remember_token;

          if(!empty($old_token))
          {
            \JWTAuth::setToken($old_token)->invalidate();

            // $invalidate = auth('api')->setToken($old_token);

            // // 检查旧 Token 是否有效, 加入黑名单
            // if($invalidate->check())
            // {
            //   $invalidate->invalidate();
            // }
          }

          // 记录登录信息
          Member::login($response, $token);


          return self::success([
            'code' => 200,
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user_info' => $response
          ]);
        }
        catch(\Exception $e)
        {
          // 记录异常信息
          self::record($e);

          return self::error(Code::ERROR);
        }
      }
    }
  }


  /**
   * @api {post} /api/sms_login 02. 短信登录
   * @apiDescription 短信登录
   * @apiGroup 01. 登录模块
   * @apiParam {string} username 登录账户（18201018926）
   * @apiParam {string} sms_code 短信验证码（7777）
   *
   * @apiSuccess (basic params) {String} token 身份令牌
   * @apiSuccess (user_info params) {Number} id 会员编号
   * @apiSuccess (user_info params) {Number} organization_id 会员所属机构编号（暂时用不上）
   * @apiSuccess (user_info params) {Number} open_id 第三方登录编号
   * @apiSuccess (user_info params) {Number} member_no 会员号
   * @apiSuccess (user_info params) {String} avatar 会员头像
   * @apiSuccess (user_info params) {String} qr_code 会员二维码
   * @apiSuccess (user_info params) {String} username 登录账户
   * @apiSuccess (user_info params) {String} nickname 会员昵称
   * @apiSuccess (user_info params) {Number} is_freeze 是否冻结 1 冻结 2 不冻结
   * @apiSuccess (user_info params) {Number} condition 成为条件 1 系统添加 2 完成任务
   * @apiSuccess (user_info params) {String} create_time 注册时间
   * @apiSuccess (role params) {String} id 角色编号
   * @apiSuccess (role params) {String} title 角色名称
   * @apiSuccess (role params) {String} content 角色描述
   *
   * @apiSampleRequest /api/sms_login
   * @apiVersion 1.0.0
   */
  public function sms_login(Request $request)
  {
    if($request->isMethod('post'))
    {
      $messages = [
        'username.required'  => '请输入用户名称',
        'username.regex'     => '手机号码不合法',
        'sms_code.required'  => '请输入短信验证码',
      ];

      $rule = [
        'username' => 'required',
        'username' => 'regex:/^1[3456789][0-9]{9}$/',     //正则验证
        'sms_code' => 'required',
      ];

      // 验证用户数据内容是否正确
      $validation = self::validation($request, $messages, $rule);

      if(!$validation['status'])
      {
        return $validation['message'];
      }
      else
      {
        try
        {
          $username = $request->username;

          $response = Member::getRow(['username' => $username], ['role']);

          // 用户不存在
          if(is_null($response))
          {
            return self::error(Code::USER_EXIST);
          }

          // 用户已禁用
          if(2 == $response->status['value'])
          {
            return self::error(Code::MEMBER_DISABLE);
          }

          $key = RedisKey::SMS_LOGIN_CODE . '_' . $username;

          $sms_code = Redis::get($key);
          Redis::del($key);

          // 验证码错误
          if($request->sms_code != $sms_code)
          {
            return self::error(Code::VERIFICATION_CODE);
          }

          // 在特定时间内访问次数过多，就触发访问限制
          if(Member::AccessRestrictions($response))
          {
            return self::error(Code::ACCESS_RESTRICTIONS);
          }

          // 认证用户密码是否可以登录
          if (! $token = auth('api')->tokenById($response->id))
          {
            return self::error(Code::USER_EXIST);
          }

          // 获取客户端ip地址
          $response->last_login_ip = $request->getClientIp();

          $old_token = $response->remember_token;

          if(!empty($old_token))
          {
            \JWTAuth::setToken($old_token)->invalidate();

            // $invalidate = auth('api')->setToken($old_token);

            // // 检查旧 Token 是否有效, 加入黑名单
            // if($invalidate->check())
            // {
            //   $invalidate->invalidate();
            // }
          }

          // 记录登录信息
          Member::login($response);

          return self::success([
            'code' => 200,
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user_info' => $response
          ]);
        }
        catch(\Exception $e)
        {
          // 记录异常信息
          self::record($e);

          return self::error(Code::ERROR);
        }
      }
    }
  }


  /**
   * @api {post} /api/sms_code 03. 登录验证码
   * @apiDescription 获取短信登录验证码
   * @apiGroup 01. 登录模块
   * @apiParam {string} username 登录账户（18201018926）
   *
   * @apiSampleRequest /api/sms_code
   * @apiVersion 1.0.0
   */
  public function sms_code(Request $request)
  {
    if($request->isMethod('post'))
    {
      $messages = [
        'username.required'  => '请输入用户名称',
        'username.regex'     => '手机号码不合法',
      ];

      $rule = [
        'username' => 'required',
        'username' => 'regex:/^1[3456789][0-9]{9}$/',     //正则验证
      ];

      // 验证用户数据内容是否正确
      $validation = self::validation($request, $messages, $rule);

      if(!$validation['status'])
      {
        return $validation['message'];
      }
      else
      {
        try
        {
          $username = $request->username;

          $response = Member::getRow(['username' => $username]);

          if(empty($response))
          {
            return self::error(Code::USER_EMPTY);
          }

          $key = RedisKey::SMS_LOGIN_CODE . '_' . $username;

          if(Redis::exists($key))
          {
            Redis::del($key);
          }

          $code = str_pad(rand(1, 999999), 6, 0, STR_PAD_LEFT);

          Redis::set($key, $code);
          Redis::expire($key, 600);

          // 发送登录验证码
          event(new SmsEvent(1, $username, $code));

          return self::success(Code::message(Code::SEND_SUCCESS));
        }
        catch(\Exception $e)
        {
          // 记录异常信息
          self::record($e);

          return self::error(Code::ERROR);
        }
      }
    }
  }


  /**
   * @api {post} /api/weixin_login 04. 微信登录
   * @apiDescription 通过第三方软件-微信，进行登录
   * @apiGroup 01. 登录模块
   * @apiParam {string} open_id 微信OpenID
   *
   * @apiSuccess (basic params) {String} token 身份令牌
   * @apiSuccess (user_info params) {Number} id 会员编号
   * @apiSuccess (user_info params) {Number} organization_id 会员所属机构编号（暂时用不上）
   * @apiSuccess (user_info params) {Number} open_id 第三方登录编号
   * @apiSuccess (user_info params) {Number} member_no 会员号
   * @apiSuccess (user_info params) {String} avatar 会员头像
   * @apiSuccess (user_info params) {String} qr_code 会员二维码
   * @apiSuccess (user_info params) {String} username 登录账户
   * @apiSuccess (user_info params) {String} nickname 会员昵称
   * @apiSuccess (user_info params) {Number} is_freeze 是否冻结 1 冻结 2 不冻结
   * @apiSuccess (user_info params) {Number} condition 成为条件 1 系统添加 2 完成任务
   * @apiSuccess (user_info params) {String} create_time 注册时间
   * @apiSuccess (role params) {String} id 角色编号
   * @apiSuccess (role params) {String} title 角色名称
   * @apiSuccess (role params) {String} content 角色描述
   *
   * @apiSampleRequest /api/weixin_login
   * @apiVersion 1.0.0
   */
  public function weixin_login()
  {
    if($request->isMethod('post'))
    {
      $messages = [
        'open_id.required' => '请输入微信密钥',
      ];

      $rule = [
        'open_id' => 'required',
      ];

      // 验证用户数据内容是否正确
      $validation = self::validation($request, $messages, $rule);

      if(!$validation['status'])
      {
        return $validation['message'];
      }
      else
      {
        try
        {
          $where = [
            'open_id' => $request->open_id
          ];

          $response = Member::getRow($where, ['role']);

          // 用户不存在
          if(is_null($response))
          {
            return self::error(Code::USER_EXIST);
          }

          // 用户已禁用
          if(2 == $response->status['value'])
          {
            return self::error(Code::MEMBER_DISABLE);
          }

          // 在特定时间内访问次数过多，就触发访问限制
          if(Member::AccessRestrictions($response))
          {
            return self::error(Code::ACCESS_RESTRICTIONS);
          }

          // 认证用户密码是否可以登录
          if (! $token = auth('api')->tokenById($response->id))
          {
            return self::error(Code::USER_EXIST);
          }

          // 获取客户端ip地址
          $response->last_login_ip = $request->getClientIp();

          $old_token = $response->remember_token;

          if(!empty($old_token))
          {
            \JWTAuth::setToken($old_token)->invalidate();
          }

          // 记录登录信息
          Member::login($response);

          return self::success([
            'code' => 200,
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user_info' => $response
          ]);
        }
        catch(\Exception $e)
        {
          // 记录异常信息
          self::record($e);

          return self::error(Code::ERROR);
        }
      }
    }
  }


  /**
   * @api {post} /api/apple_login 05. 苹果登录
   * @apiDescription 通过第三方软件-苹果，进行登录
   * @apiGroup 01. 登录模块
   * @apiParam {string} open_id 苹果AppleID
   *
   * @apiSuccess (basic params) {String} token 身份令牌
   * @apiSuccess (user_info params) {Number} id 会员编号
   * @apiSuccess (user_info params) {Number} organization_id 会员所属机构编号（暂时用不上）
   * @apiSuccess (user_info params) {Number} open_id 第三方登录编号
   * @apiSuccess (user_info params) {Number} member_no 会员号
   * @apiSuccess (user_info params) {String} avatar 会员头像
   * @apiSuccess (user_info params) {String} qr_code 会员二维码
   * @apiSuccess (user_info params) {String} username 登录账户
   * @apiSuccess (user_info params) {String} nickname 会员昵称
   * @apiSuccess (user_info params) {Number} is_freeze 是否冻结 1 冻结 2 不冻结
   * @apiSuccess (user_info params) {Number} condition 成为条件 1 系统添加 2 完成任务
   * @apiSuccess (user_info params) {String} create_time 注册时间
   * @apiSuccess (role params) {String} id 角色编号
   * @apiSuccess (role params) {String} title 角色名称
   * @apiSuccess (role params) {String} content 角色描述
   *
   * @apiSampleRequest /api/apple_login
   * @apiVersion 1.0.0
   */
  public function apple_login()
  {
    if($request->isMethod('post'))
    {
      $messages = [
        'open_id.required' => '请输入苹果密钥',
      ];

      $rule = [
        'open_id' => 'required',
      ];

      // 验证用户数据内容是否正确
      $validation = self::validation($request, $messages, $rule);

      if(!$validation['status'])
      {
        return $validation['message'];
      }
      else
      {
        try
        {
          $where = [
            'open_id' => $request->open_id
          ];

          $response = Member::getRow($where, ['role']);

          // 用户不存在
          if(is_null($response))
          {
            return self::error(Code::USER_EXIST);
          }

          // 用户已禁用
          if(2 == $response->status['value'])
          {
            return self::error(Code::MEMBER_DISABLE);
          }

          // 在特定时间内访问次数过多，就触发访问限制
          if(Member::AccessRestrictions($response))
          {
            return self::error(Code::ACCESS_RESTRICTIONS);
          }

          // 认证用户密码是否可以登录
          if (! $token = auth('api')->tokenById($response->id))
          {
            return self::error(Code::USER_EXIST);
          }

          // 获取客户端ip地址
          $response->last_login_ip = $request->getClientIp();

          $old_token = $response->remember_token;

          if(!empty($old_token))
          {
            \JWTAuth::setToken($old_token)->invalidate();
          }

          // 记录登录信息
          Member::login($response);

          return self::success([
            'code' => 200,
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user_info' => $response
          ]);
        }
        catch(\Exception $e)
        {
          // 记录异常信息
          self::record($e);

          return self::error(Code::ERROR);
        }
      }
    }
  }


  /**
   * @api {post} /api/register 06. 用户注册
   * @apiDescription 注册用户信息
   * @apiGroup 01. 登录模块
   *
   * @apiParam {int} open_id 第三方登录编号
   *
   * @apiSampleRequest /api/register
   * @apiVersion 1.0.0
   */
  public function register(Request $request)
  {
    $messages = [
      'open_id.required'   => '请您输入第三方登录编号',
    ];

    $rule = [
      'open_id' => 'required',
    ];

    // 验证用户数据内容是否正确
    $validation = self::validation($request, $messages, $rule);

    if(!$validation['status'])
    {
      return $validation['message'];
    }
    else
    {
      DB::beginTransaction();

      try
      {
        $model = $this->_model::firstOrNew(['open_id' => $request->open_id]);

        if(empty($request->id))
        {
          $model->member_no = ToolTrait::generateOnlyNumber(3);
        }

        $response = $model->save();

        $data = [['role_id' => 3]];

        $model->relevance()->delete();
        $model->relevance()->createMany($data);

        DB::commit();

        return self::success(Code::message(Code::REGISTER_SUCCESS));
      }
      catch(\Exception $e)
      {
        DB::rollback();

        return self::error(Code::HANDLE_FAILURE);
      }
    }
  }


  /**
   * @api {post} /api/bind_mobile 07. 绑定手机号码
   * @apiDescription 绑定用的的手机号码
   * @apiGroup 01. 登录模块
   *
   * @apiParam {string} open_id 第三方登录编号
   * @apiParam {string} username 登录手机号码
   * @apiParam {string} sms_code 验证码
   *
   * @apiSampleRequest /api/bind_mobile
   * @apiVersion 1.0.0
   */
  public function bind_mobile(Request $request)
  {
    $messages = [
      'open_id.required'  => '请您输入第三方登录编号',
      'username.required' => '请您输入登录账户',
      'username.regex'    => '手机号码不合法',
      'sms_code.required' => '请您输入验证码',
    ];

    $rule = [
      'open_id'  => 'required',
      'username' => 'required',
      'username' => 'regex:/^1[3456789][0-9]{9}$/',     //正则验证
      'sms_code' => 'required',
    ];

    // 验证用户数据内容是否正确
    $validation = self::validation($request, $messages, $rule);

    if(!$validation['status'])
    {
      return $validation['message'];
    }
    else
    {
      try
      {
        $model = Member::getRow(['open_id' => $request->open_id]);

        if(empty($model->id))
        {
          return self::error(Code::USER_EMPTY);
        }

        $key = RedisKey::SMS_BIND_CODE . '_' . $username;

        $sms_code = Redis::get($key);
        Redis::del($key);

        // 验证码不一致
        if($request->sms_code != $sms_code)
        {
          return self::error(Code::VERIFICATION_CODE);
        }

        $model->username = $request->username;

        $response = $model->save();

        return self::success(Code::$message[Code::HANDLE_SUCCESS]);
      }
      catch(\Exception $e)
      {
        DB::rollback();

        // 记录异常信息
        self::record($e);

        return self::error(Code::HANDLE_FAILURE);
      }
    }
  }


  /**
   * @api {post} /api/bind_code 08. 获取绑定验证码
   * @apiDescription 获取登录手机号的绑定验证码
   * @apiGroup 01. 登录模块
   *
   * @apiParam {string} username 登录账户（18201018888）
   *
   * @apiSampleRequest /api/bind_code
   * @apiVersion 1.0.0
   */
  public function bind_code(Request $request)
  {
    $messages = [
      'username.required' => '请输入用户名称',
      'username.regex'    => '手机号码不合法',
    ];
    $rule = [
      'username' => 'required',
      'username' => 'regex:/^1[3456789][0-9]{9}$/',     //正则验证
    ];

    // 验证用户数据内容是否正确
    $validation = self::validation($request, $messages, $rule);

    if(!$validation['status'])
    {
      return $validation['message'];
    }
    else
    {
      try
      {
        $username = $request->username;

        $key = RedisKey::SMS_BIND_CODE . '_' . $username;

        if(Redis::exists($key))
        {
          Redis::del($key);
        }

        $code = str_pad(rand(1, 999999), 6, 0, STR_PAD_LEFT);

        Redis::set($key, $code);
        Redis::expire($key, 600);

        // 发送登录验证码
        event(new SmsEvent(2, $username, $code));

        return self::success(Code::message(Code::SEND_SUCCESS));
      }
      catch(\Exception $e)
      {
        \Log::error($e);

        return self::message($e->getMessage());
      }
    }
  }



  /**
   * @api {get} /api/logout 09. 退出
   * @apiDescription 退出登录状态
   * @apiGroup 01. 登录模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN"
   * }
   *
   * @apiSampleRequest /api/logout
   * @apiVersion 1.0.0
   */
  public function logout()
  {
    try
    {
      auth('api')->logout();

      return self::success([], '退出成功');
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::ERROR);
    }
  }
}
