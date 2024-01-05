import { PartType } from './admin/part';
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

    /** Work  */
    partTypes: PartType[];

    /** admin */
    adminPartTypes: Paginate<PartType>;
    performances: Paginate<Performance>;
    performance: Performance;
    performanceEditParts: PartType[];
    categories: Categories;
};
