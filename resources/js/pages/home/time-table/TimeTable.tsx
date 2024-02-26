import React, { useState } from 'react';

import { GradientButton, Tab, Tabs } from '@/components/ui';

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
                className="mb-[60px]"
            >
                <Tab label="04 13 SAT" />
                <Tab label="04 14 SUN" />
            </Tabs>
            <s.TicketContent></s.TicketContent>
            <s.ButtonBox>
                <GradientButton label="MORE INFO" />
            </s.ButtonBox>
        </s.Wrapper>
    );
});

export default TimeTable;
