<?php
namespace App\Enum\Module\Member\Relevance;

use App\Enum\BaseEnum;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-12-24
 *
 * 会员红包枚举类
 */
class MoneyEnum extends BaseEnum
{
  // 红包类型状态
  const INCOME = 1; // 收入
  const EXPEND = 2; // 提现

  // 红包类型封装
  public static $type = [
    self::INCOME => [
      'value' => self::INCOME,
      'text' => '收入'
    ],

    self::EXPEND => [
      'value' => self::EXPEND,
      'text' => '提现'
    ]
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-12-24
   * ------------------------------------------
   * 红包类型封装
   * ------------------------------------------
   *
   * 红包类型封装
   *
   * @param int $code 状态代码
   * @return 状态信息
   */
  public static function getTypeStatus($code)
  {
    return self::$type[$code] ?: self::$type[self::INCOME];
  }
}
