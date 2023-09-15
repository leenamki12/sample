export type ProfileEditFormProps = {
    email: string;
    password: string;
    password_confirmation: string;
    name: string;
    phone: string;
    phoneAuth: string;
    companiesName: string;
    employees: number | null;
    address: string;
    postalCode: string;
    addressDetail: string;
    businessLicense: File | null;
    marketingConsent: boolean;
};

export type ProfileEditFormKey =
    | 'email'
    | 'password'
    | 'password_confirmation'
    | 'name'
    | 'phone'
    | 'phoneAuth'
    | 'companiesName'
    | 'employees'
    | 'address'
    | 'postalCode'
    | 'addressDetail'
    | 'businessLicense'
    | 'marketingConsent';
