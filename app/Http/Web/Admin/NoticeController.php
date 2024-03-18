<?php

namespace App\Http\Web\Admin;

use App\Domains\Board\Actions\DeleteAction;
use App\Domains\Board\Actions\FileUploadAction;
use App\Domains\Board\Actions\MultipleDeleteAction;
use App\Domains\Board\Actions\NoticeCreateAction;
use App\Domains\Board\Actions\NoticeFindAction;
use App\Domains\Board\Actions\NoticeQueryAction;
use App\Domains\Board\Actions\NoticeUpdateAction;
use App\Domains\Board\Requests\DeleteReq;
use App\Domains\Board\Requests\NoticeReq;
use App\Domains\Board\Requests\UploadReq;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class NoticeController extends Controller
{
    public function store(NoticeReq $request, NoticeCreateAction $action)
    {
        $action->handleRequest($request);
        return redirect()->route('admin.notice.index');
    }

    public function update(NoticeReq $request, int $id, NoticeUpdateAction $action)
    {
        $action->handleRequest($request, $id);
        return redirect()->route('admin.notice.index');
    }

    public function show(int $id, NoticeFindAction $action)
    {
        return Inertia::render('admin/notice/edit/NoticeEdit', ['notice' => $action->handle($id)]);
    }

    public function create()
    {
        return Inertia::render('admin/notice/create/NoticeCreate');
    }

    public function index(NoticeQueryAction $action)
    {
        $response = $action->handle();
        return Inertia::render('admin/notice/NoticeList', ['notices' => $response]);
    }

    public function search(NoticeQueryAction $action)
    {
        return $action->handle();
    }

    public function destroy(int $id, DeleteAction $action)
    {
        $action->handle($id);
        return redirect()->route('admin.notice.index');
    }

    public function delete(DeleteReq $request, MultipleDeleteAction $action)
    {
        $action->handleRequest($request);
    }

    public function upload(UploadReq $request, FileUploadAction $action)
    {
        return $action->handleRequest($request);
    }
}