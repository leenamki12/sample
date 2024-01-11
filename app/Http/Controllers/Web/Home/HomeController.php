<?php

namespace App\Http\Controllers\Web\Home;

use App\Domains\Admin\Performance\Actions\PerformanceQueryAction;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(PerformanceQueryAction $action)
    {
        $arrayData = $action->handle(100);

        return Inertia::render('home/Home', $arrayData);
    }
}