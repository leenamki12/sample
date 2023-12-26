<?php

namespace App\Http\Controllers\Web\Admin;

use App\Domains\Admin\Part\Part;
use App\Domains\Admin\Performance\Performance;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class PerformanceController extends Controller
{
    public function index()
    {
        $Performances = Performance::orderBy('id', 'desc')->paginate(24);

        $Performances->each(function ($Performance, $key) use ($Performances) {
            $Performance->parts = $Performance->parts;
            $Performance->row_number = ($Performances->total() + 1) - ($key + 1) - (($Performances->currentPage() - 1) * $Performances->perPage());
        });

        return Inertia::render('admin/pages/performance/PerformanceList', [
            'performances' => $Performances
        ]);
    }

    public function create(): Response
    {

        $parts = Part::orderBy('id', 'asc')->get();

        return Inertia::render('admin/pages/performance/create/PerformanceCreate', [
            'categories' => ['parts' => $parts]
        ]);
    }
}