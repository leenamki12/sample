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

export type Paginate<T> = {
    data: T[];
    links: Link[];
    meta: Meta;
};

type Link = {
    active: boolean;
    label: string;
    url: string | null;
};
type Meta = {
    current_page: number;
    first_page_url: string | null;
    from: number;
    last_page: number;
    last_page_url: string | null;
    next_page_url: string | null;
    path: string | null;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
};

export type Companies = {
    id: number;
    approvalStatus: 'waiting' | 'stopped' | 'completed';
    authCode: string;
    detail: Company;
    user: User;
};

// type Companies = {
//     approval_status: 'waiting' | 'stopped' | 'completed';
//     auth_code: string;
// };

type Company = {
    name: string;
    address: string;
    address_detail: string;
    postal_code: string;
    business_license: string;
    employees: number;
};
