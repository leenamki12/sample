import { useEffect, useRef, useState } from 'react';

import Divider from '@/components/ui/divider/Divider';

import Faq from './faq/Faq';
import Gallery from './gallery/Gallery';
import LineUp from './line-up/LineUp';
import Notice from './notice/Notice';
import QuickMoveLink from './quick-move-link/QuickMoveLink';
import Ticket from './ticket/Ticket';
import TimeTable from './time-table/TimeTable';
import TopVisual from './top-visual/TopVisual';

interface RefObject {
    [key: string]: React.MutableRefObject<HTMLDivElement | null>;
}

function Home() {
    const [visibleSection, setVisibleSection] = useState(0);

    const componentsRefs: RefObject = {
        visual: useRef(null),
        notice: useRef(null),
        lineup: useRef(null),
        ticket: useRef(null),
        timetable: useRef(null),
        faq: useRef(null),
        gallery: useRef(null),
    };

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const offset = windowHeight / 2;
            const scrollTop = window.scrollY + offset;
            const componentKeys = Object.keys(componentsRefs);
            let currentSection = 0;
            for (let i = componentKeys.length - 1; i >= 0; i--) {
                const key = componentKeys[i];
                const componentRef = componentsRefs[key].current;

                if (componentRef && componentRef.offsetTop <= scrollTop) {
                    currentSection = i;
                    break;
                }
            }
            setVisibleSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [componentsRefs]);

    const handleMoveUp = () => {
        if (visibleSection > 0) {
            const targetSection = Object.values(componentsRefs)[visibleSection - 1];
            targetSection.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleMoveDown = () => {
        if (visibleSection < Object.keys(componentsRefs).length - 1) {
            const targetSection = Object.values(componentsRefs)[visibleSection + 1];
            targetSection.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <TopVisual ref={componentsRefs.visual} />
            <Divider />
            <Notice ref={componentsRefs.notice} />
            <Divider />
            <LineUp ref={componentsRefs.lineup} />
            <Divider />
            <Ticket ref={componentsRefs.ticket} />
            <TimeTable ref={componentsRefs.timetable} />
            <Divider />
            <Faq ref={componentsRefs.faq} />
            <Divider />
            <Gallery ref={componentsRefs.gallery} />
            <QuickMoveLink
                current={`${visibleSection + 1}`}
                length={`${Object.keys(componentsRefs).length}`}
                onClickUp={handleMoveUp}
                onClickDonw={handleMoveDown}
            />
        </>
    );
}

export default Home;
