import IconInstagram from '@assets/common/icon_instagram.svg';
import IconTwetter from '@assets/common/icon_twitter.svg';

import * as S from './ContactContent.styled';

type Props = {
    title: string;
};

function ContactContent({ title }: Props) {
    return (
        <S.Wrapper>
            <S.Title>{title}</S.Title>
            <div>
                <p>
                    <strong>WanderLoch Inc.</strong>
                </p>
                <p>
                    <strong>Head Quarters</strong> 서울특별시 강남구 강남대로 302, B1 | B1, 302
                    Gangnam-daero, Gangnam-gu,
                </p>
                <p>
                    <strong>Seoul Branch</strong> 서울특별시 마포구 와우산로33길 27, B1 | B1, 27
                    Wausanro33-gil, Mapo-gu, Seoul
                </p>
            </div>
            <S.SnsContent>
                <p>
                    협업 및 공연문의 <a href="mailto:hello@wanderloch.com">hello@wanderloch.com</a>
                </p>
                <S.SnsList>
                    <li>
                        <a href="">
                            <span>
                                <img src={IconInstagram} alt="" />
                            </span>
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                <img src={IconTwetter} alt="" />
                            </span>
                            X
                        </a>
                    </li>
                </S.SnsList>
            </S.SnsContent>
            <S.Map>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.97884390971!2d126.92630407636155!3d37.555562224756535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98c1c0b8e3d7%3A0x9ae20b8f07a4bab0!2z7ISc7Jq47Yq567OE7IucIOuniO2PrOq1rCDsmYDsmrDsgrDroZwzM-q4uCAyNw!5e0!3m2!1sko!2skr!4v1702274741354!5m2!1sko!2skr"
                    loading="lazy"
                ></iframe>
            </S.Map>
        </S.Wrapper>
    );
}

export default ContactContent;
