import React, { useState } from 'react';

import { router } from '@inertiajs/react';

import { GradientButton, Tab, Tabs } from '@/components/ui';
import content from '@assets/pages/time-table/img_timetable_content.jpg';

import * as s from './TimeTable.styled';

const TimeTable = React.forwardRef<HTMLDivElement>((_props, ref) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };
    return (
        <s.Wrapper ref={ref}>
            <h2>TIMETABLE</h2>

            <Tabs
                activeTab={activeTab}
                textColor="white"
                onTabClick={handleTabClick}
                className="mb-[60px] hidden"
            >
                <Tab label="04 13 SAT" />
                <Tab label="04 14 SUN" />
            </Tabs>
            <s.TicketContent>
                <img src={content} alt="" />
            </s.TicketContent>
            <s.ButtonBox>
                <GradientButton
                    label="MORE INFO"
                    onClick={() => router.visit(route('time-table'))}
                />
            </s.ButtonBox>
        </s.Wrapper>
    );
});

export default TimeTable;
