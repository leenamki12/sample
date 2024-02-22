import React from 'react';

import * as s from './Tabs.styled';

type TabsProps = {
    children: React.ReactElement[];
    activeTab: number;
    onTabClick: (index: number) => void;
    className?: string;
    textColor?: 'white' | 'black';
};

const Tabs: React.FC<TabsProps> = ({
    children,
    className,
    activeTab,
    onTabClick,
    textColor = 'black',
}) => {
    return (
        <div className={className}>
            <s.Wrapper>
                {children.map((child, index) =>
                    React.cloneElement(child, {
                        key: index,
                        textColor: textColor,
                        isActive: activeTab === index,
                        onClick: () => onTabClick(index),
                    })
                )}
            </s.Wrapper>
        </div>
    );
};

export default Tabs;
