<?php

namespace App\Domains\Hospital\Reservation;

class ReservationRepository
{

    protected $reservation;

    public function __construct() {
        $this->reservation = new Reservation;
    }

    public function store($request)
    {
        $validatedData = $request->validated();
        $reservation = $this->reservation->create($validatedData);

        return $reservation;
    }

}
