import { useMemo } from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import { AccordionItemNotice, PageHeader } from '@/components/ui';

import * as s from './Home.styled';

interface NoticeData {
    id: number;
    title: string;
    is_published: boolean;
    notice: {
        content: string;
    };
}

function Home({ notices }: { notices: any }) {
    const datas = useMemo(() => {
        return notices.data.filter((item: NoticeData) => item.is_published);
    }, [notices]);
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
                {datas.length > 0 ? (
                    <s.HomeAccordion selectedItem={0}>
                        {datas.map((notice: NoticeData) => (
                            <AccordionItemNotice
                                key={notice.id}
                                title={notice.title}
                                content={`<div style="font-size:20px;line-height:30px">${notice.notice.content}</div>`}
                            />
                        ))}
                    </s.HomeAccordion>
                ) : (
                    <s.Empty>공지사항이 없습니다.</s.Empty>
                )}
            </s.Inner>
        </s.Wrapper>
    );
}

export default Home;
