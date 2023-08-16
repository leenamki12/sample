<?php

namespace App\Http\Controllers\Web\Hospital;

use App\Domains\Hospital\Reservation;
use App\Http\Controllers\Controller;
use App\Http\Requests\Hospital\ReservationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        /* $user_id = auth()->id();
        $reservation = Reservation::where('user_id', $user_id)->orderBy('updated_at', 'desc')->get();

        //return Reservation::all();
        return Inertia::render('company.detail', ['reservations' => $reservation]); */
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('company.detail');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ReservationRequest $reservationRequest)
    {
        $reservation = Reservation::create($reservationRequest->validated());

        return Redirect::route('company.detail', ['id' => $reservation->hospital_id]);
        //return Reservation::all();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
