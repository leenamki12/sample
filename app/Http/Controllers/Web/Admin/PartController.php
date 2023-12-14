<?php

namespace App\Http\Controllers\Web\Admin;

use App\Domains\Admin\Part\Part;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\ValidationException;

class PartController extends Controller
{
    public function index()
    {

        $parts = Part::orderBy('id', 'desc')->paginate(24);
        $parts->each(function ($part, $key) use ($parts) {
            $newPart = $part::withCount('performances')->find($part->id);
            $part->use_count = $newPart->performances_count;
            $part->row_number = ($parts->total() + 1) - ($key + 1) - (($parts->currentPage() - 1) * $parts->perPage());
        });

        return Inertia::render('admin/pages/part/PartList', [
            'parts' => $parts
        ]);
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|unique:parts|max:50',
            ]);

            Part::create($validatedData);
        } catch (ValidationException $e) {

            throw $e::withMessages([
                'name' => __('해당 파트는 사용중입니다.'),
            ]);
        }

        return redirect()->route('admin.part');
    }

    public function destroy(Request $request)
    {
        $part = Part::find($request->id);

        if ($part) {
            $part->delete();

            return redirect()->route('admin.part');
        }
    }
}