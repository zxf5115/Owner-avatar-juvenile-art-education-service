<?php
namespace App\Models\Common\Module\Education\Course;

use App\Models\Base;
use App\Enum\Module\Education\CourseEnum;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-10-21
 *
 * 课程模型类
 */
class Course extends Base
{
  // 表名
  public $table = "module_course";

  // 可以批量修改的字段
  public $fillable = [
    'id'
  ];

  // 追加到模型数组表单的访问器
  protected $appends = [
    'apply_time'
  ];

  // 隐藏的属性
  public $hidden = [];

  /**
   * 转换属性类型
   */
  protected $casts = [
    'status'            => 'array',
    'apply_start_time'  => 'datetime:Y-m-d',
    'apply_end_time'    => 'datetime:Y-m-d',
    'course_start_time' => 'datetime:Y-m-d',
    'create_time'       => 'datetime:Y-m-d H:i:s',
    'update_time'       => 'datetime:Y-m-d H:i:s',
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-31
   * ------------------------------------------
   * 报名状态封装
   * ------------------------------------------
   *
   * 报名状态封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getApplyStatusAttribute($value)
  {
    return CourseEnum::getApplyStatus($value);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-31
   * ------------------------------------------
   * 课程周期封装
   * ------------------------------------------
   *
   * 课程周期封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getSemesterAttribute($value)
  {
    return CourseEnum::getSemesterData($value);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-05
   * ------------------------------------------
   * 报名起止时间封装
   * ------------------------------------------
   *
   * 报名起止时间封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getApplyTimeAttribute($value)
  {
    return [
      $this->start_time,
      $this->end_time
    ];
  }

  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-11
   * ------------------------------------------
   * 课程与课程详情关联函数
   * ------------------------------------------
   *
   * 课程与课程详情关联函数
   *
   * @return [关联对象]
   */
  public function detail()
  {
    return $this->hasOne('App\Models\Common\Module\Education\Course\Relevance\Detail', 'course_id', 'id');
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-09-28
   * ------------------------------------------
   * 课程与课件关联函数
   * ------------------------------------------
   *
   * 课程与课件关联函数
   *
   * @return [关联对象]
   */
  public function courseware()
  {
    return $this->belongsTo('App\Models\Common\Module\Education\Courseware\Courseware', 'courseware_id', 'id');
  }

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-10
   * ------------------------------------------
   * 课程与解锁关联函数
   * ------------------------------------------
   *
   * 课程与解锁关联函数
   *
   * @return [关联对象]
   */
  public function unlock()
  {
    return $this->belongsTo('App\Models\Common\Module\Education\Course\Relevance\Unlock', 'unlock_id', 'id');
  }

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-10
   * ------------------------------------------
   * 课程与礼包关联函数
   * ------------------------------------------
   *
   * 课程与礼包关联函数
   *
   * @return [关联对象]
   */
  public function present()
  {
    return $this->belongsTo('App\Models\Common\Module\Education\Course\Relevance\Present', 'present_id', 'id');
  }


}
