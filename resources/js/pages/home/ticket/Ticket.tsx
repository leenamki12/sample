import { GradientButton } from '@/components/ui';

import * as s from './Ticket.styled';

function Ticket() {
    return (
        <s.Wrapper>
            <h2>TICKET</h2>
            <s.TicketTable>
                <colgroup>
                    <col width={200} />
                    <col width={400} />
                    <col width={400} />
                </colgroup>
                <thead>
                    <tr>
                        <th></th>
                        <th>사전예매</th>
                        <th>현장예매</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1일권</th>
                        <td>110,000원</td>
                        <td>121,000원</td>
                    </tr>
                    <tr>
                        <th>2일권</th>
                        <td>176,000원</td>
                        <td>194,000원</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>
                            *모든 티켓은 한정수량으로 판매되며, 수량 소진 시 조기 마감될 수
                            있습니다.
                        </td>
                    </tr>
                </tfoot>
            </s.TicketTable>
            <s.ButtonBox>
                <GradientButton label="MORE INFO" />
            </s.ButtonBox>
        </s.Wrapper>
    );
}

export default Ticket;
