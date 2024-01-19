import { useMemo, useState } from 'react';

import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';

import Modal from '@/components/ui/modals/basic-modal/BasicModal';
import SwiperModal from '@/components/ui/modals/swiper-modal/SwiperModal';
import { Performance } from '@/types/admin/performance';

import * as S from './PerformanceList.styled';

type Props = {
    datas: Performance[];
    isRtl?: boolean;
};

function PerformanceList({ datas, isRtl = false, ...props }: Props) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [modalData, setModalData] = useState<Performance>();

    const performanceData = useMemo(() => {
        if (datas.length <= 5) {
            const newData: Performance[] = [];

            const maxLength = Math.ceil(6 / datas.length);

            for (let i = 0; i < maxLength; i++) {
                newData.push(...datas);
            }

            return newData;
        } else {
            return datas;
        }
    }, []);

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: 'performance',
        drag: true,
        rtl: false,
        slides: {
            origin: 'center',
            perView: 'auto',
            spacing: 20,
        },
        breakpoints: {
            '(max-width: 640px)': {
                drag: true,
                slides: { origin: 'center', perView: 'auto', spacing: 10 },
            },
            '(max-width: 768px)': {
                drag: true,
                slides: { origin: 'center', perView: 'auto', spacing: 20 },
            },
        },
    });

    const handleOpenModal = (data: Performance) => {
        setIsModalOpen(true);
        setModalData(data);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <S.Wrapper>
            <div ref={sliderRef} className="keen-slider" {...props}>
                {performanceData.length > 0 &&
                    performanceData.map((item, index) => (
                        <S.PerformanceItem
                            key={index}
                            className={`keen-slider__slide number-slide${index}`}
                        >
                            <S.ContentsBox
                                image={`storage/${item.main_image_url}`}
                                onClick={() => handleOpenModal(item)}
                            >
                                <S.BackgroundGradiant image={`storage/${item.main_image_url}`}>
                                    <S.TextBox>
                                        <S.Title>
                                            <strong>{item.title}</strong>
                                        </S.Title>
                                    </S.TextBox>
                                </S.BackgroundGradiant>
                            </S.ContentsBox>
                        </S.PerformanceItem>
                    ))}
            </div>
            <Modal
                show={isModalOpen}
                onClose={handleCloseModal}
                backgroundColor="transparent"
                maxWidth="full"
                className="overflow-visible"
            >
                {modalData && <SwiperModal data={modalData} setIsModalOpen={setIsModalOpen} />}
            </Modal>
        </S.Wrapper>
    );
}

export default PerformanceList;
