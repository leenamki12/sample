import * as S from './Table.styled';

export type Column = {
    title: string;
    field: string;
};

export type Data = {
    [key: string]: string | number;
};

type Props = {
    columns: Column[];
    data: Data[];
};

export default function Table({ columns, data }: Props) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={column.field}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <S.TableBody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map(column => (
                            <S.TableCell key={column.field}>{row[column.field]}</S.TableCell>
                        ))}
                    </tr>
                ))}
            </S.TableBody>
        </table>
    );
}
