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

        $reservation = $this->reservation->create([
            'hospital_id'        => $validatedData['hospitalId'],
            'company_name'       => $validatedData['companyName'],
            'reservation_date'   => $validatedData['reservationDate'],
            'name'              => $validatedData['name'],
            'phone'             => $validatedData['phone'],
        ]);

        return $reservation;
    }

}