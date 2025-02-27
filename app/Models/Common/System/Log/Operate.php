<?php
namespace App\Models\Common\System\Log;

use App\Models\Base;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-07-08
 *
 * 操作日志模型类
 */
class Operate extends Base
{
  // 表名
  public $table = "system_operate_log";

  // 隐藏的属性
  public $hidden = [
    'update_time'
  ];

  // 追加到模型数组表单的访问器
  public $appends = [];

  // 批量添加
  public $fillable = ['id'];
}
