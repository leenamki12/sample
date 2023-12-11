export type Profile = {
    approvalStatus: 'waiting' | 'stopped' | 'completed';
    authCode: string;
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
