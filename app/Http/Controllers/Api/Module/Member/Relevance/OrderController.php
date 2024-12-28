<?php
namespace App\Http\Controllers\Api\Module\Member\Relevance;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-12-30
 *
 * 会员订单控制器类
 */
class OrderController extends BaseController
{
  protected $_model = 'App\Models\Api\Module\Member\Relevance\Order';

  protected $_where = [];

  protected $_params = [];

  protected $_order = [
    ['key' => 'create_time', 'value' => 'desc'],
  ];

  protected $_relevance = [
    'list' => [
      'course',
      'member'
    ],
    'select' => [
      'course',
      'member'
    ],
    'view' => [
      'course',
      'member'
    ],

  ];


  /**
   * @api {get} /api/member/order/list?page={page} 01. 会员订单列表(分页)
   * @apiDescription 获取当前会员订单列表(分页)
   * @apiGroup 12. 会员订单模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN"
   * }
   *
   * @apiParam {int} page 当前页数
   *
   * @apiSuccess (basic params) {Number} id 订单编号
   * @apiSuccess (basic params) {String} order_no 订单号
   * @apiSuccess (basic params) {Number} member_id 会员编号
   * @apiSuccess (basic params) {Number} course_id 课程编号
   * @apiSuccess (basic params) {Number} pay_money 支付金额
   * @apiSuccess (basic params) {Number} pay_time 支付时间
   * @apiSuccess (basic params) {Number} pay_type 支付类型 1 支付宝 2 微信
   * @apiSuccess (basic params) {Number} pay_status 支付状态 0 待支付 1 已支付
   * @apiSuccess (basic params) {String} remark 订单备注
   * @apiSuccess (basic params) {Number} order_status 订单状态 0 待派发 1 派单中 2 运送中 3 已完成 4 已取消
   * @apiSuccess (basic params) {Number} create_time 订单创建时间
   *
   * @apiSuccess (course params) {Number} id 课程编号
   * @apiSuccess (course params) {Number} id 订单编号
   * @apiSuccess (course params) {String} title 课程名称
   * @apiSuccess (course params) {String} description 课程描述
   * @apiSuccess (course params) {String} picture 课程封面
   *
   * @apiSuccess (member params) {Number} id 会员编号
   * @apiSuccess (member params) {Number} organization_id 会员所属机构编号（暂时用不上）
   * @apiSuccess (member params) {String} open_id 第三方登录编号
   * @apiSuccess (member params) {Number} member_no 会员号
   * @apiSuccess (member params) {String} avatar 会员头像
   * @apiSuccess (member params) {String} username 登录账户
   * @apiSuccess (member params) {String} nickname 会员姓名
   * @apiSuccess (member params) {Number} is_freeze 是否冻结 1 冻结 2 不冻结
   * @apiSuccess (member params) {Number} create_time 注册时间
   *
   * @apiSampleRequest /api/member/order/list
   * @apiVersion 1.0.0
   */
  public function list(Request $request)
  {
    try
    {
      $condition = self::getCurrentWhereData();

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'list');

      $response = $this->_model::getPaging($condition, $relevance, $this->_order);

      return self::success($response);
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::ERROR);
    }
  }


  /**
   * @api {get} /api/member/order/select 02. 会员订单列表(不分页)
   * @apiDescription 获取当前会员订单列表(不分页)
   * @apiGroup 12. 会员订单模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN"
   * }
   *
   * @apiSuccess (basic params) {Number} id 订单编号
   * @apiSuccess (basic params) {String} order_no 订单号
   * @apiSuccess (basic params) {Number} member_id 会员编号
   * @apiSuccess (basic params) {Number} course_id 课程编号
   * @apiSuccess (basic params) {Number} pay_money 支付金额
   * @apiSuccess (basic params) {Number} pay_time 支付时间
   * @apiSuccess (basic params) {Number} pay_type 支付类型 1 支付宝 2 微信
   * @apiSuccess (basic params) {Number} pay_status 支付状态 0 待支付 1 已支付
   * @apiSuccess (basic params) {String} remark 订单备注
   * @apiSuccess (basic params) {Number} order_status 订单状态 0 待派发 1 派单中 2 运送中 3 已完成 4 已取消
   * @apiSuccess (basic params) {Number} create_time 订单创建时间
   *
   * @apiSuccess (course params) {Number} id 课程编号
   * @apiSuccess (course params) {Number} id 订单编号
   * @apiSuccess (course params) {String} title 课程名称
   * @apiSuccess (course params) {String} description 课程描述
   * @apiSuccess (course params) {String} picture 课程封面
   *
   * @apiSuccess (member params) {Number} id 会员编号
   * @apiSuccess (member params) {Number} organization_id 会员所属机构编号（暂时用不上）
   * @apiSuccess (member params) {String} open_id 第三方登录编号
   * @apiSuccess (member params) {Number} member_no 会员号
   * @apiSuccess (member params) {String} avatar 会员头像
   * @apiSuccess (member params) {String} username 登录账户
   * @apiSuccess (member params) {String} nickname 会员姓名
   * @apiSuccess (member params) {Number} is_freeze 是否冻结 1 冻结 2 不冻结
   * @apiSuccess (member params) {Number} create_time 注册时间
   *
   * @apiSampleRequest /api/member/order/select
   * @apiVersion 1.0.0
   */
  public function select(Request $request)
  {
    try
    {
      $condition = self::getCurrentWhereData();

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'select');

      $response = $this->_model::getList($condition, $relevance, $this->_order);

      return self::success($response);
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::ERROR);
    }
  }


  /**
   * @api {get} /api/member/order/view/{id} 03. 会员订单详情
   * @apiDescription 获取当前会员订单的详情
   * @apiGroup 12. 会员订单模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN"
   * }
   *
   * @apiParam {int} id 订单编号
   *
   * @apiSuccess (basic params) {Number} id 订单编号
   * @apiSuccess (basic params) {String} order_no 订单号
   * @apiSuccess (basic params) {Number} member_id 会员编号
   * @apiSuccess (basic params) {Number} course_id 课程编号
   * @apiSuccess (basic params) {Number} pay_money 支付金额
   * @apiSuccess (basic params) {Number} pay_time 支付时间
   * @apiSuccess (basic params) {Number} pay_type 支付类型 1 支付宝 2 微信
   * @apiSuccess (basic params) {Number} pay_status 支付状态 0 待支付 1 已支付
   * @apiSuccess (basic params) {String} remark 订单备注
   * @apiSuccess (basic params) {Number} order_status 订单状态 0 待派发 1 派单中 2 运送中 3 已完成 4 已取消
   * @apiSuccess (basic params) {Number} create_time 订单创建时间
   *
   * @apiSuccess (course params) {Number} id 课程编号
   * @apiSuccess (course params) {Number} id 订单编号
   * @apiSuccess (course params) {String} title 课程名称
   * @apiSuccess (course params) {String} description 课程描述
   * @apiSuccess (course params) {String} picture 课程封面
   *
   * @apiSuccess (member params) {Number} id 会员编号
   * @apiSuccess (member params) {Number} organization_id 会员所属机构编号（暂时用不上）
   * @apiSuccess (member params) {String} open_id 第三方登录编号
   * @apiSuccess (member params) {Number} member_no 会员号
   * @apiSuccess (member params) {String} avatar 会员头像
   * @apiSuccess (member params) {String} username 登录账户
   * @apiSuccess (member params) {String} nickname 会员姓名
   * @apiSuccess (member params) {Number} is_freeze 是否冻结 1 冻结 2 不冻结
   * @apiSuccess (member params) {Number} create_time 注册时间
   *
   * @apiSampleRequest /api/member/order/view/{id}
   * @apiVersion 1.0.0
   */
  public function view(Request $request, $id)
  {
    try
    {
      $condition = self::getCurrentWhereData();

      $where = ['id' => $id];

      $condition = array_merge($condition, $where);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'view');

      $response = $this->_model::getRow($condition, $relevance);

      return self::success($response);
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::ERROR);
    }
  }


  /**
   * @api {post} /api/member/order/finish 04. 订单完成
   * @apiDescription 当前会员收到货物后，点击完成订单
   * @apiGroup 12. 会员订单模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN"
   * }
   *
   * @apiParam {string} order_id 订单编号
   *
   * @apiSampleRequest /api/member/order/finish
   * @apiVersion 1.0.0
   */
  public function finish(Request $request)
  {
    $messages = [
      'order_id.required' => '请您输入订单编号',
    ];

    $rule = [
      'order_id' => 'required',
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
        $condition = self::getCurrentWhereData();

        $where = ['id' => $request->order_id];

        $condition = array_merge($condition, $where);

        $model = $this->_model::getRow($condition);

        $model->order_status = 3;

        $model->save();

        return self::success(Code::HANDLE_SUCCESS);
      }
      catch(\Exception $e)
      {
        // 记录异常信息
        self::record($e);

        return self::error(Code::HANDLE_FAILURE);
      }
    }
  }


  /**
   * @api {post} /api/member/order/cancel 05. 订单取消
   * @apiDescription 当前会员取消订单
   * @apiGroup 12. 会员订单模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN"
   * }
   *
   * @apiParam {string} order_id 订单编号
   *
   * @apiSampleRequest /api/member/order/cancel
   * @apiVersion 1.0.0
   */
  public function cancel(Request $request)
  {
    $messages = [
      'order_id.required' => '请您输入订单编号',
    ];

    $rule = [
      'order_id' => 'required',
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
        $condition = self::getCurrentWhereData();

        $where = ['id' => $request->order_id];

        $condition = array_merge($condition, $where);

        $model = $this->_model::getRow($condition);

        if(0 != $model->order_status['value'])
        {
          return self::error(Code::CURRENT_ORDER_NO_CANCEL);
        }

        if(0 != $model->pay_status['value'])
        {
          return self::error(Code::CURRENT_ORDER_PAY_FINISH);
        }

        $model->order_status = 4;

        $model->save();

        return self::success(Code::HANDLE_SUCCESS);
      }
      catch(\Exception $e)
      {
        // 记录异常信息
        self::record($e);

        return self::error(Code::HANDLE_FAILURE);
      }
    }
  }
}
