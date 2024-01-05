import { Image } from '@/types/common';

import { PartType } from '../part';

export type Performance = {
    id: number | string;
    orderSequence: number;
    title: string; // 공연 제목
    dateTime: number; //공연시간
    location: string; // 주소
    visible: boolean;
    mainImageUrl: string;
    partTypes: PartType[];
    images: Image[];
    created_at: Date;
    updated_at: Date;
};

export type PerformanceFromkey =
    | 'id'
    | 'title'
    | 'dateTime'
    | 'location'
    | 'visible'
    | 'partTypeIds'
    | 'fileItems';

export type Categories = {
    partTypes: PartType[];
};
