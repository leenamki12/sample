import { useState } from 'react';

import { PageHeader, Tab, Tabs } from '@/components/ui';

import * as s from './Home.styled';

function Home({ galleries }: { galleries: any }) {
    console.log(galleries);
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <s.Wrapper>
            <PageHeader title="GALLERY" isBackground />
            <s.Inner>
                <Tabs activeTab={activeTab} onTabClick={handleTabClick} className="mb-[60px]">
                    <Tab label="PHOTO" />
                    <Tab label="HISTORY" />
                </Tabs>
            </s.Inner>
        </s.Wrapper>
    );
}

export default Home;
