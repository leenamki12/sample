import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import { AccordionItemNotice, PageHeader } from '@/components/ui';

import * as s from './Home.styled';

interface NoticeData {
    id: number;
    title: string;
    notice: {
        content: string;
    };
}

function Home({ notices }: { notices: any }) {
    return (
        <s.Wrapper>
            <PageHeader title="NOTICE" isBackground />
            <s.Inner>
                <s.InputBox className="input_box">
                    <input type="text" placeholder="검색어를 입력해주세요." />
                    <button type="button">
                        <MagnifyingGlassIcon className="h-[20px] w-[20px]" />
                    </button>
                </s.InputBox>

                <s.HomeAccordion selectedItem={0}>
                    {notices.data.map((notice: NoticeData) => (
                        <AccordionItemNotice
                            key={notice.id}
                            title={notice.title}
                            content={`<div style="font-size:20px;line-height:30px">${notice.notice.content}</div>`}
                        />
                    ))}
                </s.HomeAccordion>
            </s.Inner>
        </s.Wrapper>
    );
}

export default Home;
