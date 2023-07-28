import tw, { styled } from 'twin.macro';

export const Container = styled.div`
    ${tw`border-t border-[#dadada] px-[30px] pb-[50px] pt-[40px]`}
`;

export const LinkList = styled.ul`
    ${tw`flex items-center gap-[20px]`}
`;

export const Item = styled.li`
    ${tw``}

    a {
        ${tw`text-sm`}
        color: #aaa;
    }
`;
