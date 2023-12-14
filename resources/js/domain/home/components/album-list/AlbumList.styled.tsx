import tw, { styled } from 'twin.macro';

export type AlbumProps = {
    image: string;
};

export const AlbumItem = styled.li`
    ${tw`relative mr-[20px] h-[450px] w-[390px] overflow-hidden text-black tablet:h-[230px] tablet:min-w-[200px]`}
    img {
    }
`;

export const ContentsBox = styled.div<AlbumProps>`
    ${tw`relative h-full w-full cursor-pointer overflow-hidden`}

    background-image: url(${props => props.image});

    &:hover {
        background:
            radial-gradient(39% 39% at 50% 50%, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.7) 100%),
            url(${props => props.image}),
            lightgray 50% / cover no-repeat;
        background-position: center;
    }

    ${tw`bg-cover bg-center bg-no-repeat`}

    & > div {
        &:hover {
            ${tw`opacity-100`}
        }

        ${tw`absolute left-0 top-0 flex h-full w-full items-center justify-center px-[30px] font-wanderlochSecondary text-white opacity-0 transition-opacity duration-150`}

        strong {
            ${tw`relative block whitespace-pre-line py-[30px] text-center text-[28px] leading-[54px]`}

            &:before, &:after {
                ${tw`absolute left-1/2 h-[5px] w-[100px] -translate-x-1/2 bg-white content-['']`}
            }

            &:before {
                ${tw`top-0`}
            }

            &:after {
                ${tw`bottom-0`}
            }
        }
    }
`;
