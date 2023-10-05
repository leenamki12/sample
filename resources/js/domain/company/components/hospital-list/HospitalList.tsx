import { Link } from '@inertiajs/react';

import { useHospitalData } from '@/domain/company/datas';

import HospitalTopInfo from '../hospital-top-info/HospitalTopInfo';

import * as S from './HospitalList.styled';

function HospitalList() {
    const { datas } = useHospitalData();

    return (
        <S.Wrapper>
            {datas.map(hospital => (
                <S.Item key={hospital.id}>
                    <Link href={`company/detail/${hospital.id}`}>
                        <HospitalTopInfo data={hospital} type="list" />
                    </Link>
                </S.Item>
            ))}
        </S.Wrapper>
    );
}

export default HospitalList;
