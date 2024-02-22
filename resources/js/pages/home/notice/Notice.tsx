import { AccordionItemNotice, GradientButton } from '@/components/ui';

import * as s from './Notice.styled';

function Notice() {
    return (
        <s.Wrapper>
            <h2>NOTICE</h2>
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
        </s.Wrapper>
    );
}

export default Notice;
