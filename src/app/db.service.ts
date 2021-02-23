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

    descMoon: Array<string> = [
        'Jedyny naturalny satelita Ziemi. Jest piątym co do wielkości księżycem w Układzie Słonecznym.',
        'Przeciętna odległość od środka Ziemi do środka Księżyca to 384 399 km, co stanowi mniej więcej trzydziestokrotność średnicy ziemskiej. Średnica Księżyca wynosi 3474 km[5], nieco więcej niż 1/4 średnicy Ziemi. Oznacza to, że objętość Księżyca wynosi około 1/50 objętości kuli ziemskiej. Przyspieszenie grawitacyjne na jego powierzchni jest blisko 6 razy słabsze niż na Ziemi. Księżyc wykonuje pełny obieg wokół Ziemi w ciągu 27,3 dnia (tzw. miesiąc syderyczny), a okresowe zmiany w geometrii układu Ziemia–Księżyc–Słońce powodują występowanie powtarzających się w cyklu 29,53-dniowym (tzw. miesiąc synodyczny) faz Księżyca.',
        'Księżyc to jedyne ciało niebieskie, do którego podróżowali i na którym wylądowali ludzie. Do tej pory na księżycowym globie stanęło dwunastu astronautów.',
        'W przeciwieństwie do naturalnych satelitów innych planet, ziemski nie ma innej polskiej nazwy niż właśnie „Księżyc” (pisane wielką literą).',
        'Księżyc znajduje się w synchronicznej rotacji, co oznacza, że przez cały czas z Ziemi widoczna jest tylko jedna jego strona. Skierowana w stronę Ziemi strona Księżyca jest nazywana stroną widoczną, zaś strona przeciwna – niewidoczną. Strona niewidoczna nie powinna być mylona z ciemną stroną, czyli półkulą aktualnie nieoświetloną przez Słońce (podczas nowiu strona zwrócona ku Ziemi jest ciemną stroną Księżyca).',
        'Księżyc jest ciałem wewnętrznie zróżnicowanym, złożonym z różniących się pod względem geochemicznym skorupy, płaszcza i jądra. Zróżnicowanie to jest najprawdopodobniej efektem krystalizacji frakcyjnej magmy księżycowej krótko po powstaniu ziemskiego satelity około 4,5 miliarda lat temu. Energia wymagana do stopienia zewnętrznych warstw miała prawdopodobnie swoje źródło w tzw. wielkim zderzeniu, które uważa się za przyczynę powstania układu Ziemia-Księżyc, oraz późniejszym ponownym połączeniu odłamków na orbicie ziemskiej. Krystalizacja tego oceanu magmy dała początek ciężkiemu płaszczowi oraz bogatej w plagioklazy skorupie.',
        'Geochemiczne mapy powierzchni Księżyca wykazują, że jego skorupa zawiera duże ilości skał anortozytowych, co zgadza się z teorią dawnego istnienia oceanu magmy. Z pierwiastkowego punktu widzenia, składa się ona przede wszystkim z tlenu, krzemu, żelaza, wapnia oraz glinu. Bazując na metodach geofizycznych, oceniono jej grubość na około 50 km.',
        'Atmosfera Księżyca jest niezwykle cienka; jej całkowita masa wynosi zaledwie 104 kg. Jednym ze źródeł jej pochodzenia jest uwalnianie gazów takich jak radon, powstających podczas rozpadu pierwiastków promieniotwórczych zawartych w płaszczu oraz skorupie. Również bombardowanie mikrometeorytami, jonami wiatru słonecznego, elektronami i promieniowaniem słonecznym powoduje odrywanie cząsteczek od powierzchni i ich przechodzenie do stanu gazowego[34]. Gazy powstałe w ten sposób mogą zostać pod wpływem grawitacji wtórnie wchłonięte przez regolit lub ulecieć w przestrzeń kosmiczną, wyrzucone przez promieniowanie słoneczne albo pole magnetyczne wiatru słonecznego (o ile są zjonizowane). Pierwiastki takie jak sód (Na) czy potas (K) wykryto w atmosferze księżycowej metodami spektroskopii z Ziemi, natomiast spektroskop alfa Lunar Prospectora wykazał obecność radonu-222 i polonu-210. Argon-40, hel-4, tlen, metan, azot, tlenek węgla (II) oraz tlenek węgla (IV) zostały wykryte za pomocą detektorów ustawionych przez astronautów misji Apollo.'
    ];

    descDeimos: Array<string> = [
        'Mniejszy i dalszy z dwóch księżyców Marsa. Został odkryty przez amerykańskiego astronoma Asapha Halla 12 sierpnia 1877 w obserwatorium marynarki wojennej USA około godziny 7:48 UTC. Kilka dni później (18 sierpnia) Asaph Hall odkrył również drugi księżyc Marsa, Fobos. ',
        'Deimos jest prawdopodobnie dawną planetoidą, która w stronę Marsa została skierowana przez pole grawitacyjne Jowisza. Według jednej z hipotez jego początkowo silnie wydłużona orbita wokółmarsjańska została stopniowo obniżona i zmieniona w niemal kołową w wyniku hamowania aerodynamicznego w atmosferze podczas zbliżeń do planety. Podobnie jak większość ciał o małych rozmiarach, Deimos jest silnie niesferyczny i ma wymiary 15 × 12 × 10 km. Deimos składa się ze skał bogatych w węgiel (podobnie jak planetoidy typu C i chondryty węgliste) i lodu. Jego powierzchnia jest pokryta kraterami, ale jednocześnie jest gładsza niż u Fobosa z powodu wypełnienia kraterów grubą warstwą regolitu.  Dwa największe kratery na Deimosie mają średnicę około 3 kilometrów - Swift oraz Voiltare. '
    ];

    descPhobos: Array<string> = [
        'Większy z dwóch księżyców Marsa. Naturalny satelita krążący najbliżej swojej planety (w Układzie Słonecznym). Fobos został odkryty przez amerykańskiego astronoma Asapha Halla 18 sierpnia 1877[5] w obserwatorium marynarki wojennej USA (United States Naval Observatory) około godziny 9:14 UTC. Kilka dni wcześniej (12 sierpnia) Asaph Hall odkrył również drugi księżyc Marsa, Deimosa.',
        'Fobos jest ciemnym obiektem, który wydaje się być złożony z materiału podobnego, jak asteroidy typu C (ciemne chondryty węgliste) występujące w zewnętrznym pasie asteroid. Jednak jego niska gęstość wskazuje, że nie składa się on z samych skał – prawdopodobnie jest mieszaniną skał i lodu.  Powierzchnia Fobosa jest pokryta około metrową warstwą drobnego pyłu, podobnego do regolitu pokrywającego Księżyc. Jest również pokryta kraterami. Najbardziej wyraźnym utworem jest duży krater Stickney o średnicy 10 km, nazwany na cześć żony odkrywcy Fobosa, Angeline Stickney. Uderzenie, które spowodowało powstanie krateru, musiało prawie rozerwać niewielki księżyc (podobnie jak w przypadku księżyca Saturna Mimasa i krateru Herschel) oraz prawdopodobnie było przyczyną powstania widocznych rowów i smug. Rowy te mają typowo głębokość do 30 m, 100–200 m szerokości i długość do 20 km.',
        'Fobos jest powszechnie uważany za planetoidę przechwyconą przez Marsa. Niektórzy sugerują, że może on nawet pochodzić nie z głównego pasa planetoid, ale z zewnętrznych rejonów Układu Słonecznego. Najnowsze badania jak i współpłaszczyznowość orbity Fobosa, Deimosa i rotacji Marsa sugerują, że księżyce te powstały wskutek impaktu większego ciała z Marsem.',
    ];

    descIo: Array<string> = [
        'Trzeci co do wielkości księżyc Jowisza, z grupy księżyców galileuszowych, czwarty co do wielkości w Układzie Słonecznym. Charakteryzuje się niezwykle silną aktywnością wulkaniczną.',
        'Średnica Io liczy 3642,6 km, jest ona zatem jednym z największych księżyców Układu Słonecznego. Ma również stosunkowo wysoką średnią gęstość – 3,528 g/cm³. Składa się głównie z krzemianów (podobnie jak wewnętrzne planety skaliste), czym różni się od skalno-lodowych księżyców z rubieży układu.',
        'Powierzchnia Io jest geologicznie bardzo młoda, zdominowana przez równiny pokryte wielobarwnymi związkami siarki.  Nie obserwuje się tu prawie żadnych kraterów uderzeniowych. Ślady kolizji kosmicznych szybko zostają zatarte, ponieważ powierzchnia księżyca podlega nieustannym zmianom, a zagłębienia kraterów szybko wypełniają się materiałem wyrzucanym w erupcjach wulkanów. Z tego powodu każdy fragment powierzchni księżyca liczy sobie mniej niż 1000 lat.',
        'Temperatura powierzchni waha się od około 90 K w nocy do 130 K w dzień (wyłączając miejsca aktywności wulkanicznej). Wypływy lawy mogą natomiast osiągać temperaturę 1500 K. Obserwacje nocnej półkuli przez sondę Galileo wskazały, że okolice biegunów Io nie są chłodniejsze od obszarów wokół równika.',
        'Do wysokości ok. 120 km ponad powierzchnią Io rozciąga się bardzo rzadka atmosfera. W jej skład wchodzi przede wszystkim dwutlenek siarki oraz śladowe ilości innych gazów. Księżyc ten posiada też jonosferę, w składzie której stwierdzono jony siarki, tlenu i sodu. Krążąc wokół Jowisza, Io porusza się w bardzo silnym polu magnetycznym planety. Indukuje ono w jej otoczeniu prąd elektryczny o mocy rzędu 1000 gigawatów i napięciu sięgającym 400 000 V. W takich warunkach materia z atmosfery Io jonizuje się i ulatuje w przestrzeń okołojowiszową, tworząc wzdłuż orbity księżyca torus zjonizowanych cząstek. Układ Jowisz – Io jest silnym emiterem fal radiowych.',
    ];

    descEuropa: Array<string> = [
        'Czwarty co do wielkości księżyc Jowisza z grupy księżyców galileuszowych i szósty co do wielkości satelita w Układzie Słonecznym. Pod jego lodową skorupą znajduje się prawdopodobnie ocean ciekłej wody.',
        'Powierzchnię Europy charakteryzują bardzo małe różnice wysokości terenu, mimo że jest zróżnicowana i nierówna, z licznymi szczelinami i chaotycznie ukształtowanymi obszarami. Stwierdzono niewiele wzniesień wyższych niż kilkaset metrów. Występuje tam również niewiele kraterów uderzeniowych, mają one także inny wygląd niż na pozostałych lodowych księżycach w Układzie Słonecznym. Nie posiadają wałów i wzniesień centralnych, a wokół nich zauważono koncentryczne szczeliny i krawędzie, które mogły powstać w wyniku wypełnienia kraterów przez cieplejszy materiał spod powierzchni. Na powierzchni znajdują się także wyjątkowe dla tego księżyca lineamenty (łac. linea), ciemne, czerwonawe rysy związane ze spękaniem lodowej skorupy. Cechy te świadczą, że powierzchnia księżyca jest geologicznie bardzo młoda – ma szacunkowo ok. 30 mln lat.',
        'Widoczny w pęknięciach ciemniejszy materiał to najprawdopodobniej sole i uwodniony kwas siarkowy.',
        'Europa ma wyraźnie zróżnicowaną strukturę wewnętrzną. W jej wnętrzu znajduje się żelazne jądro, otoczone przez płaszcz zbudowany z krzemianów, podczas gdy zewnętrzne warstwy są zbudowane z wody – w postaci lodowej skorupy i podpowierzchniowego oceanu.',
        'Obserwacje wykonane teleskopem Hubble’a pozwoliły ustalić, że Europa ma niezwykle rzadką atmosferę (egzosferę), której ciśnienie wynosi zaledwie 1 mikropaskal. Promieniowanie słoneczne i naładowane cząstki z magnetosfery Jowisza rozbijają cząsteczki wody z lodowej powierzchni księżyca na wodór i tlen. Lżejszy wodór ulatuje w przestrzeń międzyplanetarną, podczas gdy tlen zostaje na pewien czas zatrzymany przez siłę grawitacji Europy.',
    ];

    descGanimedes: Array<string> = [
        'Największy księżyc Jowisza, należący do grupy księżyców galileuszowych. Jest równocześnie największym znanym księżycem w Układzie Słonecznym, ma większą średnicę od Merkurego, najmniejszej planety w Układzie Słonecznym. Wszystkie księżyce galileuszowe można dostrzec przez zwyczajną lornetkę.',
        'Ganimedes jest największym księżycem Układu Słonecznego, większym od Plutona i Merkurego. Jednak jego średnia gęstość jest niska (nieco ponad 1,9 g/cm³), przez co masa księżyca stanowi zaledwie połowę masy Merkurego. Ganimedes jest księżycem lodowym, złożonym w znacznym stopniu z lodu wodnego.',
        'Ganimedes ma wyraźnie zróżnicowaną strukturę wewnętrzną. W jego wnętrzu jest stosunkowo niewielkie żelazne jądro, otoczone grubym, zbudowanym z krzemianów płaszczem. Ponad płaszczem rozciąga się powłoka zbudowana z warstw lodu i słonej wody. Może to być kilka warstw stałych i ciekłych ułożonych naprzemiennie. Najgłębiej, w kontakcie ze skałami płaszcza, może istnieć warstwa silnie zasolonej wody, ponad nią gęsty lód VI, wyżej pośrednie warstwy stałe może tworzyć lód V i lód III. Są to wysokociśnieniowe formy lodu, niewystępujące naturalnie na Ziemi, o innej strukturze krystalicznej niż znany z życia codziennego lód Ih. Taki lód tworzy najbardziej zewnętrzną warstwę, twardą skorupę o grubości kilkunastu kilometrów.',
        'Obserwacje Teleskopem Hubble’a wskazują na istnienie wokół Ganimedesa bardzo rozrzedzonej atmosfery, która składa się niemal w 100% z tlenu. Powstaje ona w wyniku dysocjacji lodu powierzchniowego w efekcie napromieniowania. Grawitacja księżyca nie zatrzymuje uwolnionego przy tym lotnego wodoru, pozostawiając tlen.',
    ];

    descCallisto: Array<string> = [
        'Drugi co do wielkości księżyc Jowisza, trzeci w Układzie Słonecznym, najbardziej oddalony z księżyców galileuszowych.',
        'Kallisto jest księżycem lodowym, składa się w przybliżeniu z równej ilości skał i lodu. Jej średnia gęstość to około 1,83 g/cm³. Na powierzchni metodą spektroskopową wykryto lód wodny, dwutlenek węgla, krzemiany oraz związki organiczne. Obserwacje sondy Galileo wskazują, że Kallisto może mieć małe krzemianowe jądro i prawdopodobnie ocean ciekłej wody na głębokości ponad 100 km.',
    ];

    descMimas: Array<string> = [
        'Siódmy pod względem wielkości księżyc Saturna, odkryty razem z Enceladusem w 1789 przez Williama Herschela. Jest najmniejszym znanym ciałem zdolnym utrzymać kształt bliski sferycznemu (znajdującym się w równowadze hydrostatycznej) dzięki własnej grawitacji.',
        'Mała gęstość Mimasa wskazuje, że jest księżycem lodowym, składającym się głównie z lodu wodnego z niewielką domieszką skał. Powierzchnia pokryta jest kraterami uderzeniowymi, z których największy – Herschel – ma średnicę 130 km, ponad 1/3 średnicy Mimasa, z sześciokilometrowej wysokości wzniesieniem centralnym. Pozostałe kratery mają rozmiary rzędu 40 km, z wyjątkiem rejonów bieguna południowego, gdzie zazwyczaj nie przekraczają 20 km.',
    ];

    descEnceladus: Array<string> = [
        'Księżyc Saturna, odkryty w 1789 przez Williama Herschela. Enceladus jest szóstym pod względem wielkości naturalnym satelitą Saturna. Ma średnicę około 500 kilometrów.',
        'Enceladus jest stosunkowo niewielkim satelitą. Jego średnica wynosi około 500 kilometrów, czyli siedem razy mniej niż średnica ziemskiego Księżyca. Jego powierzchnia całkowita przekracza 800 tysięcy km², czyli jest ponad dwa razy większa niż powierzchnia Polski.',
        'Pod względem masy i średnicy Enceladus jest szóstym co do wielkości satelitą Saturna po Tytanie, Rei, Japecie, Dione i Tetydzie. Jest jednym z najmniejszych satelitów Saturna o regularnym, sferycznym kształcie, ponieważ wszystkie mniejsze księżyce, z wyjątkiem Mimasa, mają nieregularny kształt. Dokładniej, Enceladus ma kształt spłaszczonej elipsoidy o rozmiarach, obliczonych na podstawie zdjęć wykonanych przez sondę Cassini, 513 na 503 na 497 km.',
        'Enceladus jest księżycem lodowym, zbudowanym w znacznym stopniu z lodu. Jego powierzchnia jest stosunkowo młoda, bogata w twory takie jak kratery, gładkie równiny oraz rozległe szczeliny i grzbiety. Przypuszcza się, że ukształtowała się około 100 milionów lat temu wskutek wydobywania się wody z wnętrza księżyca. Pokrywający ją świeży, czysty lód sprawia, że Enceladus ma największe albedo ze wszystkich obiektów w Układzie Słonecznym – odbija ponad 90% padającego nań światła. Niewielka ilość pochłanianej energii słonecznej powoduje, że temperatura powierzchni wynosi w południe zaledwie −198 °C. Mimo to na tym niewielkim księżycu obserwujemy szczeliny, z których wyrzucane są strumienie pary i pyłu, podobnie do ziemskich gejzerów.',
    ];

    descThetys: Array<string> = [
        'Piąty co do wielkości księżyc Saturna. Jest prawie pięć razy mniejsza od Tytana. Mała gęstość Tetydy pozwala przypuszczać, że jest to księżyc lodowy, podobnie jak Dione i Rea, i składa się ona prawie w całości z lodu wodnego. Księżyc ten odkrył Giovanni Cassini 21 marca 1684 roku.',
        'Zachodnia półkula jest zdominowana przez potężny, choć płytki, krater uderzeniowy Odyseusz, którego średnica wynosząca 400 km to prawie 2/5 średnicy Tetydy. Fakt, że tak potężne uderzenie nie rozerwało księżyca na kawałki pozwala sądzić, że w momencie uderzenia był on w stanie płynnym lub przynajmniej półpłynnym. Kratery uderzeniowe, które wtedy powstały, „wygładzały” swoje kształty. Drugim elementem charakterystycznym Tetydy jest wielka dolina Ithaca Chasma, o długości 2000 km – czyli 3/4 obwodu Tetydy, szeroka na 100 km i głęboka na 3–5 km. Gdy księżyc powoli zamarzał, powierzchnia musiała pękać, ponieważ objętość rosła – prawdopodobnie w ten sposób powstał ten ogromny kanion. Alternatywna teoria zakłada, że uderzenie, które wybiło krater Odyseusz wygenerowało siły, które spowodowały powstanie doliny Ithaca Chasma, zwłaszcza że krater i dolina leżą po przeciwnych stronach księżyca.'
    ];

    descDione: Array<string> = [
        'Czwarty pod względem wielkości księżyc Saturna. Został odkryty przez Giovanniego Cassiniego wraz z Tetydą w roku 1684.',
        'Dione jest księżycem lodowym, zbudowanym w większości z wodnego lodu z domieszką materiału skalnego. Pod warstwą lodu znajduje się skalne jądro. Dione ma zróżnicowaną powierzchnię. Na półkuli zwróconej w kierunku Saturna przeważającą część krajobrazu stanowią kratery uderzeniowe. Na drugiej półkuli Dione widać sieć linii biegnących przez całą półkulę. Są to lodowe klify, zapewne pochodzenia tektonicznego, wysokie nawet na kilkaset metrów. Do największych z nich należą Carthage Linea i Palatine Linea.',
    ];

    descTitan: Array<string> = [
        'Największy księżyc Saturna, jedyny w Układzie Słonecznym otoczony gęstą atmosferą, w której zachodzą skomplikowane zjawiska pogodowe. Jest to również jedyne ciało poza Ziemią, na którym odkryto powierzchniowe zbiorniki cieczy – jeziora ciekłego metanu. Tytan został odkryty w 1655 roku przez Christiaana Huygensa, jako pierwszy z satelitów Saturna. ',
        'Tytan jest drugim pod względem wielkości księżycem w Układzie Słonecznym, większym od Merkurego – najmniejszej planety w naszym układzie. Do przybycia sondy Voyager 1 w 1980 r. uważano, że jest nawet większy od Ganimedesa, jednak kiedy została odkryta atmosfera Tytana, okazało się, że ma nieznacznie mniejszą średnicę.',
        'Niektóre księżyce w Układzie Słonecznym, np. księżyce galileuszowe, mają nikłą otoczkę gazową. Jednak jedynie Tytan ma gęstą atmosferę, gęstszą od ziemskiej. Ma ona pomarańczowy kolor i jest nieprzejrzysta w szerokim zakresie fal elektromagnetycznych (w tym w zakresie widzialnym). Atmosfera składa się głównie z azotu z domieszką argonu, metanu i innych związków organicznych, takich jak etan i acetylen, które powstają w górnych warstwach atmosfery w wyniku oddziaływania na metan słonecznego promieniowania ultrafioletowego.',
        'Ciśnienie przy powierzchni wynosi 1,5 bara, czyli jest o 50% większe niż na Ziemi.',
        'Tytan jest zaliczany do księżyców lodowych, jako że składa się w dużej mierze z lodu wodnego. Pod kilkukilometrowej grubości lodową skorupą znajduje się prawdopodobnie warstwa ciekłej wody, przypominająca podpowierzchniowe oceany na Europie i Ganimedesie. Jeszcze głębiej jest warstwa wysokociśnieniowego lodu VI i jądro złożone ze skał o dużej zawartości wody, którego średnicę szacuje się na około 2000 km.',
        'Temperatura powierzchni Tytana wynosi ok. −179,2 °C. W tej temperaturze wodny lód sublimuje przy bardzo niskim ciśnieniu, przez co w stratosferze są śladowe ilości pary wodnej.'
    ];

    descAriel: Array<string> = [
        'Jeden z pięciu największych satelitów Urana. Został odkryty przez Williama Lassella w 1851.',
        'Wszystkie duże księżyce Urana są zbudowane z około 40–50% zamrożonej wody zmieszanej ze skałami, są to nieco większe kawałki skał niż na dużych księżycach Saturna takich jak Rea. Powierzchnia Ariela jest pokryta kraterami oraz głębokimi (nawet do 10 km), długimi na setki kilometrów wąwozami. Ariel jest bardzo podobny do Tytanii, lecz jego powierzchnia jest bardziej urozmaicona, zaś kratery i wąwozy są tu dużo większe i bardziej rozwinięte. Powierzchnia jest stosunkowo młoda (jej wiek jest porównywalny z wiekiem powierzchni Enceladusa), niektóre procesy tworzące nową powierzchnię są w toku.',
        'Ariel jest księżycem lodowym, składa się z lodu w około 70%, w 30% z krzemianów. Na jego lodowej powierzchni często występują kratery, które pokryte są nieznanym ciemnym materiałem.',
        'Naukowcy rozpoznają jedynie trzy typy struktur geologicznych Ariela: kratery uderzeniowe, wąskie depresje oraz doliny.',
    ];

    descMiranda: Array<string> = [
        'Najmniejszy spośród pięciu głównych księżyców Urana. Miranda posiada najbardziej złożone struktury geologiczne spośród satelitów tej planety. Została odkryta przez Gerarda Kuipera w 1948 roku.',
        'Powierzchnię Mirandy może pokrywać lód z małą ilością skał krzemianowych oraz związki organiczne zawierające metan. Licznie występują kaniony o głębokości dochodzącej do 20 km oraz regiony świadczące o wzmożonej w przeszłości aktywności geologicznej. Rozległe wyżłobione struktury mogą być wynikiem ogrzewania się lodu. Niska gęstość wskazuje, że lód jest głównym składnikiem wnętrza, zatem zalicza się ona do księżyców lodowych.',
        'Miranda zawiera największy uskok w Układzie Słonecznym – Verona Rupes. Jego wysokość oszacowano na od 5 do nawet 20 km.',
    ];

    descTriton: Array<string> = [
        'Największy księżyc Neptuna. Został odkryty przez Williama Lassella 10 października 1846 roku, 17 dni po odkryciu samej planety. Jest ósmym księżycem Neptuna licząc od powierzchni planety macierzystej.',
        'Tryton jest jedynym dużym księżycem w Układzie Słonecznym, który porusza się ruchem wstecznym wokół macierzystej planety (nachylenie orbity do równika planety wynosi 157°). Taki ruch wyklucza powstanie księżyca w tym samym rejonie dysku planetarnego co planeta, wokół której krąży. Tryton został więc przechwycony przez pole grawitacyjne Neptuna, najprawdopodobniej z pasa Kuipera. Średnia odległość od planety wynosi 354,8 tys. km i jest bardzo podobna do odległości Księżyca od Ziemi. Tryton powoli zbliża się do Neptuna i przypuszczalnie za 1,4 do 3,6 miliarda lat zderzy się z planetą bądź rozpadnie się na niewielkie fragmenty, tworząc system pierścieni o wielkości porównywalnej z posiadanymi przez Saturna.',
        'Średnia gęstość Trytona wynosi ok. 2,07 g/cm³; składa się on prawdopodobnie w 25% z wody (w postaci lodu) i w 75% z materiału skalnego. Duża zawartość lodu pozwala zaliczyć go do księżyców lodowych. Na powierzchni Trytona panują jedne z najniższych temperatur z zaobserwowanych na powierzchni ciał Układu Słonecznego: temperatura w okolicach południowego bieguna wynosi 35,6 K. Mimo to Tryton jest aktywny geologicznie.  Voyager 2 zaobserwował erupcje kriowulkaniczne, wyrzucające płynny azot, pył i metan 8 km ponad powierzchnię. Za aktywność kriowulkaniczną odpowiedzialne są prawdopodobnie zmiany pór roku. Gdy zwiększa się kąt, pod jakim powierzchnia Trytona jest oświetlana przez Słońce, więcej światła przenika warstwę azotowego lodu i jest absorbowane przez materię leżącą poniżej. Część azotu przechodzi ze stanu stałego w ciekły i zostaje wyrzucona ponad powierzchnię. Satelita posiada także cienką atmosferę zbudowaną przede wszystkim z azotu, z niewielką domieszką metanu. Ciśnienie atmosferyczne wynosi ok. 1 Pa. ',
    ];

    PLANETS = [
        new Planet('1', 'Merkury', 'skalista', 'mercury.png', 'nieznany', 'znana w starożytności', '87,969 dni', '3,3011 × 10^23 kg', '7,5 × 10^7 km²', '100 K - 700 K', '3,70 m/s²', '4,3 km/s', '0,142',  'brak', 'ok. 10^-10 Pa', this.descMerkury),
        new Planet('2', 'Wenus', 'skalista', 'venus.jpg', 'nieznany', 'znana w starożytności', '224,701 dni', '4,867 × 10^24 kg ', '4,60 × 10^8 km²', 'średnio 737 K', '8,87 m/s²', '10,36 km/s', '0,698', 'brak', '92000 hPa', this.descWenus),
        new Planet('3', 'Ziemia', 'skalista', 'earth.jpeg', '', '', '365,256363004 dni', '5,97219 × 10^24 kg', '510 072 000 km²', '185K – 331 K', '9,80665 m/s²', '11,19 km/s', '0,434', '1', '1014 hPa', this.descEarth),
        new Planet('4', 'Mars', 'skalista', 'mars.jpg', 'nieznany', 'znana w starożytności', '686,980 dni', '6,4171 × 10^23 kg', '1,448 × 10^8 km²', '−140,15–19,85 °C', '3,71 m/s²', '5,03 km/s', '0,170', '2', '400 - 870 Pa', this.descMars),
        new Planet('5', 'Jowisz', 'gazowa', 'jupiter.jpg', 'nieznany', 'znana w starożytności', '4332,589 dni', '1,89819 × 10^27 kg', '6,21796 × 1010 km²', '165 K', '24,79 m/s²', '59,5 km/s', '0,538', '79', '', this.descJupiter),
        new Planet('6', 'Saturn', 'gazowa', 'saturn.webp', 'nieznany', 'znana w starożytności', '10 759,22 dni', '5,6834 × 10^26 kg' , '4,27 × 10^10 km²', '134 K', '10,44 m/s', '35,5 km/s', '0,499', '82', '', this.descSaturn),
        new Planet('7', 'Uran', 'gazowa', 'uranus.jpg', 'William Herschel', '13 marca 1781', '30 685,4 dni', '8,6813 × 10^25 kg', '8,084 × 10^9 km²', '76 K', '8,87 m/s²', 'ucieczki 	21,3 km/s', '0,488', '27', '', this.descUranus),
        new Planet('8', 'Neptun', 'gazowa', 'neptune.jpg', 'Johann Gottfried Galle', '23 września 1846', '60 189 dni', '1,02413 × 10^26 kg', '7,6183 × 10^9 km²', '72 K', '11,15 m/s²', '23,5 km/s', '0,442', '14', '', this.descNeptune),
    ];

    MOONS = [
        new Moon('1', 'Księżyc', 'Ziemia', 'moon.jpg', '', '', '27,321661 dni', '7,342 × 10^22 kg ', '3,793 × 10^7 km2 ', '40 K - 396K', '1,622 m/s²', '2,38 km/s', '0,12', '-2,5 do -12,9', this.descMoon),
        new Moon('2', 'Deimos', 'Mars', 'deimos.jpg', 'Asaph Hall', '12 sierpnia 1877', '1,26244 dni', '1,476 × 10^15 kg ', '495,1548 km^2', '~233 K', '0,003 m/s^2', '5,556 m/s ', '0,068', '12,89', this.descDeimos),
        new Moon('3', 'Fobos', 'Mars', 'phobos.jpg', 'Asaph Hall', '18 sierpnia 1877', ' 0,31891 dni', '1,072 × 10^16 kg', '1548,3 km^2', '~233 K', '0,0084 - 0,0019 m/s^2', '11,39 m/s', '0,071', '11,4', this.descPhobos),
        new Moon('4', 'Io', 'Jowisz', 'io.jpg', 'Galileo Galilei', '7 stycznia 1610', '1,769 dni', '8,93 × 10^22 kg', '41 910 000 km^2', '90 K - 130 K', '1,796 m/s^2', '2,558 km/s', '0,63 ± 0,02', '5,02', this.descIo),
        new Moon('5', 'Europa', 'Jowisz', 'europa.jpg', 'Galileo Galilei', '7 stycznia 1610', '3,551 dni', '4,80 × 10^22 kg', '3,09 × 107 km^2', '50 K - 125 K', '1,314 m/s^2', '2,025 km/s', '0,67 ± 0,03 ', '5,29', this.descEuropa),
        new Moon('6', 'Ganimedes', 'Jowisz', 'ganimedes.jpg', 'Galileo Galilei', '7 stycznia 1610', '7,155 dni', '1,4819 × 10^23 kg', '8,70 × 10^7 km^2', '70 K - 152 K', '1,425 m/s^2', '2,74 km/s', '0,43 ± 0,02', '4,61', this.descGanimedes),
        new Moon('7', 'Kallisto', 'Jowisz', 'callisto.jpg', 'Galileo Galilei', '7 stycznia 1610', '16,689 dni ', '(1,07594 ± 0,00014) × 10^23 kg', '7,30 × 107 km^2', '80 K - 165 K', '1,235 m/s^2', '2,440 km/s', '0,22', '5,7', this.descCallisto),
        new Moon('8', 'Mimas', 'Saturn', 'mimas.jpg', 'William Herschel', '17 września 1789', '0,942 dni', '(3,7493 ± 0,0031) × 10^19 kg', '490000 – 500000 km^2', '64 K', '0,0636 m/s^2', '0,159 km/s', '0,962 ± 0,004', '13', this.descMimas),
        new Moon('9', 'Enceladus', 'Saturn', 'enceladus.jpg', 'William Herschel', '28 sierpnia 1789', '1,370 dni', '1,080 × 10^20 kg', '', '32,9 K - 145 K', '0,11 m/s^2', '0,239 km/s', '0,99', '12', this.descEnceladus),
        new Moon('10', 'Tetyda', 'Saturn', 'tethys.jpg', 'Giovanni Cassini', '21 marca 1684', '1,888 dni', '6,176 × 10^20 kg', '', '86K', '0,145 m/s^2', '0,393 km/s ', '1,229 ± 0,005', '10', this.descThetys),
        new Moon('11', 'Dione', 'Saturn', 'dione.jpg', 'Giovanni Cassini', '21 marca 1684', '2,737 dni', '1,096 × 10^21 kg', '3964776,51 km^2', '87 K', '0,231 m/s^2', '0,510 km/s', '0,998 ± 0,004', '10', this.descDione),
        new Moon('12', 'Tytan', 'Saturn', 'titan.jpg', 'Christiaan Huygens', '25 marca 1655', '15,945 dni', '1,345 × 10^23 kg', '8,3 × 10^7 km^2', '93,7 K', '1,35 m/s^2', '2,639 km/s', '0,22', '8,2 - 9,0', this.descTitan),
        new Moon('13', 'Ariel', 'Uran', 'ariel.jpg', 'William Lassell', '24 października 1851', '2,520 dni', '(1,35 ± 0,12) × 10^21 kg', '4211300 km^2', 'ok. 60 K', '0,27 m/s^2', '0,56 km/s', '0,39', '14,4', this.descAriel),
        new Moon('14', 'Miranda', 'Uran', 'miranda.jpg', 'Gerard Kuiper', '16 lutego 1948', '1,413 dni', '(6,6 ± 0,7) × 10^19 kg', '700000 km^2', 'ok. 60 K', '0,079 m/s^2', '0,19 km/s', '0,32', '15,5', this.descMiranda),
        new Moon('15', 'Tryton', 'Neptun', 'triton.jpg', 'William Lassell', '10 października 1846', '5,877 dni', '2,14 × 10^22 kg', '23018000 km^2', '38 K', '0,779 m/s^2', '1,455 km/s', '0,76', '13,47', this.descTriton),
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

    getMoonById(id: string): Moon {
        return this.MOONS.find(element => element.id === id);
    }
}

export class Planet {
    constructor(
        public id: string,
        public name: string,
        public type: string,
        public photo: string,
        public discoverer?: string,
        public dateDiscovery?: string,
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
    constructor(
        public id: string,
        public name: string,
        public planet: string,
        public photo: string,
        public discoverer?: string,
        public dateDiscovery?: string,
        public orbitalPeriod?: string,
        public mass?: string,
        public surfaceArea?: string,
        public temperature?: string,
        public surfaceGravity?: string,
        public escapeVelocity?: string,
        public albedo?: string,
        public apparentMagnitude?: string,
        public description?: Array<string>) {}
}
