import sat01 from '@assets/pages/line-up/lineup_sat01.png';
import sat02 from '@assets/pages/line-up/lineup_sat02.png';
import sat03 from '@assets/pages/line-up/lineup_sat03.png';
import sat04 from '@assets/pages/line-up/lineup_sat04.png';
import sat05 from '@assets/pages/line-up/lineup_sat05.png';
import sat06 from '@assets/pages/line-up/lineup_sat06.png';
import sat07 from '@assets/pages/line-up/lineup_sat07.png';
import sat08 from '@assets/pages/line-up/lineup_sat08.png';
import sat09 from '@assets/pages/line-up/lineup_sat09.png';
import sat10 from '@assets/pages/line-up/lineup_sat10.png';
import sat11 from '@assets/pages/line-up/lineup_sat11.png';
import sat12 from '@assets/pages/line-up/lineup_sat12.png';
import sat13 from '@assets/pages/line-up/lineup_sat13.png';
import sun01 from '@assets/pages/line-up/lineup_sun01.png';
import sun02 from '@assets/pages/line-up/lineup_sun02.png';
import sun03 from '@assets/pages/line-up/lineup_sun03.png';
import sun04 from '@assets/pages/line-up/lineup_sun04.png';
import sun05 from '@assets/pages/line-up/lineup_sun05.png';
import sun06 from '@assets/pages/line-up/lineup_sun06.png';
import sun07 from '@assets/pages/line-up/lineup_sun07.png';
import sun08 from '@assets/pages/line-up/lineup_sun08.png';
import sun09 from '@assets/pages/line-up/lineup_sun09.png';
import sun10 from '@assets/pages/line-up/lineup_sun10.png';
import sun11 from '@assets/pages/line-up/lineup_sun11.png';
import sun12 from '@assets/pages/line-up/lineup_sun12.png';
import sun13 from '@assets/pages/line-up/lineup_sun13.png';

export type LineUpData = {
    names: {
        en: string | null;
        ko: string | null;
    };
    explanations: {
        short: string;
        long: string;
    };
    links: {
        instagram: string | null;
        youtube: string | null;
        spotify: string | null;
    };
    image: string;
};

