<?php

namespace App\Http\Controllers\Web\Auth;

use App\Domains\Auth\UserVerifys;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VerifySmsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $verifySms = new UserVerifys();

        $validatedData = $request->validate([
            'phone' => 'required|string|max:16',
        ]);

        $randomNumber = rand(100000,999999);
        
        $verifySms->phone = $validatedData['phone'];
        $verifySms->code = $randomNumber;
        $verifySms->status = 'effective';
        $verifySms->save();

        return $verifySms;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        return '123';
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}