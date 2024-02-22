<?php

namespace App\Domains\Common\Models\Types;

use ReflectionClass;

trait TypeTrait {
    /**
     * KEY 상수명을 제외한 Type의 상수명 배열정보
     *
     * @return array<string>
     */
    public static function values() {
        $reflection = new ReflectionClass(__CLASS__);
        $constants = $reflection->getConstants();
        unset($constants['KEY']); // KEY 상수 제거
        return array_values($constants);
    }
}
