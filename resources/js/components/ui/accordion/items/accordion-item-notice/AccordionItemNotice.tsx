import YouTube, { YouTubeProps } from 'react-youtube';

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
    const opts: YouTubeProps['opts'] = {
        height: '100%',
        width: '100%',

        playerVars: {
            autoplay: 1,
            rel: 0,
        },
    };

    return (
        <s.Wrapper>
            <s.Title onClick={onItemClick}>
                {title}
                <span>{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</span>
            </s.Title>
            <s.Content ref={parentRef}>
                <div ref={childRef}>
                    {content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
                    <YouTube
                        videoId="7Mw7yAeUfIA"
                        opts={opts}
                        className="h-[700px] w-[100%] tablet:h-[300px]"
                    />
                </div>
            </s.Content>
        </s.Wrapper>
    );
};

export default WithAccordionItem(AccordionItemNotice);
