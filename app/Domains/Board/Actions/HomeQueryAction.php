<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Models\Board;

class HomeQueryAction
{
    public function handle()
    {

        $category = 'TICKET';

        $faqs = Board::with('faq')
            ->whereHas('faq', function ($query) use ($category) {
                $query->where('category', $category);
            })
            ->whereHas('main')
            ->orderBy('id', 'desc')
            ->get();

        $notices = Board::with('notice')
            ->whereHas('notice')
            ->whereHas('main')
            ->orderBy('id', 'desc')
            ->get();


        $galleries = Board::with('gallery','file')
            ->whereHas('gallery')
            ->whereHas('main')
            ->whereHas('file')
            ->orderBy('id', 'desc')
            ->get();

        return ['faqs' => $faqs, 'notices' => $notices, 'galleries'=>$galleries];
    }
}
