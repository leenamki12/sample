import { useEffect, useMemo, useState } from 'react';

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

    const animation = { duration: 20000, easing: (t: number) => t };
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: 'performance',
        drag: false,
        rtl: isRtl,
        slides: {
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
                created(s) {
                    s.animator.stop();
                },
                updated(s) {
                    s.animator.stop();
                },
                animationEnded(s) {
                    s.animator.stop();
                },
            },
            '(min-width: 769px)': {
                created(s) {
                    s.moveToIdx(4, true, animation);
                },
                updated(s) {
                    s.moveToIdx(s.track.details.abs + 4, true, animation);
                },
                animationEnded(s) {
                    const { rel, progress } = s.track.details;
                    if (rel === 0 && progress !== 0) {
                        s.moveToIdx(0, true, { duration: 0 });
                    } else {
                        s.moveToIdx(s.track.details.abs + 4, true, animation);
                    }
                },
            },
        },
    });

    const handleAnimation = (animationPause: boolean) => {
        if (animationPause) {
            if (slider.current) {
                slider.current.animator.stop();
            }
        } else {
            if (slider.current && window.innerWidth >= 768) {
                slider.current.moveToIdx(slider.current.track.details.abs + 4, true, animation);
            }
        }
    };

    const handleOpenModal = (data: Performance) => {
        setIsModalOpen(true);
        handleAnimation(true);
        setModalData(data);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (!isModalOpen) handleAnimation(false);
    }, [isModalOpen]);

    return (
        <S.Wrapper>
            <div
                ref={sliderRef}
                onMouseEnter={() => {
                    handleAnimation(true);
                }}
                onMouseLeave={() => {
                    if (!isModalOpen) {
                        handleAnimation(false);
                    }
                }}
                className="keen-slider"
                {...props}
            >
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
                                <div>
                                    <S.Title>
                                        <strong>{item.title}</strong>
                                    </S.Title>
                                </div>
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
