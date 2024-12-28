<?php
namespace App\Http\Constant;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-07-05
 *
 * 错误常量类
 */
class Code
{
  // 公共错误
  const SUCCESS          = 200;
  const LOGOUT_SUCCESS   = 201;
  const SEND_SUCCESS     = 202;
  const REGISTER_SUCCESS = 203;
  const ERROR            = 1000;
  const NO_PERMISSION    = 1001;
  const DELETE_SUCCESS   = 1002;
  const DELETE_FAILURE   = 1003;
  const HANDLE_SUCCESS   = 1004;
  const HANDLE_FAILURE   = 1005;
  const REQUEST_TOO_MUSH = 1006;
  const CLEAR_FAILURE    = 1007;

  // 服务器错误
  const SERVER_ERROR        = 2000;
  const USER_EXIST          = 2001;
  const USER_NO_PERMISSION  = 2002;
  const PASSWORD_ERROR      = 2003;
  const ACCESS_RESTRICTIONS = 2004;
  const CUSTOMER_EXIST      = 2005;
  const CUSTOMER_FAILURE    = 2006;
  const VERIFICATION_CODE   = 2007;

  // Token错误
  const TOKEN_ERROR         = -100;
  const TOKEN_EMPTY         = -101;
  const TOKEN_EXPIRED       = -102;
  const TOKEN_NO_VERIFIED   = -103;

  // API错误
  const API_ERROR = 3000;
  const API_UNAUTHORIZED = 3001;

  // 数据库错误
  const DATABASE_ERROR = 4000;

  // 缓存错误
  const CACHE_ERROR = 5000;

  // 文件错误
  const FILE_UPLOAD_EXIST           = 6000;
  const FILE_UPLOAD_FAILURE_RETRY   = 6001;
  const FILE_UPLOAD_EXTENSION_ERROR = 6002;
  const FILE_UPLOAD_SUCCESS         = 6003;
  const FILE_UPLOAD_ERROR           = 6004;
  const FILE_UPLOAD_SAVE_ERROR      = 6005;
  const FILE_EXIST                  = 6006;

  // 微信错误
  const WX_CODE_EXIST = 7001;

  // 代码错误
  const OLD_PASSWORD_ERROR = 8001;



  // 学员任务进度不存在
  const MEMBER_TARGET_EMPTY = 9001;

  // 订单状态错误
  const CURRENT_ORDER_NO_CANCEL = 9002;
  const CURRENT_ORDER_PAY_FINISH = 90021;

  // 用户不存在
  const USER_EMPTY  = 9003;
  // 请选择角色
  const USER_ROLE_EMPTY = 90031;
  // 用户已经存在
  const USER_ALREADY_EXISTED = 90032;

  // 学员不存在
  const MEMBER_EMPTY = 9004;
  // 学员身份不存在
  const MEMBER_ROLE_EMPTY = 90041;
  // 学员当前不存在
  const MEMBER_ARCHIVE_EMPTY = 90042;
  //登录账户不合法
  const MEMBER_FORMAT_ERROR = 90045;
  // 用户被禁用
  const MEMBER_DISABLE = 90046;

  // 标签不能为空
  const LABEL_EMPTY = 9005;

  // 学员未完成作业
  const HOMEWORK_EMPTY = 9006;


  // 班级编号为空
  const SQUAD_ID_EMPTY = 9008;

  const SQUAD_EMPTY = 90081;

  // 当前课程类型为永久，无法删除
  const COURSE_CATEGORY_PERMANENT = 90091;
  // 当前课程类型未结束，无法删除
  const COURSE_CATEGORY_OVER = 90092;

  public static $message = [
    self::SUCCESS          => '成功',
    self::LOGOUT_SUCCESS   => '成功退出',
    self::SEND_SUCCESS     => '发送成功',
    self::REGISTER_SUCCESS => '注册成功',
    self::ERROR            => '未知错误',
    self::NO_PERMISSION    => '没有权限',
    self::DELETE_SUCCESS   => '删除成功',
    self::DELETE_FAILURE   => '删除失败',
    self::HANDLE_SUCCESS   => '操作成功',
    self::HANDLE_FAILURE   => '操作失败',
    self::REQUEST_TOO_MUSH => '您请求太频繁了，请休息一会',
    self::CLEAR_FAILURE    => '清除失败',


    self::SERVER_ERROR        => '服务器错误',
    self::USER_EXIST          => '用户不存在',
    self::USER_NO_PERMISSION  => '用户无权限',
    self::PASSWORD_ERROR      => '请输入正确密码',
    self::ACCESS_RESTRICTIONS => '输错密码次数太多，请一小时后再试！',
    self::CUSTOMER_EXIST      => '客户不存在',
    self::CUSTOMER_FAILURE    => '客户已失效',
    self::VERIFICATION_CODE   => '验证码错误',

    self::TOKEN_EMPTY         => '请先登录',
    self::TOKEN_ERROR         => 'Token丢失',
    self::TOKEN_EXPIRED       => '请从新登录',
    self::TOKEN_NO_VERIFIED   => '非法账户，无法解析',

    self::API_ERROR        => '接口错误',
    self::API_UNAUTHORIZED => '未授权',

    self::DATABASE_ERROR => '数据库错误',

    self::CACHE_ERROR    => '缓存错误',

    self::FILE_UPLOAD_EXIST           => '上传文件为空',
    self::FILE_UPLOAD_FAILURE_RETRY   => '上传失败，请重试',
    self::FILE_UPLOAD_EXTENSION_ERROR => '文件类型不被允许',
    self::FILE_UPLOAD_SUCCESS         => '上传成功',
    self::FILE_UPLOAD_ERROR           => '上传失败',
    self::FILE_UPLOAD_SAVE_ERROR      => '保存文件失败',
    self::FILE_EXIST                  => '文件不存在',

    self::WX_CODE_EXIST => 'Code丢失',

    self::OLD_PASSWORD_ERROR => '当前登录密码不正确',



    self::USER_EMPTY  => '用户不存在',

    self::USER_ROLE_EMPTY => '请选择角色',
    self::USER_ALREADY_EXISTED => '用户已经存在',

    self::MEMBER_EMPTY         => '用户不存在',
    self::MEMBER_ROLE_EMPTY    => '请选择用户身份',
    self::MEMBER_ARCHIVE_EMPTY => '请完善用户资料',
    self::MEMBER_FORMAT_ERROR  => '登录账户不合法, 请输入真实手机号码',
    self::MEMBER_DISABLE       => '当前用户被禁用',

    self::LABEL_EMPTY  => '标签不能为空',

    self::HOMEWORK_EMPTY => '学员未完成作业',

    self::SQUAD_ID_EMPTY => '请选择要导出的班级',

    self::SQUAD_EMPTY => '当前用户未加入班级',

    self::MEMBER_TARGET_EMPTY => '当前用户未达成条件',


    self::CURRENT_ORDER_NO_CANCEL => '当前订单不可以取消',

    self::CURRENT_ORDER_PAY_FINISH => '当前订单已经完成支付，不可以取消',


    self::COURSE_CATEGORY_PERMANENT => '当前课程类型为永久，无法删除',
    self::COURSE_CATEGORY_OVER => '当前课程类型未结束，无法删除',
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-07-05
   * ------------------------------------------
   * 组装Code对应显示内容
   * ------------------------------------------
   *
   * 组装Code对应显示内容
   *
   * @param int $code 信息代码
   * @return 信息内容
   */
  public static function message($code)
  {
    return self::$message[$code] ?: self::$message[self::ERROR];
  }
}
