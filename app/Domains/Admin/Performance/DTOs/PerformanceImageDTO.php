<?php

namespace App\Domains\Admin\Performance\DTOs;

use Spatie\LaravelData\Data;


class PerformanceImageDTO extends Data
{

    public function __construct(

        public ?int $id,
        public int $performance_id,
        public string $file_path,
        public int $order_sequence,
        public bool $main_image,
    ) {
    }

    public static function fromImage(array $image): self
    {
        return new self(
          $image['id'],
          $image['performance_id'],
          $image['file_path'],
          $image['order_sequence'],
          $image['main_image'],
        );
    }
}