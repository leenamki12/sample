import tw, { styled } from 'twin.macro';

export const TableWrapper = styled.div`
    ${tw`space-y-4 rounded bg-white p-[20px] shadow`}
`;

type TableColStatus = {
    isAcitve: boolean;
};

export const TableColStatus = styled.span<TableColStatus>`
    ${({ isAcitve }) => (isAcitve ? tw`text-blue-500` : tw`text-red-500`)}
`;

export const TableFooterButtonWrap = styled.div`
    ${tw`flex justify-between`}
`;
