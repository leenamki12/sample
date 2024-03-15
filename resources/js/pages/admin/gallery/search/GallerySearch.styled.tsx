import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw``}
`;

export const Content = styled.div`
    ${tw`mb-[20px] space-y-4 rounded bg-white p-[20px] shadow`}
`;

export const Section = styled.section`
    ${tw`flex items-center`}
`;

export const Label = styled.h3`
    ${tw`min-w-[100px]`}
`;

export const DateInputGroups = styled.div`
    ${tw`flex items-center justify-center space-x-2`}
`;

export const ButtonGroups = styled.div`
    ${tw`my-[1px] ml-[10px] flex overflow-hidden rounded-sm border`}

    button {
        ${tw`h-[30px] rounded-none border-l text-[12px]`}
    }

    button.buttonActive {
        ${tw`bg-[#1677ff] text-white`}
    }

    button.buttonActive:hover {
        ${tw`!bg-[#1677ff] !text-white`}
    }
`;
