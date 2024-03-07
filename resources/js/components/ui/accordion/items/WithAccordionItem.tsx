import { useEffect, useRef } from 'react';

type Props = {
    isOpen?: boolean;
    category?: string;
    onItemClick?: () => void;
    title: string;
    content: React.ReactNode;
    parentRef?: React.RefObject<HTMLDivElement>;
    childRef?: React.RefObject<HTMLDivElement>;
};

export const WithAccordionItem = (WrappedComponent: React.ComponentType<Props>) => {
    return (props: Omit<Props, 'parentRef' | 'childRef' | 'onClickItem'>) => {
        const parentRef = useRef<HTMLDivElement>(null);
        const childRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (parentRef.current === null || childRef.current === null) {
                return;
            }
            if (!props.isOpen) {
                parentRef.current.style.height = '0';
            } else {
                parentRef.current.style.height = `${childRef.current.clientHeight + 702}px`;
            }
        }, [props.isOpen]);

        return <WrappedComponent {...props} parentRef={parentRef} childRef={childRef} />;
    };
};

export type { Props as AccordionItemProps };
