import React from 'react';

import * as s from './Tab.styled';

type TabProps = {
    label: string;
    isActive?: boolean;
    onClick?: () => void;
    textColor?: 'white' | 'black';
};

const Tab: React.FC<TabProps> = ({ label, isActive, onClick, textColor }) => {
    return (
        <s.Wrapper type="button" onClick={onClick} isActive={isActive} textColor={textColor}>
            {label}
        </s.Wrapper>
    );
};

export default Tab;
