<?php

namespace App\Http\Web\Client;

use App\Domains\Board\Actions\HomeQueryAction;
use App\Domains\Board\Actions\FaqQueryAction;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(HomeQueryAction $action) {
        $arrayData = $action->handle();
        return Inertia::render('home/Home', $arrayData);
    }


    public function search(FaqQueryAction $action)
    {
        return response()->json($action->handle());
    }
}