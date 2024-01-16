<?php

namespace App\Domains\Admin\Performance\Actions;

use App\Domains\Admin\Performance\Models\Performance;
use App\Domains\Admin\Performance\Models\PerformanceImage;
use App\Domains\Admin\PartType\Models\PartType;
use App\Domains\Admin\Performance\DTOs\PerformanceImageDTO;
use App\Domains\Admin\Performance\DTOs\PerformanceStoreDTO;
use App\Domains\Admin\WorkType\Models\WorkType;
use App\Http\Controllers\Web\Admin\Requests\PerformanceUpdateRequest;

class PerformanceUpdateAction
{

    private $imageStoreAction;
    private $fileInput;
    private $performance;

    public function __construct(PerformanceImageStoreAction $imageStoreAction) {
        $this->imageStoreAction = $imageStoreAction;
    }

    /**
     * @param PerformanceUpdateRequest $request
     * @param int $id
     */
    public function handle(PerformanceUpdateRequest $request, int $id): Performance
    {
        $files = $request->file('file_items');
        $this->fileInput = $request->input('file_items');
        $fileDelete = $request->input('delete_image_ids');

        $performanceDto = PerformanceStoreDTO::fromArray($request->toArray());

        // 공연 정보 업데이트
        $this->performance = Performance::find($id);

        // 이미지 처리
        if($files){
            $this->handleImageCreate($files);
        }

        // 이미지 삭제 처리
        if($fileDelete){
            $this->handleImageDestroy($fileDelete);
        }

        $this->performance->update($performanceDto->toArray());

        $parts = PartType::findMany($request->part_type_ids);
        $works = WorkType::findMany($request->work_type_ids);

        $this->performance->part_types()->sync($parts->pluck('id'));
        $this->performance->work_types()->sync($works->pluck('id'));

        return $this->performance;
    }

    private function handleImageCreate(array $files)
    {
        foreach ($files as $index => $file) {
            $oldId = $this->fileInput[$index]['old_id'];
            $imageCount = $this->performance->images->count();

            // 파일의 oldId가 존재하면 해당 이미지 삭제
            if ($oldId) {
                $existingImage = $this->performance->images()->where('id', $oldId)->first();

                $existingImage->update([
                    'file_path' => $file['file']->store('images', 'public'),
                    'order_sequence' => $existingImage->order_sequence,
                    'main_image' => $existingImage->main_image
                ]);
            } else {
                $imageDto = PerformanceImageDTO::fromArray([
                    'id' => null,
                    'performance_id' => $this->performance->id,
                    'file_path' => $file['file']->store('images', 'public'),
                    'order_sequence' => $index + $imageCount,
                    'main_image' => false
                ]);

                $this->imageStoreAction->handle($imageDto);
            }
        }
    }

    private function handleImageDestroy(array $fileDelete)
    {
        PerformanceImage::destroy($fileDelete);

        $nextImage = $this->performance->images->first();
        $nextImage->update([
            'main_image' => true
        ]);
    }
}
