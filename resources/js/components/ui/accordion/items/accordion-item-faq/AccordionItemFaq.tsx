import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

import { AccordionItemProps, WithAccordionItem } from '../WithAccordionItem';

import * as s from './AccordionItemFaq.styled';

const AccordionItemFaq = ({
    isOpen = false,
    onItemClick,
    title,
    content,
    parentRef,
    childRef,
    category,
}: AccordionItemProps) => {
    return (
        <s.Wrapper isOpen={isOpen}>
            <s.Title onClick={onItemClick}>
                <div>{category}</div>
                Q. {title}
                <span>{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</span>
            </s.Title>
            <s.Content ref={parentRef}>
                {content && <div ref={childRef} dangerouslySetInnerHTML={{ __html: content }} />}
            </s.Content>
        </s.Wrapper>
    );
};

export default WithAccordionItem(AccordionItemFaq);
