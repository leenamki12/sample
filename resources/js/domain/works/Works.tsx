import { useState } from 'react';

import { AdjustmentsHorizontalIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

import { SubTitle } from '@/components/layouts';

import { XmarkIcon } from '../admin/pages/part/PartList.styled';
import { ContactContent } from '../contact/components';

import * as S from './Works.styled';

function Works() {
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

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
                                        <XmarkIcon className="w-[20px]" />
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
                </S.FilterTopWrapper>

                <S.FilterContentWrapper>
                    <dl>
                        <dt>Part</dt>
                        <dd>
                            <ul>
                                <li>
                                    <S.FilterSelectButton element="teriary" label="all" />
                                </li>
                                <li>
                                    <S.FilterSelectButton element="teriary" label="연출" />
                                </li>
                                <li>
                                    <S.FilterSelectButton element="teriary" label="운영" />
                                </li>
                                <li>
                                    <S.FilterSelectButton element="teriary" label="etc" />
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </S.FilterContentWrapper>
            </S.WorksWrpper>
            <div>
                <ContactContent title="Contact" />
            </div>
        </S.Wrapper>
    );
}

export default Works;
