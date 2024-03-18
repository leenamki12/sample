import { useEffect, useState } from 'react';

import { router, usePage } from '@inertiajs/react';
import { DatePicker, Select, Input, Button, notification } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

import { DateButtonGroup } from '@/consts/date_button_group';

import * as s from './FaqSearch.styled';

const FaqSearch = () => {
    const { url } = usePage();
    const [dateSelectedButton, setDateSelectedButton] = useState<number | null>(null);

    const [startDate, setStartDate] = useState<Dayjs>(null);
    const [endDate, setEndDate] = useState<Dayjs>(null);

    const [category, setCategory] = useState<string>('all');
    const [isMainPublished, setIsMainPublished] = useState<string>('all');
    const [isPublished, setIsPublished] = useState<string>('all');
    const [title, setTitle] = useState<string>('');

    const handleSearch = () => {
        const formData = {
            start_date: startDate ? dayjs(startDate).format('YYYY-MM-DD') : '',
            end_date: endDate ? dayjs(endDate).format('YYYY-MM-DD') : '',
            category: category || 'all',
            is_main_published:
                isMainPublished === 'all' ? 'all' : (isMainPublished === 'visible').toString(),
            is_published: isPublished === 'all' ? 'all' : (isPublished === 'visible').toString(),
            title,
        };

        router.get(
            route('admin.faq.index', { ...formData }),
            {},
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    notification.success({
                        message: '알림',
                        description: '검색이 완료되었습니다.',
                    });
                },
            }
        );
    };

    const handleSearchClear = () => {
        router.get(
            route('admin.faq.index'),
            {},
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    notification.success({
                        message: '알림',
                        description: '초기화가 완료되었습니다.',
                    });
                },
            }
        );
    };

    const handleClickSetDate = (index: number, startDate: Dayjs, endDate: Dayjs) => {
        if (dateSelectedButton === index) {
            setDateSelectedButton(null);
            setStartDate(null);
            setEndDate(null);
        } else {
            setDateSelectedButton(index);
            setStartDate(startDate);
            setEndDate(endDate);
        }
    };

    const publishedFilter = (filter: string) => {
        switch (filter) {
            case 'true':
                return 'visible';
            case 'false':
                return 'invisible';
            default:
                return 'all';
        }
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        const startDate = urlParams.get('start_date') ? dayjs(urlParams.get('start_date')) : null;
        const endDate = urlParams.get('end_date') ? dayjs(urlParams.get('end_date')) : null;
        const isMainPublished = publishedFilter(urlParams.get('is_main_published'));
        const isPublished = publishedFilter(urlParams.get('is_published'));
        const isCategory = urlParams.get('category');

        setStartDate(startDate);
        setCategory(isCategory || 'all');
        setEndDate(endDate);
        setIsMainPublished(isMainPublished);
        setIsPublished(isPublished);
        setTitle(title);
    }, [url]);

    return (
        <s.Wrapper>
            <s.Content>
                <s.Section>
                    <s.Label>작성일</s.Label>
                    <s.DateInputGroups>
                        <DatePicker
                            value={startDate}
                            maxDate={endDate}
                            placeholder="시작 날짜"
                            onChange={dates => {
                                setStartDate(dates);
                            }}
                        />
                        <div>~</div>
                        <DatePicker
                            value={endDate}
                            minDate={startDate}
                            placeholder="종료 날짜"
                            onChange={dates => {
                                setEndDate(dates);
                            }}
                        />
                    </s.DateInputGroups>
                    <s.ButtonGroups className="flex rounded border">
                        {DateButtonGroup.map((button, index) => (
                            <Button
                                key={index}
                                type="text"
                                className={dateSelectedButton === index ? 'buttonActive' : ''}
                                onClick={() =>
                                    handleClickSetDate(index, button.startDate, button.endDate)
                                }
                            >
                                {button.label}
                            </Button>
                        ))}
                    </s.ButtonGroups>
                </s.Section>
                <s.Section>
                    <s.Label>노출여부</s.Label>
                    <div className="flex items-center space-x-1">
                        <div>FAQ 항목</div>
                        <div>:</div>
                        <Select value={category} onChange={setCategory} style={{ width: '100px' }}>
                            <Select.Option value="all">전체</Select.Option>
                            <Select.Option value="ticket">티켓</Select.Option>
                            <Select.Option value="enterance">입장</Select.Option>
                            <Select.Option value="common">일반</Select.Option>
                        </Select>
                    </div>
                    <div className="ml-4 flex items-center space-x-1">
                        <div>메인</div>
                        <div>:</div>
                        <Select
                            value={isMainPublished}
                            onChange={setIsMainPublished}
                            style={{ width: '100px' }}
                        >
                            <Select.Option value="all">전체</Select.Option>
                            <Select.Option value="visible">노출</Select.Option>
                            <Select.Option value="invisible">미노출</Select.Option>
                        </Select>
                    </div>
                    <div className="ml-4 flex items-center space-x-1">
                        <div>메뉴</div>
                        <div>:</div>
                        <Select
                            value={isPublished}
                            onChange={setIsPublished}
                            style={{ width: '100px' }}
                        >
                            <Select.Option value="all">전체</Select.Option>
                            <Select.Option value="visible">노출</Select.Option>
                            <Select.Option value="invisible">미노출</Select.Option>
                        </Select>
                    </div>
                </s.Section>
                <s.Section>
                    <s.Label>공지 제목</s.Label>
                    <Input
                        placeholder="제목을 입력해주세요."
                        onChange={e => setTitle(e.target.value)}
                    />
                </s.Section>
            </s.Content>
            <div className="flex justify-center space-x-2">
                <Button type="primary" onClick={handleSearch}>
                    검색
                </Button>
                <Button type="default" className="bg-white" onClick={handleSearchClear}>
                    초기화
                </Button>
            </div>
        </s.Wrapper>
    );
};

export default FaqSearch;
