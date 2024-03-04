import { PageHeader } from '@/components/ui';
import content01 from '@assets/pages/ticket/img_ticket01.jpg';
import content02 from '@assets/pages/ticket/img_ticket02.jpg';
import content03 from '@assets/pages/ticket/img_ticket03.jpg';
import content04 from '@assets/pages/ticket/img_ticket04.jpg';
import content05 from '@assets/pages/ticket/img_ticket05.jpg';

import * as s from './Home.styled';

function Home() {
    return (
        <s.Wrapper>
            <PageHeader title="TICKET" isBackground />
            <s.Inner>
                <p className="text-[18px]">
                    ※ 티켓의 변경/취소/환불은 예매하신 해당 예매처의 규정에 의해 처리되며, 예매처
                    별로 관련 관련 규정 및 내용이 일부 상이할 수 있습니다.
                    <br /> 관련 문의는 예매처 고객센터를 통해 확인해 주시기 바랍니다.
                    <br />
                    <br />※ THE GLOW 2024 공식 예매처 : 멜론티켓 / 예스24티켓
                </p>

                <s.TicketContent>
                    <img src={content01} alt="" />
                    <img src={content02} alt="" />
                    <img src={content03} alt="" />
                    <img src={content04} alt="" />
                    <img src={content05} alt="" />
                </s.TicketContent>
            </s.Inner>
        </s.Wrapper>
    );
}

export default Home;
