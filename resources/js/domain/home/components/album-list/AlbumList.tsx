import { useState } from 'react';
import Marquee from 'react-fast-marquee';

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
    direction?: 'right' | 'left';
};

function AlbumList({ albums, direction, ...props }: Props) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Marquee
                loop={0}
                pauseOnHover
                speed={80}
                direction={direction ? direction : 'left'}
                {...props}
            >
                {albums.map(album => (
                    <S.AlbumItem key={album.title}>
                        <S.ContentsBox image={album.image} onClick={handleOpenModal}>
                            <div>
                                <strong>{album.title}</strong>
                            </div>
                        </S.ContentsBox>
                    </S.AlbumItem>
                ))}
                <S.AlbumItem className="bg-white">1</S.AlbumItem>
                <S.AlbumItem className="bg-white">2</S.AlbumItem>
            </Marquee>

            <Modal show={isModalOpen} onClose={handleCloseModal}>
                <SwiperModal />
            </Modal>
        </>
    );
}

export default AlbumList;
