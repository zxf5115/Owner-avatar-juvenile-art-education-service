<?php
namespace App\Models\Common\Module\Member\Relevance;

use App\Models\Base;
use App\Enum\Common\TimeEnum;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-12-20
 *
 * 会员课程关联模型类
 */
class Course extends Base
{
  // 表名
  public $table = 'module_member_course';

  // 隐藏的属性
  public $hidden = [
    'organization_id',
    'status',
    'create_time',
    'update_time'
  ];

  /**
   * 可以被批量赋值的属性
   */
  public $fillable = [
    'organization_id',
    'squad_id',
    'member_id',
    'course_id',
    'course_time'
  ];

  // 追加到模型数组表单的访问器
  public $appends = [];

  /**
   * 转换属性类型
   */
  protected $casts = [
    'status' => 'array',
    'apply_time' => 'datetime:Y-m-d',
    'create_time' => 'datetime:Y-m-d H:i:s',
    'update_time' => 'datetime:Y-m-d H:i:s',
  ];

  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-12-20
   * ------------------------------------------
   * 反向关联管理老师
   * ------------------------------------------
   *
   * 反向关联管理老师
   *
   * @return [关联对象]
   */
  public function teacher()
  {
      return $this->belongsTo('App\Models\Common\Module\Member\Member', 'teacher_id', 'id')
                  ->where(['status'=>1]);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-12-28
   * ------------------------------------------
   * 会员课程与会员关联函数
   * ------------------------------------------
   *
   * 会员课程与会员关联函数
   *
   * @return [type]
   */
  public function member()
  {
    return $this->belongsTo('App\Models\Common\Module\Member\Member', 'member_id', 'id')
                ->where(['status'=>1]);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-12-28
   * ------------------------------------------
   * 会员课程与课程关联函数
   * ------------------------------------------
   *
   * 会员课程与课程关联函数
   *
   * @return [type]
   */
  public function course()
  {
    return $this->belongsTo('App\Models\Common\Module\Education\Course\Course', 'course_id', 'id')
                ->where(['status'=>1]);
  }
}
