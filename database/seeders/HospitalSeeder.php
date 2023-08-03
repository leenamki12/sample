<?php

namespace Database\Seeders;
use App\Domains\Hospital\Hospital;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Carbon\Carbon;
class HospitalSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();
        $hospitals = [
            ['name' => '모아만의원', 'user_email' => 'moaman@sample.com'],
            ['name' => '강남밝은세상안과의원', 'user_email' => 'gangnam@sample.com'],
            ['name' => '나나성형외과의원', 'user_email' => 'nana@sample.com'],
            ['name' => '라이브치과병원', 'user_email' => 'live@sample.com'],
            ['name' => '디에이성형외과의원', 'user_email' => 'da@sample.com'],
        ];

        foreach ($hospitals as $hospitalData) {
            $user = \App\Domains\User\User::where('email', $hospitalData['user_email'])->first();
            if ($user) {
                Hospital::create([
                    'name' => $hospitalData['name'],
                    'location' => '서울특별시 강남구',
                    'registrationNumber' => $faker->unique()->randomNumber(9, true),
                    'hospitalNumber' => $faker->unique()->randomNumber(8, true),
                    'approvalStatus' => 'completed',
                    'created_at' => Carbon::now(),
                    'user_id' => $user->id,
                ]);
            }
        }
    }
}
