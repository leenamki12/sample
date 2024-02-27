import { useState } from 'react';

import { PageHeader, Tab, Tabs } from '@/components/ui';

import { lineUpDatas } from '../home/line-up/constants/lineup';

import * as s from './Home.styled';

function Home() {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };
    return (
        <s.Wrapper>
            <PageHeader title="LINE UP" isBackground />
            <Tabs activeTab={activeTab} onTabClick={handleTabClick} className="mb-[60px]">
                <Tab label="04 13 SAT" />
                <Tab label="04 14 SUN" />
            </Tabs>
            <s.Inner>
                {lineUpDatas[activeTab].map(item => (
                    <s.ListItem>
                        <img src={item.url} alt="" className="w-full" />
                        <p>{item.name}</p>
                    </s.ListItem>
                ))}
            </s.Inner>
        </s.Wrapper>
    );
}

export default Home;
