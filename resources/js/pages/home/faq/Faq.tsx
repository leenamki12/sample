import React, { useState } from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { router, usePage } from '@inertiajs/react';

import { AccordionItemFaq, GradientButton, Tab } from '@/components/ui';
import useAxios from '@/hooks/useAxios';
import { FaqData } from '@/pages/admin/faq/types/faqs';
import { faqDatas } from '@/pages/faqs/constants/faqs';
import { Paginate } from '@/types/common/paginate';
import loading from '@assets/common/loading-svgrepo-com.svg';

import * as s from './Faq.styled';

const categories = ['TICKET', 'ENTERANCE', 'COMMON'];

const Faq = React.forwardRef<HTMLDivElement>((_props, ref) => {
    const { faqs } = usePage<{ faqs: FaqData[] }>().props;

    const [searchText, setSearchText] = useState('');
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<number>(0);

    const [newFaqDatas, setNewFaqDatas] = useState(faqs);
    const { isLoading, request } = useAxios<Paginate<FaqData>>();

    const selectedCategory = faqDatas[activeTab].category;

    const handleSearch = async (index: number) => {
        setActiveTab(index);
        setSelectedItem(null);

        const formData = {
            start_date: '',
            end_date: '',
            category: categories[index],
            title: searchText,
            is_published: 'true',
            is_main_published: 'all',
        };

        const { data } = await request({
            method: 'get',
            url: route('home.faqs', formData),
        });

        setNewFaqDatas(data.data);
    };

    const handleChangedItem = (index: number | null) => {
        setSelectedItem(index);
    };

    function getFormattedContent(text: string) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text
            .replace(urlRegex, url => `<a href="${url}" target="_blank">${url}</a>`)
            .split('\n')
            .join('<br/>');
    }

    return (
        <s.Wrapper ref={ref}>
            <h2>FAQS</h2>

            <s.InputBox className="input_box">
                <input
                    type="text"
                    placeholder="검색어를 입력해주세요."
                    onChange={e => setSearchText(e.target.value)}
                />
                <button type="button" onClick={() => handleSearch(activeTab)}>
                    <MagnifyingGlassIcon className="h-[20px] w-[20px]" />
                </button>
            </s.InputBox>

            <s.FaqTabs activeTab={activeTab} onTabClick={handleSearch}>
                <Tab label="티켓" />
                <Tab label="입장" />
                <Tab label="일반" />
            </s.FaqTabs>

            <s.SelectedCategory>{selectedCategory}</s.SelectedCategory>
            {isLoading ? (
                <div className="flex h-[200px] w-full items-center justify-center">
                    <img src={loading} alt="" className="w-[30px] animate-spin" />
                </div>
            ) : (
                <>
                    {newFaqDatas.length > 0 ? (
                        <s.HomeAccordion
                            onChange={handleChangedItem}
                            category={selectedCategory}
                            selectedItem={selectedItem}
                        >
                            {newFaqDatas.map(item => (
                                <AccordionItemFaq
                                    key={item.id}
                                    title={item.title}
                                    content={getFormattedContent(item.faq.content)}
                                />
                            ))}
                        </s.HomeAccordion>
                    ) : (
                        <s.Empty>검색 된 FAQ가 없습니다.</s.Empty>
                    )}
                </>
            )}

            <s.ButtonBox>
                <GradientButton label="FAQS" onClick={() => router.visit(route('faqs'))} />
            </s.ButtonBox>
        </s.Wrapper>
    );
});

export default Faq;
