import dayjs from 'dayjs';

export const DateButtonGroup = [
    { label: '오늘', startDate: dayjs().startOf('day'), endDate: dayjs().startOf('day') },
    {
        label: '1주일',
        startDate: dayjs().subtract(7, 'days').startOf('day'),
        endDate: dayjs().endOf('day'),
    },
    {
        label: '1개월',
        startDate: dayjs().subtract(1, 'month').startOf('day'),
        endDate: dayjs().endOf('day'),
    },
    {
        label: '3개월',
        startDate: dayjs().subtract(3, 'month').startOf('day'),
        endDate: dayjs().endOf('day'),
    },
    {
        label: '6개월',
        startDate: dayjs().subtract(6, 'month').startOf('day'),
        endDate: dayjs().endOf('day'),
    },
    {
        label: '1년',
        startDate: dayjs().subtract(1, 'year').startOf('day'),
        endDate: dayjs().endOf('day'),
    },
];