const satDatas: LineUpData[] = [
    {
        names: {
            en: 'JANNABI',
            ko: '잔나비',
        },
        explanations: {
            short: '어느덧 국내 음악계를 대표하는 밴드로 자리 잡은 잔나비, 특유의 서정적이고 레트로한 감성으로 대체 불가능한 매력을 선사합니다.',
            long: `어느덧 국내 음악계를 대표하는 밴드로 자리 잡은 잔나비, 특유의 서정적이고 레트로한 감성으로 대체 불가능한 매력을 선사합니다.\n\n 올해로 데뷔 10주년을 맞아 더욱 활발한 활동을 예고한 그들. 오는 4월 THE GLOW 2024에서 펼쳐질 그들의 무대가 기대됩니다. `,
        },
        links: {
            instagram: 'https://www.instagram.com/bandjannabi/',
            youtube: 'https://www.youtube.com/@BandJannabi',
            spotify: 'https://open.spotify.com/artist/2SY6OktZyMLdOnscX3DCyS',
        },
        image: sat01,
    },
    {
        names: {
            en: 'Lee Seung Yoon',
            ko: '이승윤',
        },
        explanations: {
            short: '세상과 함께 노래하는 싱어송라이터 이승윤, 다양한 무대에서 자신만의 라이브 퍼포먼스를 선보이며 ‘공연 강자’, ‘페스티벌 강자’로 자리매김하고 있습니다.',
            long: `"세상과 함께 노래하는 싱어송라이터 이승윤, 다양한 무대에서 자신만의 라이브 퍼포먼스를 선보이며 ‘공연 강자’, ‘페스티벌 강자’로 자리매김하고 있습니다.\n\n감각적이고 사색적이며 때로는 저돌적이기도 한 노랫말로 음악을 통해 자신만의 메시지를 전달하는 ‘사운드 메신저’ 이승윤이 선보일 뜨거운 무대를 기대해 주세요."`,
        },
        links: {
            instagram: 'https://www.instagram.com/bgsmsyl/',
            youtube: 'https://www.youtube.com/@leeseungyoon.official',
            spotify: 'https://open.spotify.com/artist/6zn0ihyAApAYV51zpXxdEp',
        },
        image: sat11,
    },
    {
        names: {
            en: 'Silica Gel',
            ko: '실리카겔',
        },
        explanations: {
            short: '고유의 사이키델리아, 폭발적인 에너지의 라이브 퍼포먼스가 응집하여 현재 가장 새롭고 용감한 사운드를 만드는 밴드 실리카겔',
            long: `고유의 사이키델리아, 폭발적인 에너지의 라이브 퍼포먼스가 응집하여 현재 가장 새롭고 용감한 사운드를 만드는 밴드 실리카겔.\n\n그들의 가능성이 궁금하다면 그 답은 음악 속에서 찾을 수 있을 것입니다. 누구도 시도한 적 없기에 들어본 적 없는, 들어본 적 없기에 새로울 수밖에 없는, 이상한 것들은 늘 곱씹을수록 새로움을 선사하기 때문입니다.`,
        },
        links: {
            instagram: 'https://www.instagram.com/silicagel.official',
            youtube: 'https://www.youtube.com/@SilicaGel',
            spotify: 'https://open.spotify.com/artist/2kxVxKOgoefmgkwoHipHsn',
        },
        image: sat02,
    },
    {
        names: {
            en: 'THORNAPPLE',
            ko: '쏜애플',
        },
        explanations: {
            short: '흉내 낼 수 없는 독특한 감성의 가사와 몽환적인 사운드를 가진 밴드 쏜애플, 대체 불가한 팀 고유의 음악성은 리스너들의 사랑을 꾸준히 받아오고 있습니다.',
            long: '흉내 낼 수 없는 독특한 감성의 가사와 몽환적인 사운드를 가진 밴드 쏜애플, 대체 불가한 팀 고유의 음악성은 리스너들의 사랑을 꾸준히 받아오고 있습니다.\n\n지난해 4년 만의 정규앨범 발매를 통해 더 진해진 음악적 색채와 깊어진 세계관을 확장시키는데 성공했으며, 발매 기념 음감회와 전국 투어를 시작으로 활동 영역을 또 한 번 넓혀가고 있습니다.',
        },
        links: {
            instagram: 'https://www.instagram.com/thornapple_official/',
            youtube: 'https://www.youtube.com/@thornappleofficial',
            spotify: 'https://open.spotify.com/artist/6S4fsREHT1NEjTb3lYD2pG',
        },
        image: sat03,
    },
    {
        names: {
            en: 'Fiji Blue',
            ko: '피지 블루',
        },
        explanations: {
            short: '피지블루는 아티스트, 작곡가, 그리고 씁쓸하고 달콤한 낙관주의자 트레버 데링의 가명입니다.',
            long: "피지블루는 아티스트, 작곡가, 그리고 씁쓸하고 달콤한 낙관주의자 트레버 데링의 가명입니다.\n\n 그는 2019년부터 'Waves', 'It Takes Two' 등 히트 싱글을 연달아 선보이며 전 세계의 팬들을 모았습니다. 올해에는 트레버 데링이 데뷔 앨범을 발표할 예정입니다.",
        },
        links: {
            instagram: 'https://www.instagram.com/fijiblue/',
            youtube: 'https://www.youtube.com/@fijiblue',
            spotify:
                'https://open.spotify.com/artist/1e7K8jD3wRuQfnwDAOeGqe?si=f-UQvd8YTFGQNf5F7-9FZQ',
        },
        image: sat04,
    },
    {
        names: {
            en: 'The Millennial Club',
            ko: '더 밀레니얼 클럽',
        },
        explanations: {
            short: '더 밀레니얼 클럽은 미국 출신의 3인조 얼터너티브 팝 밴드로, Andres Owens(기타, 보컬), Jared Oritz(베이스, 키보드), Jake Stevenson(기타, 색소폰)으로 이루어져 있습니다.',
            long: '더 밀레니얼 클럽은 미국 출신의 3인조 얼터너티브 팝 밴드로, Andres Owens(기타, 보컬), Jared Oritz(베이스, 키보드), Jake Stevenson(기타, 색소폰)으로 이루어져 있습니다.\n\n 그들은 댄스에서 영감을 받은 80년대 팝, 클래식 90년대 R&B와 솔직한 서정성을 혼합하여 그들의 독특한 남부 캘리포니아 사운드를 만들어냅니다.',
        },
        links: {
            instagram: 'https://www.instagram.com/themillennialclub/',
            youtube: 'https://www.youtube.com/@themillennialclub',
            spotify: 'https://open.spotify.com/artist/5Mk3yOBlfweeKamsDiap8H',
        },
        image: sat05,
    },
    {
        names: {
            en: 'Lacuna',
            ko: '라쿠나',
        },
        explanations: {
            short: '영화 ‘이터널 선샤인’의 기억을 지워주는 회사 ‘라쿠나’에서 모티브를 얻은 이름답게 여름밤에 꾸는 총천연색의 꿈같이 몽환적이고도 강렬한 밴드 사운드를 표방하는 밴드 라쿠나.',
            long: '영화 ‘이터널 선샤인’의 기억을 지워주는 회사 ‘라쿠나’에서 모티브를 얻은 이름답게 여름밤에 꾸는 총천연색의 꿈같이 몽환적이고도 강렬한 밴드 사운드를 표방하는 밴드 라쿠나.\n\n 네 명의 동갑내기 소년들이 무대 위에서 만들어내는 호흡과 창의적인 송라이팅, 시적인 가사가 어우러져 진한 청춘의 색깔을 전합니다.',
        },
        links: {
            instagram: 'https://www.instagram.com/band_lacuna/',
            youtube: 'https://www.youtube.com/@bandlacuna',
            spotify: 'https://open.spotify.com/artist/2FDl06nCrSYpA1n9PLZfen',
        },
        image: sat06,
    },
    {
        names: {
            en: 'Band Nah',
            ko: '나상현씨밴드',
        },
        explanations: {
            short: '세상을 살아가는 모든 청춘에 대한 보편적인 이야기를 노래하는 나상현씨밴드, 밴드 음악을 기반으로 다양한 장르적 방향성을 통해 일상 속 소중한 가치들을 풀어냅니다.',
            long: '세상을 살아가는 모든 청춘에 대한 보편적인 이야기를 노래하는 나상현씨밴드, 밴드 음악을 기반으로 다양한 장르적 방향성을 통해 일상 속 소중한 가치들을 풀어냅니다.\n\n 2014년 결성 이후 무려 100여 곡 이상을 발매, 자연스럽게 ‘다작 밴드’ 수식어를 얻은 그들은 무서운 속도의 성장을 보여주고 있습니다.',
        },
        links: {
            instagram: 'https://www.instagram.com/band_nah/',
            youtube: 'https://www.youtube.com/@bandnah',
            spotify: 'https://open.spotify.com/artist/5td0g0Owd8ZYu7SVb6f9xh',
        },
        image: sat07,
    },
    {
        names: {
            en: 'Public Library Commute',
            ko: '퍼블릭 라이브러리 커뮤트',
        },
        explanations: {
            short: 'Public Library Commte로 알려진 Conrad Hsiang은 7천만 이상의 글로벌 스트리밍을 기록하며, 인디 팝계에서 이제는 널리 알려진 이름이 되었습니다.',
            long: 'Public Library Commte로 알려진 Conrad Hsiang은 7천만 이상의 글로벌 스트리밍을 기록하며, 인디 팝계에서 이제는 널리 알려진 이름이 되었습니다.\n\n 산들바람이 부는 악기들 위에 크루너 멜로디를 놓으며 독특하게 만들어진 시그니처 사운드로도 유명한 그는, 다양한 아티스트들과의 협업을 통해 광범위한 음악적 능력을 선보이고 있습니다.',
        },
        links: {
            instagram: 'https://www.instagram.com/publiclibrarycommute/',
            youtube: 'https://www.youtube.com/@publiclibrarycommute',
            spotify: 'https://open.spotify.com/artist/2FEdyVgGMSclOsYJ4wAQUY',
        },
        image: sat08,
    },
    {
        names: {
            en: 'dosii',
            ko: '도시',
        },
        explanations: {
            short: '몽환적인 멜로디와 도회적인 감성으로 사랑 받고 있는 dosii, 2019년 동명의 정규앨범 ‘dosii’로 데뷔한 대한민국의 혼성그룹입니다.',
            long: `몽환적인 멜로디와 도회적인 감성으로 사랑 받고 있는 dosii, 2019년 동명의 정규앨범 ‘dosii’로 데뷔한 대한민국의 혼성그룹입니다.\n\n 리메이크 앨범 발매부터 최근 선보인 EP ‘My bed’까지 다양한 음악적 스펙트럼을 보여주며, 탄탄한 매니아층을 쌓아오고 있습니다.`,
        },
        links: {
            instagram: 'https://www.instagram.com/dosii_official/',
            youtube: 'www.youtube.com/@dosiidosii',
            spotify: 'https://open.spotify.com/artist/41lcf5k3PkUdxupYLkcjCd',
        },
        image: sat12,
    },
    {
        names: {
            en: 'Yoon Ji Young',
            ko: '윤지영',
        },
        explanations: {
            short: '노래를 오롯이 전달하는 담백한 목소리와 공감을 자아내는 솔직한 가사가 매력적인 싱어송라이터 윤지영.',
            long: `노래를 오롯이 전달하는 담백한 목소리와 공감을 자아내는 솔직한 가사가 매력적인 싱어송라이터 윤지영.\n\n지난 해 4월 발매한 첫 정규앨범 ‘나의 정원에서’를 통해 음악적으로 성숙하고 단단해진 모습을 보여주며 대중음악 평단의 관심과 기대를 자아내고 있습니다.`,
        },
        links: {
            instagram: 'https://www.instagram.com/bye_xoxo_/',
            youtube: 'https://www.youtube.com/@Yoonjiyoung',
            spotify: 'https://open.spotify.com/artist/5SkCZXyRQxw5ZLWAH5r4UJ',
        },
        image: sat13,
    },
    {
        names: {
            en: 'LØREN',
            ko: '로렌',
        },
        explanations: {
            short: '독특한 록 사운드로 리스너들에게 강렬한 임팩트를 선사하며, 단기간 내 국내외 주목을 이끌어낸 글로벌 아티스트 LØREN.',
            long: '독특한 록 사운드로 리스너들에게 강렬한 임팩트를 선사하며, 단기간 내 국내외 주목을 이끌어낸 글로벌 아티스트 LØREN.\n\n 드럼, 베이스, 기타 등의 연주부터 작곡, 녹음, 프로듀싱까지 다재다능한 능력을 바탕으로 지난해 데뷔 EP 앨범 [Put Up a Fight] 를 발매하며 Coachella, Head in the Clouds 및 Summer Sonic을 비롯한 여러 무대에 오르는 등 활약을 펼치고 있습니다.',
        },
        links: {
            instagram: 'https://www.instagram.com/lorenisalone/',
            youtube: null,
            spotify: 'https://open.spotify.com/artist/18mAiJGFVBU5YdiIUIdzL2',
        },
        image: sat10,
    },
    {
        names: {
            en: 'Redoor',
            ko: '리도어',
        },
        explanations: {
            short: "2021년 첫 싱글 '영원은 그렇듯'으로 메이저 씬에 첫 발을 내디딘 밴드 리도어. 몽환적인 분위기의 사운드로 대중에게 강렬한 첫인상을 남긴 바 있습니다.",
            long: "2021년 첫 싱글 '영원은 그렇듯'으로 메이저 씬에 첫 발을 내디딘 밴드 리도어. 몽환적인 분위기의 사운드로 대중에게 강렬한 첫인상을 남긴 바 있습니다.\n\n 자신들의 장르, 세계관에 대한 고뇌와 부딪힘을 발판 삼아 성장해 나가며, 현재 씬에서 가장 떠오르는 밴드로 주목받고 있는 그들이 선보일 무대를 기대해 주세요.",
        },
        links: {
            instagram: 'https://www.instagram.com/band_redoor/',
            youtube: 'https://www.youtube.com/@bandredoor1330',
            spotify: 'https://open.spotify.com/artist/5xhi1KB7WkPiTYb5Fm3YvS',
        },
        image: sat09,
    },
];

