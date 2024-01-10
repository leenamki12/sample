<?php

use App\Domains\Admin\Performance\Models\Performance;
use App\Domains\Admin\PartType\Models\PartType;
use App\Http\Controllers\Web\Admin\PartTypeController;
use App\Http\Controllers\Web\Admin\PerformanceController;
use App\Http\Controllers\Web\Admin\SettingController;
use App\Http\Controllers\Web\Admin\WorkTypeController;
use App\Http\Controllers\Web\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Web\Auth\PasswordController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


//Home 첫번째 화면
Route::get('/', function () {
    // 퍼포먼스에서 노출이 활성화 된것들만 노출
    $performances = Performance::where('visible', true);

    $performances = $performances->orderBy('id', 'desc')->paginate();

    $performances->each(function ($performance, $key) use ($performances) {
        $mainImage = $performance->images()->where('main_image', true)->first();
        if ($mainImage) {
            $performance->main_image_url = $mainImage->file_path;
        }
        $performance->images = $performance->images()->get();
        $performance->part_types = $performance['part_types'];
        $performance->order_sequence = ($performances->total() + 1) - ($key + 1) - (($performances->currentPage() - 1) * $performances->perPage());
    });

    return Inertia::render('home/Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'performances' => $performances
    ]);
})->name('home');

//about
Route::get('/about', function () {
    return Inertia::render('about/About');
})->name('about');

//presents
Route::get('/presents', function () {
    return Inertia::render('presents/Presents');
})->name('presents');

//works
Route::get('/works', function () {

    // 퍼포먼스에서 노출이 활성화 된것들만 노출
    $performances = Performance::where('visible', true);

    // parts 파라미터가 전달되면 해당하는 조건을 추가
    if ($partsFilter = request('parts')) {
        $parts = array_unique(explode(',', $partsFilter));
        $performances->whereHas('part_types', fn($query) => $query->whereIn('name', $parts));
    }

    // years 파라미터가 전달되면 해당하는 조건을 추가
    if ($yearsFilter = request('years')) {
        $years = array_unique(explode(',', $yearsFilter));
        $performances->where(function ($query) use ($years) {
            foreach ($years as $year) {
                $query->orWhereYear('date_time', $year);
            }
        });
    }

    // 월별 파라미터가 전달되면 해당하는 조건을 추가
    if ($monthlyFilter = request('monthly')) {
        $months = array_unique(explode(',', $monthlyFilter));
        $performances->where(function ($query) use ($months) {
            foreach ($months as $month) {
                $query->orWhereMonth('date_time', $month);
            }
        });
    }

    $performances = $performances->orderBy('id', 'desc')->paginate(4);

    $performances->each(function ($performance, $key) use ($performances) {
        $mainImage = $performance->images()->where('main_image', true)->first();
        if ($mainImage) {
            $performance->main_image_url = $mainImage->file_path;
        }
        $performance->images = $performance->images()->get();
        $performance->part_types = $performance['part_types'];
        $performance->order_sequence = ($performances->total() + 1) - ($key + 1) - (($performances->currentPage() - 1) * $performances->perPage());
    });

    $partTypes = PartType::orderBy('id', 'asc')->get();

    return Inertia::render('works/pages/Works', [
        'performances' => $performances,
        'partTypes' => $partTypes
    ]);

})->name('works');

//works
Route::get('/works/load', function () {

    // 퍼포먼스에서 노출이 활성화 된것들만 노출
    $performances = Performance::where('visible', true);

    // parts 파라미터가 전달되면 해당하는 조건을 추가
    if ($partsFilter = request('parts')) {
        $parts = array_unique(explode(',', $partsFilter));
        $performances->whereHas('part_types', fn($query) => $query->whereIn('name', $parts));
    }

    // years 파라미터가 전달되면 해당하는 조건을 추가
    if ($yearsFilter = request('years')) {
        $years = array_unique(explode(',', $yearsFilter));
        $performances->where(function ($query) use ($years) {
            foreach ($years as $year) {
                $query->orWhereYear('date_time', $year);
            }
        });
    }

    // 월별 파라미터가 전달되면 해당하는 조건을 추가
    if ($monthlyFilter = request('monthly')) {
        $months = array_unique(explode(',', $monthlyFilter));
        $performances->where(function ($query) use ($months) {
            foreach ($months as $month) {
                $query->orWhereMonth('date_time', $month);
            }
        });
    }

    $performances = $performances->orderBy('id', 'desc')->paginate(4);

    $performances->each(function ($performance) {
        $mainImage = $performance->images()->where('main_image', true)->first();
        if ($mainImage) {
            $performance->main_image_url = $mainImage->file_path;
        }
        $performance->images = $performance->images()->get();
        $performance->part_types = $performance['part_types'];
    });

    return response()->json([
        'performances' => $performances,
    ]);

})->name('works.load');

//contact
Route::get('/contact', function () {
    return Inertia::render('contact/Contact');
})->name('contact');


Route::middleware(['auth', 'role:admin'])->prefix('admin')->group(function () {

    Route::get('/performance', [PerformanceController::class, 'index'])->name('admin.performance');
    Route::get('/performance/create', [PerformanceController::class, 'create'])->name('admin.performance.create');
    Route::post('/performance/create', [PerformanceController::class, 'store'])->name('admin.performance.store');
    Route::get('/performance/edit/{id}', [PerformanceController::class, 'edit'])->name('admin.performance.edit');
    Route::post('/performance/update/{id}', [PerformanceController::class, 'update'])->name('admin.performance.update');
    Route::delete('/performance', [PerformanceController::class, 'destroy'])->name('admin.performance.delete');

    Route::get('/part', [PartTypeController::class, 'index'])->name('admin.part');
    Route::post('/part', [PartTypeController::class, 'store'])->name('admin.part.create');
    Route::patch('/part/{id}', [PartTypeController::class, 'update'])->name('admin.part.update');
    Route::delete('/part', [PartTypeController::class, 'destroy'])->name('admin.part.delete');

    Route::get('/work', [WorkTypeController::class, 'index'])->name('admin.work');
    Route::post('/work', [WorkTypeController::class, 'store'])->name('admin.work.create');
    Route::patch('/work/{id}', [WorkTypeController::class, 'update'])->name('admin.work.update');
    Route::delete('/work', [WorkTypeController::class, 'destroy'])->name('admin.work.delete');

    Route::get('/setting', [SettingController::class, 'index'])->name('admin.setting');

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
});

require __DIR__.'/auth.php';
