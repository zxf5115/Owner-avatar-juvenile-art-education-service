define({ "api": [
  {
    "type": "get",
    "url": "/api/logout",
    "title": "09. 退出",
    "description": "<p>退出登录状态</p>",
    "group": "01._登录模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/logout"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "GetApiLogout"
  },
  {
    "type": "post",
    "url": "/api/apple_login",
    "title": "05. 苹果登录",
    "description": "<p>通过第三方软件-苹果，进行登录</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "open_id",
            "description": "<p>苹果AppleID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份令牌</p>"
          }
        ],
        "user_info params": [
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>会员所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "qr_code",
            "description": "<p>会员二维码</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>成为条件 1 系统添加 2 完成任务</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "role params": [
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>角色描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/apple_login"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiApple_login"
  },
  {
    "type": "post",
    "url": "/api/bind_code",
    "title": "08. 获取绑定验证码",
    "description": "<p>获取登录手机号的绑定验证码</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户（18201018888）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/bind_code"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiBind_code"
  },
  {
    "type": "post",
    "url": "/api/bind_mobile",
    "title": "07. 绑定手机号码",
    "description": "<p>绑定用的的手机号码</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>登录手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sms_code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/bind_mobile"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiBind_mobile"
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "01. 密码登录",
    "description": "<p>通过账户密码进行登录操作</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户（18201018926）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码（123456）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份令牌</p>"
          }
        ],
        "user_info params": [
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>会员所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "qr_code",
            "description": "<p>会员二维码</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>成为条件 1 系统添加 2 完成任务</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "role params": [
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>角色描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/login"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiLogin"
  },
  {
    "type": "post",
    "url": "/api/register",
    "title": "06. 用户注册",
    "description": "<p>注册用户信息</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/register"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiRegister"
  },
  {
    "type": "post",
    "url": "/api/sms_code",
    "title": "03. 登录验证码",
    "description": "<p>获取短信登录验证码</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户（18201018926）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/sms_code"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiSms_code"
  },
  {
    "type": "post",
    "url": "/api/sms_login",
    "title": "02. 短信登录",
    "description": "<p>短信登录</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户（18201018926）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sms_code",
            "description": "<p>短信验证码（7777）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份令牌</p>"
          }
        ],
        "user_info params": [
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>会员所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "qr_code",
            "description": "<p>会员二维码</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>成为条件 1 系统添加 2 完成任务</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "role params": [
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>角色描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/sms_login"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiSms_login"
  },
  {
    "type": "post",
    "url": "/api/weixin_login",
    "title": "04. 微信登录",
    "description": "<p>通过第三方软件-微信，进行登录</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "open_id",
            "description": "<p>微信OpenID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份令牌</p>"
          }
        ],
        "user_info params": [
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>会员所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "qr_code",
            "description": "<p>会员二维码</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "user_info params",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>成为条件 1 系统添加 2 完成任务</p>"
          },
          {
            "group": "user_info params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "role params": [
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>角色描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/weixin_login"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiWeixin_login"
  },
  {
    "type": "get",
    "url": "/api/system/kernel",
    "title": "01. 获取系统信息",
    "description": "<p>获取系统配置内容信息</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "Fields Explain": [
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "web_chinese_name",
            "description": "<p>网站中文名称</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "web_english_name",
            "description": "<p>网站英文名字</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "web_url",
            "description": "<p>站点链接</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": "<p>网站关键字</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>网站描述</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>网站logo</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>公司电话</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "copyright",
            "description": "<p>备案号</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "web_status",
            "description": "<p>站点状态</p>"
          },
          {
            "group": "Fields Explain",
            "type": "String",
            "optional": false,
            "field": "web_close_info",
            "description": "<p>站点关闭原因</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/system/kernel"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/SystemController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiSystemKernel"
  },
  {
    "type": "get",
    "url": "/api/type/course",
    "title": "03. 获取课程类型列表",
    "description": "<p>获取课程类型列表</p>",
    "group": "02._公共模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>JWTtoken</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/TypeController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiTypeCourse"
  },
  {
    "type": "post",
    "url": "/api/common/area/list",
    "title": "02. 获取地区列表",
    "description": "<p>获取地区列表</p>",
    "group": "02._公共模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parent_id",
            "description": "<p>上级地区编号（为空：获取省，省编号: 获取市，市编号: 获取县）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/area/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AreaController.php",
    "groupTitle": "02._公共模块",
    "name": "PostApiCommonAreaList"
  },
  {
    "type": "post",
    "url": "/api/file/audio",
    "title": "04. 上传音频(base64)",
    "description": "<p>把音频转换为base64进行上传</p>",
    "group": "03._上传模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>音频数据</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/file/audio"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/FileController.php",
    "groupTitle": "03._上传模块",
    "name": "PostApiFileAudio"
  },
  {
    "type": "post",
    "url": "/api/file/avatar",
    "title": "01. 上传头像(base64)",
    "description": "<p>把头像图片转换为base64进行上传</p>",
    "group": "03._上传模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>头像数据</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/file/avatar"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/FileController.php",
    "groupTitle": "03._上传模块",
    "name": "PostApiFileAvatar"
  },
  {
    "type": "post",
    "url": "/api/file/file",
    "title": "03. 上传文件(base64)",
    "description": "<p>把文件转换为base64进行上传</p>",
    "group": "03._上传模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>文件数据</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/file/file"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/FileController.php",
    "groupTitle": "03._上传模块",
    "name": "PostApiFileFile"
  },
  {
    "type": "post",
    "url": "/api/file/movie",
    "title": "05. 上传视频(base64)",
    "description": "<p>把视频转换为base64进行上传</p>",
    "group": "03._上传模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>视频数据</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/file/movie"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/FileController.php",
    "groupTitle": "03._上传模块",
    "name": "PostApiFileMovie"
  },
  {
    "type": "post",
    "url": "/api/file/picture",
    "title": "02. 上传图片(base64)",
    "description": "<p>把图片转换为base64进行上传</p>",
    "group": "03._上传模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>图片数据</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/file/picture"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/FileController.php",
    "groupTitle": "03._上传模块",
    "name": "PostApiFilePicture"
  },
  {
    "type": "get",
    "url": "/api/member/archive",
    "title": "01. 获取当前会员档案",
    "description": "<p>获取当前会员的档案信息</p>",
    "group": "04._会员模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>会员所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "archive params": [
          {
            "group": "archive params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "archive params",
            "type": "Number",
            "optional": false,
            "field": "skill_level",
            "description": "<p>绘画基础</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "id_card_no",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "weixin",
            "description": "<p>微信号</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          }
        ],
        "asset params": [
          {
            "group": "asset params",
            "type": "String",
            "optional": false,
            "field": "red_envelope",
            "description": "<p>红包金额</p>"
          },
          {
            "group": "asset params",
            "type": "String",
            "optional": false,
            "field": "lollipop",
            "description": "<p>棒棒糖数</p>"
          },
          {
            "group": "asset params",
            "type": "String",
            "optional": false,
            "field": "production",
            "description": "<p>作品数</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/archive"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/MemberController.php",
    "groupTitle": "04._会员模块",
    "name": "GetApiMemberArchive"
  },
  {
    "type": "post",
    "url": "/api/member/handle",
    "title": "02. 编辑会员信息",
    "description": "<p>编辑会员信息</p>",
    "group": "04._会员模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>会员性别（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "birthday",
            "description": "<p>会员生日（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skill_level",
            "description": "<p>绘画基础 0 无基础 1 1年以下 2 1年以上（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "province_id",
            "description": "<p>省（可以为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city_id",
            "description": "<p>市（可以为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "region_id",
            "description": "<p>县（可以为空）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/MemberController.php",
    "groupTitle": "04._会员模块",
    "name": "PostApiMemberHandle"
  },
  {
    "type": "post",
    "url": "/api/member/teacher",
    "title": "03. 成为招聘老师",
    "description": "<p>将满足条件的当前会员的身份变成招聘老师</p>",
    "group": "04._会员模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/member/teacher"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/MemberController.php",
    "groupTitle": "04._会员模块",
    "name": "PostApiMemberTeacher"
  },
  {
    "type": "get",
    "url": "/api/member/lollipop/list?page={page}",
    "title": "01. 会员帮帮糖列表(分页)",
    "description": "<p>获取当前会员的帮帮糖列表(分页)</p>",
    "group": "05._会员棒棒糖模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>棒棒糖类型 1:获取 2:消费</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>棒棒糖编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>棒棒糖类型 1: 获取 2: 消费</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>棒棒糖描述</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>棒棒糖数量</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>获取时间|消费时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/lollipop/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/LollipopController.php",
    "groupTitle": "05._会员棒棒糖模块",
    "name": "GetApiMemberLollipopListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/lollipop/select",
    "title": "02. 会员帮帮糖列表(不分页)",
    "description": "<p>获取当前会员的帮帮糖列表(不分页)</p>",
    "group": "05._会员棒棒糖模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>棒棒糖类型 1:获取 2:消费</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>棒棒糖编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>棒棒糖类型 1: 获取 2: 消费</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>棒棒糖描述</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>棒棒糖数量</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>获取时间|消费时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/lollipop/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/LollipopController.php",
    "groupTitle": "05._会员棒棒糖模块",
    "name": "GetApiMemberLollipopSelect"
  },
  {
    "type": "get",
    "url": "/api/member/money/list?page={page}",
    "title": "01. 会员红包列表(分页)",
    "description": "<p>获取当前会员的红包列表(分页)</p>",
    "group": "06._会员红包模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>红包类型 1:收入 2: 提现</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>红包编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>红包类型 1: 收入 2: 提现</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>红包描述</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "money",
            "description": "<p>红包金额</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>收入时间|提现时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/money/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/MoneyController.php",
    "groupTitle": "06._会员红包模块",
    "name": "GetApiMemberMoneyListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/money/select",
    "title": "02. 会员红包列表(不分页)",
    "description": "<p>获取当前会员的红包列表(不分页)</p>",
    "group": "06._会员红包模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>红包类型 1: 收入 2: 提现</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>红包编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>红包类型 1: 收入 2: 提现</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>红包描述</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "money",
            "description": "<p>红包金额</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>收入时间|提现时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/money/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/MoneyController.php",
    "groupTitle": "06._会员红包模块",
    "name": "GetApiMemberMoneySelect"
  },
  {
    "type": "post",
    "url": "/api/member/money/handle",
    "title": "03. 会员红包提现",
    "description": "<p>提现当前会员的红包金额</p>",
    "group": "06._会员红包模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "money",
            "description": "<p>提现金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "alipay_account",
            "description": "<p>支付宝账户</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "alipay_name",
            "description": "<p>支付宝姓名</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/money/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/MoneyController.php",
    "groupTitle": "06._会员红包模块",
    "name": "PostApiMemberMoneyHandle"
  },
  {
    "type": "get",
    "url": "/api/member/production/list?page={page}",
    "title": "01. 会员作品列表(分页)",
    "description": "<p>获取当前会员作品的列表(分页)</p>",
    "group": "07._会员作品模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "archive_id",
            "description": "<p>学员档案编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>作品名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>作品图片</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "comment_total",
            "description": "<p>评论数</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>课程周期</p>"
          }
        ],
        "courseware params": [
          {
            "group": "courseware params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件名称</p>"
          },
          {
            "group": "courseware params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件描述</p>"
          },
          {
            "group": "courseware params",
            "type": "String",
            "optional": false,
            "field": "is_permanent",
            "description": "<p>课件类型</p>"
          }
        ],
        "level params": [
          {
            "group": "level params",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>课件级别</p>"
          },
          {
            "group": "level params",
            "type": "String",
            "optional": false,
            "field": "minimum_age",
            "description": "<p>最小年龄</p>"
          },
          {
            "group": "level params",
            "type": "String",
            "optional": false,
            "field": "largest_age",
            "description": "<p>最大年龄</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>会员账户</p>"
          }
        ],
        "archive params": [
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>会员年龄</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>会员所在地</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/production/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/ProductionController.php",
    "groupTitle": "07._会员作品模块",
    "name": "GetApiMemberProductionListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/production/select",
    "title": "02. 会员作品列表(不分页)",
    "description": "<p>获取当前会员作品的列表(不分页)</p>",
    "group": "07._会员作品模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "archive_id",
            "description": "<p>学员档案编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>作品名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>作品图片</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "comment_total",
            "description": "<p>评论数</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>课程周期</p>"
          }
        ],
        "courseware params": [
          {
            "group": "courseware params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件名称</p>"
          },
          {
            "group": "courseware params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件描述</p>"
          },
          {
            "group": "courseware params",
            "type": "String",
            "optional": false,
            "field": "is_permanent",
            "description": "<p>课件类型</p>"
          }
        ],
        "level params": [
          {
            "group": "level params",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>课件级别</p>"
          },
          {
            "group": "level params",
            "type": "String",
            "optional": false,
            "field": "minimum_age",
            "description": "<p>最小年龄</p>"
          },
          {
            "group": "level params",
            "type": "String",
            "optional": false,
            "field": "largest_age",
            "description": "<p>最大年龄</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>会员账户</p>"
          }
        ],
        "archive params": [
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>会员年龄</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>会员所在地</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/production/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/ProductionController.php",
    "groupTitle": "07._会员作品模块",
    "name": "GetApiMemberProductionSelect"
  },
  {
    "type": "get",
    "url": "/api/member/production/view/{id}",
    "title": "03. 会员作品详情",
    "description": "<p>获取当前会员作品的详情</p>",
    "group": "07._会员作品模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>作品编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "archive_id",
            "description": "<p>学员档案编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>作品名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>作品图片</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "comment_total",
            "description": "<p>评论数</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>课程周期</p>"
          }
        ],
        "courseware params": [
          {
            "group": "courseware params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件名称</p>"
          },
          {
            "group": "courseware params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件描述</p>"
          },
          {
            "group": "courseware params",
            "type": "String",
            "optional": false,
            "field": "is_permanent",
            "description": "<p>课件类型</p>"
          }
        ],
        "level params": [
          {
            "group": "level params",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>课件级别</p>"
          },
          {
            "group": "level params",
            "type": "String",
            "optional": false,
            "field": "minimum_age",
            "description": "<p>最小年龄</p>"
          },
          {
            "group": "level params",
            "type": "String",
            "optional": false,
            "field": "largest_age",
            "description": "<p>最大年龄</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>会员账户</p>"
          }
        ],
        "archive params": [
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>会员年龄</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>会员所在地</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/production/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/ProductionController.php",
    "groupTitle": "07._会员作品模块",
    "name": "GetApiMemberProductionViewId"
  },
  {
    "type": "post",
    "url": "/api/member/production/handle",
    "title": "04. 上传作品",
    "description": "<p>当前会员上传他的作品</p>",
    "group": "07._会员作品模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>作品图片</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/production/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/ProductionController.php",
    "groupTitle": "07._会员作品模块",
    "name": "PostApiMemberProductionHandle"
  },
  {
    "type": "get",
    "url": "/api/member/address/list?page={page}",
    "title": "01. 会员地址列表(分页)",
    "description": "<p>获取当前会员送货地址列表(分页)</p>",
    "group": "08._会员地址模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员地址编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_default",
            "description": "<p>是否为默认地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/address/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/AddressController.php",
    "groupTitle": "08._会员地址模块",
    "name": "GetApiMemberAddressListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/address/select",
    "title": "02. 会员地址列表(不分页)",
    "description": "<p>获取当前会员送货地址列表(不分页)</p>",
    "group": "08._会员地址模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员地址编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_default",
            "description": "<p>是否为默认地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/address/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/AddressController.php",
    "groupTitle": "08._会员地址模块",
    "name": "GetApiMemberAddressSelect"
  },
  {
    "type": "get",
    "url": "/api/member/address/view/{id}",
    "title": "03. 当前用户笔记详情",
    "description": "<p>获取当前用户笔记详情</p>",
    "group": "08._会员地址模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员地址编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_default",
            "description": "<p>是否为默认地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/address/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/AddressController.php",
    "groupTitle": "08._会员地址模块",
    "name": "GetApiMemberAddressViewId"
  },
  {
    "type": "post",
    "url": "/api/member/address/delete",
    "title": "05. 删除会员地址",
    "description": "<p>删除当前会员的送货地址信息</p>",
    "group": "08._会员地址模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>会员地址编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/address/delete"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/AddressController.php",
    "groupTitle": "08._会员地址模块",
    "name": "PostApiMemberAddressDelete"
  },
  {
    "type": "post",
    "url": "/api/member/address/handle",
    "title": "04. 新建(编辑)会员地址",
    "description": "<p>新建或者编辑当前会员的送货地址信息</p>",
    "group": "08._会员地址模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>会员地址编号（不存在：新增，存在：编辑）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_default",
            "description": "<p>是否为默认地址 0 不是 1 是</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/address/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/AddressController.php",
    "groupTitle": "08._会员地址模块",
    "name": "PostApiMemberAddressHandle"
  },
  {
    "type": "get",
    "url": "/api/member/approval/list?page={page}",
    "title": "01. 会员点赞列表(分页)",
    "description": "<p>获取当前会员点赞列表(分页)</p>",
    "group": "09._会员点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员点赞编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>点赞时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/approval/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/ApprovalController.php",
    "groupTitle": "09._会员点赞模块",
    "name": "GetApiMemberApprovalListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/approval/select",
    "title": "02. 会员点赞列表(不分页)",
    "description": "<p>获取当前会员点赞列表(不分页)</p>",
    "group": "09._会员点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员点赞编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>点赞时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/approval/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/ApprovalController.php",
    "groupTitle": "09._会员点赞模块",
    "name": "GetApiMemberApprovalSelect"
  },
  {
    "type": "get",
    "url": "/api/member/approval/status",
    "title": "03. 作品是否点赞",
    "description": "<p>获取当前会员点赞的详情</p>",
    "group": "09._会员点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/approval/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/ApprovalController.php",
    "groupTitle": "09._会员点赞模块",
    "name": "GetApiMemberApprovalStatus"
  },
  {
    "type": "post",
    "url": "/api/member/approval/handle",
    "title": "04. 点赞操作",
    "description": "<p>当前会员执行点赞操作</p>",
    "group": "09._会员点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>点赞类型 1 点赞 2 取消点赞</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/approval/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/ApprovalController.php",
    "groupTitle": "09._会员点赞模块",
    "name": "PostApiMemberApprovalHandle"
  },
  {
    "type": "get",
    "url": "/api/member/course/list?page={page}",
    "title": "1. 会员课程列表(分页)",
    "description": "<p>获取当前会员订阅的课程列表(分页)</p>",
    "group": "10._会员课程模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>自增编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>管理老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_add",
            "description": "<p>家长微信是否被添加 1 是 2 否</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_time",
            "description": "<p>报名时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态 0 待确认 1 已确认</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "confirm_time",
            "description": "<p>报名确认时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "teacher params": [
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>老师所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>老师头像</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "qr_code",
            "description": "<p>老师二维码</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>老师姓名</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>成为条件 1 系统添加 2 完成任务</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>会员所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课程学期</p>"
          },
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "description",
            "description": "<p>课程描述</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程封面</p>"
          },
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/CourseController.php",
    "groupTitle": "10._会员课程模块",
    "name": "GetApiMemberCourseListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/course/select",
    "title": "2. 会员课程列表(不分页)",
    "description": "<p>获取当前会员订阅的课程列表(不分页)</p>",
    "group": "10._会员课程模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>自增编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>管理老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_add",
            "description": "<p>家长微信是否被添加 1 是 2 否</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_time",
            "description": "<p>报名时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态 0 待确认 1 已确认</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "confirm_time",
            "description": "<p>报名确认时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "teacher params": [
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>老师所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>老师头像</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "qr_code",
            "description": "<p>老师二维码</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>老师姓名</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>成为条件 1 系统添加 2 完成任务</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>会员所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课程学期</p>"
          },
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "description",
            "description": "<p>课程描述</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程封面</p>"
          },
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/CourseController.php",
    "groupTitle": "10._会员课程模块",
    "name": "GetApiMemberCourseSelect"
  },
  {
    "type": "get",
    "url": "/api/member/course/status/{id}",
    "title": "4. 当前课程是否被订阅",
    "description": "<p>获取当前课程是否被当前会员订阅</p>",
    "group": "10._会员课程模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Boolean",
            "optional": false,
            "field": "true",
            "description": "<p>|false 是否订阅</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/status/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/CourseController.php",
    "groupTitle": "10._会员课程模块",
    "name": "GetApiMemberCourseStatusId"
  },
  {
    "type": "get",
    "url": "/api/member/course/view/{id}",
    "title": "3. 当前会员课程详情",
    "description": "<p>获取当前会员课程详情</p>",
    "group": "10._会员课程模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>自增编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>管理老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_add",
            "description": "<p>家长微信是否被添加 1 是 2 否</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_time",
            "description": "<p>报名时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态 0 待确认 1 已确认</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "confirm_time",
            "description": "<p>报名确认时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "teacher params": [
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>老师所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>老师头像</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "qr_code",
            "description": "<p>老师二维码</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>老师姓名</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>成为条件 1 系统添加 2 完成任务</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>会员所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课程学期</p>"
          },
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "description",
            "description": "<p>课程描述</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程封面</p>"
          },
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/CourseController.php",
    "groupTitle": "10._会员课程模块",
    "name": "GetApiMemberCourseViewId"
  },
  {
    "type": "post",
    "url": "/api/member/course/apply",
    "title": "4. 课程报名",
    "description": "<p>当前会员进行课程报名</p>",
    "group": "10._会员课程模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/apply"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/CourseController.php",
    "groupTitle": "10._会员课程模块",
    "name": "PostApiMemberCourseApply"
  },
  {
    "type": "get",
    "url": "/api/member/target/progress",
    "title": "01. 会员任务指标进度",
    "description": "<p>获取当前会员成为招生老师的任务指标进度</p>",
    "group": "11._会员任务指标模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>红包类型 1:收入 2: 提现</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>自增编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_total",
            "description": "<p>购买课程总数</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "invitation_total",
            "description": "<p>邀请他人购买体验课程总数</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "upload_total",
            "description": "<p>上传作品总数</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/target/progress"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/TargetController.php",
    "groupTitle": "11._会员任务指标模块",
    "name": "GetApiMemberTargetProgress"
  },
  {
    "type": "get",
    "url": "/api/member/order/list?page={page}",
    "title": "01. 会员订单列表(分页)",
    "description": "<p>获取当前会员订单列表(分页)</p>",
    "group": "12._会员订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_time",
            "description": "<p>支付时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_status",
            "description": "<p>支付状态 0 待支付 1 已支付</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>订单备注</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态 0 待派发 1 派单中 2 运送中 3 已完成 4 已取消</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>订单创建时间</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课程描述</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程封面</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>会员所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/OrderController.php",
    "groupTitle": "12._会员订单模块",
    "name": "GetApiMemberOrderListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/order/select",
    "title": "02. 会员订单列表(不分页)",
    "description": "<p>获取当前会员订单列表(不分页)</p>",
    "group": "12._会员订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_time",
            "description": "<p>支付时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_status",
            "description": "<p>支付状态 0 待支付 1 已支付</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>订单备注</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态 0 待派发 1 派单中 2 运送中 3 已完成 4 已取消</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>订单创建时间</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课程描述</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程封面</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>会员所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/OrderController.php",
    "groupTitle": "12._会员订单模块",
    "name": "GetApiMemberOrderSelect"
  },
  {
    "type": "get",
    "url": "/api/member/order/view/{id}",
    "title": "03. 会员订单详情",
    "description": "<p>获取当前会员订单的详情</p>",
    "group": "12._会员订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_time",
            "description": "<p>支付时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_status",
            "description": "<p>支付状态 0 待支付 1 已支付</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>订单备注</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态 0 待派发 1 派单中 2 运送中 3 已完成 4 已取消</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>订单创建时间</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课程描述</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程封面</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>会员所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/OrderController.php",
    "groupTitle": "12._会员订单模块",
    "name": "GetApiMemberOrderViewId"
  },
  {
    "type": "post",
    "url": "/api/member/order/cancel",
    "title": "05. 订单取消",
    "description": "<p>当前会员取消订单</p>",
    "group": "12._会员订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/cancel"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/OrderController.php",
    "groupTitle": "12._会员订单模块",
    "name": "PostApiMemberOrderCancel"
  },
  {
    "type": "post",
    "url": "/api/member/order/finish",
    "title": "04. 订单完成",
    "description": "<p>当前会员收到货物后，点击完成订单</p>",
    "group": "12._会员订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/finish"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/OrderController.php",
    "groupTitle": "12._会员订单模块",
    "name": "PostApiMemberOrderFinish"
  },
  {
    "type": "get",
    "url": "/api/member/comment/list?page={page}",
    "title": "01. 会员评论列表(分页)",
    "description": "<p>获取当前会员评论列表(分页)</p>",
    "group": "13._会员评论模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员评论编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "suffix",
            "description": "<p>内容类型 1 文本内容 2 音频内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>评论时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/comment/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/CommentController.php",
    "groupTitle": "13._会员评论模块",
    "name": "GetApiMemberCommentListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/comment/select",
    "title": "02. 会员评论列表(不分页)",
    "description": "<p>获取当前会员评论列表(不分页)</p>",
    "group": "13._会员评论模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员评论编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "suffix",
            "description": "<p>内容类型 1 文本内容 2 音频内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>评论时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/comment/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/CommentController.php",
    "groupTitle": "13._会员评论模块",
    "name": "GetApiMemberCommentSelect"
  },
  {
    "type": "post",
    "url": "/api/member/comment/handle",
    "title": "04. 评论操作",
    "description": "<p>当前会员执行评论操作</p>",
    "group": "13._会员评论模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "suffix",
            "description": "<p>评论内容类型 1 文本内容 2 音频内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/comment/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/CommentController.php",
    "groupTitle": "13._会员评论模块",
    "name": "PostApiMemberCommentHandle"
  },
  {
    "type": "get",
    "url": "/api/teacher/management/archive",
    "title": "01. 当前管理老师档案",
    "description": "<p>获取当前管理老师的档案信息</p>",
    "group": "15._管理老师模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>老师所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>老师头像</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "qr_code",
            "description": "<p>老师二维码</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>老师姓名</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>成为条件 1 系统添加 2 完成任务</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "archive params": [
          {
            "group": "archive params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "id_card_no",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "weixin",
            "description": "<p>微信号</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          }
        ],
        "role params": [
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>角色内容</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/teacher/management/archive"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Teacher/Management/TeacherController.php",
    "groupTitle": "15._管理老师模块",
    "name": "GetApiTeacherManagementArchive"
  },
  {
    "type": "post",
    "url": "/api/teacher/management/handle",
    "title": "02. 编辑管理老师信息",
    "description": "<p>编辑管理老师的信息</p>",
    "group": "15._管理老师模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>会员性别（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id_card_no",
            "description": "<p>身份证号码（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "province_id",
            "description": "<p>省（可以为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city_id",
            "description": "<p>市（可以为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "region_id",
            "description": "<p>县（可以为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "weixin",
            "description": "<p>微信号码（可以为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址（可以为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "qr_code",
            "description": "<p>二维码（可以为空）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/teacher/management/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Teacher/Management/TeacherController.php",
    "groupTitle": "15._管理老师模块",
    "name": "PostApiTeacherManagementHandle"
  },
  {
    "type": "get",
    "url": "/api/teacher/management/course/list?page={page}",
    "title": "01. 课程列表(分页)",
    "description": "<p>获取当前管理老师的课程列表(分页)</p>",
    "group": "16._管理老师课程模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>自增编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>管理老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_add",
            "description": "<p>家长微信是否被添加 1 是 2 否</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_time",
            "description": "<p>报名时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态 0 待确认 1 已确认</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "confirm_time",
            "description": "<p>报名确认时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "teacher params": [
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>老师所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>老师头像</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "qr_code",
            "description": "<p>老师二维码</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>老师姓名</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>成为条件 1 系统添加 2 完成任务</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>会员所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/teacher/management/course/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Teacher/Management/Relevance/CourseController.php",
    "groupTitle": "16._管理老师课程模块",
    "name": "GetApiTeacherManagementCourseListPagePage"
  },
  {
    "type": "get",
    "url": "/api/teacher/management/course/select",
    "title": "02. 课程列表(不分页)",
    "description": "<p>获取当前管理老师的课程列表(不分页)</p>",
    "group": "16._管理老师课程模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>自增编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>管理老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_add",
            "description": "<p>家长微信是否被添加 1 是 2 否</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_time",
            "description": "<p>报名时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态 0 待确认 1 已确认</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "confirm_time",
            "description": "<p>报名确认时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "teacher params": [
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>老师所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>老师头像</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "qr_code",
            "description": "<p>老师二维码</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>老师姓名</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>成为条件 1 系统添加 2 完成任务</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>会员所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/teacher/management/course/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Teacher/Management/Relevance/CourseController.php",
    "groupTitle": "16._管理老师课程模块",
    "name": "GetApiTeacherManagementCourseSelect"
  },
  {
    "type": "get",
    "url": "/api/teacher/management/course/view/{id}",
    "title": "03. 课程详情",
    "description": "<p>获取当前管理老师的课程详情</p>",
    "group": "16._管理老师课程模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>自增编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>管理老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_add",
            "description": "<p>家长微信是否被添加 1 是 2 否</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_time",
            "description": "<p>报名时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态 0 待确认 1 已确认</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "confirm_time",
            "description": "<p>报名确认时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "teacher params": [
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>老师所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>老师头像</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "qr_code",
            "description": "<p>老师二维码</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>老师姓名</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>成为条件 1 系统添加 2 完成任务</p>"
          },
          {
            "group": "teacher params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>会员所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/teacher/management/course/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Teacher/Management/Relevance/CourseController.php",
    "groupTitle": "16._管理老师课程模块",
    "name": "GetApiTeacherManagementCourseViewId"
  },
  {
    "type": "post",
    "url": "/api/teacher/management/course/confirm",
    "title": "04. 确认添加家长微信",
    "description": "<p>当前管理老师确认添加家长微信</p>",
    "group": "16._管理老师课程模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/teacher/management/course/confirm"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Teacher/Management/Relevance/CourseController.php",
    "groupTitle": "16._管理老师课程模块",
    "name": "PostApiTeacherManagementCourseConfirm"
  },
  {
    "type": "get",
    "url": "/api/teacher/recruitment/archive",
    "title": "01. 当前招聘老师档案",
    "description": "<p>获取当前招聘老师的档案信息</p>",
    "group": "17._招聘老师模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>老师所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>老师头像</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "qr_code",
            "description": "<p>老师二维码</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>老师姓名</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>成为条件 1 系统添加 2 完成任务</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "archive params": [
          {
            "group": "archive params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "id_card_no",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "weixin",
            "description": "<p>微信号</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          }
        ],
        "role params": [
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>角色内容</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/teacher/recruitment/archive"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Teacher/Recruitment/TeacherController.php",
    "groupTitle": "17._招聘老师模块",
    "name": "GetApiTeacherRecruitmentArchive"
  },
  {
    "type": "post",
    "url": "/api/teacher/recruitment/handle",
    "title": "02. 编辑招聘老师信息",
    "description": "<p>编辑招聘老师的信息</p>",
    "group": "17._招聘老师模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>会员性别（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id_card_no",
            "description": "<p>身份证号码（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "province_id",
            "description": "<p>省（可以为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city_id",
            "description": "<p>市（可以为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "region_id",
            "description": "<p>县（可以为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "weixin",
            "description": "<p>微信号码（可以为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址（可以为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "qr_code",
            "description": "<p>二维码（可以为空）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/teacher/recruitment/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Teacher/Recruitment/TeacherController.php",
    "groupTitle": "17._招聘老师模块",
    "name": "PostApiTeacherRecruitmentHandle"
  },
  {
    "type": "get",
    "url": "/api/teacher/recruitment/bonus/list",
    "title": "01. 老师分红列表(分页)",
    "description": "<p>获取当前招聘老师的分红列表信息</p>",
    "group": "18._招聘老师分红模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>老师所属机构编号（暂时用不上）</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>老师头像</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "qr_code",
            "description": "<p>老师二维码</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>老师姓名</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>成为条件 1 系统添加 2 完成任务</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "archive params": [
          {
            "group": "archive params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "id_card_no",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "weixin",
            "description": "<p>微信号</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          }
        ],
        "role params": [
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "role params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>角色内容</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/teacher/recruitment/bonus/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Teacher/Recruitment/Relevance/BonusController.php",
    "groupTitle": "18._招聘老师分红模块",
    "name": "GetApiTeacherRecruitmentBonusList"
  },
  {
    "type": "get",
    "url": "/api/teacher/recruitment/bonus/select",
    "title": "02. 老师分红列表(不分页)",
    "description": "<p>获取当前招聘老师的分红列表信息(不分页)</p>",
    "group": "18._招聘老师分红模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员地址编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_default",
            "description": "<p>是否为默认地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/teacher/recruitment/bonus/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Teacher/Recruitment/Relevance/BonusController.php",
    "groupTitle": "18._招聘老师分红模块",
    "name": "GetApiTeacherRecruitmentBonusSelect"
  },
  {
    "type": "get",
    "url": "/api/teacher/recruitment/bonus/view/{id}",
    "title": "03. 老师分红详情",
    "description": "<p>获取当前招聘老师的分红详情信息</p>",
    "group": "18._招聘老师分红模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员地址编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>收货人电话</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_default",
            "description": "<p>是否为默认地址</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/teacher/recruitment/bonus/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Teacher/Recruitment/Relevance/BonusController.php",
    "groupTitle": "18._招聘老师分红模块",
    "name": "GetApiTeacherRecruitmentBonusViewId"
  },
  {
    "type": "get",
    "url": "/api/advertising/position/list?page={page}",
    "title": "1. 获取广告位列表(分页)",
    "description": "<p>获取广告位列表(分页)</p>",
    "group": "20._广告位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>广告位名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "is_open",
            "description": "<p>是否开启 1 开启 2 未开启</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "width",
            "description": "<p>广告位宽度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "height",
            "description": "<p>广告位高度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/position/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Advertising/Relevance/PositionController.php",
    "groupTitle": "20._广告位模块",
    "name": "GetApiAdvertisingPositionListPagePage"
  },
  {
    "type": "get",
    "url": "/api/advertising/position/list?page={page}",
    "title": "1. 获取广告位列表(分页)",
    "description": "<p>获取广告位列表(分页)</p>",
    "group": "20._广告位模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>广告位名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "is_open",
            "description": "<p>是否开启 1 开启 2 未开启</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "width",
            "description": "<p>广告位宽度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "height",
            "description": "<p>广告位高度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/position/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Production/Relevance/ApprovalController.php",
    "groupTitle": "20._广告位模块",
    "name": "GetApiAdvertisingPositionListPagePage"
  },
  {
    "type": "get",
    "url": "/api/advertising/position/select",
    "title": "2. 获取广告位列表(不分页)",
    "description": "<p>获取广告位列表(不分页)</p>",
    "group": "20._广告位模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>广告位名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "is_open",
            "description": "<p>是否开启 1 开启 2 未开启</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "width",
            "description": "<p>广告位宽度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "height",
            "description": "<p>广告位高度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/position/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Advertising/Relevance/PositionController.php",
    "groupTitle": "20._广告位模块",
    "name": "GetApiAdvertisingPositionSelect"
  },
  {
    "type": "get",
    "url": "/api/advertising/position/select",
    "title": "2. 获取广告位列表(不分页)",
    "description": "<p>获取广告位列表(不分页)</p>",
    "group": "20._广告位模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>广告位名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "is_open",
            "description": "<p>是否开启 1 开启 2 未开启</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "width",
            "description": "<p>广告位宽度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "height",
            "description": "<p>广告位高度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/position/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Production/Relevance/ApprovalController.php",
    "groupTitle": "20._广告位模块",
    "name": "GetApiAdvertisingPositionSelect"
  },
  {
    "type": "get",
    "url": "/api/advertising/position/view/{id}",
    "title": "3. 获取广告位详情",
    "description": "<p>获取广告位详情</p>",
    "group": "20._广告位模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>广告位名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "is_open",
            "description": "<p>是否开启 1 开启 2 未开启</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "width",
            "description": "<p>广告位宽度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "height",
            "description": "<p>广告位高度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/position/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Advertising/Relevance/PositionController.php",
    "groupTitle": "20._广告位模块",
    "name": "GetApiAdvertisingPositionViewId"
  },
  {
    "type": "get",
    "url": "/api/advertising/position/view/{id}",
    "title": "3. 获取广告位详情",
    "description": "<p>获取广告位详情</p>",
    "group": "20._广告位模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>广告位名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "is_open",
            "description": "<p>是否开启 1 开启 2 未开启</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "width",
            "description": "<p>广告位宽度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "height",
            "description": "<p>广告位高度</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/position/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Production/Relevance/ApprovalController.php",
    "groupTitle": "20._广告位模块",
    "name": "GetApiAdvertisingPositionViewId"
  },
  {
    "type": "get",
    "url": "/api/advertising/list?page={page}",
    "title": "1. 获取广告列表(分页)",
    "description": "<p>获取广告列表(分页)</p>",
    "group": "21._广告模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>广告位编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "position_id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>广告标题</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>广告图片资源</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>广告其他资源</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>广告链接</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Advertising/AdvertisingController.php",
    "groupTitle": "21._广告模块",
    "name": "GetApiAdvertisingListPagePage"
  },
  {
    "type": "get",
    "url": "/api/advertising/select",
    "title": "2. 获取广告列表(不分页)",
    "description": "<p>获取广告列表(不分页)</p>",
    "group": "21._广告模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>广告位编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "position_id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>广告标题</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>广告图片资源</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>广告其他资源</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>广告链接</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Advertising/AdvertisingController.php",
    "groupTitle": "21._广告模块",
    "name": "GetApiAdvertisingSelect"
  },
  {
    "type": "get",
    "url": "/api/advertising/view/{id}",
    "title": "3. 获取广告详情",
    "description": "<p>获取广告详情</p>",
    "group": "21._广告模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "position_id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>广告标题</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>广告图片资源</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>广告其他资源</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>广告链接</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Advertising/AdvertisingController.php",
    "groupTitle": "21._广告模块",
    "name": "GetApiAdvertisingViewId"
  },
  {
    "type": "get",
    "url": "/api/production/list?page={page}",
    "title": "1. 获取作品列表(分页)",
    "description": "<p>获取作品列表(分页)</p>",
    "group": "22._作品模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "archive_id",
            "description": "<p>学员档案编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>作品名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>作品图片</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "comment_total",
            "description": "<p>评论数</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>会员账户</p>"
          }
        ],
        "archive params": [
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>会员年龄</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>会员所在地</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/production/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Production/ProductionController.php",
    "groupTitle": "22._作品模块",
    "name": "GetApiProductionListPagePage"
  },
  {
    "type": "get",
    "url": "/api/production/select",
    "title": "2. 获取作品列表(不分页)",
    "description": "<p>获取作品列表(不分页)</p>",
    "group": "22._作品模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "archive_id",
            "description": "<p>学员档案编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>作品名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>作品图片</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "comment_total",
            "description": "<p>评论数</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>会员账户</p>"
          }
        ],
        "archive params": [
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>会员年龄</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>会员所在地</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/production/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Production/ProductionController.php",
    "groupTitle": "22._作品模块",
    "name": "GetApiProductionSelect"
  },
  {
    "type": "get",
    "url": "/api/production/view/{id}",
    "title": "3. 获取作品详情",
    "description": "<p>获取作品详情</p>",
    "group": "22._作品模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "archive_id",
            "description": "<p>学员档案编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>作品名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>作品图片</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "comment_total",
            "description": "<p>评论数</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>会员账户</p>"
          }
        ],
        "archive params": [
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>会员年龄</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>会员所在地</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/production/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Production/ProductionController.php",
    "groupTitle": "22._作品模块",
    "name": "GetApiProductionViewId"
  },
  {
    "type": "get",
    "url": "/api/production/comment/list?page={page}",
    "title": "1. 作品评论位列表(分页)",
    "description": "<p>获取作品评论位列表(分页)</p>",
    "group": "23._作品评论模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>作品评论位编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "suffix",
            "description": "<p>作品评论类型 1 文本内容 2 音频内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>评论时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/production/comment/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Production/Relevance/CommentController.php",
    "groupTitle": "23._作品评论模块",
    "name": "GetApiProductionCommentListPagePage"
  },
  {
    "type": "get",
    "url": "/api/production/comment/select",
    "title": "2. 作品评论位列表(不分页)",
    "description": "<p>获取作品评论位列表(不分页)</p>",
    "group": "23._作品评论模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>作品评论位编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "suffix",
            "description": "<p>作品评论类型 1 文本内容 2 音频内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>评论时间</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/production/comment/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Production/Relevance/CommentController.php",
    "groupTitle": "23._作品评论模块",
    "name": "GetApiProductionCommentSelect"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/list?page={page}",
    "title": "1. 获取课件列表(分页)",
    "description": "<p>获取课件列表(分页)</p>",
    "group": "24._课件模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "present_id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_id",
            "description": "<p>解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>优惠说明</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_start_time",
            "description": "<p>报名开始时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_end_time",
            "description": "<p>报名结束时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_start_time",
            "description": "<p>开课时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "line_price",
            "description": "<p>划线价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "real_price",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课件周期</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态</p>"
          }
        ],
        "present params": [
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>礼包描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/courseware/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/CoursewareController.php",
    "groupTitle": "24._课件模块",
    "name": "GetApiEducationCoursewareListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/select",
    "title": "2. 获取课件列表(不分页)",
    "description": "<p>获取课件列表(不分页)</p>",
    "group": "24._课件模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "present_id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_id",
            "description": "<p>解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>优惠说明</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_start_time",
            "description": "<p>报名开始时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_end_time",
            "description": "<p>报名结束时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_start_time",
            "description": "<p>开课时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "line_price",
            "description": "<p>划线价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "real_price",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课件周期</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态</p>"
          }
        ],
        "present params": [
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>礼包描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/CoursewareController.php",
    "groupTitle": "24._课件模块",
    "name": "GetApiEducationCoursewareSelect"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/view/{id}",
    "title": "3. 获取课件详情",
    "description": "<p>获取课件详情</p>",
    "group": "24._课件模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "present_id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_id",
            "description": "<p>解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>优惠说明</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_start_time",
            "description": "<p>报名开始时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_end_time",
            "description": "<p>报名结束时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_start_time",
            "description": "<p>开课时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "line_price",
            "description": "<p>划线价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "real_price",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课件周期</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态</p>"
          }
        ],
        "detail params": [
          {
            "group": "detail params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>课件详情编号</p>"
          },
          {
            "group": "detail params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>课件内容</p>"
          },
          {
            "group": "detail params",
            "type": "String",
            "optional": false,
            "field": "plan",
            "description": "<p>课件安排</p>"
          }
        ],
        "present params": [
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>礼包描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/CoursewareController.php",
    "groupTitle": "24._课件模块",
    "name": "GetApiEducationCoursewareViewId"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/list?page={page}",
    "title": "1. 课件级别列表(分页)",
    "description": "<p>获取课件级别列表(分页)</p>",
    "group": "25._课件级别模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "minimum_age",
            "description": "<p>最小年龄</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "largest_age",
            "description": "<p>最大年龄</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>课件级别信息</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件级别描述</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/level/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/LevelController.php",
    "groupTitle": "25._课件级别模块",
    "name": "GetApiEducationCoursewareLevelListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/select",
    "title": "2. 课件级别列表(不分页)",
    "description": "<p>获取课件级别列表(不分页)</p>",
    "group": "25._课件级别模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "minimum_age",
            "description": "<p>最小年龄</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "largest_age",
            "description": "<p>最大年龄</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>课件级别信息</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件级别描述</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/level/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/LevelController.php",
    "groupTitle": "25._课件级别模块",
    "name": "GetApiEducationCoursewareLevelSelect"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/view/{id}",
    "title": "3. 课件级别详情",
    "description": "<p>获取课件级别详情</p>",
    "group": "25._课件级别模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "minimum_age",
            "description": "<p>最小年龄</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "largest_age",
            "description": "<p>最大年龄</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>课件级别信息</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件级别描述</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/level/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/LevelController.php",
    "groupTitle": "25._课件级别模块",
    "name": "GetApiEducationCoursewareLevelViewId"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/unit/list?page={page}",
    "title": "1. 课件单元列表(分页)",
    "description": "<p>获取课件单元列表(分页)</p>",
    "group": "26._课件单元模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件单元描述</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/level/unit/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/Relevance/UnitController.php",
    "groupTitle": "26._课件单元模块",
    "name": "GetApiEducationCoursewareLevelUnitListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/unit/select",
    "title": "2. 课件单元列表(不分页)",
    "description": "<p>获取课件单元列表(不分页)</p>",
    "group": "26._课件单元模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件单元描述</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/level/unit/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/Relevance/UnitController.php",
    "groupTitle": "26._课件单元模块",
    "name": "GetApiEducationCoursewareLevelUnitSelect"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/unit/view/{id}",
    "title": "3. 课件单元详情",
    "description": "<p>获取课件详情</p>",
    "group": "26._课件单元模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件单元描述</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/level/unit/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/Relevance/UnitController.php",
    "groupTitle": "26._课件单元模块",
    "name": "GetApiEducationCoursewareLevelUnitViewId"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/unit/point/list?page={page}",
    "title": "1. 课件知识点列表(分页)",
    "description": "<p>获取课件知识点列表(分页)</p>",
    "group": "27._课件知识点模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件知识点名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课件知识点封面</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课件知识点视频</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/level/unit/point/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/Relevance/Relevance/PointController.php",
    "groupTitle": "27._课件知识点模块",
    "name": "GetApiEducationCoursewareLevelUnitPointListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/unit/point/select",
    "title": "2. 课件知识点列表(不分页)",
    "description": "<p>获取课件知识点列表(不分页)</p>",
    "group": "27._课件知识点模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件知识点名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课件知识点封面</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课件知识点视频</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/level/unit/point/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/Relevance/Relevance/PointController.php",
    "groupTitle": "27._课件知识点模块",
    "name": "GetApiEducationCoursewareLevelUnitPointSelect"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/unit/point/view/{id}",
    "title": "3. 课件知识点详情",
    "description": "<p>获取课件知识点详情</p>",
    "group": "27._课件知识点模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件知识点名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课件知识点封面</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课件知识点视频</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/level/unit/point/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/Relevance/Relevance/PointController.php",
    "groupTitle": "27._课件知识点模块",
    "name": "GetApiEducationCoursewareLevelUnitPointViewId"
  },
  {
    "type": "get",
    "url": "/api/education/course/list?page={page}",
    "title": "1. 获取课程列表(分页)",
    "description": "<p>获取课程列表(分页)</p>",
    "group": "28._课程模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "present_id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_id",
            "description": "<p>解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>优惠说明</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_start_time",
            "description": "<p>报名开始时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_end_time",
            "description": "<p>报名结束时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_start_time",
            "description": "<p>开课时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "line_price",
            "description": "<p>划线价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "real_price",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课程周期</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态</p>"
          }
        ],
        "present params": [
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>礼包描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/CourseController.php",
    "groupTitle": "28._课程模块",
    "name": "GetApiEducationCourseListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/course/select",
    "title": "2. 获取课程列表(不分页)",
    "description": "<p>获取课程列表(不分页)</p>",
    "group": "28._课程模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "present_id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_id",
            "description": "<p>解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>优惠说明</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_start_time",
            "description": "<p>报名开始时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_end_time",
            "description": "<p>报名结束时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_start_time",
            "description": "<p>开课时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "line_price",
            "description": "<p>划线价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "real_price",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课程周期</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态</p>"
          }
        ],
        "present params": [
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>礼包描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/CourseController.php",
    "groupTitle": "28._课程模块",
    "name": "GetApiEducationCourseSelect"
  },
  {
    "type": "get",
    "url": "/api/education/course/view/{id}",
    "title": "3. 获取课程详情",
    "description": "<p>获取课程详情</p>",
    "group": "28._课程模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "present_id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_id",
            "description": "<p>解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>优惠说明</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_start_time",
            "description": "<p>报名开始时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_end_time",
            "description": "<p>报名结束时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_start_time",
            "description": "<p>开课时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "line_price",
            "description": "<p>划线价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "real_price",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课程周期</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态</p>"
          }
        ],
        "detail params": [
          {
            "group": "detail params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>课程详情编号</p>"
          },
          {
            "group": "detail params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>课程内容</p>"
          },
          {
            "group": "detail params",
            "type": "String",
            "optional": false,
            "field": "plan",
            "description": "<p>课程安排</p>"
          }
        ],
        "present params": [
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>礼包描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/CourseController.php",
    "groupTitle": "28._课程模块",
    "name": "GetApiEducationCourseViewId"
  },
  {
    "type": "get",
    "url": "/api/education/course/teacher/list?page={page}",
    "title": "1. 课程老师列表(分页)",
    "description": "<p>获取课程老师列表(分页)</p>",
    "group": "29._课程老师模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>课程老师名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "teacher params": [
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>老师姓名</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/teacher/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/TeacherController.php",
    "groupTitle": "29._课程老师模块",
    "name": "GetApiEducationCourseTeacherListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/course/teacher/select",
    "title": "2. 课程老师列表(不分页)",
    "description": "<p>获取课程老师列表(不分页)</p>",
    "group": "29._课程老师模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>课程老师名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "teacher params": [
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>老师姓名</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/teacher/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/TeacherController.php",
    "groupTitle": "29._课程老师模块",
    "name": "GetApiEducationCourseTeacherSelect"
  },
  {
    "type": "get",
    "url": "/api/education/course/teacher/view/{id}",
    "title": "3. 课程老师详情",
    "description": "<p>获取课程老师详情</p>",
    "group": "29._课程老师模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>课程老师名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "teacher params": [
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>老师姓名</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/teacher/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/TeacherController.php",
    "groupTitle": "29._课程老师模块",
    "name": "GetApiEducationCourseTeacherViewId"
  },
  {
    "type": "get",
    "url": "/api/education/course/present/list?page={page}",
    "title": "1. 课程礼包列表(分页)",
    "description": "<p>获取课程礼包列表(分页)</p>",
    "group": "30._课程礼包模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程礼包编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件礼包名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件礼包描述</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/present/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/PresentController.php",
    "groupTitle": "30._课程礼包模块",
    "name": "GetApiEducationCoursePresentListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/course/present/select",
    "title": "2. 课程礼包列表(不分页)",
    "description": "<p>获取课程礼包列表(不分页)</p>",
    "group": "30._课程礼包模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程礼包编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件礼包名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件礼包描述</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/present/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/PresentController.php",
    "groupTitle": "30._课程礼包模块",
    "name": "GetApiEducationCoursePresentSelect"
  },
  {
    "type": "get",
    "url": "/api/education/course/present/view/{id}",
    "title": "3. 课程礼包详情",
    "description": "<p>获取课程礼包详情</p>",
    "group": "30._课程礼包模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程礼包编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件礼包名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件礼包描述</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/present/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/PresentController.php",
    "groupTitle": "30._课程礼包模块",
    "name": "GetApiEducationCoursePresentViewId"
  },
  {
    "type": "get",
    "url": "/api/education/course/unlock/list?page={page}",
    "title": "1. 课程解锁列表(分页)",
    "description": "<p>获取课程解锁列表(分页)</p>",
    "group": "31._课程解锁模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件解锁名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "section",
            "description": "<p>课程解锁章节</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>课程解锁时长</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>课程名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/unlock/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/UnlockController.php",
    "groupTitle": "31._课程解锁模块",
    "name": "GetApiEducationCourseUnlockListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/course/unlock/select",
    "title": "2. 课程解锁列表(不分页)",
    "description": "<p>获取课程解锁列表(不分页)</p>",
    "group": "31._课程解锁模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件解锁名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "section",
            "description": "<p>课程解锁章节</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>课程解锁时长</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>课程名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/unlock/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/UnlockController.php",
    "groupTitle": "31._课程解锁模块",
    "name": "GetApiEducationCourseUnlockSelect"
  },
  {
    "type": "get",
    "url": "/api/education/course/unlock/view/{id}",
    "title": "3. 课程解锁详情",
    "description": "<p>获取课程解锁详情</p>",
    "group": "31._课程解锁模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件解锁名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "section",
            "description": "<p>课程解锁章节</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>课程解锁时长</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>课程名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/unlock/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/UnlockController.php",
    "groupTitle": "31._课程解锁模块",
    "name": "GetApiEducationCourseUnlockViewId"
  },
  {
    "type": "get",
    "url": "/api/template/list?page={page}",
    "title": "1. 获取模板列表(分页)",
    "description": "<p>获取模板列表(分页)</p>",
    "group": "35._模板模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>模板编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>模板名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>模板图片</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>模板排序</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/template/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Template/TemplateController.php",
    "groupTitle": "35._模板模块",
    "name": "GetApiTemplateListPagePage"
  },
  {
    "type": "get",
    "url": "/api/template/select",
    "title": "2. 获取模板列表(不分页)",
    "description": "<p>获取模板列表(不分页)</p>",
    "group": "35._模板模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>模板编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>模板名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>模板图片</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>模板排序</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/template/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Template/TemplateController.php",
    "groupTitle": "35._模板模块",
    "name": "GetApiTemplateSelect"
  },
  {
    "type": "get",
    "url": "/api/template/view/{id}",
    "title": "3. 获取模板详情",
    "description": "<p>获取模板详情</p>",
    "group": "35._模板模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>模板编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>模板名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>模板图片</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>模板排序</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/template/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Template/TemplateController.php",
    "groupTitle": "35._模板模块",
    "name": "GetApiTemplateViewId"
  },
  {
    "type": "post",
    "url": "/api/code/code",
    "title": "999. 系统状态值说明",
    "description": "<p>系统全局状态值说明</p>",
    "group": "状态值模块",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "200",
            "description": "<p>成功</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "1000",
            "description": "<p>未知错误</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "1001",
            "description": "<p>没有权限</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "1002",
            "description": "<p>删除成功</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "1003",
            "description": "<p>删除失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "1004",
            "description": "<p>操作成功</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "1005",
            "description": "<p>操作失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "1006",
            "description": "<p>您请求太频繁了，请休息一会</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "1007",
            "description": "<p>清除失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "2000",
            "description": "<p>服务器错误</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "2001",
            "description": "<p>用户不存在</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "2002",
            "description": "<p>用户无权限</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "2003",
            "description": "<p>请输入正确密码</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "2004",
            "description": "<p>输错密码次数太多，请一小时后再试！</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "2005",
            "description": "<p>会员不存在</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "2006",
            "description": "<p>会员已失效</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "2007",
            "description": "<p>验证码错误</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-100",
            "description": "<p>请先登录</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-101",
            "description": "<p>Token丢失</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-102",
            "description": "<p>请从新登录</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "-103",
            "description": "<p>非法账户，无法解析</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/System/CodeController.php",
    "groupTitle": "状态值模块",
    "name": "PostApiCodeCode"
  }
] });
