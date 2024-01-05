<?php

namespace App\Http\Controllers\Web\Admin;

use App\Domains\Admin\PartType\Actions\PartTypeDeleteAction;
use App\Domains\Admin\PartType\Actions\PartTypeQueryAction;
use App\Domains\Admin\PartType\Actions\PartTypeStoreAction;
use App\Domains\Admin\PartType\Actions\PartTypeUpdateAction;
use App\Domains\Admin\PartType\DTOs\PartTypeDTO;
use App\Domains\Admin\PartType\DTOs\PartTypeUpdateDTO;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Web\Admin\Requests\PartTypeRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PartTypeController extends Controller
{
    public function index(PartTypeQueryAction $action)
    {
        $partTypes = $action->handle();

        return Inertia::render('admin/pages/part/PartList', [
            'adminPartTypes' => $partTypes
        ]);
    }

    public function store(PartTypeRequest $request, PartTypeStoreAction $action)
    {

        $partDto = PartTypeDTO::from($request);

        $action->handle($partDto);

        return back();
    }

    public function update(PartTypeRequest $request, PartTypeUpdateAction $action, int $id)
    {
        $partDto = PartTypeUpdateDTO::from($request);

        $action->handle($partDto, $id);

        return back();
    }

    public function destroy(Request $request, PartTypeDeleteAction $action)
    {
        $action->handle($request->id);

        return back();
    }
}