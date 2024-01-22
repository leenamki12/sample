import { useEffect, useState } from 'react';

import { AdjustmentsHorizontalIcon, ArrowPathIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePage } from '@inertiajs/react';
import axios from 'axios';
import dayjs from 'dayjs';

import { SubTitle } from '@/components/layouts';
import { Button } from '@/components/ui';
import Modal from '@/components/ui/modals/basic-modal/BasicModal';
import SwiperModal from '@/components/ui/modals/swiper-modal/SwiperModal';
import { PageProps } from '@/types';
import { Performance } from '@/types/admin/performance/index';

import { ContactContent } from '../../contact/components';
import useFilter from '../hooks/useFilter';

import * as S from './Works.styled';

const FilterKeyItems = ['parts', 'works', 'years', 'monthly'] as const;

type FilterKeyType = (typeof FilterKeyItems)[number];

type FilterItem = {
    key: string;
    label: string;
};

type FilterItems = {
    [key in FilterKeyType]: {
        index: number;
        key: key;
        label: string;
        items: FilterItem[];
    };
};

function Works() {
    const { performances, partTypes, workTypes } = usePage<PageProps>().props;

    const { selectedFilters, displayFilters, onFilterUpdate, onFilterReset } =
        useFilter<FilterKeyType>('works', FilterKeyItems);

    const [items, setItems] = useState<Performance[]>(performances.data);

    const [nextPageUrl, setNextPageUrl] = useState<string | null>();

    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalData, setModalData] = useState<Performance>();

    const monthlyItems = Array.from({ length: 12 }, (_, index) => ({
        key: (index + 1).toString(),
        label: `${index + 1}월`,
    }));

    const defaultFilterItems: FilterItems = {
        parts: {
            index: 0,
            key: 'parts',
            label: 'Part',
            items: [...partTypes.map(part => ({ key: part.name, label: part.name }))],
        },
        works: {
            index: 1,
            key: 'works',
            label: 'Work',
            items: [...workTypes.map(work => ({ key: work.name, label: work.name }))],
        },
        years: {
            index: 2,
            key: 'years',
            label: 'Year',
            items: [
                { key: '2023', label: '2023년' },
                { key: '2024', label: '2024년' },
            ],
        },
        monthly: {
            index: 3,
            key: 'monthly',
            label: 'Month',
            items: [...monthlyItems],
        },
    };

    const handleOpenModal = (data: Performance) => {
        setIsModalOpen(true);
        setModalData(data);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleClickPatch = async () => {
        if (nextPageUrl) {
            const params = window.location.search.slice(1);

            try {
                const response = await axios.get(`${nextPageUrl}&${params}`);
                setItems(prevItems => [...prevItems, ...response.data.performances.data]);
                setNextPageUrl(response?.data.performances.next_page_url);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };

    useEffect(() => {
        if (displayFilters.length > 0) {
            setIsFilterOpen(true);
        }
    }, [displayFilters]);

    useEffect(() => {
        setItems(performances.data);
        setNextPageUrl(
            performances.next_page_url
                ? performances.next_page_url.replace('/works?', '/works/load?')
                : null
        );
    }, [performances.data]);

    return (
        <S.Wrapper>
            <SubTitle title="WORKS" />
            <S.WorksWrpper>
                <S.FilterTopWrapper>
                    <S.FilterTopButtons>
                        <S.FilterButton
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            element="teriary"
                            label={
                                <>
                                    filter
                                    {isFilterOpen ? (
                                        <XMarkIcon className="w-[20px]" />
                                    ) : (
                                        <AdjustmentsHorizontalIcon className="w-[20px]" />
                                    )}
                                </>
                            }
                        />
                        {isFilterOpen && (
                            <S.FilterButton
                                onClick={onFilterReset}
                                element="teriary"
                                label={
                                    <>
                                        reset
                                        <ArrowPathIcon className="ml-[2px] w-[18px]" />
                                    </>
                                }
                            />
                        )}
                    </S.FilterTopButtons>

                    {displayFilters.length > 0 && (
                        <S.FilterSelectWrapper>
                            {displayFilters.map((item, index) => (
                                <button
                                    key={item.value + index}
                                    onClick={() => onFilterUpdate(item.type, item.value)}
                                >
                                    <span>{item.value}</span> <XMarkIcon className="w-[20px]" />
                                </button>
                            ))}
                        </S.FilterSelectWrapper>
                    )}
                </S.FilterTopWrapper>

                {isFilterOpen && (
                    <S.FilterContentWrapper>
                        {Object.values(defaultFilterItems)
                            .sort((a, b) => a.index - b.index)
                            .map((section, index) => {
                                return (
                                    section.items.length > 0 && (
                                        <dl key={section.key + index}>
                                            <dt>{section.label}</dt>
                                            <dd>
                                                <ul>
                                                    {section.items.map((filter, index) => (
                                                        <li key={filter.key + index}>
                                                            <S.FilterSelectButton
                                                                element="teriary"
                                                                label={filter.label}
                                                                onClick={() =>
                                                                    onFilterUpdate(
                                                                        section.key,
                                                                        filter.label
                                                                    )
                                                                }
                                                                active={
                                                                    selectedFilters[section.key]
                                                                        ? selectedFilters[
                                                                              section.key
                                                                          ].includes(filter.label)
                                                                        : false
                                                                }
                                                            />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </dd>
                                        </dl>
                                    )
                                );
                            })}
                    </S.FilterContentWrapper>
                )}
                <S.PerformanceListWrapper>
                    {items.length > 0 ? (
                        <>
                            <div className="overflow-hidden">
                                <S.PerformanceList>
                                    {items.map(item => (
                                        <S.PerformanceItem key={item.id}>
                                            <S.ContentsBox
                                                image={`storage/${item.main_image_url}`}
                                                onClick={() => handleOpenModal(item)}
                                            >
                                                <S.BackgroundGradiant
                                                    image={`storage/${item.main_image_url}`}
                                                >
                                                    <S.TextBox>
                                                        <S.TextTitle>
                                                            <strong>{item.title}</strong>
                                                        </S.TextTitle>
                                                        <S.TextDate>
                                                            {dayjs(item.date_time).format(
                                                                'YYYY.MM.DD'
                                                            )}
                                                            <span className="mx-1">~</span>
                                                            {dayjs(item.end_date_time).format(
                                                                'YYYY.MM.DD'
                                                            )}
                                                            <br />
                                                            at {item.location}
                                                        </S.TextDate>
                                                        <S.TextPart>
                                                            <div>
                                                                {item.part_types.map(part => (
                                                                    <span key={part.id}>
                                                                        {part.name}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                            <p>WanderLoch Inc.</p>
                                                        </S.TextPart>
                                                    </S.TextBox>
                                                </S.BackgroundGradiant>
                                            </S.ContentsBox>
                                        </S.PerformanceItem>
                                    ))}
                                </S.PerformanceList>
                            </div>
                            {nextPageUrl && (
                                <S.MoreButton>
                                    <Button
                                        label="more"
                                        element="more"
                                        onClick={handleClickPatch}
                                        className="cursor-pointer"
                                    />
                                </S.MoreButton>
                            )}
                        </>
                    ) : (
                        <S.NoData>
                            {displayFilters.length > 0 ? (
                                <>
                                    {displayFilters.map(word => (
                                        <strong key={word.value}>{word.value}</strong>
                                    ))}
                                    에 대한 검색 결과가 없습니다.
                                </>
                            ) : (
                                <>WORKS를 준비중입니다.</>
                            )}
                        </S.NoData>
                    )}
                </S.PerformanceListWrapper>
            </S.WorksWrpper>
            <div id="contact">
                <ContactContent title="Contact" />
            </div>
            <Modal
                show={isModalOpen}
                onClose={handleCloseModal}
                backgroundColor="transparent"
                maxWidth="full"
                className="overflow-visible"
            >
                {modalData && (
                    <SwiperModal
                        data={modalData}
                        setIsModalOpen={setIsModalOpen}
                        isModalOpen={isModalOpen}
                    />
                )}
            </Modal>
        </S.Wrapper>
    );
}

export default Works;
