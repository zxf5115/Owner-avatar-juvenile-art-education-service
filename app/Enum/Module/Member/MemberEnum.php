<?php
namespace App\Enum\Module\Member;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-10-20
 *
 * 会员枚举类
 */
class MemberEnum
{
  // 状态
  const ENABLE = 1; // 解禁
  const DISABLE = 2; // 禁用

  // 冻结
  const FREEZE = 1; // 冻结
  const THAW = 2;  // 解冻


  // 状态封装
  public static $status = [
    self::ENABLE => [
      'value' => self::ENABLE,
      'text' => '解禁'
    ],

    self::DISABLE => [
      'value' => self::DISABLE,
      'text' => '禁用'
    ]
  ];


  // 冻结状态封装
  public static $freeze = [
    self::FREEZE => [
      'value' => self::FREEZE,
      'text' => '冻结'
    ],

    self::THAW => [
      'value' => self::THAW,
      'text' => '解冻'
    ]
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-20
   * ------------------------------------------
   * 状态类型封装
   * ------------------------------------------
   *
   * 状态类型封装
   *
   * @param int $code 状态代码
   * @return 状态信息
   */
  public static function getStatus($code)
  {
    return self::$status[$code] ?: self::$status[self::ENABLE];
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-20
   * ------------------------------------------
   * 审核状态类型封装
   * ------------------------------------------
   *
   * 审核状态类型封装
   *
   * @param int $code 状态代码
   * @return 状态信息
   */
  public static function getFreezeStatus($code)
  {
    return self::$freeze[$code] ?: self::$freeze[self::THAW];
  }

  }
