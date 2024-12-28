<?php
namespace App\Http\Controllers\Platform\System;

use App\Http\Constant\Code;
use Illuminate\Http\Request;
use App\Models\Platform\System\Config;
use App\Models\Platform\System\Config\Category;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Platform\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-07-09
 *
 * 系统配置控制器类
 */
class SettingController extends BaseController
{
  protected $_model = 'App\Models\Platform\System\Config';

  protected $_where = [];

  protected $_params = [
    'category_id',
  ];

  protected $_order = [
    ['key' => 'id', 'value' => 'asc'],
  ];

  protected $_relevance = 'category';



  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-07-09
   * ------------------------------------------
   * 网站配置信息页
   * ------------------------------------------
   *
   * 网站配置信息
   *
   * @param Request $request 请求数据
   * @return [type]
   */
  public function web(Request $request)
  {
    if($request->isMethod('post'))
    {
      $response = Config::saveConfig($request->all());

      if($response)
      {
        return self::success();
      }

      return self::error(Code::message(Code::HANDLE_FAILURE));
    }

    $where = [
      'title' => 'WEB_CONFIG',
      'status' => 1
    ];

    $category = Category::getRow($where);
    $category_id = $category->id ?? 0;
    $where = [
      'category_id' => $category_id
    ];

    $response = $this->_model::getList($where);

    return self::success($response);
  }

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-07-12
   * ------------------------------------------
   * 地图配置信息页
   * ------------------------------------------
   *
   * 地图配置信息
   *
   * @param Request $request 请求数据
   * @return [type]
   */
  public function map(Request $request)
  {
    if($request->isMethod('post'))
    {
      $response = Config::saveConfig($request->all());

      if($response)
      {
        return self::success();
      }

      return self::error(Code::message(Code::HANDLE_FAILURE));
    }

    $where = [
      'title' => 'MAP_CONFIG',
      'status' => 1
    ];

    $category = Category::getRow($where);
    $category_id = $category->id ?? 0;
    $where = [
      'category_id' => $category_id
    ];

    $response = $this->_model::getList($where);

    return self::success($response);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-07-12
   * ------------------------------------------
   * 分销设置
   * ------------------------------------------
   *
   * 配置分销设置
   *
   * @param Request $request 请求数据
   * @return [type]
   */
  public function distribution(Request $request)
  {
    if($request->isMethod('post'))
    {
      $response = Config::saveConfig($request->all());

      if($response)
      {
        return self::success();
      }

      return self::error(Code::message(Code::HANDLE_FAILURE));
    }

    $where = [
      'title' => 'DISTRIBUTION_CONFIG',
      'status' => 1
    ];

    $category = Category::getRow($where);
    $category_id = $category->id ?? 0;
    $where = [
      'category_id' => $category_id
    ];

    $response = $this->_model::getList($where);

    return self::success($response);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-07-12
   * ------------------------------------------
   * 定时任务配置
   * ------------------------------------------
   *
   * 定时任务 自动执行配置
   *
   * @param Request $request 请求数据
   * @return [type]
   */
  public function task(Request $request)
  {
    if($request->isMethod('post'))
    {
      $response = Config::saveConfig($request->all());

      if($response)
      {
        return self::success();
      }

      return self::error(Code::message(Code::HANDLE_FAILURE));
    }

    $where = [
      'title' => 'TASK_CONFIG',
      'status' => 1
    ];

    $category = Category::getRow($where);
    $category_id = $category->id ?? 0;
    $where = [
      'category_id' => $category_id
    ];

    $response = $this->_model::getList($where);

    return self::success($response);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-07-13
   * ------------------------------------------
   * 短信配置
   * ------------------------------------------
   *
   * 配置短信服务器信息
   *
   * @param Request $request 请求数据
   * @return [type]
   */
  public function sms(Request $request)
  {
    if($request->isMethod('post'))
    {
      $response = Config::saveConfig($request->all());

      if($response)
      {
        return self::success();
      }

      return self::error(Code::message(Code::HANDLE_FAILURE));
    }

    $where = [
      'title' => 'SMS_CONFIG',
      'status' => 1
    ];

    $category = Category::getRow($where);
    $category_id = $category->id ?? 0;
    $where = [
      'category_id' => $category_id
    ];

    $response = $this->_model::getList($where);

    return self::success($response);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-07-13
   * ------------------------------------------
   * 配置模板消息
   * ------------------------------------------
   *
   * 配置模板消息
   *
   * @param Request $request 请求数据
   * @return [type]
   */
  public function template(Request $request)
  {
    if($request->isMethod('post'))
    {
      $response = Config::saveConfig($request->all());

      if($response)
      {
        return self::success();
      }

      return self::error(Code::message(Code::HANDLE_FAILURE));
    }

    $where = [
      'title' => 'TEMPLATE_CONFIG',
      'status' => 1
    ];

    $category = Category::getRow($where);
    $category_id = $category->id ?? 0;
    $where = [
      'category_id' => $category_id
    ];

    $response = $this->_model::getList($where);

    return self::success($response);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-07-13
   * ------------------------------------------
   * 微信公众号配置
   * ------------------------------------------
   *
   * 配置微信公众号信息
   *
   * @param Request $request 请求数据
   * @return [type]
   */
  public function wechat(Request $request)
  {
    if($request->isMethod('post'))
    {
      $response = Config::saveConfig($request->all());

      if($response)
      {
        return self::success();
      }

      return self::error(Code::message(Code::HANDLE_FAILURE));
    }

    $where = [
      'title' => 'WECHAT_CONFIG',
      'status' => 1
    ];

    $category = Category::getRow($where);
    $category_id = $category->id ?? 0;
    $where = [
      'category_id' => $category_id
    ];

    $response = $this->_model::getList($where);

    return self::success($response);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-07-13
   * ------------------------------------------
   * 上传配置
   * ------------------------------------------
   *
   * 配置上传信息
   *
   * @param Request $request 请求数据
   * @return [type]
   */
  public function upload(Request $request)
  {
    if($request->isMethod('post'))
    {
      $response = Config::saveConfig($request->all());

      if($response)
      {
        return self::success();
      }

      return self::error(Code::message(Code::HANDLE_FAILURE));
    }

    $where = [
      'title' => 'UPLOAD_CONFIG',
      'status' => 1
    ];

    $category = Category::getRow($where);
    $category_id = $category->id ?? 0;
    $where = [
      'category_id' => $category_id
    ];

    $response = $this->_model::getList($where);

    return self::success($response);
  }

}
