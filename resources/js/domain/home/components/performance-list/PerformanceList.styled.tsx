import tw, { styled, screen } from 'twin.macro';

export type AlbumProps = {
    image: string;
};

export const Wrapper = styled.div`
    &:last-of-type {
        ${tw`mt-[20px]`}
    }
`;

export const AlbumItem = styled.li`
    ${tw`relative h-[450px] min-w-[390px] text-black shadow-[0_40px_50px_0px_rgba(0,0,0,0.8)]`}

    ${screen('tablet')({ ...tw`h-[230px] min-w-[200px]` })}
`;

export const ContentsBox = styled.div<AlbumProps>`
    ${tw`relative h-full w-full cursor-pointer overflow-hidden bg-cover bg-center bg-no-repeat`}

    background-image: url(${props => props.image});
    background-position: center;

    &:hover {
        background:
            radial-gradient(39% 39% at 50% 50%, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.7) 100%),
            url(${props => props.image}),
            lightgray 50%;
        background-position: center;

        ${tw`bg-cover bg-center bg-no-repeat`}
    }

    & > div {
        &:hover {
            ${tw`opacity-100`}
        }

        ${tw`absolute left-0 top-0 flex h-full w-full items-center justify-center px-[30px] font-wanderlochSecondary text-white opacity-0 transition-opacity duration-150`}

        ${screen('tablet')({ ...tw`hidden` })}
    }
`;

export const Title = styled.div`
    ${tw`relative block whitespace-pre-line py-[30px] text-center text-[28px] leading-[54px]`}

    strong {
        ${tw`line-clamp-3`}

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
`;
