<?php

namespace App\Domains\Board\Models\Types;

use App\Domains\Common\Models\Types\TypeTrait;

class FaqCategoryType
{
    use TypeTrait;

    const KEY = 'category.type';

    const TICKET = 'TICKET';

    const ENTERANCE = 'ENTERANCE';

    const COMMON = 'COMMON';
}
