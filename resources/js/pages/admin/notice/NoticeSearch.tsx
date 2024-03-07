import React, { useState } from 'react';
import { DatePicker, Select, Input, Button } from 'antd';

const { RangePicker } = DatePicker;
const { Option } = Select;

interface NoticeSearchProps {
    onSearch: (formData: any) => void;
}

const NoticeSearch: React.FC<NoticeSearchProps> = ({ onSearch }) => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [isMainPublished, setIsMainPublished] = useState<string>('all');
    const [isPublished, setIsPublished] = useState<string>('all');
    const [title, setTitle] = useState<string>('');

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
            date.getDate()
        ).padStart(2, '0')}`;
    };

    const handleSearch = () => {
        const formData = {
            start_date: startDate ? formatDate(startDate.toString()) : '',
            end_date: endDate ? formatDate(endDate.toString()) : '',
            is_main_published:
                isMainPublished === 'all' ? '' : (isMainPublished === 'visible').toString(),
            is_published: isPublished === 'all' ? '' : (isPublished === 'visible').toString(),
            title,
        };
        onSearch(formData);
    };

    return (
        <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '1rem' }}>등록일자</label>
            <RangePicker
                onChange={dates => {
                    setStartDate(dates[0].toDate());
                    setEndDate(dates[1].toDate());
                }}
                style={{ marginRight: '1rem' }}
            />
            <label style={{ marginRight: '1rem' }}>메인 노출여부</label>
            <Select
                defaultValue="all"
                onChange={setIsMainPublished}
                style={{ marginRight: '1rem', width: '100px' }}
            >
                <Option value="all">전체</Option>
                <Option value="visible">노출</Option>
                <Option value="invisible">미노출</Option>
            </Select>
            <label style={{ marginRight: '1rem' }}>메뉴 노출여부</label>
            <Select
                defaultValue="all"
                onChange={setIsPublished}
                style={{ marginRight: '1rem', width: '100px' }}
            >
                <Option value="all">전체</Option>
                <Option value="visible">노출</Option>
                <Option value="invisible">미노출</Option>
            </Select>
            <label style={{ marginRight: '1rem' }}>공지 제목</label>
            <Input
                placeholder="공지제목"
                onChange={e => setTitle(e.target.value)}
                style={{ width: '300px', marginRight: '1rem' }}
            />
            <Button
                type="primary"
                style={{ marginLeft: '1rem', backgroundColor: 'blue', borderColor: 'blue' }}
                onClick={handleSearch}
            >
                검색
            </Button>
        </div>
    );
};

export default NoticeSearch;
