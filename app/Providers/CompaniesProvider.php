<?php

namespace App\Providers;

use App\Domains\Company\Company;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\ValidationException;

class CompaniesProvider extends ServiceProvider implements UserProvider
{
     public function retrieveById($identifier)
    {

        $company = Company::where('id', $identifier)->first();

        // Implement logic to retrieve user by identifier (e.g., user ID)
        return $company->user;
    }

    public function retrieveByToken($identifier, $token)
    {
        // Implement logic to retrieve user by identifier and token
        // 식별자와 토큰을 기반으로 사용자를 검색하는 로직을 구현하세요.
        // 이는 사용자 재인증 및 기타 인증 관련 작업에 사용될 수 있습니다.
    }

    public function updateRememberToken(Authenticatable $user, $token)
    {
        // Implement logic to update the remember token (if applicable)
    }

    public function retrieveByCredentials(array $credentials)
    {
        // Implement logic to retrieve user by credentials
         if (empty($credentials) || empty($credentials['auth_code'])) {
            return null;
        }

        // Find the company by auth_code
        $company = Company::where('auth_code', $credentials['auth_code'])->first();

        if(!$company) {
            throw ValidationException::withMessages([
                'auth_code' => __('기업코드를 다시 확인해주세요.'),
            ]);
        }

        return $company;
    }

    public function validateCredentials(Authenticatable $user, array $credentials)
    {
        // Implement logic to validate user credentials

        if ($user instanceof Company) {
            return $this->customAuthenticationLogic($user, $credentials);
        }

        return false;
    }

    private function customAuthenticationLogic(Company $company, array $credentials)
    {
        // 추가적인 로그인 인증 로직
        if (!$company) {
            return false;
        }

        if($company->approval_status === 'completed') {
            return $company;
        }

        if($company->approval_status === 'waiting') {
            throw ValidationException::withMessages([
                'auth_code' => __('제휴 서비스 심사중입니다.'),
            ]);
        }

        if($company->approval_status === 'stopped') {
            throw ValidationException::withMessages([
                'auth_code' => __('정지 된 기업코드입니다.'),
            ]);
        }
}


}