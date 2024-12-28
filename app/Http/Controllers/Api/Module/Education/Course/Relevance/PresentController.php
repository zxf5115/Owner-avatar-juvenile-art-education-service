<?php
namespace App\Http\Controllers\Api\Module\Education\Course\Relevance;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

use App\Http\Constant\Code;
use App\Http\Constant\Status;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-01-14
 *
 * 课程礼包控制器类
 */
class PresentController extends BaseController
{
  // 模型
  protected $_model = 'App\Models\Api\Module\Education\Course\Relevance\Present';

  // 默认查询条件
  protected $_where = [];

  // 查询条件
  protected $_params = [
    'title'
  ];

  // 附加关联查询条件
  protected $_addition = [];

  // 排序
  protected $_order = [
    ['key' => 'create_time', 'value' => 'desc'],
  ];

  // 关联数组
  protected $_relevance = [];


  /**
   * @api {get} /api/education/course/present/list?page={page} 1. 课程礼包列表(分页)
   * @apiDescription 获取课程礼包列表(分页)
   * @apiGroup 30. 课程礼包模块
   *
   * @apiParam {int} page 当前页数
   *
   * @apiSuccess (basic params) {Number} id 课程礼包编号
   * @apiSuccess (basic params) {String} title 课件礼包名称
   * @apiSuccess (basic params) {String} description 课件礼包描述
   * @apiSuccess (basic params) {String} create_time 创建时间
   *
   * @apiSampleRequest /api/education/course/present/list
   * @apiVersion 1.0.0
   */
  public function list(Request $request)
  {
    try
    {
      $condition = self::getSimpleWhereData();

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
   * @api {get} /api/education/course/present/select 2. 课程礼包列表(不分页)
   * @apiDescription 获取课程礼包列表(不分页)
   * @apiGroup 30. 课程礼包模块
   *
   * @apiSuccess (basic params) {Number} id 课程礼包编号
   * @apiSuccess (basic params) {String} title 课件礼包名称
   * @apiSuccess (basic params) {String} description 课件礼包描述
   * @apiSuccess (basic params) {String} create_time 创建时间
   *
   * @apiSampleRequest /api/education/course/present/select
   * @apiVersion 1.0.0
   */
  public function select(Request $request)
  {
    try
    {
      $condition = self::getSimpleWhereData();

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
   * @api {get} /api/education/course/present/view/{id} 3. 课程礼包详情
   * @apiDescription 获取课程礼包详情
   * @apiGroup 30. 课程礼包模块
   *
   * @apiSuccess (basic params) {Number} id 课程礼包编号
   * @apiSuccess (basic params) {String} title 课件礼包名称
   * @apiSuccess (basic params) {String} description 课件礼包描述
   * @apiSuccess (basic params) {String} create_time 创建时间
   *
   * @apiSampleRequest /api/education/course/present/view/{id}
   * @apiVersion 1.0.0
   */
  public function view(Request $request, $id)
  {
    try
    {
      $condition = self::getSimpleWhereData($id);

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
