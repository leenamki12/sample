import React from 'react';

import { router } from '@inertiajs/react';

import { AccordionItemNotice, GradientButton } from '@/components/ui';
import { noticeDatas } from '@/pages/notice/constants/notice';

import * as s from './Notice.styled';

const Notice = React.forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <s.Wrapper ref={ref}>
            <h2>NOTICE</h2>
            <s.HomeAccordion>
                {noticeDatas.map(item => (
                    <AccordionItemNotice title={item.title} content={item.content} />
                ))}
            </s.HomeAccordion>
            <s.ButtonBox>
                <GradientButton label="VIEW MORE" onClick={() => router.visit(route('notice'))} />
            </s.ButtonBox>
        </s.Wrapper>
    );
});

export default Notice;
