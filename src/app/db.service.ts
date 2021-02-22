import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DBService {

    descMerkury: Array<string> = [
        'Najmniejsza i najbliższa Słońca planeta Układu Słonecznego. Jako planeta dolna znajduje się dla ziemskiego obserwatora zawsze blisko Słońca, dlatego jest trudna do obserwacji. Mimo to należy do planet widocznych gołym okiem i była znana już w starożytności. Merkurego dojrzeć można jedynie tuż przed wschodem lub tuż po zachodzie Słońca.',
        'Ukształtowanie powierzchni Merkurego przypomina Księżyc: są na nim liczne kratery uderzeniowe i praktycznie pozbawiony jest atmosfery. W przeciwieństwie do Księżyca, planeta ma jednak duże żelazne jądro, generujące pole magnetyczne stukrotnie słabsze od ziemskiego. Rozmiar jądra sprawia, że Merkury ma jedną z największych gęstości spośród planet Układu Słonecznego.',
        'Temperatura powierzchni waha się od −173 °C do 427 °C.',
        'Merkury nie ma naturalnych satelitow.',
    ];

    descWenus: Array<string> = [
        'Druga pod względem odległości od Słońca planeta Układu Słonecznego. Jest trzecim pod względem jasności ciałem niebieskim widocznym na niebie, po Słońcu i Księżycu. Jej obserwowana wielkość gwiazdowa sięga −4,6m i jest wystarczająca, aby światło odbite od Wenus powodowało powstawanie cieni. Ponieważ Wenus jest bliżej Słońca niż Ziemia, zawsze jest widoczna w niewielkiej odległości kątowej od niego. Odległość Wenus od Ziemi zmienia się w zakresie od około 40 mln km do około 259 mln km.',
        'Wenus jest klasyfikowana jako planeta skalista (inaczej: typu ziemskiego) i jest czasami nazywana „planetą bliźniaczą” albo „siostrą Ziemi” – ze względu na podobną wielkość, masę i skład chemiczny. Atmosfera Wenus jest jednak zupełnie odmienna od ziemskiej. Jest pokryta nieprzezroczystą warstwą dobrze odbijających światło chmur kwasu siarkowego, które nie pozwalają na obserwację jej powierzchni z kosmosu w świetle widzialnym. Ma najgęstszą atmosferę ze wszystkich planet skalistych w Układzie Słonecznym, składającą się głównie z dwutlenku węgla. Na Wenus nie ma obiegu węgla, który powodowałby wiązanie węgla w skałach. Nie stwierdzono na niej również śladów organizmów żywych, które by go wiązały w biomasie. Istnieją przypuszczenia, że w przeszłości na Wenus były oceany, tak jak na Ziemi, ale odparowały, gdy temperatura powierzchni wzrosła. Obecny krajobraz Wenus jest suchy i pustynny, tworzony przez pokryte pyłem skały. Woda w atmosferze najprawdopodobniej dysocjowała, a z powodu braku pola magnetycznego, wodór został wywiany w przestrzeń międzyplanetarną przez wiatr słoneczny. Ciśnienie atmosferyczne na powierzchni planety jest około 92 razy większe niż na Ziemi.',
    ];

    descEarth: Array<string> = [
        'Trzecia, licząc od Słońca, oraz piąta pod względem wielkości planeta Układu Słonecznego. Pod względem średnicy, masy i gęstości jest to największa planeta skalista Układu Słonecznego. Ziemia jest zamieszkana przez miliony gatunków, w tym przez człowieka. Jest jedynym znanym miejscem we Wszechświecie, w którym występuje życie. Według danych zebranych metodą datowania izotopowego, planeta uformowała się ok. 4,54 ± 0,05 mld lat temu.',
        'Prawdopodobnie w ciągu pierwszego miliarda lat po uformowaniu się Ziemi w oceanach pojawiło się życie. Z żyjących na Ziemi organizmów żywych składa się biosfera, która wpływa na jej atmosferę, hydrosferę, litosferę i inne czynniki abiotyczne planety, umożliwiając rozwój i wzrost liczby organizmów aerobowych i anaerobowych oraz powstanie ozonosfery. Rozwój życia na lądzie i w wodzie umożliwiła powłoka ozonowa oraz ziemskie pole magnetyczne, zmniejszając natężenie promieniowania ultrafioletowego, oraz magnetosfera, odbijająca cząstki wiatru słonecznego i promieniowania kosmicznego. Dystans dzielący Słońce od Ziemi, jej właściwości fizyczne oraz jej historia geologiczna są najważniejszymi czynnikami, które pozwoliły organizmom żyć i ewoluować.',
        'Litosfera Ziemi dzieli się na kilkanaście płyt tektonicznych, które przesuwają się względem siebie w ciągu okresów trwających nawet przez wiele milionów lat. W ich trakcie dochodzi do znacznej zmiany położenia kontynentów. Powierzchnię w 70,8% zajmuje woda wszechoceanu zawarta w morzach i oceanach; pozostałe 29,2% stanowią kontynenty i wyspy, na powierzchni których znajdują się jeziora oraz inne źródła wody tworzące hydrosferę. Niezbędnej do życia na Ziemi wody w stanie ciekłym nie wykryto na powierzchni innych ciał niebieskich. Wnętrze Ziemi pozostaje aktywne; składa się z grubego i w dużej mierze stałego płaszcza, płynnego jądra zewnętrznego (generującego pole magnetyczne) oraz składającego się z żelaza stałego jądra wewnętrznego. Strefy podbiegunowe Ziemi są pokryte lodem wchodzącym w skład pokrywy lodowej Antarktydy (biegun południowy), pokrywy lodowej Grenlandii i lodu morskiego, w tym arktycznego paku lodowego (biegun północny).',
        'Ziemia oddziałuje grawitacyjnie z innymi ciałami w przestrzeni kosmicznej, zwłaszcza ze Słońcem i Księżycem. Planeta wykonuje jedno okrążenie wokół Słońca raz na każde 366,256 obrotów wokół własnej osi. Czas jednego okrążenia wokół Słońca nazywa się rokiem gwiazdowym i odpowiada 365,256 dniom czasu słonecznego. Nachylenie osi Ziemi do prostej prostopadłej do płaszczyzny orbity wynosi 23,44°, co prowadzi do rocznych wahań oświetlenia, które powodują m.in. występowanie na jej powierzchni pór roku, które tworzą rok zwrotnikowy. Wokół Ziemi krąży jeden naturalny satelita – Księżyc. Jego oddziaływanie grawitacyjne na Ziemię wywołuje pływy morskie, spowalnia jej rotację oraz stabilizuje kąt nachylenia osi obrotu względem orbity. Przypuszcza się, że orbituje on wokół Ziemi od ok. 4,53 mld lat. Bombardowanie przez komety we wczesnej historii Ziemi przyczyniło się do powstania oceanów, a upadki pojedynczych planetoid mogły prowadzić do niektórych masowych wymierań.',
        'Ponad 7,6 mld ludzi zamieszkujących Ziemię w czerwcu 2018 jest zależnych od jej biosfery i minerałów. Zasoby naturalne skorupy ziemskiej i umiejętność ich przetworzenia zapewniają przetrwanie m.in. globalnej populacji ludzkiej. Człowiek po raz pierwszy umownie opuścił Ziemię w 1961, kiedy Jurij Gagarin wyleciał lotem orbitalnym na około 2 godziny (jedno okrążenie) nieco ponad jej atmosferę, a w 1969 Neil Armstrong i Buzz Aldrin jako pierwsi wylądowali na powierzchni innego ciała niebieskiego – Księżyca.',
    ];

    descMars: Array<string> = [
        'Czwarta od Słońca planeta Układu Słonecznego. Krąży między orbitą Ziemi a pasem planetoid, dzielącym go od orbity Jowisza. Mars może być łatwo dostrzeżony z Ziemi gołym okiem. Jasnością przewyższają go tylko Jowisz, Wenus, Księżyc i Słońce.',
        'Odcień Marsa bierze się od tlenków żelaza pokrywających powierzchnię. Mars jest planetą wewnętrzną z cienką atmosferą, o powierzchni usianej kraterami uderzeniowymi, podobnie jak powierzchnia Księżyca i wielu innych ciał Układu Słonecznego. Występują na nim różne rodzaje terenu, podobne do ziemskich: wulkany, doliny, kaniony, pustynie i polarne czapy lodowe. Okres obrotu wokół własnej osi jest niewiele dłuższy niż ziemski i wynosi 24,6229 godziny (24 h 37 m 22 s). Na Marsie znajduje się najwyższy wulkan w Układzie Słonecznym – Olympus Mons i największy kanion – Valles Marineris. Gładki obszar równinny Vastitas Borealis na półkuli północnej, który obejmuje 40% powierzchni planety, może być pozostałością ogromnego uderzenia. W przeciwieństwie do Ziemi, Mars jest mało aktywny geologicznie i nie ma tektoniki płyt.',
        'Mars ma dwa księżyce, Fobosa i Deimosa, które są małe i mają nieregularny kształt. Prawdopodobnie powstały z materii wyrzuconej z Marsa w wyniku wielkich uderzeń w początkach istnienia planety. Mars ma także planetoidy trojańskie, takie jak (5261) Eureka, krążące w pobliżu punktów równowagi grawitacyjnej na orbicie planety wokół Słońca. Wokół Marsa krąży osiem sztucznych satelitów, 2001 Mars Odyssey, Mars Express, Mars Reconnaissance Orbiter, Mars Orbiter Mission, MAVEN, ExoMars Trace Gas Orbiter, Al Amal i Tianwen-1. Na powierzchni znajdują się aktywne łaziki Curiosity i Perseverance, lądownik InSight oraz kilka nieczynnych łazików i lądowników z zarówno udanych, jak i nieudanych misji (stan na luty 2021).',
    ];

    descJupiter: Array<string> = [
        'Piąta w kolejności od Słońca i największa planeta Układu Słonecznego. Masa Jowisza jest nieco mniejsza niż jedna tysięczna masy Słońca, a zarazem dwa i pół razy większa niż łączna masa pozostałych planet w Układzie Słonecznym. Wraz z Saturnem, Uranem i Neptunem tworzą grupę gazowych olbrzymów, nazywaną czasem również planetami jowiszowymi. Jest to trzeci co do jasności naturalny obiekt na nocnym niebie po Księżycu i Wenus (okresowo, w momencie wielkiej opozycji, jasnością może mu dorównywać Mars).',
        'Największa planeta Układu Słonecznego składa się w trzech czwartych z wodoru i w jednej czwartej z helu; może posiadać także skaliste jądro złożone z cięższych pierwiastków. Szybka rotacja nadaje mu kształt spłaszczonej elipsoidy obrotowej (ma też niewielkie, ale zauważalne zgrubienie w płaszczyźnie równika). Powierzchnię planety, którą stanowią nieprzezroczyste wyższe warstwy atmosfery, pokrywa kilka warstw chmur, układających się w charakterystyczne pasy widoczne z Ziemi. Najbardziej znanym szczegółem jego powierzchni jest odkryta w XVII wieku przy pomocy teleskopu Wielka Czerwona Plama, będąca antycyklonem o średnicy większej niż średnica Ziemi. Planeta ma słabo widoczne pierścienie i potężną magnetosferę.',
        'Jest znanych 79 księżyców Jowisza. Cztery największe, zwane galileuszowymi, odkrył Galileusz w 1610. Ganimedes, największy z księżyców, ma średnicę większą niż planeta Merkury.',
    ];

    descSaturn: Array<string> = [
        'Gazowy olbrzym, szósta planeta Układu Słonecznego pod względem odległości od Słońca, druga po Jowiszu pod względem masy i wielkości. Charakterystyczną jego cechą są pierścienie, składające się głównie z lodu i w mniejszej ilości z odłamków skalnych; inne planety-olbrzymy także mają systemy pierścieni, ale żaden z nich nie jest tak rozległy ani tak jasny.',
        'Według danych z października 2019 roku znane są 82 naturalne satelity Saturna (53 ma oficjalnie nazwy), co czyni go liderem wśród planet z największą liczbą księżyców. Do tego dochodzą setki „miniksiężyców” w pierścieniach planetarnych.',
        'We wnętrzu Saturna panują ciśnienie i temperatura, których nie udało się dotąd uzyskać w laboratoriach na Ziemi. Wnętrze gazowego olbrzyma najprawdopodobniej składa się z jądra z żelaza, niklu, krzemu i tlenu, otoczonego warstwą metalicznego wodoru, warstwy pośredniej ciekłego wodoru i ciekłego helu oraz zewnętrznej warstwy gazowej. Prąd elektryczny w warstwie metalicznej wodoru generuje pole magnetyczne Saturna, które jest nieco słabsze niż pole magnetyczne Ziemi i ma około jedną dwudziestą natężenia pola wokół Jowisza. Zewnętrzna warstwa atmosfery wydaje się na ogół spokojna, choć mogą się na niej utrzymywać długotrwałe układy burzowe. Na Saturnie wieją wiatry o prędkości ok. 1800 km/h; są one silniejsze niż na Jowiszu.',
        'Promień Saturna jest około 9 razy większy od promienia Ziemi. Chociaż jego gęstość to tylko jedna ósma średniej gęstości Ziemi, ze względu na wielokrotnie większą objętość masa Saturna jest dziewięćdziesiąt pięć razy większa niż masa Ziemi',
        'Saturn ma 9 pierścieni, składających się głównie z cząsteczek lodu, a także ze skał i pyłu kosmicznego.',
    ];

    descUranus: Array<string> = [
        'Gazowy olbrzym, siódma od Słońca planeta Układu Słonecznego, trzecia pod względem wielkości i czwarta pod względem masy.Choć jest widoczny gołym okiem podobnie jak pięć innych planet, umknął uwadze starożytnych obserwatorów z powodu małej jasności i powolnego ruchu po sferze niebieskiej. William Herschel ogłosił odkrycie planety 13 marca 1781, po raz pierwszy w historii rozszerzając znane granice Układu Słonecznego. Uran to również pierwsza planeta odkryta przy pomocy teleskopu.',
        'Uran budową i składem chemicznym przypomina Neptuna, a obie planety mają odmienną budowę i skład niż większe gazowe olbrzymy: Jowisz i Saturn. Astronomowie czasem umieszczają je w oddzielnej kategorii „lodowych olbrzymów”. Atmosfera Urana, chociaż – podobnie jak atmosfery Jowisza i Saturna – składa się głównie z wodoru i helu, zawiera więcej zamrożonych substancji lotnych (tzw. lodów) niż atmosfery większych planet-olbrzymów; są to substancje takie jak woda, amoniak i metan, oraz śladowe ilości węglowodorów. Jest najzimniejszą atmosferą planetarną w Układzie Słonecznym; minimalna temperatura to 49 K (−224 °C). Ma ona złożoną, warstwową strukturę. Uważa się, że jej najniższe chmury tworzy woda, a najwyższa warstwa chmur jest utworzona z kryształków metanu. Z kolei wnętrze Urana składa się głównie z lodów i skał.',
        'Podobnie jak inne planety-olbrzymy, Uran posiada system pierścieni, magnetosferę i liczne księżyce. System Urana ma unikatową konfigurację wśród planet, ponieważ jego oś obrotu jest silnie nachylona i znajduje się prawie w płaszczyźnie orbity planety. W tej sytuacji jego biegun północny i południowy leżą tam, gdzie równik większości innych planet. Widziane z Ziemi, pierścienie Urana czasami układają się wokół planety jak tarcza łucznicza, zaś księżyce planety krążą wokół niej jak wskazówki zegara, choć w 2007 i 2008 pierścienie planety były ustawione krawędzią do osi obserwacji.',
        'Prędkość wiatru na Uranie może osiągnąć 250 metrów na sekundę (900 km/h).',
    ];

    descNeptune: Array<string> = [
        'Gazowy olbrzym, ósma, najdalsza od Słońca planeta w Układzie Słonecznym, czwarta pod względem średnicy i trzecia pod względem masy. Neptun jest ponad 17 razy masywniejszy od Ziemi i trochę masywniejszy od swojego bliźniaka, Urana, który ma masę prawie 15 razy większą od masy Ziemi. Krąży wokół Słońca w odległości około 30 razy większej niż dystans Ziemia-Słońce.',
        'Odkryty 23 września 1846 Neptun jest jedyną planetą Układu Słonecznego, której istnienie wykazano nie na podstawie obserwacji nieba, ale na drodze obliczeń matematycznych. Niespodziewane zmiany w ruchu orbitalnym Urana doprowadziły astronomów do wniosku, że podlega on perturbacjom pochodzącym od nieznanej planety. Neptun został następnie zaobserwowany przez Johanna Galla w miejscu przewidzianym przez Urbaina Le Verriera, a wkrótce został też odkryty jego największy księżyc, Tryton; żaden z pozostałych 13 znanych dziś księżyców Neptuna nie został odkryty za pomocą teleskopu aż do XX wieku.',
        'Neptun przypomina składem Urana, co odróżnia je od większych gazowych olbrzymów, Jowisza i Saturna. Atmosfera Neptuna, choć – podobnie jak na Jowiszu i Saturnie – składa się głównie z wodoru i helu wraz ze śladami węglowodorów i prawdopodobnie azotu, zawiera większą ilość tzw. „lodów”, czyli substancji lotnych w warunkach ziemskich, takich jak woda, amoniak i metan. Astronomowie czasami kategoryzują Urana i Neptuna jako „lodowe olbrzymy” w celu podkreślenia tych różnic. Wnętrze Neptuna, podobnie jak Urana, składa się głównie z lodów i skał. Ślady metanu w zewnętrznych obszarach planety przyczyniają się do nadania jej charakterystycznego niebieskiego koloru.',
        'W przeciwieństwie do niemal pozbawionej wyróżniających się struktur atmosfery Urana atmosferę Neptuna cechuje aktywność i widoczne układy pogodowe. Rekord prędkości wiatru wynosi 2100 km/h.',
        'Duża odległość od Słońca powoduje, że zewnętrzna atmosfera Neptuna jest jednym z najzimniejszych miejsc w Układzie Słonecznym; temperatura efektywna widocznej „powierzchni” planety to około −226,5 °C (46,6 K). Jednak w centrum planety temperatura sięga około 5100 °C.',
    ];

    PLANETS = [
        new Planet('1', 'Merkury', 'skalista', 'mercury.png', 'nieznany; znana w starożytności', '87,969 dni', '3,3011×10^23 kg', ' 	7,5×10^7 km²', '100-700K', '3,70 m/s²', '4,3 km/s', '0,142',  'brak', 'ok. 10^-10 Pa', this.descMerkury),
        new Planet('2', 'Wenus', 'skalista', 'venus.jpg', 'nieznany; znana w starożytności', '224,701 dni', '4,867×10^24 kg ', '4,60×10^8 km²', 'średnio 737 K', '8,87 m/s²', '10,36 km/s', '0,698', 'brak', '92000 hPa', this.descWenus),
        new Planet('3', 'Ziemia', 'skalista', 'earth.jpeg', '', '365,256363004 dni', '5,97219×10^24 kg', '510 072 000 km²', '185–331 K', '9,80665 m/s²', '11,19 km/s', '0,434', '1', '1014 hPa', this.descEarth),
        new Planet('4', 'Mars', 'skalista', 'mars.jpg', 'nieznany; znana w starożytności', '686,980 dni', '6,4171×10^23 kg', '1,448×10^8 km²', '−140,15–19,85 °C', '3,71 m/s²', '5,03 km/s', '0,170', '2', '400-870 Pa', this.descMars),
        new Planet('5', 'Jowisz', 'gazowa', 'jupiter.jpg', 'nieznany; znana w starożytności', '4332,589 dni', '1,89819×10^27 kg', '6,21796×1010 km²', '165K', '24,79 m/s²', '59,5 km/s', '0,538', '79', '', this.descJupiter),
        new Planet('6', 'Saturn', 'gazowa', 'saturn.webp', 'nieznany; znana w starożytności', '10 759,22 dni', '5,6834×10^26 kg' , '4,27×10^10 km²', '134K', '10,44 m/s', '35,5 km/s', '0,499', '82', '', this.descSaturn),
        new Planet('7', 'Uran', 'gazowa', 'uranus.jpg', 'William Herschel; 13 marca 1781', '30 685,4 dni', '8,6813×10^25 kg', '8,084×10^9 km²', '76K', '8,87 m/s²', 'ucieczki 	21,3 km/s', '0,488', '27', '', this.descUranus),
        new Planet('8', 'Neptun', 'gazowa', 'neptune.jpg', 'Johann Gottfried Galle; 23 września 1846', '60 189 dni', '1,02413×10^26 kg', '7,6183×10^9 km²', '72K', '11,15 m/s²', '23,5 km/s', '0,442', '14', '', this.descNeptune),
    ];

    MOONS = [
        new Moon('1', 'Ksieżyc', 'Ziemia', 'moon.jpg'),
        new Moon('2', 'Deimos', 'Mars', 'deimos.jpg'),
        new Moon('3', 'Fobos', 'Mars', 'phobos.jpg'),
        new Moon('4', 'Io', 'Jowisz', 'io.jpg'),
        new Moon('5', 'Europa', 'Jowisz', 'europa.jpg'),
        new Moon('6', 'Ganimedes', 'Jowisz', 'ganimedes.jpg'),
        new Moon('7', 'Kallisto', 'Jowisz', 'callisto.jpg'),
        new Moon('8', 'Mimas', 'Saturn', 'mimas.jpg'),
        new Moon('9', 'Enceladus', 'Saturn', 'enceladus.jpg'),
        new Moon('10', 'Tetyda', 'Saturn', 'tethys.jpg'),
        new Moon('11', 'Dione', 'Saturn', 'dione.jpg'),
        new Moon('12', 'Tytan', 'Saturn', 'titan.jpg'),
        new Moon('13', 'Ariel', 'Uran', 'ariel.jpg'),
        new Moon('14', 'Miranda', 'Uran', 'miranda.jpg'),
        new Moon('15', 'Tryton', 'Neptun', 'triton.jpg'),
    ];

    getPlanets(): Array<Planet> {
        return this.PLANETS;
    }

    getPlanetById(id: string): Planet {
        return this.PLANETS.find(element => element.id === id);
    }

    getMoons(): Array<Moon> {
        return this.MOONS;
    }

    getMoonsById(id: string): Moon {
        return this.MOONS.find(element => element.id === id);
    }
}

export class Planet {
    constructor(
        public id: string,
        public name: string,
        public type: string,
        public photo: string,
        public discovery?: string,
        public orbitalPeriod?: string,
        public mass?: string,
        public surfaceArea?: string,
        public temperature?: string,
        public surfaceGravity?: string,
        public escapeVelocity?: string,
        public albedo?: string,
        public moons?: string,
        public surfacePressure?: string,
        public description?: Array<string>) {}
}

export class Moon {
    constructor(public id: string, public name: string, public planet: string, public photo: string) {}
}
