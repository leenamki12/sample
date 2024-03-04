import React, { useState } from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { router } from '@inertiajs/react';

import { AccordionItemFaq, GradientButton, Tab } from '@/components/ui';
import { faqDatas } from '@/pages/faqs/constants/faqs';

import * as s from './Faq.styled';

const Faq = React.forwardRef<HTMLDivElement>((_props, ref) => {
    const [searchText, setSearchText] = useState('');
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<number>(0);
    const [faqItems, setFaqItems] = useState(faqDatas[activeTab].data);

    const selectedCategory = faqDatas[activeTab].category;

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        setSelectedItem(null);

        if (searchText === '') {
            setFaqItems(faqDatas[index].data);
        } else {
            handleClickSearch(index);
        }
    };

    const handleChangedItem = (index: number | null) => {
        setSelectedItem(index);
    };

    const handleClickSearch = (index: number) => {
        if (searchText === '') {
            setFaqItems(faqDatas[index].data);
            return;
        }

        const filteredItems = faqDatas[index].data.filter(
            item =>
                item.questions.toLowerCase().includes(searchText.toLowerCase()) ||
                item.asked.toLowerCase().includes(searchText.toLowerCase())
        );

        setFaqItems(filteredItems);
    };

    return (
        <s.Wrapper ref={ref}>
            <h2>FAQS</h2>

            <s.InputBox className="input_box">
                <input
                    type="text"
                    placeholder="검색어를 입력해주세요."
                    onChange={e => setSearchText(e.target.value)}
                />
                <button type="button" onClick={() => handleClickSearch(activeTab)}>
                    <MagnifyingGlassIcon className="h-[20px] w-[20px]" />
                </button>
            </s.InputBox>

            <s.FaqTabs activeTab={activeTab} onTabClick={handleTabClick}>
                <Tab label="티켓" />
                <Tab label="입장" />
                <Tab label="일반" />
            </s.FaqTabs>

            <s.SelectedCategory>{selectedCategory}</s.SelectedCategory>

            {faqItems.length > 0 ? (
                <s.HomeAccordion
                    onChange={handleChangedItem}
                    category={selectedCategory}
                    selectedItem={selectedItem}
                >
                    {faqItems.map(item => (
                        <AccordionItemFaq
                            key={item.questions}
                            title={item.questions}
                            content={item.asked}
                        />
                    ))}
                </s.HomeAccordion>
            ) : (
                <s.Empty>검색 된 FAQ가 없습니다.</s.Empty>
            )}

            <s.ButtonBox>
                <GradientButton label="FAQS" onClick={() => router.visit(route('faqs'))} />
            </s.ButtonBox>
        </s.Wrapper>
    );
});

export default Faq;
