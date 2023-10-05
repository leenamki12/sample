export type User = {
    id: number;
    name: string;
    email: string;
    roles: string[];
    permissions: string[];
    email_verified_at: string;
    authCompany: boolean;
    companyName: string;
    marketingConsent: boolean;
};

// type Companies = {
//     approval_status: 'waiting' | 'stopped' | 'completed';
//     auth_code: string;
// };

// type Company = {
//     name: string;
//     address: string;
//     address_detail: string;
//     postal_code: string;
//     business_license: string;
//     employees: number;
// };
