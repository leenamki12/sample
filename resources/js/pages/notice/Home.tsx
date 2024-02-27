import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import { AccordionItemNotice, GradientButton, PageHeader } from '@/components/ui';

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

                <s.HomeAccordion>
                    <AccordionItemNotice
                        title={'11111111'}
                        content={
                            'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd'
                        }
                    />
                    <AccordionItemNotice title={'22222'} content={'asdasd'} />
                    <AccordionItemNotice title={'3333'} content={'asdasd'} />
                    <AccordionItemNotice title={'4444'} content={'asdasd'} />
                    <AccordionItemNotice title={'5555'} content={'asdasd'} />
                    <AccordionItemNotice title={'asd'} content={'asd'} />
                </s.HomeAccordion>
                <s.ButtonBox>
                    <GradientButton label="VIEW MORE" />
                </s.ButtonBox>
            </s.Inner>
        </s.Wrapper>
    );
}

export default Home;
