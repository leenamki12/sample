<?php

namespace App\Http\Web\Client;

use App\Domains\Board\Actions\NoticeQueryAction;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class NoticeController extends Controller
{
    public function index(NoticeQueryAction $action) {
        $response = $action->handle(100);
        return Inertia::render('notice/Home', ['notices' => $response]);
    }
}
