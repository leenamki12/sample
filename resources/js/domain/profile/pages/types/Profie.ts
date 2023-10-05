import { Company } from '@/domain/company/types/company';

export type Profile = {
    approval_status: 'waiting' | 'stopped' | 'completed';
    auth_code: string;
    detail: Company;
    id: number;
};

export type ProfileEditFormProps = {
    name: string;
    companiesName: string;
    employees: number | null;
    address: string;
    postalCode: string;
    addressDetail: string;
    marketingConsent: boolean;
};

export type ProfileEditFormKey =
    | 'name'
    | 'companiesName'
    | 'employees'
    | 'address'
    | 'postalCode'
    | 'addressDetail'
    | 'marketingConsent';
