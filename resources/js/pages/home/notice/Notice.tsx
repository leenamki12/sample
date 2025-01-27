import React from 'react';

import { router, usePage } from '@inertiajs/react';

import { AccordionItemNotice, GradientButton } from '@/components/ui';
import { NoticeData } from '@/pages/admin/notice/types/notice';

import * as s from './Notice.styled';

const Notice = React.forwardRef<HTMLDivElement>((_props, ref) => {
    const { notices } = usePage<{ notices: NoticeData[] }>().props;

    const formData = {
        start_date: '',
        end_date: '',
        is_published: 'true',
        is_main_published: 'all',
        title: '',
    };

    return (
        <s.Wrapper ref={ref}>
            <h2>NOTICE</h2>
            {notices.length > 0 ? (
                <s.HomeAccordion>
                    {notices.map(item => {
                        return (
                            <AccordionItemNotice
                                key={item.id}
                                title={item.title}
                                content={`<div style="font-size:20px;line-height:30px">${item.notice.content}</div>`}
                            />
                        );
                    })}
                </s.HomeAccordion>
            ) : (
                <s.Empty>공지사항이 없습니다.</s.Empty>
            )}
            <s.ButtonBox>
                <GradientButton
                    label="VIEW MORE"
                    onClick={() => router.visit(route('notice', formData))}
                />
            </s.ButtonBox>
        </s.Wrapper>
    );
});

export default Notice;
