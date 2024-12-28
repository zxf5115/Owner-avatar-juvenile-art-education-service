<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],

        // 热门搜索
        'App\Events\Api\KeywordEvent' => [
            'App\Listeners\Api\KeywordListeners',
        ],

        // 记录用户行为日志
        'App\Events\Platform\UserActionLogEvent' => [
            'App\Listeners\Platform\UserActionLogListeners',
        ],

        // 发送短信
        'App\Events\Common\Message\SmsEvent' => [
            'App\Listeners\Common\Message\SmsListeners',
        ],

        // 发送邮件
        'App\Events\Common\Message\EmailEvent' => [
            'App\Listeners\Common\Message\EmailListeners',
        ],

        // 添加学习进度记录
        'App\Events\Api\Member\Study\ProgressEvent' => [
            'App\Listeners\Api\Member\Study\ProgressListeners',
        ],


        // 微信登录
        \SocialiteProviders\Manager\SocialiteWasCalled::class => [
            'SocialiteProviders\Weixin\WeixinExtendSocialite@handle',
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
