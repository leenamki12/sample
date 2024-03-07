<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Models\Board;
use Illuminate\Contracts\Database\Eloquent\Builder;

class NoticeQueryAction
{
    public function handle(array $filters, int $perPage = 10)
    {
        $filters = $this->setFilter($filters);

        $board = Board::with('notice')->whereHas('notice');
        $board = $this->filterByCreatedAt($board, $filters['start_date'], $filters['end_date']);
        $board = $this->filterByIsPublished($board, $filters['is_published']);
        $board = $this->filterByIsMainPublished($board, $filters['is_main_published']);
        $board = $this->filterByTitle($board, $filters['title']);

        return $board->orderBy('id', 'desc')->paginate($perPage);
    }

    private function setFilter(array $filters)
    {
        if (!$filters) {
            $keys = ['start_date', 'end_date', 'is_published', 'is_main_published', 'title'];
            foreach($keys as $key) {
                $filters[$key] = null;
            }
        } else {
            $filters = $filters['params'];
        }
        return $filters;
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

    private function filterByIsPublished(Builder $builder, ?string $isPublished) {
        if(!empty($isPublished)) {
            $result = filter_var($isPublished, FILTER_VALIDATE_BOOLEAN) == true;
            $builder->where('is_published', $result);
        }
        return $builder;
    }

    private function filterByIsMainPublished(Builder $builder, ?string $isMainPublished) {
        if (!empty($isMainPublished)) {
            if (filter_var($isMainPublished, FILTER_VALIDATE_BOOLEAN)) {
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
