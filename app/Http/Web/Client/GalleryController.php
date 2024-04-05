<?php

namespace App\Http\Web\Client;

use App\Domains\Board\Actions\GalleryQueryAction;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index(GalleryQueryAction $action) {
        $response = $action->handle(100);
        return Inertia::render('gallery/Home', ['galleries' => $response]);
    }
}
