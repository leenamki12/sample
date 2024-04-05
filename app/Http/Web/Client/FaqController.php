<?php

namespace App\Http\Web\Client;

use App\Domains\Board\Actions\FaqQueryAction;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class FaqController extends Controller
{
    public function index(FaqQueryAction $action) {
        $response = $action->handle(100);
        return Inertia::render('faqs/Home', ['faqs' => $response]);
    }
}
