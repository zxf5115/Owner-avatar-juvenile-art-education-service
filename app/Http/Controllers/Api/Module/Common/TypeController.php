<?php
namespace App\Http\Controllers\Api\Module\Common;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Enum\Module\Education\CourseEnum;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-10-25
 *
 * 类型控制器类
 */
class TypeController extends BaseController
{
  /**
   * @api {get} /api/type/course 03. 获取课程类型列表
   * @apiDescription 获取课程类型列表
   * @apiGroup 02. 公共模块
   * @apiPermission jwt
   * @apiParam {string} token JWTtoken
   * @apiVersion 1.0.0
   */
  public function course(Request $request)
  {
    try
    {
      $response = CourseEnum::getTypeList();

      return self::success($response);
    }
    catch(\Exception $e)
    {
      \Log::error($e);

      return self::success($response);
    }
  }
}
