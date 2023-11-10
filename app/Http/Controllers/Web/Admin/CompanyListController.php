<?php

namespace App\Http\Controllers\Web\Admin;

use App\Domains\Company\Company;
use App\DTOs\Company\CompanyDTO;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyListController extends Controller
{
    public function index()
    {

        $companies = Company::query()->orderBy('id', 'desc')->paginate(10);
        $collection = CompanyDTO::collection($companies);

        return Inertia::render('admin/pages/company/list/List', [
            'companies' => $collection,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(string $id)
    {
        //
    }

    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}