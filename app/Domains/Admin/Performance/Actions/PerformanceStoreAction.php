<?php

namespace App\Domains\Admin\Performance\Actions;

use App\Domains\Admin\PartType\Models\PartType;
use App\Domains\Admin\Performance\DTOs\PerformanceImageDTO;
use App\Domains\Admin\Performance\DTOs\PerformanceStoreDTO;
use App\Domains\Admin\Performance\Models\Performance;
use App\Http\Controllers\Web\Admin\Requests\PerformanceRequest;

class PerformanceStoreAction
{

    private $imageStoreAction;

    public function __construct(PerformanceImageStoreAction $imageStoreAction) {
        $this->imageStoreAction = $imageStoreAction;
    }

    /**
     * @param PerformanceRequest $request
     */
    public function handle(PerformanceRequest $request): Performance
    {
        $files = $request->file('file_items');
        $partTypes = PartType::findMany($request['part_type_ids']);
        $performanceDto = PerformanceStoreDTO::fromArray($request->toArray());

        // 공연 정보 저장
        $performance = Performance::create($performanceDto->toArray());

        // 이미지 처리
        $this->handleImageCreate($performance->id, $files);

        // PartTypes와 연결
        $performance->part_types()->saveMany($partTypes);

        return $performance;
    }

    private function handleImageCreate(int $performance_id, array $files)
    {
        foreach ($files as $index => $file) {
            $imageDto = PerformanceImageDTO::fromImage([
                'id' => null,
                'performance_id' => $performance_id,
                'file_path' => $file['file']->store('images', 'public'),
                'order_sequence' => $index,
                'main_image' => $index === 0
            ]);
            $this->imageStoreAction->handle($imageDto);
        }
    }
}