import Divider from '@/components/ui/divider/Divider';

import Faq from './faq/Faq';
import Gallery from './gallery/Gallery';
import LineUp from './lineup/LineUp';
import Notice from './notice/Notice';
import Ticket from './ticket/Ticket';
import TimeTable from './time-table/TimeTable';
import TopVisual from './top-visual/TopVisual';

function Home() {
    return (
        <>
            <TopVisual />
            <Divider />
            <Notice />
            <Divider />
            <LineUp />
            <Divider />
            <Ticket />
            <TimeTable />
            <Divider />
            <Faq />
            <Divider />
            <Gallery />
        </>
    );
}

export default Home;
