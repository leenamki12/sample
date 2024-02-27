import { PageHeader } from '@/components/ui';

import * as s from './Home.styled';

function Home() {
    return (
        <s.Wrapper>
            <PageHeader title="TICKET" isBackground />
            <s.Inner>
                <p>
                    텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
                    텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
                </p>

                <s.TicketContent></s.TicketContent>
            </s.Inner>
        </s.Wrapper>
    );
}

export default Home;
