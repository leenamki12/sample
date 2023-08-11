<?php

namespace App\Http\Controllers\Web\Auth;

use App\Domains\Auth\UserVerifys;
use App\Domains\Auth\UserVerifysService;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\VerifySmsRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

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
    public function store(VerifySmsRequest $request)
    {
        $verifySms = new UserVerifys();


        $validatedData = $request->validate([
            'phone' => 'required|string|min:11|max:11',
        ]);

        Log::debug($request);

        $verifySms->phone = $validatedData['phone'];
        $verifySms->code =  $request->code;
        $verifySms->status = 'effective';

        $sendTalk = UserVerifysService::sendSms($verifySms->phone, '[위드닥] 인증코드 '.$verifySms->code, '{}');

        Log::debug($sendTalk[1]->code);

        if($sendTalk[1]->code !== '0000'){
            return '';
        }

        return Inertia::render($verifySms);
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