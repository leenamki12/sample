<?php

namespace App\Http\Middleware;

use App\DTOs\User\UserDTO;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user()
                ? UserDTO::from($request->user())
                : null,
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'userVerifys' => function () use ($request) { //휴대폰 인증번호 상태
                return [
                    'code' => $request->session()->get('userVerifyCode'),
                    'status' => $request->session()->get('userVerifyStatus')
                ];
            }
        ]);
    }
}
