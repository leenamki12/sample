<?php

namespace App\Domains\Common\Dtos;

use Illuminate\Database\Eloquent\Model;
use Spatie\LaravelData\Data;

/**
 * @template T of Model
 */
class BaseDTO extends Data
{
    /**
     * @var T|null
     */
    protected ?Model $model = null;

    /**
     * Create a new instance of the data class and initialize it with the given array of data.
     *
     * @param mixed ...$payloads
     *
     * @return static
     */
    public static function from(mixed ...$payloads): static
    {
        $dtoInstance = static::factory()->from(...$payloads);

        if ($dtoInstance instanceof self) {
            $model = self::extractModelFromPayloads($payloads);
            $dtoInstance->setModel($model);
        }

        return $dtoInstance;
    }

    /**
     * @param array<mixed> $payloads
     * @return T|null
     */
    protected static function extractModelFromPayloads(array $payloads): ?Model
    {
        // 배열의 첫 번째 요소가 객체인 경우에만 반환
        if (!empty($payloads) && is_object($payloads[0])) {
            return $payloads[0];
        }

        return null;
    }

    /**
     * Set the model associated with the DTO.
     *
     * @param mixed $model
     */
    protected function setModel(mixed $model): void
    {
        $this->model = $model;
    }

    /**
     * Get the model associated with the DTO.
     *
     * @return T|null
     */
    public function getModel(): ?Model
    {
        return $this->model;
    }
}
