<?php

namespace App\Domains\Hospital\Reservation;
use App\Domains\Company\Company;
use App\Domains\Company\CompanyDetail;

class ReservationService
{

    protected $reservationRepository;

    public function __construct(ReservationRepository $reservation) {
        $this->reservationRepository = $reservation;
    }

    function reservationCreate($request)
    {
        $reservation = $this->reservationRepository->store($request);

        return $reservation;
    }

}
