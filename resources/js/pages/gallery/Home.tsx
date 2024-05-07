import { useEffect, useState } from 'react';

import { router } from '@inertiajs/react';
import { Image, List } from 'antd';
import axios from 'axios';
import dayjs from 'dayjs';

import { GradientButton, PageHeader, Tab, Tabs } from '@/components/ui';
import { Paginate } from '@/types/common/paginate';
import leftArrow from '@assets/pages/gallery/year_arrow_left.png';
import rightArrow from '@assets/pages/gallery/year_arrow_right.png';

import * as s from './Home.styled';

export type Gallery = {
    id: number;
    title: string;
    file: {
        id: number;
        file_path: string;
    }[];
};

function Home({ galleries }: { galleries: Paginate<Gallery> }) {
    console.log(galleries);
    const currentYear = dayjs().year();
    const [activeTab, setActiveTab] = useState<number>(0);
    const [year, setYear] = useState(currentYear);

    const [nextPageUrl, setNextPageUrl] = useState<string | null>('');
    const [initLoading, setInitLoading] = useState(true);
    const [data, setData] = useState<Gallery[]>();

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        setInitLoading(true);
        router.visit(`/gallery?category=${index === 0 ? `photo&year=${year}` : 'history'}`, {
            preserveScroll: true,
            preserveState: true,
            onFinish: () => {
                setInitLoading(false);
            },
        });
    };

    const onLoadMore = async () => {
        setInitLoading(true);
        if (nextPageUrl) {
            const params = window.location.search.slice(1);
            try {
                const response = await axios.get(`${nextPageUrl}&${params}`);

                const datas: Paginate<Gallery> = response.data;

                setData(prevItems => [...prevItems, ...datas.data]);
                setNextPageUrl(datas.next_page_url);
                setInitLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };

    const handleChangeYear = (type: 'left' | 'right') => {
        const newYear = type === 'left' ? year - 1 : year + 1;
        setInitLoading(true);

        router.visit(`/gallery?category=photo&year=${newYear}`, {
            preserveScroll: true,
            preserveState: true,
            onFinish: () => {
                setInitLoading(false);
                setYear(newYear);
            },
        });
    };

    useEffect(() => {
        setInitLoading(false);
    }, []);

    useEffect(() => {
        setData(galleries.data);
        setNextPageUrl(
            galleries.next_page_url
                ? galleries.next_page_url.replace('/gallery?', '/api/gallery/load?')
                : null
        );
    }, [galleries]);

    return (
        <s.Wrapper>
            <PageHeader title="GALLERY" isBackground />
            <s.Inner>
                <Tabs activeTab={activeTab} onTabClick={handleTabClick} className="mb-[60px]">
                    <Tab label="PHOTO" />
                    <Tab label="HISTORY" />
                </Tabs>
            </s.Inner>
            {activeTab === 0 && (
                <s.YearWrap>
                    <button type="button" onClick={() => handleChangeYear('left')}>
                        <img src={leftArrow} alt="" />
                    </button>
                    <strong className="text-[30px]">{year}</strong>
                    <button type="button" onClick={() => handleChangeYear('right')}>
                        <img src={rightArrow} alt="" />
                    </button>
                </s.YearWrap>
            )}
            <s.ListWrap>
                <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) =>
                            console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                >
                    <List
                        loading={initLoading}
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <>
                                {item.file.map(file => (
                                    <Image src={file.file_path} />
                                ))}
                            </>
                        )}
                    />
                </Image.PreviewGroup>
            </s.ListWrap>

            {!initLoading && nextPageUrl && (
                <s.ButtonBox>
                    <GradientButton label="VIEW MORE" onClick={onLoadMore} />
                </s.ButtonBox>
            )}
        </s.Wrapper>
    );
}

export default Home;
