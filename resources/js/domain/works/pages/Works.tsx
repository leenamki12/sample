import { useState } from 'react';

import { AdjustmentsHorizontalIcon, ArrowPathIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePage } from '@inertiajs/react';

import { SubTitle } from '@/components/layouts';
import { PageProps } from '@/types';

import { ContactContent } from '../../contact/components';
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
    const { selectedFilters, displayFilters, onFilterUpdate } = useFilter<FilterType>('works');

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
                { key: '', label: 'all' },
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
                { key: '', label: 'all' },
                { key: '2023', label: '2023년' },
                { key: '2024', label: '2024년' },
            ],
        },
        monthly: {
            index: 3,
            key: 'monthly',
            label: 'Month',
            items: [{ key: '', label: 'all' }, ...monthlyItems],
        },
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
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
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

                    {displayFilters.map(item => (
                        <>{item.value} | </>
                    ))}
                </S.FilterTopWrapper>

                <S.FilterContentWrapper>
                    {Object.values(defaultFilterItems)
                        .sort((a, b) => a.index - b.index)
                        .map(section => {
                            return (
                                section.items.length > 0 && (
                                    <dl key={section.key}>
                                        <dt>{section.label}</dt>
                                        <dd>
                                            <ul>
                                                {section.items.map(filter => (
                                                    <li key={filter.key}>
                                                        <S.FilterSelectButton
                                                            element="teriary"
                                                            label={filter.label}
                                                            onClick={() =>
                                                                onFilterUpdate(
                                                                    section.key,
                                                                    filter.key
                                                                )
                                                            }
                                                            active={
                                                                selectedFilters[section.key]
                                                                    ? selectedFilters[
                                                                          section.key
                                                                      ].includes(filter.key)
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
                <div className="flex">
                    {performances.data.map(item => (
                        <div>
                            <img src={`storage/${item.main_image_url}`} />
                        </div>
                    ))}
                </div>
            </S.WorksWrpper>
            <div>
                <ContactContent title="Contact" />
            </div>
        </S.Wrapper>
    );
}

export default Works;
