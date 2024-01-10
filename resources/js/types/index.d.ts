import { PartType } from './admin/part-types';
import { Performance, Categories } from './admin/performance';
import { WorkType } from './admin/work-types';
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
    workTypes: WorkType[];

    /** admin */
    adminPartTypes: Paginate<PartType>;
    adminWorkTypes: Paginate<WorkType>;
    performances: Paginate<Performance>;
    performance: Performance;
    performanceEditParts: PartType[];
    performanceEditWorks: WorkType[];
    categories: Categories;
};
