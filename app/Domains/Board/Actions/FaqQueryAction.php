<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Models\Board;
use Illuminate\Contracts\Database\Eloquent\Builder;

class FaqQueryAction
{
    public function handle(array $filters, int $perPage = 10)
    {
        $board = Board::with('faq')->whereHas('faq');
        $board = $this->filterByCreatedAt($board, $filters['start_date'], $filters['end_date']);
        $board = $this->filterByCategory($board, $filters['category']);
        $board = $this->filterByIsPublished($board, filter_var($filters['is_published'], FILTER_VALIDATE_BOOLEAN));
        $board = $this->filterByIsMainPublished($board, filter_var($filters['is_main_published'], FILTER_VALIDATE_BOOLEAN));
        $board = $this->filterByTitle($board, $filters['title']);

        return $board->paginate($perPage);
    }

    private function filterByCreatedAt(Builder $builder, ?string $startDate, ?string $endDate) {
        if(!empty($startDate)) {
            $builder->whereDate('created_at', '>=', $startDate);
        }
        if(!empty($endDate)) {
            $builder->whereDate('created_at', '<=', $endDate);
        }
        return $builder;
    }

    private function filterByCategory(Builder $builder, ?string $category) {
        if(!empty($category)) {
            $builder->whereHas('faq', function ($query) use ($category) {
                $query->where('category', $category);
            });
        }
        return $builder;
    }

    private function filterByIsPublished(Builder $builder, ?bool $isPublished) {
        if(!empty($isPublished)) {
            $builder->where('is_published', $isPublished);
        }
        return $builder;
    }

    private function filterByIsMainPublished(Builder $builder, ?bool $isMainPublished) {
        if (!empty($isMainPublished)) {
            if ($isMainPublished) {
                $builder->whereHas('main');
            } else {
                $builder->whereDoesntHave('main');
            }
        }
        return $builder;
    }

    private function filterByTitle(Builder $builder, ?string $title) {
        if(!empty($title)) {
            $builder->where('title', 'like', '%' . $title . '%');
        }
        return $builder;
    }
}
