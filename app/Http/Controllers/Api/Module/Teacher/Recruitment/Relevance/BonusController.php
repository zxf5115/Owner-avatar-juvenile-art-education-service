<?php
namespace App\Http\Controllers\Api\Module\Teacher\Recruitment;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

use App\Http\Constant\Code;
use App\Http\Constant\Parameter;
use App\Http\Controllers\Api\BaseController;
use App\Models\Api\Module\Teacher\Recruitment\Relevance\Archive;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-01-03
 *
 * 老师分红控制器类
 */
class BonusController extends BaseController
{
  /**
   * 操作模型
   */
  protected $_model = 'App\Models\Api\Module\Teacher\Recruitment\Member';

  /**
   * 基本查询条件
   */
  protected $_where = [];

  /**
   * 关联查询条件
   */
  protected $_with = [];

  /**
   * 基础查询字段
   */
  protected $_params = [
    'type'
  ];

  /**
   * 关联查询字段
   */
  protected $_addition = [];

  /**
   * 排序方式
   */
  protected $_order = [
    ['key' => 'create_time', 'value' => 'desc'],
  ];

  /**
   * 关联查询对象
   */
  protected $_relevance = [
    'archive' => [
      'role',
      'relevance',
      'archive',
      'course',
    ]
  ];



  /**
   * @api {get} /api/teacher/recruitment/bonus/list 01. 老师分红列表(分页)
   * @apiDescription 获取当前招聘老师的分红列表信息
   * @apiGroup 18. 招聘老师分红模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN"
   * }
   *
   * @apiSuccess (basic params) {Number} id 老师编号
   * @apiSuccess (basic params) {Number} organization_id 老师所属机构编号（暂时用不上）
   * @apiSuccess (basic params) {String} open_id 第三方登录编号
   * @apiSuccess (basic params) {Number} member_no 会员号
   * @apiSuccess (basic params) {String} avatar 老师头像
   * @apiSuccess (basic params) {String} qr_code 老师二维码
   * @apiSuccess (basic params) {String} username 登录账户
   * @apiSuccess (basic params) {String} nickname 老师姓名
   * @apiSuccess (basic params) {Number} condition 成为条件 1 系统添加 2 完成任务
   * @apiSuccess (basic params) {Number} create_time 注册时间
   * @apiSuccess (archive params) {Number} member_id 会员编号
   * @apiSuccess (archive params) {String} id_card_no 身份证号
   * @apiSuccess (archive params) {String} weixin 微信号
   * @apiSuccess (archive params) {String} sex 性别
   * @apiSuccess (archive params) {String} province_id 省
   * @apiSuccess (archive params) {String} city_id 市
   * @apiSuccess (archive params) {String} region_id 县
   * @apiSuccess (archive params) {String} address 详细地址
   *
   * @apiSuccess (role params) {String} id 角色编号
   * @apiSuccess (role params) {String} title 角色名称
   * @apiSuccess (role params) {String} content 角色内容
   *
   * @apiSuccess (course params) {String} course_id 课程编号
   *
   * @apiSampleRequest /api/teacher/recruitment/bonus/list
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
   * @api {get} /api/teacher/recruitment/bonus/select 02. 老师分红列表(不分页)
   * @apiDescription 获取当前招聘老师的分红列表信息(不分页)
   * @apiGroup 18. 招聘老师分红模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN"
   * }
   *
   * @apiSuccess (basic params) {Number} id 会员地址编号
   * @apiSuccess (basic params) {Number} member_id 会员编号
   * @apiSuccess (basic params) {String} name 收货人姓名
   * @apiSuccess (basic params) {String} mobile 收货人电话
   * @apiSuccess (basic params) {Number} province_id 省
   * @apiSuccess (basic params) {Number} city_id 市
   * @apiSuccess (basic params) {Number} region_id 县
   * @apiSuccess (basic params) {String} address 详细地址
   * @apiSuccess (basic params) {Number} is_default 是否为默认地址
   * @apiSuccess (basic params) {Number} create_time 注册时间
   *
   * @apiSampleRequest /api/teacher/recruitment/bonus/select
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
   * @api {get} /api/teacher/recruitment/bonus/view/{id} 03. 老师分红详情
   * @apiDescription 获取当前招聘老师的分红详情信息
   * @apiGroup 18. 招聘老师分红模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN"
   * }
   *
   * @apiSuccess (basic params) {Number} id 会员地址编号
   * @apiSuccess (basic params) {Number} member_id 会员编号
   * @apiSuccess (basic params) {String} name 收货人姓名
   * @apiSuccess (basic params) {String} mobile 收货人电话
   * @apiSuccess (basic params) {Number} province_id 省
   * @apiSuccess (basic params) {Number} city_id 市
   * @apiSuccess (basic params) {Number} region_id 县
   * @apiSuccess (basic params) {String} address 详细地址
   * @apiSuccess (basic params) {Number} is_default 是否为默认地址
   * @apiSuccess (basic params) {Number} create_time 注册时间
   *
   * @apiSampleRequest /api/teacher/recruitment/bonus/view/{id}
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
}
