<?php

namespace App\Http\Web\Admin;

use App\Domains\Board\Actions\DeleteAction;
use App\Domains\Board\Requests\DeleteReq;
use App\Domains\Board\Actions\MultipleDeleteAction;
use App\Domains\Board\Actions\FaqCreateAction;
use App\Domains\Board\Actions\FaqFindAction;
use App\Domains\Board\Actions\FaqQueryAction;
use App\Domains\Board\Actions\FaqUpdateAction;
use App\Domains\Board\Requests\FaqReq;
use App\Domains\Board\Requests\FaqQueryReq;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class FaqController extends Controller
{
    public function store(FaqReq $request, FaqCreateAction $action)
    {
        $action->handleRequest($request);
        return redirect()->route('admin.faq.index');
    }

    public function update(FaqReq $request, int $id, FaqUpdateAction $action)
    {
        $action->handleRequest($request, $id);
        return redirect()->route('admin.faq.index');
    }

    public function show(int $id, FaqFindAction $action)
    {
        return Inertia::render('admin/faq/edit/FaqEdit', ['faq' => $action->handle($id)]);
    }

    public function create()
    {
        return Inertia::render('admin/faq/create/FaqCreate');
    }

    public function index(FaqQueryAction $action)
    {
        $response = $action->handle();
        return Inertia::render('admin/faq/FaqList', ['faqs' => $response]);
    }

    public function search(FaqQueryAction $action)
    {
        return $action->handle();
    }

    public function destroy(int $id, DeleteAction $action)
    {
        $action->handle($id);
        return redirect()->route('admin.faq.index');
    }

    public function delete(DeleteReq $request, MultipleDeleteAction $action)
    {
        $action->handleRequest($request);
        return ['result' => 'ok'];
    }
}