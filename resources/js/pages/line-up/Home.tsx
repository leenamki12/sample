import { useState } from 'react';

import { PageHeader, Tab, Tabs } from '@/components/ui';
import LineUpModal from '@/components/ui/modals/line-up-modal/LineUpModal';

import { lineUpDatas } from './constants/lineup';

import * as s from './Home.styled';

function Home() {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };
    return (
        <>
            <s.Wrapper>
                <PageHeader title="LINE UP" isBackground />
                <Tabs activeTab={activeTab} onTabClick={handleTabClick} className="mb-[60px]">
                    <Tab label="04 13 SAT" />
                    <Tab label="04 14 SUN" />
                </Tabs>
                <div className={activeTab === 0 ? 'flex' : 'hidden'}>
                    <s.Inner>
                        {lineUpDatas[0].map((item, index) => (
                            <s.ListItem onClick={() => setSelectedItemIndex(index)}>
                                <img src={item.image} alt="" className="w-full" />
                                <div>
                                    <p>{item.names.en}</p>
                                    <p>{item.names.ko}</p>
                                </div>
                            </s.ListItem>
                        ))}
                    </s.Inner>
                </div>
                <div className={activeTab === 1 ? 'block' : 'hidden'}>
                    <s.Inner>
                        {lineUpDatas[1].map((item, index) => (
                            <s.ListItem onClick={() => setSelectedItemIndex(index)}>
                                <img src={item.image} alt="" className="w-full" />
                                <div>
                                    <p>{item.names.en}</p>
                                    <p>{item.names.ko}</p>
                                </div>
                            </s.ListItem>
                        ))}
                    </s.Inner>
                </div>
            </s.Wrapper>
            {selectedItemIndex !== null && (
                <LineUpModal
                    items={lineUpDatas[activeTab]}
                    selectedItemIndex={selectedItemIndex}
                    onClose={() => setSelectedItemIndex(null)}
                />
            )}
        </>
    );
}

export default Home;
