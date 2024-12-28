<?php
namespace App\Listeners\Api\Member\Study;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use App\Events\Api\Member\Study\ProgressEvent;
use App\Models\Api\Module\Organization\Squad\Squad;
use App\Models\Api\Module\Member\Study\Progress\Course;
use App\Models\Api\Module\Member\Study\Progress\Unit;
use App\Models\Api\Module\Member\Study\Progress\Point;

class ProgressListeners
{
  /**
   * Create the event listener.
   *
   * @return void
   */
  public function __construct()
  {

  }

  /**
   * Handle the event.
   *
   * @param  ProgressEvent  $event
   * @return void
   */
  public function handle(ProgressEvent $event)
  {
    try
    {
      $squad_id = $event->squad_id;

      $relevance = [
        'member',
        'course'
      ];

      $condition = ['id' => $squad_id];

      $model = Squad::getRow($condition, $relevance);

      if(empty($model->course) && empty($model->member))
      {
        throw \Exception('课程与学员信息错误');
      }

      $model->courseProgress()->delete();
      $model->pointProgress()->delete();
      $model->unitProgress()->delete();

      // ------------------------------------------------
      // 课程学习进度初始化

      foreach($model->course as $course)
      {
        foreach($model->member as $key => $item)
        {
          $data[$key]['organization_id'] = $item->organization_id;
          $data[$key]['member_id']       = $item->id;
          $data[$key]['squad_id']        = $squad_id;
          $data[$key]['course_id']       = $course->id;
          $data[$key]['courseware_time'] = $course->time_length;

          $memberCourse[$key]['organization_id'] = $item->organization_id;
          $memberCourse[$key]['member_id']       = $item->id;
          $memberCourse[$key]['squad_id']        = $squad_id;
          $memberCourse[$key]['course_id']       = $course->id;
          $memberCourse[$key]['course_time']     = $course->time_length;
        }

        $model->courseProgress()->createMany($data);

        $model->memberCourse()->createMany($memberCourse);

        // ------------------------------------------------
        // 课程知识点学习进度初始化

        $data = [];

        if(count($course->point) == 0)
        {
          continue;
        }

        foreach($course->point as $point)
        {
          foreach($model->member as $key => $item)
          {
            $data[$key]['organization_id'] = $item->organization_id;
            $data[$key]['squad_id']        = $squad_id;
            $data[$key]['member_id']       = $item->id;
            $data[$key]['course_id']       = $course->id;
            $data[$key]['unit_id']         = $point->unit_id;
            $data[$key]['point_id']        = $point->id;
            $data[$key]['courseware_time'] = $point->time_length;
          }

          $model->pointProgress()->createMany($data);
        }


        // ------------------------------------------------
        // 课程单元学习进度初始化

        $data = [];

        if(count($course->unit) == 0)
        {
          continue;
        }

        foreach($course->unit as $unit)
        {
          foreach($model->member as $key => $item)
          {
            $data[$key]['organization_id'] = $item->organization_id;
            $data[$key]['squad_id']        = $squad_id;
            $data[$key]['member_id']       = $item->id;
            $data[$key]['course_id']       = $course->id;
            $data[$key]['parent_id']       = $unit->parent_id;
            $data[$key]['unit_id']         = $unit->id;
            $data[$key]['courseware_time'] = $unit->time_length;
          }

          $model->unitProgress()->createMany($data);
        }
      }

    }
    catch(\Exception $e)
    {
      \Log::error($e->getMessage());
    }
  }
}
