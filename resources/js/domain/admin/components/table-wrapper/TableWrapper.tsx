import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    title?: string;
};

function TableWrapper({ children }: Props) {
    return (
        <div className="flow-root">
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full pb-2 align-middle lg:pb-0">
                    <div className="overflow-hidden">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default TableWrapper;
