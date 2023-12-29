import { Profile } from '@/domain/profile/pages/types/Profie';

import { Part } from './admin/part';
import { Performance, Categories } from './admin/performance';
import { Paginate } from './common';
import { User } from './user';

export type StrKeyArray<T> = {
    [key: string]: T;
};

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    /**common */
    urlPrev: string;

    /** user */
    auth: {
        user: User;
    };
    profile: Profile;

    /** admin */
    parts: Paginate<Part>;
    performances: Paginate<Performance>;
    performance: Performance;
    performanceEditParts: Part[];
    categories: Categories;
};
