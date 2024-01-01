<?php

namespace App\Http\Controllers\Web\Admin;

use App\Domains\Admin\Part\Part;
use App\Domains\Admin\Performance\Performance;
use App\Domains\Image\Image;
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
            $performance->image_url = Image::find($performance->image_id)->file_path;
            $performance->parts = $performance['parts'];
            $performance->row_number = ($performances->total() + 1) - ($key + 1) - (($performances->currentPage() - 1) * $performances->perPage());
        });

        return Inertia::render('admin/pages/performance/PerformanceList', [
            'performances' => $performances
        ]);
    }

    public function create(): Response
    {

        $parts = Part::orderBy('id', 'asc')->get();

        return Inertia::render('admin/pages/performance/create/PerformanceCreate', [
            'categories' => ['parts' => $parts]
        ]);
    }

    public function store(PerformanceRequest $request)
    {

        $validatedData = $request->validated();

        $images = [];
        $fileBag = $request->files->get('files', []);
        $parts = Part::findMany($validatedData['parts']);

        foreach ($fileBag as $fileInfo) {
            $laravelFile = new \Illuminate\Http\UploadedFile(
                $fileInfo->getPathname(),
                $fileInfo->getClientOriginalName(),
                $fileInfo->getClientMimeType(),
                $fileInfo->getError(),
                true
            );

            $image = Image::create([
                'file_path' => $laravelFile->store('images/performance', 'public'),
            ]);

            $images[] = $image;
        }

        // 공연 정보 저장
        $performance = Performance::create([
            'title' => $validatedData['title'],
            'date_and_time'=> $validatedData['date_and_time'],
            'address'=> $validatedData['address'],
            'image_id'=> $images[0]->id,
            'hidden'=> $validatedData['hidden'],
        ]);

        $performance->images()->saveMany($images);
        $performance->parts()->saveMany($parts);


        return redirect()->route('admin.performance');
    }

    public function edit(int $id)
    {
        $performance = Performance::with(['parts', 'images'])->findOrFail($id);
        $parts = Part::orderBy('id', 'asc')->get();

        return Inertia::render('admin/pages/performance/edit/PerformanceEdit', [
            'performance' => $performance,
            'performanceEditParts' => $parts
        ]);
    }

    public function update(PerformanceUpdateRequest $request, int $id)
    {
        //$validatedData = $request->validated();

        // 이미지 업데이트 로직
        $images = [];
        $fileBag = $request->files->get('files', []);

        dd($request);

        foreach ($fileBag as $fileInfo) {

            $image = Image::create([
                'file_path' => $fileInfo->store('images/performance', 'public'),
            ]);

            $images[] = $image;
        }

        dd($images);

        // 공연 정보 업데이트
        $performance = Performance::findOrFail($id);
        $performance->update([
            'title' => $request->title,
            'date_and_time' => $request->date_and_time,
            'address' => $request->address,
            'hidden' => $request->hidden,
        ]);

        // 새로운 이미지 저장
        $performance->images()->saveMany($images);
        // 부품 업데이트
        $parts = Part::findMany($request->parts);
        $performance->parts()->sync($parts->pluck('id'));

        return redirect()->route('admin.performance');
    }
}