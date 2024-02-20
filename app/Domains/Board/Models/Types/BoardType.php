<?php

namespace App\Domains\Board\Models\Types;

use App\Domains\Common\Models\Types\TypeTrait;

class BoardType
{
    use TypeTrait;

    const KEY = 'board.type';

    const NOTICE = 'notice';

    const FAQ = 'faq';

    const GALLERY = 'gallery';
}
