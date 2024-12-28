<?php
namespace App\Models\Platform\Module\Education\Course;

use App\Models\Common\Module\Education\Course\Course as Common;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-09-27
 *
 * 课程模型类
 */
class Course extends Common
{

  // 追加到模型数组表单的访问器
  protected $appends = [
    'apply_time'
  ];

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-01-11
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
      $this->apply_start_time,
      $this->apply_end_time
    ];
  }
}
