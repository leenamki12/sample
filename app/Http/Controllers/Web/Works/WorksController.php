<?php

namespace App\Http\Controllers\Web\Works;

use App\Domains\Works\Actions\WorksLoadAction;
use App\Domains\Works\Actions\WorksQueryAction;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class WorksController extends Controller
{
    private $perPage = 12;

    public function index(WorksQueryAction $action)
    {
        $arrayData = $action->handle($this->perPage);

        return Inertia::render('works/pages/Works', $arrayData);
    }

    public function load(WorksLoadAction $action)
    {
        $arrayData = $action->handle($this->perPage);

        return $arrayData;
    }
}
