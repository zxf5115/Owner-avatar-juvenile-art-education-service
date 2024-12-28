<?php
namespace App\Enum\Module\Member\Relevance;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-12-20
 *
 * 会员课程枚举类
 */
class CourseEnum
{
  // 添加状态
  const ADD = 1; // 是
  const UNADD = 2; // 否

  const WAIT = 0; // 待确认
  const AGREE = 1; // 已确认

  // 添加状态封装
  public static $add = [
    self::ADD => [
      'value' => self::ADD,
      'text' => '是'
    ],

    self::UNADD => [
      'value' => self::UNADD,
      'text' => '否'
    ]
  ];

  // 报名状态封装
  public static $apply = [
    self::WAIT => [
      'value' => self::WAIT,
      'text' => '待确认'
    ],

    self::AGREE => [
      'value' => self::AGREE,
      'text' => '已确认'
    ]
  ];

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-20
   * ------------------------------------------
   * 添加状态类型封装
   * ------------------------------------------
   *
   * 添加状态类型封装
   *
   * @param int $code 状态代码
   * @return 状态信息
   */
  public static function getAddStatus($code)
  {
    return self::$add[$code] ?: self::$add[self::UNADD];
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-10-20
   * ------------------------------------------
   * 报名状态封装
   * ------------------------------------------
   *
   * 报名状态封装
   *
   * @param int $code 状态代码
   * @return 状态信息
   */
  public static function getApplyStatus($code)
  {
    return self::$apply[$code] ?: self::$apply[self::WAIT];
  }
}
