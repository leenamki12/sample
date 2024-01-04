<?php

namespace App\Http\Controllers\Web\Admin;

use App\Domains\Admin\PartType\PartType;
use App\Domains\Admin\Performance\Performance;
use App\Domains\Admin\Performance\PerformanceImage;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PerformanceRequest;
use App\Http\Requests\Admin\PerformanceUpdateRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PerformanceController extends Controller
{
    public function index()
    {
        $performances = Performance::orderBy('id', 'desc')->paginate(10);

        $performances->each(function ($performance, $key) use ($performances) {
            $mainImage = $performance->images()->where('main_image', true)->first();
            if ($mainImage) {
                $performance->main_image_url = $mainImage->file_path;
            }
            $performance->parts = $performance['parts'];
            $performance->row_number = ($performances->total() + 1) - ($key + 1) - (($performances->currentPage() - 1) * $performances->perPage());
        });

        return Inertia::render('admin/pages/performance/PerformanceList', [
            'performances' => $performances
        ]);
    }

    public function create(): Response
    {

        $parts = PartType::orderBy('id', 'asc')->get();

        return Inertia::render('admin/pages/performance/create/PerformanceCreate', [
            'categories' => ['parts' => $parts]
        ]);
    }

    public function store(PerformanceRequest $request)
    {

        $validatedData = $request->validated();

        $images = [];
        $fileBag = $request->file('files');
        $parts = PartType::findMany($validatedData['parts']);

        // 공연 정보 저장
        $performance = Performance::create([
            'title' => $validatedData['title'],
            'date_time'=> $validatedData['date_time'],
            'location'=> $validatedData['location'],
            'visible'=> $validatedData['visible'],
        ]);

        // 이미지 파일 저장
        foreach ($fileBag as $index => $fileInfo) {
            $image = PerformanceImage::create([
                'performance_id' => $performance->id,
                'file_path' => $fileInfo['file']->store('images/performance', 'public'),
                'order_sequence' => $index,
                'main_image' => $index === 0
            ]);

            $images[] = $image;
        }

        // partType 연결 저장
        $performance->parts()->saveMany($parts);

        return redirect()->route('admin.performance');
    }

    public function edit(int $id)
    {
        $performance = Performance::with(['parts', 'images' => function ($query) {
            $query->orderBy('order_sequence', 'asc');
        }])->findOrFail($id);

        $parts = PartType::orderBy('id', 'asc')->get();

        return Inertia::render('admin/pages/performance/edit/PerformanceEdit', [
            'performance' => $performance,
            'performanceEditParts' => $parts
        ]);
    }

    public function update(PerformanceUpdateRequest $request, int $id)
    {
        $validatedData = $request->validated();

        $images = [];
        $fileBag = $request->file('files');
        $fileInput = $request->input('files');
        $fileDelete = $request->input('deleteImages');
        $performance = Performance::find($id);


        // 이미지 업데이트
        if($fileBag){
            foreach ($fileBag as $index => $fileInfo) {
                $oldId = $fileInput[$index]['oldId'];
                $imageCount = $performance->images->count();

                // 파일의 oldId가 존재하면 해당 이미지 삭제
                if ($oldId) {
                    $existingImage = $performance->images()->where('id', $oldId)->first();

                    $existingImage->update([
                        'file_path' => $fileInfo['file']->store('images/performance', 'public'),
                        'order_sequence' => $existingImage->order_sequence,
                        'main_image' => $existingImage->main_image
                    ]);

                    $images[] = $existingImage;

                    $existingImage->delete();
                } else {

                    $image = PerformanceImage::create([
                        'performance_id' => $performance->id,
                        'file_path' => $fileInfo['file']->store('images/performance', 'public'),
                        'order_sequence' => $index + $imageCount,
                        'main_image' => false
                    ]);
                    $images[] = $image;

                }
            }
        }

        if($fileDelete){
            PerformanceImage::destroy($fileDelete);

            $nextImage = $performance->images->first();
            $nextImage->update([
                'main_image' => true
            ]);
        }

        // 공연 정보 업데이트
        $performance->update([
            'title' => $validatedData['title'],
            'date_time' => $validatedData['date_time'],
            'location' => $validatedData['location'],
            'visible' => $validatedData['visible'],
        ]);

        $parts = PartType::findMany($request->parts);
        $performance->parts()->sync($parts->pluck('id'));

        return redirect()->route('admin.performance');
    }

    public function destroy(Request $request)
    {
        $ids = $request->input('ids');

        Performance::destroy($ids);

        return redirect()->route('admin.performance');
    }
}