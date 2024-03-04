import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import { AccordionItemNotice, PageHeader } from '@/components/ui';

import { noticeDatas } from './constants/notice';

import * as s from './Home.styled';

function Home() {
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
                    {noticeDatas.map(item => (
                        <AccordionItemNotice
                            key={item.title}
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </s.HomeAccordion>
            </s.Inner>
        </s.Wrapper>
    );
}

export default Home;
