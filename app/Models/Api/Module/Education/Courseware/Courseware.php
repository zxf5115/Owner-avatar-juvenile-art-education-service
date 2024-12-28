<?php
namespace App\Models\Api\Module\Education\Courseware;

use App\Models\Common\Module\Education\Courseware\Courseware as Common;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-10-23
 *
 * 课件模型类
 */
class Courseware extends Common
{
  // 隐藏的属性
  public $hidden = [
    'organization_id',
    'status',
    'update_time'
  ];



  // 关联函数 ------------------------------------------------------


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-01-20
   * ------------------------------------------
   * 课程与会员关联函数
   * ------------------------------------------
   *
   * 课程与会员关联函数
   *
   * @return [关联对象]
   */
  public function member()
  {
    return $this->belongsToMany(
      'App\Models\Api\Module\Member\Member',
      'module_member_course_relevance',
      'course_id',
      'member_id'
    )->wherePivot('status', 1);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-13
   * ------------------------------------------
   * 课程与课程资料关联函数
   * ------------------------------------------
   *
   * 课程与课程资料关联函数
   *
   * @return [关联对象]
   */
  public function resource()
  {
    return $this->belongsToMany(
      'App\Models\Common\Module\Education\Course\Resource',
      'module_course_resource_relevance',
      'course_id',
      'resource_id'
    )->wherePivot('status', 1);
  }
}
