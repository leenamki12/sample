<?php

namespace App\Http\Controllers\Web\Hospital;

use App\Domains\Hospital\Reservation\ReservationService;
use App\Http\Controllers\Controller;
use App\Http\Requests\Hospital\ReservationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ReservationController extends Controller
{
    private $reservationService;

    public function __construct(ReservationService $reservationService)
    {
        $this->reservationService = $reservationService;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ReservationRequest $request)
    {
        $reservation = $this->reservationService->reservationCreate($request);

        return Redirect::route('company.detail', ['id' => $reservation->hospital_id]);
    }
}