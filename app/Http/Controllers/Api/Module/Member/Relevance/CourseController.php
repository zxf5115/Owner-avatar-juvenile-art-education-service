<?php
namespace App\Http\Controllers\Api\Module\Member\Relevance;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Http\Constant\Code;
use App\Http\Constant\Status;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-12-28
 *
 * 会员课程控制器类
 */
class CourseController extends BaseController
{
  protected $_model = 'App\Models\Api\Module\Member\Relevance\Course';

  protected $_where = [];

  protected $_params = [
    'is_finish'
  ];

  protected $_order = [];

  protected $_relevance = [
    'list' => [
      'teacher',
      'member',
      'course',
    ],
    'select' => [
      'teacher',
      'member',
      'course',
    ],
    'view' => [
      'teacher',
      'member',
      'course',
    ]
  ];


  /**
   * @api {get} /api/member/course/list?page={page} 1. 会员课程列表(分页)
   * @apiDescription 获取当前会员订阅的课程列表(分页)
   * @apiGroup 10. 会员课程模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN"
   * }
   *
   * @apiParam {int} page 当前页数
   *
   * @apiSuccess (basic params) {Number} id 自增编号
   * @apiSuccess (basic params) {Number} member_id 学员编号
   * @apiSuccess (basic params) {Number} teacher_id 管理老师编号
   * @apiSuccess (basic params) {Number} course_id 课程编号
   * @apiSuccess (basic params) {Number} is_add 家长微信是否被添加 1 是 2 否
   * @apiSuccess (basic params) {Number} apply_time 报名时间
   * @apiSuccess (basic params) {Number} apply_status 报名状态 0 待确认 1 已确认
   * @apiSuccess (basic params) {Number} confirm_time 报名确认时间
   * @apiSuccess (basic params) {Number} create_time 添加时间
   *
   * @apiSuccess (teacher params) {Number} id 老师编号
   * @apiSuccess (teacher params) {Number} organization_id 老师所属机构编号（暂时用不上）
   * @apiSuccess (teacher params) {String} open_id 第三方登录编号
   * @apiSuccess (teacher params) {Number} member_no 会员号
   * @apiSuccess (teacher params) {String} avatar 老师头像
   * @apiSuccess (teacher params) {String} qr_code 老师二维码
   * @apiSuccess (teacher params) {String} username 登录账户
   * @apiSuccess (teacher params) {String} nickname 老师姓名
   * @apiSuccess (teacher params) {Number} condition 成为条件 1 系统添加 2 完成任务
   * @apiSuccess (teacher params) {Number} create_time 注册时间
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
   * @apiSuccess (course params) {Number} id 课程编号
   * @apiSuccess (course params) {Number} semester 课程学期
   * @apiSuccess (course params) {Number} title 课程名称
   * @apiSuccess (course params) {Number} description 课程描述
   * @apiSuccess (course params) {String} picture 课程封面
   * @apiSuccess (course params) {Number} create_time 添加时间
   *
   * @apiSampleRequest /api/member/course/list
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
   * @api {get} /api/member/course/select 2. 会员课程列表(不分页)
   * @apiDescription 获取当前会员订阅的课程列表(不分页)
   * @apiGroup 10. 会员课程模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN"
   * }
   *
   * @apiSuccess (basic params) {Number} id 自增编号
   * @apiSuccess (basic params) {Number} member_id 学员编号
   * @apiSuccess (basic params) {Number} teacher_id 管理老师编号
   * @apiSuccess (basic params) {Number} course_id 课程编号
   * @apiSuccess (basic params) {Number} is_add 家长微信是否被添加 1 是 2 否
   * @apiSuccess (basic params) {Number} apply_time 报名时间
   * @apiSuccess (basic params) {Number} apply_status 报名状态 0 待确认 1 已确认
   * @apiSuccess (basic params) {Number} confirm_time 报名确认时间
   * @apiSuccess (basic params) {Number} create_time 添加时间
   *
   * @apiSuccess (teacher params) {Number} id 老师编号
   * @apiSuccess (teacher params) {Number} organization_id 老师所属机构编号（暂时用不上）
   * @apiSuccess (teacher params) {String} open_id 第三方登录编号
   * @apiSuccess (teacher params) {Number} member_no 会员号
   * @apiSuccess (teacher params) {String} avatar 老师头像
   * @apiSuccess (teacher params) {String} qr_code 老师二维码
   * @apiSuccess (teacher params) {String} username 登录账户
   * @apiSuccess (teacher params) {String} nickname 老师姓名
   * @apiSuccess (teacher params) {Number} condition 成为条件 1 系统添加 2 完成任务
   * @apiSuccess (teacher params) {Number} create_time 注册时间
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
   * @apiSuccess (course params) {Number} id 课程编号
   * @apiSuccess (course params) {Number} semester 课程学期
   * @apiSuccess (course params) {Number} title 课程名称
   * @apiSuccess (course params) {Number} description 课程描述
   * @apiSuccess (course params) {String} picture 课程封面
   * @apiSuccess (course params) {Number} create_time 添加时间
   *
   * @apiSampleRequest /api/member/course/select
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
   * @api {get} /api/member/course/view/{id} 3. 当前会员课程详情
   * @apiDescription 获取当前会员课程详情
   * @apiGroup 10. 会员课程模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN"
   * }
   *
   * @apiParam {int} id 课程编号
   *
   * @apiSuccess (basic params) {Number} id 自增编号
   * @apiSuccess (basic params) {Number} member_id 学员编号
   * @apiSuccess (basic params) {Number} teacher_id 管理老师编号
   * @apiSuccess (basic params) {Number} course_id 课程编号
   * @apiSuccess (basic params) {Number} is_add 家长微信是否被添加 1 是 2 否
   * @apiSuccess (basic params) {Number} apply_time 报名时间
   * @apiSuccess (basic params) {Number} apply_status 报名状态 0 待确认 1 已确认
   * @apiSuccess (basic params) {Number} confirm_time 报名确认时间
   * @apiSuccess (basic params) {Number} create_time 添加时间
   *
   * @apiSuccess (teacher params) {Number} id 老师编号
   * @apiSuccess (teacher params) {Number} organization_id 老师所属机构编号（暂时用不上）
   * @apiSuccess (teacher params) {String} open_id 第三方登录编号
   * @apiSuccess (teacher params) {Number} member_no 会员号
   * @apiSuccess (teacher params) {String} avatar 老师头像
   * @apiSuccess (teacher params) {String} qr_code 老师二维码
   * @apiSuccess (teacher params) {String} username 登录账户
   * @apiSuccess (teacher params) {String} nickname 老师姓名
   * @apiSuccess (teacher params) {Number} condition 成为条件 1 系统添加 2 完成任务
   * @apiSuccess (teacher params) {Number} create_time 注册时间
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
   * @apiSuccess (course params) {Number} id 课程编号
   * @apiSuccess (course params) {Number} semester 课程学期
   * @apiSuccess (course params) {Number} title 课程名称
   * @apiSuccess (course params) {Number} description 课程描述
   * @apiSuccess (course params) {String} picture 课程封面
   * @apiSuccess (course params) {Number} create_time 添加时间
   *
   * @apiSampleRequest /api/member/course/view/{id}
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
   * @api {get} /api/member/course/status/{id} 4. 当前课程是否被订阅
   * @apiDescription 获取当前课程是否被当前会员订阅
   * @apiGroup 10. 会员课程模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN"
   * }
   *
   * @apiParam {int} id 课程编号
   *
   * @apiSuccess (basic params) {Boolean} true|false 是否订阅
   *
   * @apiSampleRequest /api/member/course/status/{id}
   * @apiVersion 1.0.0
   */
  public function status(Request $request, $id)
  {
    try
    {
      $response = true;

      $condition = self::getCurrentWhereData();

      $where = ['course_id' => $id];

      $condition = array_merge($condition, $where);

      $result = $this->_model::getRow($condition);

      if(empty($result->id))
      {
        $response = false;
      }

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
   * @api {post} /api/member/course/apply 4. 课程报名
   * @apiDescription 当前会员进行课程报名
   * @apiGroup 10. 会员课程模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN"
   * }
   *
   * @apiParam {string} course_id 课程编号
   *
   * @apiSampleRequest /api/member/course/apply
   * @apiVersion 1.0.0
   */
  public function apply(Request $request)
  {
    $messages = [
      'course_id.required' => '请您输入课程编号'
    ];

    $rule = [
      'course_id' => 'required'
    ];

    // 验证用户数据内容是否正确
    $validation = self::validation($request, $messages, $rule);

    if(!$validation['status'])
    {
      return $validation['message'];
    }
    else
    {
      $model = $this->_model::firstOrNew(['id' => $request->id]);

      $model->organization_id = self::getOrganizationId();
      $model->member_id       = self::getCurrentId();
      $model->course_id       = $request->course_id;
      $model->apply_time      = time();

      try
      {
        $response = $model->save();

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
