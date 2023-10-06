import IconHistoryBack from '@assets/common/icon_historyback_arrow.svg';

import * as S from './Header.styled';

type Props = {
    title: string;
};

function Header({ title }: Props) {
    const handleBack = () => {
        return window.history.back();
    };

    return (
        <S.Wrapper>
            <S.InnerBox>
                <S.BackButton onClick={handleBack}>
                    <img src={IconHistoryBack} alt="" className="h-[35px] w-[35px] max-w-[35px]" />
                </S.BackButton>
                <S.PageTitle>
                    <strong>{title}</strong>
                </S.PageTitle>
            </S.InnerBox>
        </S.Wrapper>
    );
}

export default Header;
