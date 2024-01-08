import { useState } from 'react';

import { AdjustmentsHorizontalIcon, ArrowPathIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePage } from '@inertiajs/react';
import dayjs from 'dayjs';

import { SubTitle } from '@/components/layouts';
import Modal from '@/components/ui/modals/basic-modal/BasicModal';
import SwiperModal from '@/components/ui/modals/swiper-modal/SwiperModal';
import { PageProps } from '@/types';
import { Performance } from '@/types/admin/performance/index';

import { ContactContent } from '../../contact/components';
import Pagination from '../components/pagination/Pagination';
import useFilter from '../hooks/useFilter';

import * as S from './Works.styled';

type FilterType = 'parts' | 'works' | 'years' | 'monthly';

type FilterItem = {
    key: string;
    label: string;
};

type FilterItems = {
    [key in FilterType]: {
        index: number;
        key: key;
        label: string;
        items: FilterItem[];
    };
};

function Works() {
    const { performances, partTypes } = usePage<PageProps>().props;

    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const { selectedFilters, displayFilters, onFilterUpdate, onFilterReset } =
        useFilter<FilterType>('works');

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
            items: [
                //{ key: 'all', label: 'all' },
                ...partTypes.map(part => ({ key: part.name, label: part.name })),
            ],
        },
        works: {
            index: 1,
            key: 'works',
            label: '',
            items: [],
        },
        years: {
            index: 2,
            key: 'years',
            label: 'Year',
            items: [
                //{ key: 'all', label: 'all' },
                { key: '2023', label: '2023년' },
                { key: '2024', label: '2024년' },
            ],
        },
        monthly: {
            index: 3,
            key: 'monthly',
            label: 'Month',
            items: [...monthlyItems], //{ key: 'all', label: 'all' },
        },
    };

    console.log(selectedFilters, displayFilters);

    const handleOpenModal = (data: Performance) => {
        setIsModalOpen(true);
        setModalData(data);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
                                onClick={() => onFilterReset()}
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

                    {displayFilters.map((item, index) => (
                        <S.FilterSelectWrapper key={item.value + index}>
                            <button onClick={() => onFilterUpdate(item.type, item.value)}>
                                <span>{item.value}</span> <XMarkIcon className="w-[20px]" />
                            </button>
                        </S.FilterSelectWrapper>
                    ))}
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
                <S.AlbumListWrapper>
                    <S.AlbumList>
                        {performances.data.map(item => (
                            <S.AlbumItem key={item.id}>
                                <S.ContentsBox
                                    image={`storage/${item.main_image_url}`}
                                    onClick={() => handleOpenModal(item)}
                                >
                                    <S.TextBox>
                                        <strong>{item.title}</strong>
                                        <p>
                                            {dayjs(item.date_time).format('YYYY.MM.DD')}
                                            <br />
                                            at {item.location}
                                        </p>
                                        <p>
                                            {/* {item.partTypes.map(part => (
                                                <div key={part.id}>{part.id}</div>
                                            ))} */}
                                        </p>
                                    </S.TextBox>
                                </S.ContentsBox>
                            </S.AlbumItem>
                        ))}
                    </S.AlbumList>
                </S.AlbumListWrapper>

                <Pagination datas={performances} />
                {/* <button onClick={}>more</button> */}
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
                {modalData && <SwiperModal data={modalData} setIsModalOpen={setIsModalOpen} />}
            </Modal>
        </S.Wrapper>
    );
}

export default Works;
