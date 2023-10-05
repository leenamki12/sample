import { Profile } from '@/domain/profile/pages/types/Profie';

import { User } from './user';

export type StrKeyArray<T> = {
    [key: string]: T;
};

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    profile: Profile;
};
