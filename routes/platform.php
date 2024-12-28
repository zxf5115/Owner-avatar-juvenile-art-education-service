<?php

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', [
  'namespace'  =>  'Platform',
  'middleware'  =>  'serializer:array'
], function ($api)
{
  $api->group([
    'middleware'  =>  'api.throttle', // 启用节流限制
    'limit'  =>  1000, // 允许次数
    'expires'  =>  1, // 分钟
  ], function ($api)
  {
    // --------------------------------------------------
    // 核心路由
    $api->group(['namespace' => 'System'], function ($api) {

      // 登录路由
      $api->post('login', 'LoginController@login');
      $api->post('register', 'LoginController@register');
      $api->get('logout', 'LoginController@logout');
      $api->get('check_user_login', 'LoginController@check_user_login'); // 验证是否登录

      $api->post('kernel', 'SystemController@kernel');
      $api->post('clear', 'SystemController@clear');

      // 首页路由
      $api->group(['prefix' => 'index'], function ($api) {
        $api->post('user', 'IndexController@user');
        $api->post('course', 'IndexController@course');
        $api->post('keyword', 'IndexController@keyword');
        $api->post('equipment', 'IndexController@equipment');
        $api->post('question', 'IndexController@question');
        $api->post('study', 'IndexController@study');
      });

      // 文件上传路由
      $api->group(['prefix' => 'file'], function ($api) {
        $api->post('avatar', 'FileController@avatar');
        $api->post('picture', 'FileController@picture');
        $api->post('file', 'FileController@file');
        $api->post('advertising', 'FileController@advertising');
        $api->post('course', 'FileController@course');
      });


      // 平台用户路由
      $api->group(['prefix'  =>  'user'], function ($api) {
        $api->any('list', 'UserController@list');
        $api->get('select', 'UserController@select');
        $api->get('view/{id}', 'UserController@view');
        $api->get('action', 'UserController@action');
        $api->post('handle', 'UserController@handle');
        $api->post('delete', 'UserController@delete');
        $api->get('tree', 'UserController@tree');
        $api->any('password', 'UserController@password');
        $api->any('change_password', 'UserController@change_password');

        // 平台用户消息路由
        $api->group(['namespace' => 'User', 'prefix'  =>  'message'], function ($api) {
          $api->any('list', 'MessageController@list');
          $api->post('unread', 'MessageController@unread');
          $api->post('readed', 'MessageController@readed');
          $api->post('delete', 'MessageController@delete');
        });
      });


      // 平台角色路由
      $api->group(['prefix'  =>  'role'], function ($api) {
        $api->any('list', 'RoleController@list');
        $api->get('select', 'RoleController@select');
        $api->get('view/{id}', 'RoleController@view');
        $api->post('handle', 'RoleController@handle');
        $api->post('delete', 'RoleController@delete');
        $api->any('permission/{id}', 'RoleController@permission');
      });


      // 平台菜单路由
      $api->group(['prefix'  =>  'menu'], function ($api) {
        $api->any('list', 'MenuController@list');
        $api->get('select', 'MenuController@select');
        $api->get('view/{id}', 'MenuController@view');
        $api->post('handle', 'MenuController@handle');
        $api->post('delete', 'MenuController@delete');

        $api->any('level', 'MenuController@level');
        $api->post('get_bread_nav', 'MenuController@get_bread_nav');
      });


       // 系统配置路由
      $api->group(['prefix'  =>  'config'], function ($api) {
        // 配置管理路由
        $api->any('list', 'ConfigController@list');
        $api->get('view/{id}', 'ConfigController@view');
        $api->post('handle', 'ConfigController@handle');
        $api->post('delete/{id?}', 'ConfigController@delete');

        // 配置分类管理路由
        $api->group(['namespace' => 'Config', 'prefix'  =>  'category'], function ($api) {
          $api->any('list', 'CategoryController@list');
          $api->get('view/{id}', 'CategoryController@view');
          $api->get('level', 'CategoryController@level');
          $api->post('handle', 'CategoryController@handle');
          $api->post('delete/{id?}', 'CategoryController@delete');
        });
      });


      // 系统设置路由
      $api->group(['prefix'  =>  'setting'], function ($api) {
        // 配置中心
        $api->any('/web', 'SettingController@web'); // 站点设置
        $api->any('/upload', 'SettingController@upload'); // 上传设置
        $api->any('/map', 'SettingController@map'); // 地图设置
        $api->any('/wechat', 'SettingController@wechat'); // 微信公众号配置
        $api->any('/oauth', 'SettingController@oauth'); // 微信Oauth 配置 PC
        $api->any('/distribution', 'SettingController@distribution'); // 分销配置
        $api->any('/task', 'SettingController@task'); // 定时任务 自动执行
        $api->any('/sms', 'SettingController@sms'); // 短信sms
        $api->any('/template', 'SettingController@template'); // 模板消息


        $api->group(['namespace' => 'Setting'], function ($api) {

          // 第三方登录配置功能
          $api->any('/oauth/qq', 'OauthConfigController@qq'); // qq登录配置
          $api->any('/oauth/wechat', 'OauthConfigController@wechat'); // wechat登录配置
          $api->any('/oauth/weibo', 'OauthConfigController@weibo'); // weibo登录配置

          // 云存储配置功能
          $api->any('/cloud/aliyun', 'CloudConfigController@aliyun'); // 阿里云配置
          $api->any('/cloud/qiniu', 'CloudConfigController@qiniu'); // 七牛云配置

          // 站点协议
          $api->any('/agreement/list', 'AgreementController@list');
          $api->get('/agreement/view/{id}', 'AgreementController@view');
          $api->post('/agreement/handle', 'AgreementController@handle');
          $api->post('/agreement/delete/{id?}', 'AgreementController@delete');
        });
      });


      // 系统消息路由
      $api->group(['prefix'  =>  'message'], function ($api) {
        $api->any('list', 'MessageController@list');
        $api->get('view/{id}', 'MessageController@view');
        $api->post('handle', 'MessageController@handle');
        $api->get('type', 'MessageController@type');
        $api->post('readed', 'MessageController@readed');
        $api->post('delete', 'MessageController@delete');
      });

      // 系统日志路由
      $api->group(['namespace' => 'Log', 'prefix'  =>  'log'], function ($api) {
        $api->group(['prefix'  =>  'action'], function ($api) {
          $api->any('list', 'ActionController@list');
          $api->get('view/{id}', 'ActionController@view');
          $api->post('delete', 'ActionController@delete');
        });
      });
    });


    // --------------------------------------------------
    // 模块路由
    $api->group(['namespace' => 'Module'], function ($api) {

      // 公共路由
      $api->group(['namespace' => 'Common', 'prefix'  =>  'common'], function ($api) {
        $api->get('education/degree', 'EducationController@degree'); // 教育程度路由
        $api->get('national/list', 'NationalController@list'); // 民族路由
        $api->get('area/list', 'AreaController@list'); // 民族路由
      });

      // 机构路由
      $api->group(['namespace' => 'Organization', 'prefix' => 'organization'], function ($api) {
        $api->any('list', 'OrganizationController@list');
        $api->get('select', 'OrganizationController@select');
        $api->get('view/{id}', 'OrganizationController@view');
        $api->post('handle', 'OrganizationController@handle');
        $api->post('audit', 'OrganizationController@audit');
        $api->post('export', 'OrganizationController@export');
        $api->post('delete', 'OrganizationController@delete');

        // 班级路由
        $api->group(['namespace' => 'Squad', 'prefix' => 'squad'], function ($api) {
          $api->any('list', 'SquadController@list');
          $api->get('view/{id}', 'SquadController@view');
          $api->get('label/{id}', 'SquadController@label');
          $api->post('handle', 'SquadController@handle');
          $api->post('audit', 'SquadController@audit');
          $api->post('delete/{id?}', 'SquadController@delete');
        });
      });


      // 会员路由
      $api->group(['namespace' => 'Member', 'prefix'  =>  'member'], function ($api) {
        $api->any('list', 'MemberController@list');
        $api->get('select', 'MemberController@select');
        $api->get('view/{id}', 'MemberController@view');
        $api->post('handle', 'MemberController@handle');
        $api->post('freeze', 'MemberController@freeze');
        $api->post('enable', 'MemberController@enable');
        $api->post('delete', 'MemberController@delete');

        // 会员角色路由
        $api->group(['prefix'  =>  'role'], function ($api) {
          $api->any('list', 'RoleController@list');
          $api->get('select', 'RoleController@select');
          $api->get('view/{id}', 'RoleController@view');
          $api->post('handle', 'RoleController@handle');
          $api->post('delete', 'RoleController@delete');
          $api->any('permission/{id}', 'RoleController@permission');
        });
      });


      // 老师路由
      $api->group(['namespace' => 'Teacher', 'prefix'  =>  'teacher'], function ($api) {

        // 管理老师路由
        $api->group(['namespace' => 'Management', 'prefix'  =>  'management'], function ($api) {
          $api->any('list', 'TeacherController@list');
          $api->get('select', 'TeacherController@select');
          $api->get('view/{id}', 'TeacherController@view');
          $api->post('handle', 'TeacherController@handle');
          $api->post('enable', 'TeacherController@enable');
          $api->post('delete', 'TeacherController@delete');
        });

        // 招聘老师路由
        $api->group(['namespace' => 'Recruitment', 'prefix'  =>  'recruitment'], function ($api) {
          $api->any('list', 'TeacherController@list');
          $api->get('select', 'TeacherController@select');
          $api->get('view/{id}', 'TeacherController@view');
          $api->post('handle', 'TeacherController@handle');
          $api->post('enable', 'TeacherController@enable');
          $api->post('delete', 'TeacherController@delete');
        });
      });


      // 作品路由
      $api->group(['namespace' => 'Production', 'prefix' => 'production'], function ($api) {
        $api->any('list', 'ProductionController@list');
        $api->get('select', 'ProductionController@select');
        $api->get('view/{id}', 'ProductionController@view');
        $api->post('delete', 'ProductionController@delete');

        $api->group(['namespace' => 'Relevance'], function ($api) {

          // 作品评论路由
          $api->group(['prefix' => 'comment'], function ($api) {
            $api->any('list', 'CommentController@list');
          });
        });
      });


      // 模板路由
      $api->group(['namespace' => 'Template', 'prefix' => 'template'], function ($api) {
        $api->any('list', 'TemplateController@list');
        $api->get('select', 'TemplateController@select');
        $api->get('view/{id}', 'TemplateController@view');
        $api->post('handle', 'TemplateController@handle');
        $api->post('delete', 'TemplateController@delete');
      });


      // 广告路由
      $api->group(['namespace' => 'Advertising', 'prefix' => 'advertising'], function ($api) {
        // 广告路由
        $api->any('list', 'AdvertisingController@list');
        $api->get('select', 'AdvertisingController@select');
        $api->get('view/{id}', 'AdvertisingController@view');
        $api->post('handle', 'AdvertisingController@handle');
        $api->post('delete', 'AdvertisingController@delete');

        // 广告位路由
        $api->group(['namespace' => 'Relevance', 'prefix' => 'position'], function ($api) {
          $api->any('list', 'PositionController@list');
          $api->get('select', 'PositionController@select');
          $api->get('view/{id}', 'PositionController@view');
          $api->post('handle', 'PositionController@handle');
          $api->post('delete/{id?}', 'PositionController@delete');
        });
      });


      // 教育中心路由
      $api->group(['namespace' => 'Education', 'prefix' => 'education'], function ($api) {

        // 课件路由
        $api->group(['namespace' => 'Courseware', 'prefix' => 'courseware'], function ($api) {
          $api->any('list', 'CoursewareController@list');
          $api->get('select', 'CoursewareController@select');
          $api->get('view/{id}', 'CoursewareController@view');
          $api->post('handle', 'CoursewareController@handle');
          $api->post('status', 'CoursewareController@status');
          $api->post('delete/{id?}', 'CoursewareController@delete');

          $api->group(['namespace' => 'Relevance'], function ($api) {
            // 课件级别路由
            $api->group(['prefix'  => 'level'], function ($api) {
              $api->any('list', 'LevelController@list');
              $api->get('select', 'LevelController@select');
              $api->get('view/{id}', 'LevelController@view');
              $api->post('handle', 'LevelController@handle');
              $api->post('status', 'LevelController@status');
              $api->post('delete/{id?}', 'LevelController@delete');

              $api->group(['namespace' => 'Relevance'], function ($api) {
                // 课件单元路由
                $api->group(['prefix'  => 'unit'], function ($api) {
                  $api->any('list', 'UnitController@list');
                  $api->get('select', 'UnitController@select');
                  $api->get('view/{id}', 'UnitController@view');
                  $api->post('handle', 'UnitController@handle');
                  $api->post('delete/{id?}', 'UnitController@delete');

                  $api->group(['namespace' => 'Relevance'], function ($api) {
                    // 课件知识点路由
                    $api->group(['prefix'  => 'point'], function ($api) {
                      $api->any('list', 'PointController@list');
                      $api->get('select', 'PointController@select');
                      $api->get('view/{id}', 'PointController@view');
                      $api->post('handle', 'PointController@handle');
                      $api->post('delete/{id?}', 'PointController@delete');
                    });
                  });
                });
              });
            });
          });
        });



        // 课程路由
        $api->group(['namespace' => 'Course', 'prefix' => 'course'], function ($api) {
          $api->any('list', 'CourseController@list');
          $api->get('select', 'CourseController@select');
          $api->get('view/{id}', 'CourseController@view');
          $api->post('handle', 'CourseController@handle');
          $api->post('delete/{id?}', 'CourseController@delete');

          $api->group(['namespace' => 'Relevance'], function ($api) {
            // 课程礼包路由
            $api->group(['prefix'  => 'present'], function ($api) {
              $api->any('list', 'PresentController@list');
              $api->get('select', 'PresentController@select');
              $api->get('view/{id}', 'PresentController@view');
              $api->post('handle', 'PresentController@handle');
              $api->post('delete/{id?}', 'PresentController@delete');
            });
            // 课程礼包路由
            $api->group(['prefix'  => 'unlock'], function ($api) {
              $api->any('list', 'UnlockController@list');
              $api->get('select', 'UnlockController@select');
              $api->get('view/{id}', 'UnlockController@view');
              $api->post('handle', 'UnlockController@handle');
              $api->post('delete/{id?}', 'UnlockController@delete');
            });
            // 课程老师路由
            $api->group(['prefix'  => 'teacher'], function ($api) {
              $api->any('list', 'TeacherController@list');
              $api->get('select', 'TeacherController@select');
              $api->get('view/{id}', 'TeacherController@view');
              $api->post('handle', 'TeacherController@handle');
              $api->post('delete/{id?}', 'TeacherController@delete');
            });
          });
        });

      });
    });
  });
});
