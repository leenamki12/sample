import { SubTitle } from '@/components/layouts';

import { ContactContent } from '../contact/components';

import * as S from './Works.styled';

function Contact() {
    return (
        <S.Wrapper>
            <SubTitle title="WORKS" />
            <div>
                <ContactContent title="Contact" />
            </div>
        </S.Wrapper>
    );
}

export default Contact;
