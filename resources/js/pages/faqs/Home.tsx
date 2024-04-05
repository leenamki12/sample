import { useState } from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { router } from '@inertiajs/react';

import { PageHeader } from '@/components/ui';
import { AccordionItemFaq, Tab } from '@/components/ui';
import loading from '@assets/common/loading-svgrepo-com.svg';

import * as s from './Home.styled';

interface FaqData {
    id: number;
    title: string;
    faq: {
        category: string;
        content: string;
    };
}

function Home({ faqs }: { faqs: any }) {
    console.log(faqs);
    const [searchText, setSearchText] = useState('');
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const categories = ['TICKET', 'ENTERANCE', 'COMMON'];
    const categoryLabels = ['티켓', '입장', '일반'];
    const selectedCategory = categoryLabels[activeTab];

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        handleSearch(index, searchText);
    };

    const handleChangedItem = (index: number | null) => {
        setSelectedItem(index);
    };

    const handleSearch = (index: number, title: string) => {
        const formData = {
            start_date: '',
            end_date: '',
            category: categories[index],
            title: title,
            is_published: 'true',
            is_main_published: 'all',
        };
        router.get(
            route('faqs', formData),
            {},
            {
                preserveScroll: true,
                preserveState: true,
                onBefore: () => {
                    setIsLoading(true);
                },
                onFinish: () => {
                    setIsLoading(false);
                },
            }
        );
    };

    return (
        <s.Wrapper>
            <PageHeader title="FAQS" isBackground />
            <s.Inner>
                <s.InputBox className="input_box">
                    <input
                        type="text"
                        placeholder="검색어를 입력해주세요."
                        onChange={e => {
                            setSearchText(e.target.value);
                            handleSearch(activeTab, e.target.value);
                        }}
                    />
                    <button type="button" onClick={() => handleSearch(activeTab, searchText)}>
                        <MagnifyingGlassIcon className="h-[20px] w-[20px]" />
                    </button>
                </s.InputBox>

                <s.FaqTabs activeTab={activeTab} onTabClick={handleTabClick}>
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
                        {faqs.data.length > 0 ? (
                            <s.HomeAccordion
                                onChange={handleChangedItem}
                                category={selectedCategory}
                                selectedItem={selectedItem}
                            >
                                {faqs.data.map((faq: FaqData) => (
                                    <AccordionItemFaq
                                        key={faq.id}
                                        title={faq.title}
                                        content={faq.faq.content}
                                    />
                                ))}
                            </s.HomeAccordion>
                        ) : (
                            <s.Empty>검색 된 FAQ가 없습니다.</s.Empty>
                        )}
                    </>
                )}
            </s.Inner>
        </s.Wrapper>
    );
}

export default Home;
