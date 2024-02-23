<?php

namespace App\Domains\Common\DTOs;

use Illuminate\Pagination\LengthAwarePaginator;

class PaginatedDTO
{
    public static function fromPaginator(LengthAwarePaginator $paginator, string $dtoClass): array
    {
        $items = $paginator->items();

        $data = collect($items)->map(function ($item) use ($dtoClass) {
            return new $dtoClass($item->toArray());
        });

        return [
            'data' => $data,
            'current_page' => $paginator->currentPage(),
            'first_page_url' => $paginator->url(1),
            'last_page' => $paginator->lastPage(),
            'last_page_url' => $paginator->url($paginator->lastPage()),
            'next_page_url' => $paginator->nextPageUrl(),
            'path' => $paginator->path(),
            'per_page' => $paginator->perPage(),
            'prev_page_url' => $paginator->previousPageUrl(),
            'total' => $paginator->total(),
            'links' => $paginator->toArray()['links']
        ];
    }
}
