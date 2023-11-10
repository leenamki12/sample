import { PageHeader } from '@/components/ui';

import Section from '../../components/section/Section';
import TableWrapper from '../../components/table-wrapper/TableWrapper';

import * as S from './Dashboard.styled';

function Dashboard() {
    const stats = [
        { name: '전체 기업회원', stat: '71,897', change: '122', changeType: 'up' },
        { name: '상담 문의', stat: '512,020', change: '122', changeType: 'down' },
        { name: '승인대기중', stat: '15', change: '3', changeType: 'down' },
    ];

    const people = [
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member',
        },
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member',
        },
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member',
        },
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member',
        },
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member',
        },
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member',
        },
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member',
        },
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member',
        },
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member',
        },
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member',
        },
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member',
        },
    ];

    return (
        <S.Wrapper>
            <PageHeader title="기업관리 대시보드"></PageHeader>
            <Section title="기업통계">
                <S.StatsWrapper>
                    <S.GridWrapper>
                        {stats.map(item => (
                            <S.GridItem key={item.name}>
                                <S.GridTitle>{item.name}</S.GridTitle>
                                <S.GridContent>
                                    {item.stat}
                                    {item.change && (
                                        <S.GridChange stats={item.changeType}>
                                            {item.changeType === 'up' ? (
                                                <S.UpIcon aria-hidden="true" />
                                            ) : (
                                                <S.DownIcon aria-hidden="true" />
                                            )}
                                            {item.change}
                                        </S.GridChange>
                                    )}
                                </S.GridContent>
                            </S.GridItem>
                        ))}
                    </S.GridWrapper>
                </S.StatsWrapper>
            </Section>
            <Section title="승인 대기중 기업 목록">
                <TableWrapper>
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    Title
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    Role
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {people.map((person, idx) => (
                                <tr key={person.email + idx}>
                                    <td className="whitespace-nowrap py-[10px] pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                        {person.name}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-[10px] text-sm text-gray-500">
                                        {person.title}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-[10px] text-sm text-gray-500">
                                        {person.email}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-[10px] text-sm text-gray-500">
                                        {person.role}
                                    </td>
                                    <td className="relative whitespace-nowrap py-[10px] pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                        <a
                                            href="#"
                                            className="text-indigo-600 hover:text-indigo-900"
                                        >
                                            Edit
                                            <span className="sr-only">, {person.name}</span>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </TableWrapper>
            </Section>
        </S.Wrapper>
    );
}

export default Dashboard;
