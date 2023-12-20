export type Performance = {
    title: string; // 공연 제목
    date_and_time: number; //공연시간
    address: string; // 주소
    image_id: number | string; //대표이미지 ID
    hidden: boolean;
    created_at: Date;
    updated_at: Date;
};

export type PerformanceFromkey = 'id' | 'name';
