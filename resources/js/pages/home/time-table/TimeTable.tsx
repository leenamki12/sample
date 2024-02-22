import { useState } from 'react';

import { GradientButton, Tab, Tabs } from '@/components/ui';

import * as s from './TimeTable.styled';
function TimeTable() {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };
    return (
        <s.Wrapper>
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
            <div className="m-auto h-[700px] w-[700px] rounded-[20px] bg-white"></div>
            <s.ButtonBox>
                <GradientButton label="MORE INFO" />
            </s.ButtonBox>
        </s.Wrapper>
    );
}

export default TimeTable;
