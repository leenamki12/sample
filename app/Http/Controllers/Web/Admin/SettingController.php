<?php

namespace App\Http\Controllers\Web\Admin;

use App\Domains\Admin\WorkType\Actions\WorkTypeQueryAction;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index(WorkTypeQueryAction $action)
    {
        // $arrayData = $action->handle();

        return Inertia::render('admin/pages/setting/Setting');
    }
}
