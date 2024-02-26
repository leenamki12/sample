import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';

import * as s from './QuickMoveLink.styled';

type Props = {
    current: string;
    length: string;
    onClickUp: () => void;
    onClickDonw: () => void;
};

function QuickMoveLink({ current, length, onClickUp, onClickDonw }: Props) {
    const hasFirst = current === '1';
    const hasLast = current === length;

    const isWhite = current === '5' || current === '7';

    return (
        <s.Wrapper>
            <s.CountWrapper isWhite={isWhite}>
                <span className="current">{current}</span>
                <span className="length">{length}</span>
            </s.CountWrapper>
            <s.ButtonWrapper isWhite={isWhite}>
                {!hasFirst && (
                    <button type="button" onClick={onClickUp}>
                        <ArrowUpIcon />
                    </button>
                )}
                {!hasLast && (
                    <button type="button" onClick={onClickDonw}>
                        <ArrowDownIcon />
                    </button>
                )}
            </s.ButtonWrapper>
        </s.Wrapper>
    );
}

export default QuickMoveLink;
