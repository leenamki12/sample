import { Profile } from '@/domain/profile/pages/types/Profie';

import { Parts } from './admin/part';
import { Paginate } from './common';
import { User } from './user';

export type StrKeyArray<T> = {
    [key: string]: T;
};

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    /** user */
    auth: {
        user: User;
    };
    profile: Profile;

    /** admin */
    parts: Paginate<Parts>;
};
