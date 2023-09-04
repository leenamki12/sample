export type User = {
    id: number;
    name: string;
    email: string;
    roles: string[];
    permissions: string[];
    email_verified_at: string;
    auth_company: boolean;
    company_detail: Companies & Company;
};

type Companies = {
    approval_status: 'waiting' | 'stopped' | 'completed';
    auth_code: string;
};

type Company = {
    name: string;
    address: string;
    address_detail: string;
    postal_code: string;
    business_license: string;
    employees: number;
};
