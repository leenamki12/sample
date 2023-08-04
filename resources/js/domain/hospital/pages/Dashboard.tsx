import Table from '@/components/ui/table/Table';

// 선택일자, 예약희망시간, 진료과목명, 고객명, 생년월일, 기업명, 기업담당자계정이름,연락처, 문의내용, 응대여부
const people = [
    {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'Member',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
];

const columns = Object.keys(people[0]).map(key => ({
    title: key,
    field: key,
}));

function Dashboard() {
    return <Table columns={columns} data={people} />;
}

export default Dashboard;
