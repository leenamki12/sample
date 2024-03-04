import { useState } from 'react';

import { PageHeader } from '@/components/ui';
import { Tab, Tabs } from '@/components/ui';

import * as s from './Home.styled';

function Home() {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <s.Wrapper>
            <PageHeader title="TIMETABLE" isBackground />
            <s.Inner>
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
            </s.Inner>
        </s.Wrapper>
    );
}

export default Home;
