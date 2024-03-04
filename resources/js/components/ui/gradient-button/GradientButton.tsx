import { ReactNode } from 'react';

import * as s from './GradientButton.styled';

type Props = {
    label: string | ReactNode;
    onClick?: () => void;
};

function GradientButton({ label, onClick }: Props) {
    return (
        <s.Wrapper onClick={onClick}>
            <div></div>
            <span>
                <em>{label}</em>
            </span>
        </s.Wrapper>
    );
}

export default GradientButton;
