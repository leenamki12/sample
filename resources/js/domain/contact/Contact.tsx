import { SubTitle } from '@/components/layouts';

import { ContactContent } from './components';

import * as S from './Contact.styled';

function Contact() {
    return (
        <S.Wrapper>
            <SubTitle title="CONTACT" />
            <ContactContent title="" />
        </S.Wrapper>
    );
}

export default Contact;
