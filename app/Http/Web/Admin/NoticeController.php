<?php

namespace App\Http\Web\Admin;

use App\Domains\Board\Actions\DeleteAction;
use App\Domains\Board\Actions\FileUploadAction;
use App\Domains\Board\Actions\NoticeCreateAction;
use App\Domains\Board\Actions\NoticeFindAction;
use App\Domains\Board\Actions\NoticeQueryAction;
use App\Domains\Board\Actions\NoticeUpdateAction;
use App\Domains\Board\Requests\NoticeReq;
use App\Domains\Board\Requests\NoticeQueryReq;
use App\Domains\Board\Requests\UploadReq;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class NoticeController extends Controller
{
    public function store(NoticeReq $request, NoticeCreateAction $action)
    {
        $action->handleRequest($request);
        return Inertia::render('admin/notice/NoticeList');
    }

    public function update(NoticeReq $request, int $id, NoticeUpdateAction $action)
    {
        $action->handleRequest($request, $id);
        return Inertia::render('admin/notice/NoticeList');
    }

    public function show(int $id, NoticeFindAction $action)
    {
        return $action->handle($id);
    }

    public function create()
    {
        return Inertia::render('admin/notice/create/NoticeCreate');
    }

    public function index(NoticeQueryReq $request, NoticeQueryAction $action)
    {
        $response = $action->handle($request->toArray());
        return Inertia::render('admin/notice/NoticeList', ['notices' => $response]);
    }

    public function search(NoticeQueryReq $request, NoticeQueryAction $action)
    {
        return $action->handle($request->toArray());
    }

    public function destroy(int $id, DeleteAction $action)
    {
        $action->handle($id);
        return Inertia::render('admin/notice/NoticeList');
    }

    public function upload(UploadReq $request, FileUploadAction $action)
    {
        return $action->handleRequest($request);
    }
}
