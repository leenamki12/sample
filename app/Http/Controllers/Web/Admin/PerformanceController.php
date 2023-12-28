<?php

namespace App\Http\Controllers\Web\Admin;

use App\Domains\Admin\Part\Part;
use App\Domains\Admin\Performance\Performance;
use App\Domains\Image\Image;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PerformanceRequest;
use Inertia\Inertia;
use Inertia\Response;

class PerformanceController extends Controller
{
    public function index()
    {
        $performances = Performance::orderBy('id', 'desc')->paginate(24);

        $performances->each(function ($performance, $key) use ($performances) {
            $performance->image_url = Image::find($performance->image_id)->file_path;
            $performance->parts = $performance->parts;
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
}