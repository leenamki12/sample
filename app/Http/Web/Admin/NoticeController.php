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
use Illuminate\Support\Facades\Request;
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

    public function create(Request $request, NoticeQueryAction $action)
    {
        // $response = $action->handle($request->filters());
        return Inertia::render('admin/notice/create/NoticeCreate');
    }

    public function index(NoticeQueryReq $request, NoticeQueryAction $action)
    {
        // $response = $action->handle($request->filters());
        return Inertia::render('admin/notice/NoticeList');
    }

    public function destroy(int $id, DeleteAction $action)
    {
        $action->handle($id);
        return Inertia::render('admin/notice/NoticeList');
    }

    public function upload(UploadReq $request, FileUploadAction $action)
    {
        $action->handleRequest($request);
        return response()->json(['result' => 'ok']);
    }
}
