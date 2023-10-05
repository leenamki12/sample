import DaumPostcode, { Address } from 'react-daum-postcode';

import { ReactComponent as HistoryBack } from '@assets/common/icon_historyback_arrow.svg';

import * as S from './AddressModal.styled';

type Props = {
    onClickHistoryBack: () => void;
    onComplete: (address: Address) => void;
};

function AddressModal({ onClickHistoryBack, onComplete }: Props) {
    return (
        <S.Wrapper>
            <S.Header>
                <button type="button" onClick={onClickHistoryBack}>
                    <HistoryBack />
                </button>
                <h2>주소검색</h2>
            </S.Header>
            <DaumPostcode
                className="PostModal"
                onComplete={onComplete}
                style={{ height: 'calc(100% - 70px)' }}
            />
        </S.Wrapper>
    );
}

export default AddressModal;
