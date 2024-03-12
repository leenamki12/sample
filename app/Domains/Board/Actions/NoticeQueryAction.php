<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Models\Board;
use Illuminate\Contracts\Database\Eloquent\Builder;

class NoticeQueryAction
{
    public function handle(int $perPage = 10)
    {
        $requestData = request(['start_date', 'end_date', 'is_published', 'is_main_published', 'title']);

        $board = Board::with('notice')->whereHas('notice');
        if($requestData){
            $board = $this->filterByCreatedAt($board, $requestData['start_date'], $requestData['end_date']);
            $board = $this->filterByIsPublished($board, $requestData['is_published']);
            $board = $this->filterByIsMainPublished($board, $requestData['is_main_published']);
            $board = $this->filterByTitle($board, $requestData['title']);
        }

        return $board->orderBy('id', 'desc')->paginate($perPage);
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
        if($isPublished === 'all'){
            return $builder;
        }
        $result = filter_var($isPublished, FILTER_VALIDATE_BOOLEAN) == true;
        $builder->where('is_published', $result);
        return $builder;
    }

    private function filterByIsMainPublished(Builder $builder, ?string $isMainPublished) {

        if($isMainPublished === 'all'){
            return $builder;
        }

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
