<?php

namespace App\Domains\Hospital\Reservation;

class ReservationService
{
    public function save($request)
    {
        $validatedData = $request->validated();

        return Reservation::create($validatedData);
    }

}
