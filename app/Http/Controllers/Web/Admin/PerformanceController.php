<?php

namespace App\Http\Controllers\Web\Admin;

use App\Domains\Admin\Performance\Actions\PerformanceCreateAction;
use App\Domains\Admin\Performance\Actions\PerformanceDeleteAction;
use App\Domains\Admin\Performance\Actions\PerformanceFindAction;
use App\Domains\Admin\Performance\Actions\PerformanceQueryAction;
use App\Domains\Admin\Performance\Actions\PerformanceStoreAction;
use App\Domains\Admin\Performance\Actions\PerformanceUpdateAction;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Web\Admin\Requests\PerformanceRequest;
use App\Http\Controllers\Web\Admin\Requests\PerformanceUpdateRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PerformanceController extends Controller
{
    private $baseUrl = 'admin/pages/performance';

    public function index(PerformanceQueryAction $action)
    {
        $arrayData = $action->handle();

        return Inertia::render($this->baseUrl.'/PerformanceList', $arrayData);
    }

    public function create(PerformanceCreateAction $action): Response
    {

        $arrayData = $action->handle();

        return Inertia::render($this->baseUrl.'/create/PerformanceCreate', $arrayData);
    }

    public function store(PerformanceRequest $request, PerformanceStoreAction $action)
    {

        $action->handle($request);

        return redirect()->route('admin.performance');
    }

    public function edit(PerformanceFindAction $action, int $id)
    {
        $arrayData = $action->handle($id);

        return Inertia::render($this->baseUrl.'/edit/PerformanceEdit', $arrayData);
    }

    public function update(PerformanceUpdateRequest $request, PerformanceUpdateAction $action, int $id)
    {

        $action->handle($request, $id);

        return redirect()->route('admin.performance');
    }

    public function destroy(Request $request, PerformanceDeleteAction $action)
    {
        $ids = $request->input('ids');

        $action->handle($ids);

        return redirect()->route('admin.performance');
    }
}