const sunDatas: LineUpData[] = [
    {
        names: {
            en: '10CM',
            ko: '십센치',
        },
        explanations: {
            short: '한국 음악계를 대표하는 하나의 아이콘 10CM, 담백한 가사와 달콤한 멜로디로 대중들의 마음을 사로잡고 있습니다.',
            long: '한국 음악계를 대표하는 하나의 아이콘 10CM, 담백한 가사와 달콤한 멜로디로 대중들의 마음을 사로잡고 있습니다.\n\n다양한 아티스트와의 콜라보레이션, OST 발매 등 꾸준한 활동을 이어오며 대체불가한 존재감을 자랑하는 것과 동시에 그에 대한 열풍은 여전히 식을 줄 모르고 있습니다.',
        },
        links: {
            instagram: 'https://www.instagram.com/10cm_official/',
            youtube: 'https://www.youtube.com/@10CM',
            spotify: 'https://open.spotify.com/artist/6zn0ihyAApAYV51zpXxdEp',
        },
        image: sun11,
    },
    {
        names: {
            en: 'Zion.T',
            ko: '자이언티',
        },
        explanations: {
            short: '대중음악계에서 두각을 드러내며 점차 독자적인 영역을 구축해온 싱어송라이터 자이언티. 올해 데뷔 13년을 맞이하며 보다 깊어진 삶에 대한 성찰과 경험을 바탕으로 일상의 다양한 이야기들을 선보입니다.',
            long: '대중음악계에서 두각을 드러내며 점차 독자적인 영역을 구축해온 싱어송라이터 자이언티. 올해 데뷔 13년을 맞이하며 보다 깊어진 삶에 대한 성찰과 경험을 바탕으로 일상의 다양한 이야기들을 선보입니다.\n\n R&B 와 재즈, 소프트 팝과 발라드, 댄스 뮤직의 다양한 스타일을 넘나들면서도 사운드의 유행에 휩쓸리지 않고 자신만의 결로 완성시키는 관록과 단단함은 그의 오늘 그리고 내일을 기대하게 만드는 이유입니다.',
        },
        links: {
            instagram: 'https://www.instagram.com/ziont/',
            youtube: 'https://www.youtube.com/@Zion.T_Official',
            spotify: 'https://open.spotify.com/artist/5HenzRvMtSrgtvU16XAoby',
        },
        image: sun01,
    },
    {
        names: {
            en: 'Car, the garden',
            ko: '카더가든',
        },
        explanations: {
            short: '허스키한 음색과 드라마틱한 가창력을 자랑하는 뮤지션 카더가든. 그가 다루는 이야기의 스펙트럼에는 제약이 없습니다.',
            long: '허스키한 음색과 드라마틱한 가창력을 자랑하는 뮤지션 카더가든. 그가 다루는 이야기의 스펙트럼에는 제약이 없습니다.\n\n 동시에 수많은 음악 장르의 경계를 허물며 대중들에게 존재감을 드러내며 깊은 인상을 남기고 있는 그는, 지금까지도 여전히 현재진행형인, 대체불가한 아티스트입니다.',
        },
        links: {
            instagram: 'https://www.instagram.com/carthegarden/',
            youtube: 'https://www.youtube.com/@Carthegarden',
            spotify:
                'https://open.spotify.com/artist/7c1HgFDe8ogy5NOZ1ANCJQ?si=tVcvtQ3WSHu9dbpeWKvECA',
        },
        image: sun02,
    },
    {
        names: {
            en: 'george',
            ko: '죠지',
        },
        explanations: {
            short: '가감 없이 솔직한 매력을 보여주는 알앤비 싱어송라이터 죠지. 언더그라운드에서 시작해 어느덧 메인 스트림을 아우르는 아티스트로 입지를 굳건히 다지고 있습니다.',
            long: `가감 없이 솔직한 매력을 보여주는 알앤비 싱어송라이터 죠지. 언더그라운드에서 시작해 어느덧 메인 스트림을 아우르는 아티스트로 입지를 굳건히 다지고 있습니다.\n\n 2017년에 발표한 싱글 ‘Boat’를 선보이며 개성 있는 톤으로 국내 인지도를 높이기 시작했으며, 지난해 정규앨범 ‘FRR’을 발매하며 대중들에게 또 한 번 그의 존재감을 보여주며 활약을 예고했습니다.`,
        },
        links: {
            instagram: 'https://www.instagram.com/leeeegeorge/',
            youtube: 'https://www.youtube.com/@leeeegeorge',
            spotify: 'https://open.spotify.com/artist/2pRZp2WxvnWWiSPcSSYkNVV',
        },
        image: sun03,
    },
    {
        names: {
            en: 'ADOY',
            ko: '아도이',
        },
        explanations: {
            short: '신스팝을 기반으로 음악성과 대중성을 동시에 갖춘 밴드 ADOY. 잘 다듬어진 사운드와 멜로디로 국내외 음악 관계자들과 팬들에게 큰 호응을 얻고 있습니다.',
            long: '신스팝을 기반으로 음악성과 대중성을 동시에 갖춘 밴드 ADOY. 잘 다듬어진 사운드와 멜로디로 국내외 음악 관계자들과 팬들에게 큰 호응을 얻고 있습니다.\n\n 그들의 음악은 여름, 파도, 밤공기, 맥주, 꿈, 미래, 외로움 등 떠올리는 것만으로도 기분이 좋아지지만 조금은 복잡한 청춘의 정서를 노래합니다. 라이브에서 가장 빛을 발하는, 그들만의 색깔이 가득한 무대를 기대해 주세요.',
        },
        links: {
            instagram: 'https://www.instagram.com/adoyband/',
            youtube: 'https://www.youtube.com/@ADOYband',
            spotify: 'https://open.spotify.com/artist/64sY7LsUjNE3ifONkftTXC',
        },
        image: sun04,
    },
    {
        names: {
            en: 'brb.',
            ko: null,
        },
        explanations: {
            short: 'Zie, Clo, Marc로 구성된 싱가포르 출신의 3인조 밴드 brb.는 80년대와 90년대의 향수를 오늘날의 사운드와 결합시키는 음악을 창조합니다.',
            long: 'Zie, Clo, Marc로 구성된 싱가포르 출신의 3인조 밴드 brb.는 80년대와 90년대의 향수를 오늘날의 사운드와 결합시키는 음악을 창조합니다.\n\n 2018년 말 데뷔한 이후 그들은 전 세계의 팬들을 모았고, 아시아 전역의 페스티벌 무대에서부터 미국 투어까지 입지를 넓혀가며 글로벌 밴드로 자리매김하고 있습니다.',
        },
        links: {
            instagram: 'https://www.instagram.com/holdonbrb/',
            youtube: 'https://www.youtube.com/@brbpls',
            spotify:
                'https://open.spotify.com/artist/2XBiI8PjCnjJ3XKWtiKcvc?si=8oUa97r7S6CdXOdkJ5aZdA&nd=1&dlsi=e6df3600fcc04dbe',
        },
        image: sun05,
    },
    {
        names: {
            en: 'Glen Check',
            ko: '글렌체크',
        },
        explanations: {
            short: '쿨한 애티튜드와 열정적인 비트로 페스티벌 여름의 정취를 떠올리게 하는 밴드 글렌체크, 현대적인 팝 감성 아래 다양한 장르의 에센셜을 녹여내며 국내외 리스너들을 열광케했습니다.',
            long: '쿨한 애티튜드와 열정적인 비트로 페스티벌 여름의 정취를 떠올리게 하는 밴드 글렌체크, 현대적인 팝 감성 아래 다양한 장르의 에센셜을 녹여내며 국내외 리스너들을 열광케했습니다.\n\n 지난해 월간 발매 프로젝트로 매달 새로운 곡을 선보이며 활발한 음악 작업을 이어온 이들은, 이번 무대에서도 열기 가득한 라이브 퍼포먼스를 기대하게 합니다.',
        },
        links: {
            instagram: 'https://www.instagram.com/bandglencheck/',
            youtube: 'https://www.youtube.com/@glenchecktv',
            spotify:
                'https://open.spotify.com/artist/68ZtcdthScW8ISOvVNW9sV?si=LJPA2I89TTyruxd7yT5hig&utm_medium=share&utm_source=linktree&nd=1&dlsi=51e1b2c920704a3d',
        },
        image: sun06,
    },
    {
        names: {
            en: 'LUCY',
            ko: '루시',
        },
        explanations: {
            short: '독보적인 사운드와 화려한 퍼포먼스로 한계 없는 음악을 선보이는 밴드 LUCY, 2020년 데뷔 후 모든 앨범을 직접 작사, 작곡, 프로듀싱하여 그들만의 장르를 만들어 오고 있습니다.',
            long: '독보적인 사운드와 화려한 퍼포먼스로 한계 없는 음악을 선보이는 밴드 LUCY, 2020년 데뷔 후 모든 앨범을 직접 작사, 작곡, 프로듀싱하여 그들만의 장르를 만들어 오고 있습니다.\n\n데뷔 이래 다섯 번의 단독 콘서트를 단숨에 매진시키며, 단기간에 괄목할만한 성장을 보이고 있는 대세 밴드 LUCY는 이제 국내를 넘어 글로벌 음악 시장으로의 도약을 알리고 있습니다.',
        },
        links: {
            instagram: 'https://www.instagram.com/band_lucy/',
            youtube: 'https://www.youtube.com/@LUCYISLAND',
            spotify: 'https://open.spotify.com/artist/4eh2JeBpQaScfHKKXZh5vO',
        },
        image: sun12,
    },
    {
        names: {
            en: 'H3F',
            ko: null,
        },
        explanations: {
            short: 'H3F는 블루스, RnB, 재즈, 소울, 펑크, 팝의 독특한 조합으로 유명한 방콕 출신의 4인조 밴드로, Gong Thepvipat(기타, 보컬), Ping Arakarn(기타), Mhom Thanabatr(베이스), Max Thakorn(드럼)으로 이루어져 있습니다.',
            long: 'H3F는 블루스, RnB, 재즈, 소울, 펑크, 팝의 독특한 조합으로 유명한 방콕 출신의 4인조 밴드로, Gong Thepvipat(기타, 보컬), Ping Arakarn(기타), Mhom Thanabatr(베이스), Max Thakorn(드럼)으로 이루어져 있습니다.\n\n 첫 두 앨범의 인기와 함께, H3F는 그들의 특출한 공연, 인상적인 사운드, 그리고 놀라운 뮤직비디오로 태국 음악계에서 인정을 받았습니다.',
        },
        links: {
            instagram: 'https://www.instagram.com/official.h3f/',
            youtube: 'https://www.youtube.com/@officialh3f224',
            spotify:
                'https://open.spotify.com/artist/6jIK3obS1fJqb3Vu74AYX3?si=lj9yjCHwSHSTja9rrLwElQ&nd=1&dlsi=d1efa0f355b840e2',
        },
        image: sun07,
    },
    {
        names: {
            en: '92914',
            ko: null,
        },
        explanations: {
            short: '로파이 사운드 안에서 인디 록/팝의 독특한 조화를 보여주며 음악팬들의 마음을 사로잡은 싱어송라이터 듀오.',
            long: '로파이 사운드 안에서 인디 록/팝의 독특한 조화를 보여주며 음악팬들의 마음을 사로잡은 싱어송라이터 듀오.\n\n 다양한 플레이리스트와 편집 콘텐츠를 통해 지속적으로 새로운 마니아를 만들며 싱글 Okinawa로 유튜브 2500만 뷰 이상의 조회 수를 기록했다. 밴드와 듀오, 모든 형태에서 멋진 행보를 보여주는 92914는 전 세계로 뻗어나가고 있다.',
        },
        links: {
            instagram: 'https://www.instagram.com/at92914/',
            youtube: 'https://www.youtube.com/@at92914',
            spotify: 'https://open.spotify.com/artist/0Zoe6ljAJo85rggnN6OaOF',
        },
        image: sun08,
    },
    {
        names: {
            en: 'bongjeingan',
            ko: '봉제인간',
        },
        explanations: {
            short: '봉제인간은 지윤해, 임현제, 전일준으로 구성된 얼터너티브 록밴드로, 결성 직후 국내 유수의 페스티벌 무대에 오르며 화제를 모았습니다.',
            long: `봉제인간은 지윤해, 임현제, 전일준으로 구성된 얼터너티브 록밴드로, 결성 직후 국내 유수의 페스티벌 무대에 오르며 화제를 모았습니다. \n\n'술탄 오브 더 디스코', '혁오', '장기하와 얼굴들'이 아닌 ‘봉제인간’으로서 뭉친 그들은 여태껏 보여준 적 없는 모습으로 거침없이 영역을 넓혀나가고 있습니다.`,
        },
        links: {
            instagram: 'https://www.instagram.com/bongjeingan/',
            youtube: 'https://www.youtube.com/@bongjeingan',
            spotify: 'https://open.spotify.com/artist/3zyq3DzSd4aue9Q7s1qMVu',
        },
        image: sun09,
    },
    {
        names: {
            en: 'YOURA',
            ko: '유라',
        },
        explanations: {
            short: '이색적인 시야로 대중의 상상력을 자극하며, 다양한 스펙트럼의 음악으로 동양적인 신비로움을 한껏 보여줄 수 있는 아티스트 유라.',
            long: `이색적인 시야로 대중의 상상력을 자극하며, 다양한 스펙트럼의 음악으로 동양적인 신비로움을 한껏 보여줄 수 있는 아티스트 유라\n\n지난해 데뷔 5년 만의 첫 정규 앨범 ‘꽤 많은 수의 촉수 돌기’를 발표, 또 한 번 아티스트로서의 새로운 발견을 이루어냈다는 리스너들의 찬사를 받으며 그녀의 행보가 주목되고 있습니다.`,
        },
        links: {
            instagram: 'https://www.instagram.com/you.ra/',
            youtube: 'https://www.youtube.com/@youra_official',
            spotify: 'https://open.spotify.com/artist/5q9adPv91NFr8q2ZcKmX0V',
        },
        image: sun10,
    },
    {
        names: {
            en: 'Vince',
            ko: '빈스',
        },
        explanations: {
            short: 'R&B, 힙합, 락, 소울, 팝 등의 장르를 자유자재로 넘나들며 음악적 경계를 허무는 작곡가이자 프로듀서, 그리고 이제는 솔로 아티스트로서 입지를 넓혀나가고 있는 Vince',
            long: `블랙핑크와 빅뱅 등 국내 최고 아티스트의 프로듀서로서 활동하며 입지를 쌓아온 Vince.\n\nR&B, 힙합, 락, 소울, 팝 등의 장르를 자유자재로 넘나들며 음악적 경계를 허무는 작곡가이자 프로듀서, 그리고 이제는 솔로 아티스트로서 입지를 넓혀나가고 있습니다.`,
        },
        links: {
            instagram: 'https://www.instagram.com/vincesince19xx/',
            youtube: null,
            spotify: 'https://open.spotify.com/artist/3RnlokVV0FpqtV5FDeHYZd',
        },
        image: sun13,
    },
];

export const lineUpDatas = [satDatas, sunDatas];
