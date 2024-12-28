<?php

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', [
  'namespace'  =>  'Api',
  'middleware'  =>  'serializer:array'
], function ($api)
{
  $api->group([
    'middleware'  =>  'api.throttle', // 启用节流限制
    'limit'  =>  1000, // 允许次数
    'expires'  =>  1, // 分钟
  ], function ($api)
  {
    $api->group(['namespace' => 'System'], function ($api) {
      $api->post('login', 'LoginController@login'); // 密码登录
      $api->post('sms_login', 'LoginController@sms_login'); // 短信登录
      $api->post('sms_code', 'LoginController@sms_code'); // 登录验证码
      $api->post('weixin_login', 'LoginController@weixin_login'); // 微信登录
      $api->post('apple_login', 'LoginController@apple_login'); // 苹果登录
      $api->get('weixin_redirect', 'LoginController@weixin_redirect');
      $api->post('register', 'LoginController@register');
      $api->post('bind_mobile', 'LoginController@bind_mobile');
      $api->post('bind_code', 'LoginController@bind_code');
      $api->get('logout', 'LoginController@logout'); // 退出

      // 系统基础数据路由
      $api->group(['prefix' => 'system'], function ($api) {
        $api->get('kernel', 'SystemController@kernel'); // 系统信息路由
      });

      // 文件上传路由（必须先进行身份认证，默认人不可以上传）
      $api->group(['prefix' => 'file', 'middleware' => ['auth:api', 'refresh.token']], function ($api) {
        $api->post('avatar', 'FileController@avatar'); // 上传头像
        $api->post('picture', 'FileController@picture'); // 上传图片
        $api->post('file', 'FileController@file'); // 上传文件
        $api->post('audio', 'FileController@audio'); // 上传音频
        $api->post('movie', 'FileController@movie'); // 上传视频
      });
    });



    $api->group(['namespace' => 'Module'], function ($api) {

      // 公共路由
      $api->group(['namespace' => 'Common', 'prefix' => 'common'], function ($api) {
        $api->group(['prefix' => 'type'], function ($api) {
          $api->get('course', 'TypeController@course'); // 课程类型路由
        });

        $api->group(['prefix' => 'area'], function ($api) {
          $api->get('list', 'AreaController@list'); // 省市县路由
        });
      });



      // 会员路由
      $api->group(['namespace' => 'Member', 'prefix'  => 'member', 'middleware' => ['auth:api', 'refresh.token']], function ($api) {
        $api->get('archive', 'MemberController@archive');
        $api->post('handle', 'MemberController@handle');
        $api->post('teacher', 'MemberController@teacher');

        // 会员关联内容路由
        $api->group(['namespace' => 'Relevance'], function ($api) {

          // 会员棒棒糖路由
          $api->group(['prefix'  => 'lollipop'], function ($api) {
            $api->get('list', 'LollipopController@list');
            $api->get('select', 'LollipopController@select');
          });

          // 会员红包路由
          $api->group(['prefix'  => 'money'], function ($api) {
            $api->get('list', 'MoneyController@list');
            $api->get('select', 'MoneyController@select');
            $api->post('handle', 'MoneyController@handle');
          });

          // 会员作品路由
          $api->group(['prefix'  => 'production'], function ($api) {
            $api->get('list', 'ProductionController@list');
            $api->get('select', 'ProductionController@select');
            $api->get('view/{id}', 'ProductionController@view');
            $api->post('handle', 'ProductionController@handle');
          });

          // 会员送货地址路由
          $api->group(['prefix'  => 'address'], function ($api) {
            $api->get('list', 'AddressController@list');
            $api->get('select', 'AddressController@select');
            $api->get('view/{id}', 'AddressController@view');
            $api->post('handle', 'AddressController@handle');
            $api->post('delete', 'AddressController@delete');
          });

          // 会员点赞路由
          $api->group(['prefix'  => 'approval'], function ($api) {
            $api->get('list', 'ApprovalController@list');
            $api->get('select', 'ApprovalController@select');
            $api->post('status', 'ApprovalController@status');
            $api->post('handle', 'ApprovalController@handle');
          });

          // 会员课程路由
          $api->group(['prefix'  =>  'course'], function ($api) {
            $api->get('list', 'CourseController@list');
            $api->get('select', 'CourseController@select');
            $api->get('view/{id}', 'CourseController@view');
            $api->get('status/{id}', 'CourseController@status');
            $api->post('apply', 'CourseController@apply');
          });

          // 会员任务指标路由
          $api->group(['prefix'  =>  'target'], function ($api) {
            $api->get('progress', 'TargetController@progress');
          });

          // 会员订单路由
          $api->group(['prefix'  => 'order'], function ($api) {
            $api->get('list', 'OrderController@list');
            $api->get('select', 'OrderController@select');
            $api->get('view/{id}', 'OrderController@view');
            $api->post('finish', 'OrderController@finish');
            $api->post('cancel', 'OrderController@cancel');
          });

          // 会员评论路由
          $api->group(['prefix'  => 'comment'], function ($api) {
            $api->get('list', 'CommentController@list');
            $api->get('select', 'CommentController@select');
            $api->post('handle', 'CommentController@handle');
          });
        });
      });



      // 老师路由
      $api->group(['namespace' => 'Teacher', 'prefix'  => 'teacher', 'middleware' => ['auth:api', 'refresh.token']], function ($api) {

        // 管理老师路由
        $api->group(['namespace' => 'Management', 'prefix'  => 'management'], function ($api) {
          $api->get('archive', 'TeacherController@archive');
          $api->post('handle', 'TeacherController@handle');

          // 管理老师课程路由
          $api->group(['namespace' => 'Relevance', 'prefix'  =>  'course'], function ($api) {
            $api->get('list', 'CourseController@list');
            $api->get('select', 'CourseController@select');
            $api->get('view/{id}', 'CourseController@view');
            $api->post('confirm', 'CourseController@confirm');
          });
        });

        // 招聘老师路由
        $api->group(['namespace' => 'Recruitment', 'prefix'  => 'recruitment'], function ($api) {
          $api->get('archive', 'TeacherController@archive');
          $api->post('handle', 'TeacherController@handle');
          $api->post('confirm', 'TeacherController@confirm');
        });
      });





      // 机构路由
      $api->group(['namespace' => 'Organization', 'prefix' => 'organization'], function ($api) {
        $api->get('list', 'OrganizationController@list');
        $api->get('select', 'OrganizationController@select');
        $api->get('view/{id}', 'OrganizationController@view');
        $api->post('certification', 'OrganizationController@certification');
        $api->post('handle', 'OrganizationController@handle');
        $api->post('apply_first_step', 'OrganizationController@apply_first_step');
        $api->post('apply_second_step', 'OrganizationController@apply_second_step');


        // 班级路由
        $api->group(['namespace' => 'Squad', 'prefix' => 'squad', 'middleware' => ['auth:api', 'refresh.token']], function ($api) {
          $api->get('list', 'SquadController@list');
          $api->get('select', 'SquadController@select');
          $api->get('select', 'SquadController@select');
          $api->get('view/{id}', 'SquadController@view');
          $api->post('course', 'SquadController@course');
          $api->post('apply_first_step', 'SquadController@apply_first_step');
          $api->post('apply_second_step', 'SquadController@apply_second_step');
          $api->post('apply_third_step', 'SquadController@apply_third_step');
          $api->post('apply_fourth_step', 'SquadController@apply_fourth_step');

          // 机构班级学习中心
          $api->group(['prefix' => 'study'], function ($api) {
            $api->get('center/{squad_id}', 'StudyController@center');
            $api->get('view/{squad_id}', 'StudyController@view');

            $api->group(['namespace' => 'Study', 'prefix' => 'statistical'], function ($api) {
              $api->get('list/{squad_id}', 'StatisticalController@list');
            });
          });

          // 机构班级成绩
          $api->group(['prefix' => 'grade'], function ($api) {
            $api->get('center/{squad_id}', 'GradeController@center');


            $api->group(['namespace' => 'Grade'], function ($api) {
              $api->get('class_after_question/{squad_id}', 'DetailController@class_after_question');
              $api->get('comprehensive_question/{squad_id}', 'DetailController@comprehensive_question');
              $api->get('simulation_exam/{squad_id}', 'DetailController@simulation_exam');
            });
          });

          // 班级会员路由
          $api->group(['namespace' => 'Relevance', 'prefix' => 'member'], function ($api) {
            $api->get('teacher', 'MemberController@teacher');
            $api->get('student', 'MemberController@student');
            $api->get('roster', 'MemberController@roster');
            $api->get('export', 'MemberController@export');
            $api->post('graduation', 'MemberController@graduation');
            $api->post('ungraduation', 'MemberController@ungraduation');
          });

          // 班级已选课程路由
          $api->group(['namespace' => 'Relevance', 'prefix' => 'course'], function ($api) {
            $api->get('select', 'CourseController@select');
          });
        });
      });


      // 广告路由
      $api->group(['namespace' => 'Advertising', 'prefix' => 'advertising'], function ($api) {
        $api->get('list', 'AdvertisingController@list');
        $api->get('select', 'AdvertisingController@select');
        $api->get('view/{id}', 'AdvertisingController@view');

        $api->group(['namespace' => 'Relevance', 'prefix' => 'position'], function ($api) {
          $api->get('list', 'PositionController@list');
          $api->get('select', 'PositionController@select');
          $api->get('view/{id}', 'PositionController@view');
        });
      });


      // 教育中心路由
      $api->group(['namespace' => 'Education', 'prefix' => 'education'], function ($api) {

        // 课件路由
        $api->group(['namespace' => 'Courseware', 'prefix' => 'courseware'], function ($api) {
          $api->any('list', 'CoursewareController@list');
          $api->get('select', 'CoursewareController@select');
          $api->get('view/{id}', 'CoursewareController@view');

          // 课件级别
          $api->group(['namespace' => 'Relevance', 'prefix' => 'level'], function ($api) {
            $api->any('list', 'LevelController@list');
            $api->get('select', 'LevelController@select');
            $api->get('view/{id}', 'LevelController@view');

            // 课件单元
            $api->group(['namespace' => 'Relevance', 'prefix' => 'unit'], function ($api) {
              $api->any('list', 'UnitController@list');
              $api->get('select', 'UnitController@select');
              $api->get('view/{id}', 'UnitController@view');

              // 课件知识点
              $api->group(['namespace' => 'Relevance', 'prefix' => 'point'], function ($api) {
                $api->any('list', 'PointController@list');
                $api->get('select', 'PointController@select');
                $api->get('view/{id}', 'PointController@view');
              });
            });
          });
        });


        // 课程路由
        $api->group(['namespace' => 'Course', 'prefix' => 'course'], function ($api) {
          $api->any('list', 'CourseController@list');
          $api->get('select', 'CourseController@select');
          $api->get('view/{id}', 'CourseController@view');

          $api->group(['namespace' => 'Relevance'], function ($api) {

            // 课程老师路由
            $api->group(['prefix' => 'teacher'], function ($api) {
              $api->any('list', 'TeacherController@list');
              $api->get('select', 'TeacherController@select');
              $api->get('view/{id}', 'TeacherController@view');
            });

            // 课程礼包路由
            $api->group(['prefix' => 'present'], function ($api) {
              $api->any('list', 'PresentController@list');
              $api->get('select', 'PresentController@select');
              $api->get('view/{id}', 'PresentController@view');
            });

            // 课程解锁路由
            $api->group(['prefix' => 'unlock'], function ($api) {
              $api->any('list', 'UnlockController@list');
              $api->get('select', 'UnlockController@select');
              $api->get('view/{id}', 'UnlockController@view');
            });
          });
        });
      });



      // 作品路由
      $api->group(['namespace' => 'Production', 'prefix' => 'production'], function ($api) {
        $api->get('list', 'ProductionController@list');
        $api->get('view/{id}', 'ProductionController@view');

        $api->group(['namespace' => 'Relevance'], function ($api) {
          // 作品评论路由
          $api->group(['prefix' => 'comment'], function ($api) {
            $api->get('list', 'CommentController@list');
            $api->get('select', 'CommentController@select');
            $api->get('view/{id}', 'CommentController@view');
          });
        });
      });


      // 模板路由
      $api->group(['namespace' => 'Template', 'prefix' => 'template'], function ($api) {
        $api->get('list', 'TemplateController@list');
        $api->get('select', 'TemplateController@select');
        $api->get('view/{id}', 'TemplateController@view');
      });
    });
  });
});
