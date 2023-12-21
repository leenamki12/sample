import { useState } from 'react';

import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';

import Modal from '@/components/ui/modals/basic-modal/BasicModal';
import SwiperModal from '@/components/ui/modals/swiper-modal/SwiperModal';

import * as S from './AlbumList.styled';

export type AlbumProps = {
    title: string;
    year: string;
    month: string;
    location: string;
    info?: string;
} & S.AlbumProps;

type Props = {
    albums: AlbumProps[];
    isRtl?: boolean;
};

function AlbumList({ albums, isRtl = false, ...props }: Props) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const animation = { duration: 10000, easing: (t: number) => t };
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

    const handleOpenModal = () => {
        setIsModalOpen(true);
        handleAnimation(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        handleAnimation(false);
    };

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
                {albums.map((album, index) => (
                    <S.AlbumItem key={index} className={`keen-slider__slide number-slide${index}`}>
                        <S.ContentsBox image={album.image} onClick={handleOpenModal}>
                            <div>
                                <strong>{album.title}</strong>
                            </div>
                        </S.ContentsBox>
                    </S.AlbumItem>
                ))}
            </div>
            <Modal show={isModalOpen} onClose={handleCloseModal}>
                <SwiperModal />
            </Modal>
        </S.Wrapper>
    );
}

export default AlbumList;
