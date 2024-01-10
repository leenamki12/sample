<?php

namespace App\Http\Controllers\Web\Admin;

use App\Domains\Admin\WorkType\Actions\WorkTypeDeleteAction;
use App\Domains\Admin\WorkType\Actions\WorkTypeQueryAction;
use App\Domains\Admin\WorkType\Actions\WorkTypeStoreAction;
use App\Domains\Admin\WorkType\Actions\WorkTypeUpdateAction;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Web\Admin\Requests\WorkTypeRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkTypeController extends Controller
{
    public function index(WorkTypeQueryAction $action)
    {
        $arrayData = $action->handle();

        return Inertia::render('admin/pages/work/WorkList', $arrayData);
    }

    public function store(WorkTypeRequest $request, WorkTypeStoreAction $action)
    {
        $action->handle($request);

        return back();
    }

    public function update(WorkTypeRequest $request, WorkTypeUpdateAction $action, int $id)
    {
        $action->handle($request, $id);

        return back();
    }

    public function destroy(Request $request, WorkTypeDeleteAction $action)
    {
        $action->handle($request->id);

        return back();
    }
}