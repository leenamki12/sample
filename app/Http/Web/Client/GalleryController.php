<?php

namespace App\Http\Web\Client;

use App\Domains\Board\Models\Board;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function handle($paginate = true)
    {
        $requestData = request(['category', 'year']);
        $category =  isset($requestData['category']) ? $requestData['category'] : 'photo';
        $year =  ($category === 'photo' && !isset($requestData['year'])) ? 2024 : ($requestData['year'] ?? null);

        $boards = Board::with(['gallery', 'file'])
            ->whereHas('gallery', function ($query) use ($category, $year) {
                $query->where('category', $category);
                if ($year !== null) {
                    $query->where('year', $year);
                }
            })
            ->whereHas('file')
            ->where('is_published', true)
            ->orderBy('id', 'desc');

        if ($paginate) {
            return $boards->paginate(12);
        }

        return $boards->get();
    }

    public function index()
    {
        $boards = $this->handle();
        return Inertia::render('gallery/Home', ['galleries' => $boards]);
    }

    public function load()
    {
        $boards = $this->handle();
        return response()->json($boards);
    }
}