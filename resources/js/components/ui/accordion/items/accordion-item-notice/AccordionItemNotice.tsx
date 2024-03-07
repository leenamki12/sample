import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

import { AccordionItemProps, WithAccordionItem } from '../WithAccordionItem';

import * as s from './AccordionItemNotice.styled';

const AccordionItemNotice = ({
    isOpen = false,
    onItemClick,
    title,
    content,
    parentRef,
    childRef,
}: AccordionItemProps) => {
    return (
        <s.Wrapper>
            <s.Title onClick={onItemClick}>
                {title}
                <span>{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</span>
            </s.Title>
            <s.Content ref={parentRef}>
                <div ref={childRef}>
                    {content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
                </div>
            </s.Content>
        </s.Wrapper>
    );
};

export default WithAccordionItem(AccordionItemNotice);
