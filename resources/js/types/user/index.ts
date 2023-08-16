export type User = {
    id: number;
    name: string;
    email: string;
    roles: string[];
    permissions: string[];
    email_verified_at: string;
};

export type UserVerifySmsCode = {
    code: string;
};
