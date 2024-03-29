<?php

namespace App\Console\Commands;

use App\Domains\Board\Actions\FileUnusedDeleteAction;
use Illuminate\Console\Command;

class DeleteUnusedFiles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'file:delete-unused';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '사용되지 않는 파일 삭제';

    /**
     * Execute the console command.
     */
    public function handle(FileUnusedDeleteAction $action)
    {
        $action->handle();
        $this->info('사용되지 않는 파일 삭제 완료');
    }
}
