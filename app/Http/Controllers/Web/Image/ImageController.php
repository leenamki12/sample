<?php

namespace App\Http\Controllers\Web\Image;

use App\Domains\Image\Image;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $image = Image::create([
            'file_path' => $request->image->store('images/performance', 'public')
        ]);

        return redirect()->back()->with([
            'images' => $image,
        ]);
    }
}