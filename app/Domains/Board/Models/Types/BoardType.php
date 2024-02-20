<?php

namespace App\Domains\Board\Models\Types;

use App\Domains\Common\Models\Types\TypeTrait;

class BoardType
{
    use TypeTrait;

    const KEY = 'board.type';

    const NOTICE = 'NOTICE';

    const FAQ = 'FAQ';

    const GALLERY = 'GALLERY';
}
