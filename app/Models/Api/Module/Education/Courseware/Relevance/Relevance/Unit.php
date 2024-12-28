<?php
namespace App\Models\Api\Module\Education\Courseware\Relevance\Relevance;

use App\Models\Common\Module\Education\Courseware\Relevance\Relevance\Unit as Common;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-10-23
 *
 * 课件单元模型类
 */
class Unit extends Common
{
  // 隐藏的属性
  public $hidden = [
    'organization_id',
    'status',
    'update_time'
  ];



  // 关联函数 ------------------------------------------------------


}
