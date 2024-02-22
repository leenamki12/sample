import React, { ReactNode, useEffect, useState } from 'react';

type Props = {
    children: ReactNode;
    className?: string;
    category?: string;
    selectedItem?: number | null;
    onChange?: (activeIndex: number | null) => void;
};

const Accordion = ({ children, className, category, selectedItem = null, onChange }: Props) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleItemClick = (index: number | null) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        onChange?.(activeIndex);
    }, [activeIndex]);

    useEffect(() => {
        setActiveIndex?.(selectedItem);
    }, [selectedItem]);

    return (
        <div className={className}>
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child as React.ReactElement, {
                    isOpen: activeIndex === index,
                    category: category,
                    onItemClick: () => handleItemClick(index),
                })
            )}
        </div>
    );
};
export default Accordion;
