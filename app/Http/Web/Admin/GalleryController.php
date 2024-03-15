<?php

namespace App\Http\Web\Admin;

use App\Domains\Board\Actions\DeleteAction;
use App\Domains\Board\Actions\FileUploadAction;
use App\Domains\Board\Actions\MultipleDeleteAction;
use App\Domains\Board\Actions\GalleryCreateAction;
use App\Domains\Board\Actions\GalleryFindAction;
use App\Domains\Board\Actions\GalleryQueryAction;
use App\Domains\Board\Actions\GalleryUpdateAction;
use App\Domains\Board\Requests\DeleteReq;
use App\Domains\Board\Requests\GalleryReq;
use App\Domains\Board\Requests\UploadReq;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function store(GalleryReq $request, GalleryCreateAction $action)
    {
        $action->handleRequest($request);
        return redirect()->route('admin.gallery.index');
    }

    public function update(GalleryReq $request, int $id, GalleryUpdateAction $action)
    {
        $action->handleRequest($request, $id);
        return redirect()->route('admin.gallery.index');
    }

    public function show(int $id, GalleryFindAction $action)
    {
        return Inertia::render('admin/gallery/edit/GalleryEdit', ['gallery' => $action->handle($id)]);
    }

    public function create()
    {
        return Inertia::render('admin/gallery/create/GalleryCreate');
    }

    public function index(GalleryQueryAction $action)
    {
        $response = $action->handle();
        return Inertia::render('admin/gallery/GalleryList', ['galleries' => $response]);
    }

    public function search(GalleryQueryAction $action)
    {
        return $action->handle();
    }

    public function destroy(int $id, DeleteAction $action)
    {
        $action->handle($id);
        return redirect()->route('admin.gallery.index');
    }

    public function delete(DeleteReq $request, MultipleDeleteAction $action)
    {
        $action->handleRequest($request);
        return ['result' => 'ok'];
    }

    public function upload(UploadReq $request, FileUploadAction $action)
    {
        return $action->handleRequest($request);
    }
}
