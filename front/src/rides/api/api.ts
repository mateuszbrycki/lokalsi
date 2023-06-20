import {List, Set} from "immutable";
import {Day, FilterQuery, Ride, RideType, StartingMonthTime} from "../../types";
import {LocalDate, LocalDateTime, LocalTime, Month} from "@js-joda/core";
import {TIME_FORMATTER} from "../../common/time";
import { ridesReducer } from "../store/reducers";

export interface RideHttpApi {
    readonly getRides: () => List<Ride>
    readonly getRidesWithFilter: (query: FilterQuery) => List<Ride>
}

const Api: RideHttpApi = {
    getRides: () => {
        let rides: List<Ride> = List.of(
            {
                id: "1",
                name: "72D Athlete Bike",
                // time: new StartingMonthTime(
                //     {startingMonth: Month.FEBRUARY, time: LocalTime.parse("17:00")},
                //     {startingMonth: Month.MARCH, time: LocalTime.parse("16:00")}
                // )
                time: StartingMonthTime.of("17:30"),
                day: Day.MONDAY,
                description: "7R Rowmix Team zapraszają na otwarte treningi kolarskie. Proponujemy wspólny trening dostosowany do trwającego sezonu startowego na rowerach górskich/szosowych na dwóch lub trzech poziomach zaawansowania, trwający ok 150 min. pod okiem i uchem trenera.",
                url: {
                    facebook: "https://www.facebook.com/groups/472569526423414"
                },
                startingPoint: {
                    latitude: 50.057093,
                    longitude: 19.910316
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Kraków",
                lastVerified: LocalDate.parse("2023-02-23")
            },
            {
                id: "2",
                name: "IC Babski Blat",
                time: StartingMonthTime.of("17:00"),
                day: Day.TUESDAY,
                description: "Formuła IC. Czyli imitujemy prawdziwe ściganie. Dziewczyny z naszego teamu wytyczyły juz trasę, i nawet ją przejechały 😊. Stravovy segment o nazwie 'Babski blat' to wasza runda wyścigowa. Wygrywa ta, która poprostu przyjedzie na metę pierwsza 😃 Możecie atakować, naciągać, spawać, albo spokojnie czekać na ostatnie metry 😃.",
                url: {
                    facebook: "https://www.facebook.com/InnergyRacingTeam"
                },
                startingPoint: {
                    latitude: 50.062523,
                    longitude:19.902603
                },
                rideTypes: Set.of(RideType.ROAD, RideType.FOR_LADIES),
                city: "Kraków",
            },
            {
                id: "3",
                name: "Damskie wtorki z Profidea dla Kobiet",
                time: StartingMonthTime.of("17:00"),
                day: Day.TUESDAY,
                description: "\"Nieważne jak szybko, nieważne jak daleko, ale ważne, że RAZEM ❤️\". Grupa średniozaawansowana. Zapraszamy wszystkie panie, które kontynuują z nami przygodę na rowerze szosowym i gravelowym. Jedziemy przejażdżki typu Coffee Ride. Nie ścigamy się, tylko zwiedzamy nowe trasy, uczymy się techniki, jazdy w grupie i bezpiecznego poruszania po drogach. Rozkręć z nami kobiece kolarstwo",
                url: {
                    facebook: "https://fb.com/ProfideadlaKobiet"
                },
                startingPoint: {
                    latitude: 50.059474,
                    longitude: 19.922686
                },
                rideTypes: Set.of(RideType.ROAD, RideType.FOR_LADIES),
                city: "Kraków"
            },
            {
                id: "4",
                name: "Damskie czwartki z Profidea dla Kobiet",
                time: StartingMonthTime.of("17:00"),
                day: Day.THURSDAY,
                description: "Zapraszamy wszystkie panie, które rozpoczynają jazdę na rowerach szosowych i gravelowych. Jedziemy przejażdżki typu Coffee Ride. Nie ścigamy się, tylko zwiedzamy nowe trasy, uczymy się techniki, jazdy w grupie i bezpiecznego poruszania po drogach. \"Nieważne jak szybko, nieważne jak daleko, ważne, że RAZEM\".",
                url: {
                    facebook: "https://fb.com/ProfideadlaKobiet"
                },
                startingPoint: {
                    latitude: 50.059474,
                    longitude: 19.922686
                },
                rideTypes: Set.of(RideType.ROAD, RideType.FOR_LADIES),
                city: "Kraków"
            },
            {
                id: "5",
                name: "Damskie środy z Profidea dla Kobiet",
                time: StartingMonthTime.of("17:00"),
                day: Day.WEDNESDAY,
                description: "Grupa zaawansowana. Zapraszamy wszystkie panie na rowerach szosowych, które opanowały sztukę jazdy na kole i chcą spróbować sił w damskim peletonie. Rozkręć z nami kobiece kolarstwo.",
                url: {
                    facebook: "https://fb.com/ProfideadlaKobiet"
                },
                startingPoint: {
                    latitude: 50.059474,
                    longitude: 19.922686
                },
                rideTypes: Set.of(RideType.ROAD, RideType.FOR_LADIES),
                city: "Kraków"
            },
            {
                id: "8",
                name: "Czwartki z Chodźże na Rower",
                time: StartingMonthTime.of("17:20"),
                day: Day.THURSDAY,
                description: "Grupa \"Co, ja nie podjadę? Potrzymaj mi bidon!\", czyli nietypowe podjazdy z #KrulLasu.",
                url: {
                    facebook: "https://fb.com/chodzzenarower/"
                },
                startingPoint: {
                    latitude: 50.053309,
                    longitude: 19.901110
                },
                rideTypes: Set.of(RideType.MTB),
                city: "Kraków"
            },
            {
                id: "9",
                name: "Czwartki z Chodźże na Rower",
                time: StartingMonthTime.of("17:30"),
                day: Day.THURSDAY,
                description: "Mocne XC, czyli grupa Miłosza. Efektywne bez przestojów, stricte 2h co do minuty żwawej jazdy, przeważnie Sikornik i Wolskiego. W czwartki moga pojawiać się dłuższe, bo 3h przejazdy po okolicznych lasach albo w Dolinki.\n" +
                    "Szczegóły pod wydarzeniem.\n" +
                    "Najpóźniej w dzień treningu do g. 12 dowiesz się do jakiego lasu jedziemy i tempo, generalnie nie ma znaczenia jaka jest pogoda, grupa prawie zawsze jeździ.\n",
                url: {
                    facebook: "https://fb.com/chodzzenarower/"
                },
                startingPoint: {
                    latitude: 50.053309,
                    longitude:19.901110
                },
                rideTypes: Set.of(RideType.MTB),
                city: "Kraków"
            },
            {
                id: "10",
                name: "Czwartki z Chodźże na Rower",
                time: StartingMonthTime.of("17:00"),
                day: Day.THURSDAY,
                description: "Hutasy i Mateusz w roli głownej. Dokładnych informacji szukajcie pod wydarzeniem i w naszej grupie.",
                url: {
                    facebook: "https://fb.com/chodzzenarower/"
                },
                startingPoint: {
                    latitude: 50.076142,
                    longitude: 20.051179
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Kraków"
            },
            {
                id: "11",
                name: "Czwartki z Chodźże na Rower",
                time: StartingMonthTime.of("17:00"),
                day: Day.THURSDAY,
                description: "Kuba i Grupetto łognitto 🔥🔥🔥 Szczegółów szukaj w grupie i pod wydarzeniem.",
                url: {
                    facebook: "https://fb.com/chodzzenarower/"
                },
                startingPoint: {
                    latitude: 50.058665,
                    longitude: 19.921278
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Kraków"
            },
            {
                id: "12",
                name: "Wrześniowe wtorki z Cyklo Jurą w terenie",
                time: StartingMonthTime.of("17:00"),
                day: Day.TUESDAY,
                description: "Stratujemy max 5 minut po wyznaczonym czasie z miejsca zbiórki.",
                url: {
                    facebook: "https://www.facebook.com/cyklojura"
                },
                startingPoint: {
                    latitude: 50.116404,
                    longitude: 19.800578
                },
                rideTypes: Set.of(RideType.MTB),
                city: "Zabierzów"
            },
            {
                id: "13",
                name: "Pokręcona Środa z CJZ",
                time: StartingMonthTime.of("16:30"),
                day: Day.WEDNESDAY,
                description: "Zapraszamy szosowców na środowe przejażdżki z CJZ TEAM 🚲😎\n" +
                    "TRASA: ~65 km; ~700 m up\n" +
                    "TEMPO: ~27-28 km/h\n" +
                    "CZAS: ~2,5h",
                url: {
                    facebook: "https://www.facebook.com/cyklojura"
                },
                startingPoint: {
                    latitude: 50.116404,
                    longitude: 19.800578
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Zabierzów"
            },
            {
                id: "14",
                name: "Damska Szosa",
                time: StartingMonthTime.of("16:30"),
                day: Day.WEDNESDAY,
                description: "Damska szosa w Krakowie 🚴🏻‍♀️\n" +
                    "Jeździmy w tygodniu i w weekendy, czasem szybko, czasem wolno, w różnych kierunkach, na ciastka, po QOMy, ale przede wszystkim w zgranej grupie dziewczyn na szosach.\n" +
                    "#girlsonly, Panom dziękujemy;)",
                url: {
                    strava: "https://www.strava.com/clubs/damskaszosa"
                },
                startingPoint: {
                    latitude: 50.058665,
                    longitude: 19.921278
                },
                rideTypes: Set.of(RideType.ROAD, RideType.FOR_LADIES),
                city: "Kraków"
            },
            {
                id: "15",
                name: "Ustawka kolarska z Bike RS",
                time: StartingMonthTime.of("17:00"),
                day: Day.THURSDAY,
                description: "Jeździmy w zróżnicowanym terenie, głównie po \"południowej\" stronie Krakowa, ze względu na naszą lokalizację.\n" +
                    "Zapraszamy do wspólnej jazdy",
                url: {
                    facebook: "https://www.facebook.com/groups/403048707156938"
                },
                startingPoint: {
                    latitude: 49.988630,
                    longitude: 19.913532
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Kraków"
            },
            {
                id: "16",
                name: "Gravelowy wtorek z Bike RS",
                time: StartingMonthTime.of("17:00"),
                day: Day.TUESDAY,
                description: "Jeździmy w zróżnicowanym terenie, głównie po \"południowej\" stronie Krakowa, ze względu na naszą lokalizację.\n" +
                    "Zapraszamy do wspólnej jazdy",
                url: {
                    facebook: "https://www.facebook.com/groups/403048707156938"
                },
                startingPoint: {
                    latitude: 49.988630,
                    longitude: 19.913532
                },
                rideTypes: Set.of(RideType.GRAVEL),
                city: "Kraków"
            },
            {
                id: "17",
                name: "Cichy kącik",
                time: StartingMonthTime.of("10:10"),
                day: Day.SATURDAY,
                description: "Grupa krakowskich kolarzy. Regularne spotkania na treningi szosowe w weekendy.",
                url: {
                    facebook: "https://www.facebook.com/groups/cichykacik/"
                },
                startingPoint: {
                    latitude: 50.062519,
                    longitude: 19.902593
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Kraków"
            },
            {
                id: "18",
                name: "Coffee Ride",
                time: StartingMonthTime.of("10:30"),
                day: Day.SATURDAY,
                description: "Grupa sympatyków kolarstwa szosowego. Celem tej ustawki zawsze będzie \"mała czarna\" przy okazji\n",
                url: {
                    facebook: "https://fb.com/Coffee-Ride-1759901340903034/"
                },
                startingPoint: {
                    latitude: 50.047979,
                    longitude: 19.902815
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Kraków"
            },
            {
                id: "19",
                name: "NIEPOkręcę",
                time: StartingMonthTime.of("09:30"),
                day: Day.SATURDAY,
                description: "Znudziła Ci się samotna jazda na szosie? - Tu możesz spróbować swoich sił jazdy w peletonie. Od kwietnia do końca października zbiórka o 9.30.",
                url: {
                    facebook: "https://www.facebook.com/groups/120724641919671/"
                },
                startingPoint: {
                    latitude: 50.032902,
                    longitude: 20.217230
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Niepołomice"
            },
            {
                id: "20",
                name: "Grupetto Zielona Góra Ride",
                time: StartingMonthTime.of("10:00"),
                day: Day.SATURDAY,
                description: "Każdy, kto chce pojeździć w grupie, jest mile widziany!",
                url: {
                    facebook: "https://www.facebook.com/Grupetto-Zielona-G%C3%B3ra-822020794664238"
                },
                startingPoint: {
                    latitude: 51.938334,
                    longitude: 15.514192
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Zielona Góra"
            },
            {
                id: "21",
                name: "Palma Ride",
                time: StartingMonthTime.of("17:15"),
                day: Day.TUESDAY,
                description: "Treningowa ustawka z Grupetto Zielona Góra.",
                url: {
                    facebook: "https://www.facebook.com/Grupetto-Zielona-G%C3%B3ra-822020794664238"
                },
                startingPoint: {
                    latitude: 51.938334,
                    longitude: 15.514192
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Zielona Góra"
            },
            {
                id: "22",
                name: "Palma Ride",
                time: StartingMonthTime.of("17:15"),
                day: Day.THURSDAY,
                description: "Treningowa ustawka z Grupetto Zielona Góra.",
                url: {
                    facebook: "https://www.facebook.com/Grupetto-Zielona-G%C3%B3ra-822020794664238"
                },
                startingPoint: {
                    latitude: 51.938334,
                    longitude: 15.514192
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Zielona Góra"
            },
            {
                id: "23",
                name: "Niedzielna100 Poznań Winogrady",
                time: StartingMonthTime.of("10:00"),
                day: Day.SUNDAY,
                description: "Dla fanów szosowych dwóch kółek, którzy lubią kręcić kilometry w super towarzystwie, pić dobrą kawę, jeść ciasto i cieszyć się jazdą.",
                url: {
                    facebook: "https://www.facebook.com/Niedzielna100Winogrady"
                },
                startingPoint: {
                    latitude: 52.432057,
                    longitude: 16.952341
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Poznań"
            },
            {
                id: "24",
                name: "GraveLove Poznań",
                time: StartingMonthTime.of("10:00"),
                day: Day.SUNDAY,
                description: "Celem organizowanych utawek kolarskich GraveLove Niedziele oraz innych wydarzeń rowerowych pod szyldem GraveLove Poznań jest popularyzacja Poznańskego kolarstwa przełajowego i gravelowego, zwiększenie liczby osób jeżdżących na rowerach \"szutrowych\", integracja Poznańskego środowiska kolarskiego oraz prezentowanie i promowanie szutrowej odmany koalrstwa.",
                url: {
                    facebook: "https://www.facebook.com/GraveLove-Pozna%C5%84-106410877548498/"
                },
                startingPoint: {
                    latitude: 52.432057,
                    longitude: 16.952341
                },
                rideTypes: Set.of(RideType.GRAVEL),
                city: "Poznań"
            },
            {
                id: "25",
                name: "Trening Szosowy Zgrupka Team",
                time: StartingMonthTime.of("09:00"),
                day: Day.SATURDAY,
                description: "Ustawki MTB ,kolarskie, zakładki triathlonowe, wypady rekreacyjne i wydarzenia promujące kolarstwo. Społeczność fanów kolarstwa i triathlonu.",
                url: {
                    facebook: "https://www.facebook.com/Zgrupka/"
                },
                startingPoint: {
                    latitude: 52.379108,
                    longitude: 16.943422
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Poznań"
            },
            {
                id: "26",
                name: "Szosa ONLY FOR GIRLS",
                time: StartingMonthTime.of("09:00"),
                day: Day.SATURDAY,
                description: "Szosa dla Dziewczyn- TYLKO DLA DZIEWCZYN! Panowie będą odsyłani do domu. Będzie przerwa na kawe( o ile pogoda pozwoli). Obowiązkowy kask i oświetlenie tył.",
                url: {
                    facebook: "https://www.facebook.com/babskiekrecenie/"
                },
                startingPoint: {
                    latitude: 54.382605,
                    longitude: 18.598718
                },
                rideTypes: Set.of(RideType.ROAD, RideType.FOR_LADIES),
                city: "Gdańsk"
            },
            {
                id: "27",
                name: "Szosowe Czwartki Koszalin",
                time: StartingMonthTime.of("17:00"),
                day: Day.THURSDAY,
                description: "My jesteśmy zapaleńcami, którzy „zimują” na sali i na wiosnę zaczynają trenować na dworze. Naszym ulubionym sportem jest kolarstwo szosowe. Nie zawsze mamy czas na wspólną jazdę, ale czwartek stał się takim dniem, gdy większość zostawia wszystko i jedzie. Stąd proponujemy wspólne czwartkowe treningi na szosie. Startujemy w każdy czwartek o godz. 17:00 spod Góry Chełmskiej (róg Słupskiej i Rolnej), a trasa to ok. 60-65 km.",
                url: {
                    facebook: "https://www.facebook.com/Koszalincc/",
                    strava: "https://www.strava.com/clubs/koszalin"
                },
                startingPoint: {
                    latitude: 54.200571,
                    longitude: 16.212645,
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Koszalin"
            },
            {
                id: "28",
                name: "Sobotnia Grupa Kolarska",
                time: StartingMonthTime.of("10:00"),
                day: Day.SATURDAY,
                description: "Trasa od 60 do 90 km\n" +
                    "3 grupy w zależności od stopnia zaawansowania:\n" +
                    "1 grupa 30-33 km/h\n" +
                    "2 grupa 27-30 km/h\n" +
                    "3 grupa 25-27 km/h",
                url: {
                    facebook: "https://www.facebook.com/groups/425124495065210/",
                },
                startingPoint: {
                    latitude: 50.196884,
                    longitude: 18.980590,
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Katowice"
            },
            {
                id: "29",
                name: "Niedzielna Grupa Gravelowa",
                time: StartingMonthTime.of("10:00"),
                day: Day.SUNDAY,
                description: "Kto ma ochotę na wspólną przejażdżkę, to zapraszam serdecznie w niedzielę :):):)",
                url: {
                    facebook: "https://www.facebook.com/babazkorba",
                },
                startingPoint: {
                    latitude: 50.344000,
                    longitude: 19.198043,
                },
                rideTypes: Set.of(RideType.GRAVEL),
                city: "Dąbrowa Górnicza"
            },
            {
                id: "30",
                name: "Daniel's Lab MTB",
                time: StartingMonthTime.of("11:00"),
                day: Day.SUNDAY,
                description: "Trening składa się z rozgrzewki, która prowadzona jest we wspólnym tempie (standardowo jest to dojazd do Góry Bocianek), zasadniczej części treningu, kiedy każdy z uczestników jedzie zgodnie z własnym programem i tempem (pętle o długości ok 7 -14 km w okolicach Góry Bukowej i Trzebiesławic) i zakończenia, kiedy grupa ponownie zbija się w „kupę” i w spokojnym tempie wraca do Molo Pogoria III.",
                url: {
                    facebook: "https://www.facebook.com/danielslab.sosnowiec",
                },
                startingPoint: {
                    latitude: 50.344000,
                    longitude: 19.198043,
                },
                rideTypes: Set.of(RideType.MTB),
                city: "Dąbrowa Górnicza"
            },
            {
                id: "31",
                name: "KFC Ride",
                time: StartingMonthTime.of("09:00"),
                day: Day.SUNDAY,
                description: "Jedziemy spokojnie jedną grupą.\n" +
                    "Tempo oczywiście 35-37km/h, kto nie daje rady ten nie daje zmian i odpoczywa jadąc na kole.\n" +
                    "Zaczynamy spod KFC Stara Miłosna 9:00 zbiórka, 9:15-odjazd.",
                url: {
                    facebook: "https://www.facebook.com/JazdaNaKole",
                },
                startingPoint: {
                    latitude: 52.222669,
                    longitude: 21.243678
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Warszawa"
            },
            {
                id: "32",
                name: "KTC Kielce",
                time: StartingMonthTime.of("10:00"),
                day: Day.SUNDAY,
                description: "Mocny trening z elementami wyścigowymi. Następnie spotkanie na pizza/piwo w pizzeria „Oliwa” przy zalewie w Cedzynie.\n",
                url: {
                    facebook: "https://www.facebook.com/ktckielce/",
                },
                startingPoint: {
                    latitude: 50.877062,
                    longitude: 20.637830
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Kielce"
            },
            {
                id: "33",
                name: "Infrasettimanale Classico Katowice",
                time: StartingMonthTime.of("17:00"),
                day: Day.WEDNESDAY,
                description: "IC Katowice to otwarte treningi kolarskie, odbywające się cyklicznie w Katowicach. Zostały zapoczątkowane kilka lat temu przez lokalnych pasjonatów kolarstwa, zyskując z czasem kolejnych uczestników, aż do obecnej, naprawdę wielkiej popularności - która z pewnością jeszcze wzrośnie. Coraz częściej na starcie katowickiego IC staje na rowerach szosowych ponad setka kolarzy.",
                url: {
                    webpage: "http://www.ic.katowice.pl/",
                    facebook: "https://www.facebook.com/Infrasettimanale-Classico-198617890184905/"
                },
                startingPoint: {
                    latitude: 50.26106,
                    longitude: 19.01828
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Katowice"
            },
            {
                id: "34",
                name: "Coffee Ride z Cidry na Szosie",
                time: StartingMonthTime.of("18:00"),
                day: Day.WEDNESDAY,
                description: "Zapraszamy jak co środę na spokojną wspólną przejażdżkę po naszych okolicach:)",
                url: {
                    facebook: "https://www.facebook.com/cidrylotajom"
                },
                startingPoint: {
                    latitude: 50.400686,
                    longitude: 18.902896
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Radzionków"
            },
            {
                id: "35",
                name: "Rondo Babka",
                time: StartingMonthTime.of("09:00"),
                // TODO dodać sobotę, więcej info na stronie
                day: Day.SUNDAY,
                description: "Na tzw. \"Babkę\" przyjeżdża od kilku, do nawet 80-90 osób. Frekwencja uzależniona jest od pogody, pory roku itp. We wszystkie dni świąteczne (zaznaczone w kaledarzu na czerwono) spotykamy sie tak jak w weekendy.",
                url: {
                    facebook: "https://www.facebook.com/RondoBabkaTeam/",
                    webpage: "http://www.rondobabka.info/"
                },
                startingPoint: {
                    latitude: 52.255108,
                    longitude: 20.982775
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Warszawa"
            },
            {
                id: "36",
                name: "Śląskie Kręcenie",
                time: StartingMonthTime.of("17:40"),
                day: Day.WEDNESDAY,
                description: "Śląskie Kręcenie, czyli wspólna jazda w grupie. Nie jest to wyścig ani żaden rodzaj rywalizacji. Na naszych spotkaniach powinna panować rodzinno-kolarska atmosfera. Zarówno uśmiech, jak i pozytywne nastawienie są bardzo mile widziane.",
                url: {
                    facebook: "https://www.facebook.com/slaskkolarsko"
                },
                startingPoint: {
                    latitude: 50.045475,
                    longitude: 18.694292
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Żory"
            },
            {
                id: "37",
                name: "Grupa Głębokie",
                time: StartingMonthTime.of("10:00"),
                // TODO dodać niedzielę, wtorek oraz środę
                day: Day.SATURDAY,
                description: "Kultowe miejsce spotkań szosowych w Szczecinie.",
                url: {
                    facebook: "https://www.facebook.com/groups/1043429369134203/"
                },
                startingPoint: {
                    latitude: 53.471835,
                    longitude: 14.479681
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Szczecin"
            },
            {
                id: "38",
                name: "Łódź Retkinia (zwana Hyunda-iem)",
                time: StartingMonthTime.of("11:15"),
                day: Day.SATURDAY,
                description: "Długość rundy – 60,3km. Jeżdżona cały rok.",
                url: {
                    webpage: "https://cyklomaniacy.pl/treningi/retkinia/"
                },
                startingPoint: {
                    latitude: 51.740828,
                    longitude: 19.404762
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Łódź"
            },
            {
                id: "39",
                name: "Łódź Retkinia (zwana Hyunda-iem)",
                time: StartingMonthTime.of("10:15"),
                day: Day.SUNDAY,
                description: "Długość rundy – 60,3km. Jeżdżona cały rok.",
                url: {
                    webpage: "https://cyklomaniacy.pl/treningi/retkinia/"
                },
                startingPoint: {
                    latitude: 51.740828,
                    longitude: 19.404762
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Łódź"
            },
            {
                id: "40",
                name: "Łódź KASZTANY",
                time: StartingMonthTime.of("10:15"),
                day: Day.SATURDAY,
                description: "Kasztany to zwyczajowa nazwa miejsca spotkań oraz grupy kolarzy amatorów na rogu ulicy Zgierskiej i Julianowskiej w Łodzi. Określenie wywodzi się z legendarnej Grupy Diesnera, a inspiracją dla nazwy były drzewa kasztanowca, pod którymi się spotykamy (stąd też nasz logotyp). Grupa ma charakter sportowy i szybka jazda jest w cenie. Nie przejmuj się, jeżeli obawiasz się, że możesz nie dać rady. Gwarantujemy nie tylko “krew – pot – i łzy”, ale też niepowtarzalną atmosferę.",
                url: {
                    webpage: "https://cyklomaniacy.pl/treningi/kasztany/"
                },
                startingPoint: {
                    latitude: 51.797294,
                    longitude: 19.444905
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Łódź"
            },
            {
                id: "41",
                name: "Łódź Apteka",
                time: StartingMonthTime.of("10:15"),
                day: Day.SUNDAY,
                description: "Po kilku pierwszych kilometrach skręcamy w lewo do miejscowości Dobra, gdzie dzielimy się na dwie dywizje. Mocniejsza grupa jedzie w lewo, spokojniejsza prosto.",
                url: {
                    webpage: "https://cyklomaniacy.pl/treningi/apteka/"
                },
                startingPoint: {
                    latitude: 51.800250,
                    longitude: 19.489184
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Łódź"
            },
            {
                id: "42",
                name: "Łódź Rzgowska",
                time: StartingMonthTime.of("10:15"),
                day: Day.SUNDAY,
                description: "Zbiórki na treningi – RZGOWSKA.\n",
                url: {
                    webpage: "https://cyklomaniacy.pl/treningi/rzgowska-2/"
                },
                startingPoint: {
                    latitude: 51.727256,
                    longitude: 19.478890
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Łódź"
            },
            {
                id: "43",
                name: "Łódź JAROSZKI",
                time: StartingMonthTime.of("16:15"),
                day: Day.WEDNESDAY,
                description: "Zbiórki na treningi – JAROSZKI.",
                url: {
                    webpage: "https://cyklomaniacy.pl/treningi/jaroszki/"
                },
                startingPoint: {
                    latitude: 51.711222,
                    longitude: 19.543621
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Łódź"
            },
            {
                id: "44",
                name: "ALEKSANDRÓW",
                time: StartingMonthTime.of("10:00"),
                day: Day.SUNDAY,
                description: "Trasa ma od 65km do 85km. Zmieniamy rundy w zależności od pogody, pory roku, wiatru, ilości osób, chęci. Po około 15km dołącza do nas grupa z Ozorkowa – ci ubrani na zielono którzy także od czasu do czasu pojawiają się na niedzielnej trasie spod Apteki.",
                url: {
                    webpage: "https://cyklomaniacy.pl/treningi/aleksandrow/"
                },
                startingPoint: {
                    latitude: 51.835668,
                    longitude: 19.258343
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Aleksandrów Łódzki"
            },
            // 23-01-2022
            {
                id: "45",
                name: "Infrasettimanale Classico Gliwice",
                time: StartingMonthTime.of("18:00"),
                day: Day.WEDNESDAY,
                description: "Środowe treningi kolarskie w mocnym tempie, od kwietnia do października. Każdy jest mile widziany - doświadczeni zawodnicy i amatorzy oraz nowicjusze.",
                url: {
                    facebook: "https://www.facebook.com/ICgliwice/"
                },
                startingPoint: {
                    latitude: 50.282416,
                    longitude: 18.715206
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Gliwice"
            },
            {
                id: "46",
                name: "Infrasettimanale Classico Radom",
                time: StartingMonthTime.of("18:00"),
                day: Day.WEDNESDAY,
                description: "Każdy uczestnik punktowanego treningu IC Radom bierze w nim udział na własną odpowiedzialność.\n" +
                    "Każdy uczestnik treningu IC Radom powinien jechać zgodnie z przepisami ruchu drogowego.",
                url: {
                    facebook: "https://www.facebook.com/icrdm/"
                },
                startingPoint: {
                    latitude: 51.403819,
                    longitude: 21.153406
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Radom"
            },
            {
                id: "47",
                name: "Infrasettimanale Classico Katowice Podlesie",
                time: StartingMonthTime.of("17:30"),
                day: Day.WEDNESDAY,
                description: "W każdą środę w KatowICach - Podlesiu. Bufet IC zawsze po treningu u zbiegu ulic Szarych Szeregów - Kałuży, czyli na PG3. Zapraszamy wszystkich KIBICÓW na START oraz Bufet IC :)",
                url: {
                    webpage: "https://www.localgymsandfitness.com/PL/Katowice/198617890184905/Infrasettimanale-Classico"
                },
                startingPoint: {
                    latitude: 50.175302,
                    longitude: 18.970729
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Katowice"
            },
            {
                id: "48",
                name: "Infrasettimanale Classico Nowy Sącz",
                time: StartingMonthTime.of("17:00"),
                day: Day.WEDNESDAY,
                description: "Jeżdzimy stałą trasą, 3 premie i finisz. Trasa typowo klasyczna, więc każdy znajdzie tu dla siebie odpowiednie miejsce.",
                url: {
                    facebook: "https://www.facebook.com/ICnowysacz/"
                },
                startingPoint: {
                    latitude: 49.624834,
                    longitude: 20.705587
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Nowy Sącz"
            },
            {
                id: "49",
                name: "Infrasettimanale Classico Podhale",
                time: StartingMonthTime.of("17:00"),
                day: Day.WEDNESDAY,
                description: "ŚRODOWY KLASYK - czyli otwarte treningi na szosie.",
                url: {
                    facebook: "https://www.facebook.com/IcPodhale/"
                },
                startingPoint: {
                    latitude: 49.477386,
                    longitude: 20.034820
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Nowy Targ"
            },
            {
                id: "50",
                name: "Infrasettimanale Classico SKO",
                time: StartingMonthTime.of("17:00"),
                day: Day.WEDNESDAY,
                description: "To wspólne treningi na szosie z elementami ścigania, w których każdy bierze udział na własną odpowiedzialność, zobowiązując się do przestrzegania zasad ruchu drogowego, bezpieczeństwa i dobrego wychowania.",
                url: {
                    facebook: "https://www.facebook.com/ICskarzysko/"
                },
                startingPoint: {
                    latitude: 51.119824,
                    longitude: 20.861242
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Skarżysko-Kamienna"
            },
            {
                id: "51",
                name: "Bajabongo Bike Atelier",
                time: StartingMonthTime.of("17:00"),
                day: Day.MONDAY,
                description: "Luźne tempo, 28 km/h. ",
                url: {
                    facebook: "https://www.facebook.com/Bajabongo-Bike-Atelier-387567745428188"
                },
                startingPoint: {
                    latitude: 50.330215,
                    longitude: 19.220292
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Dąbrowa Górnicza"
            },
            {
                id: "52",
                name: "Cortado ",
                time: StartingMonthTime.of("16:45"),
                day: Day.TUESDAY,
                description: "Ustawka kolarska organizowana przez Endurance Team",
                url: {
                    facebook: "https://www.facebook.com/profile.php?id=100035350226519"
                },
                startingPoint: {
                    latitude: 50.324575,
                    longitude: 19.003347
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Siemianowice Śląskie"
            },
            {
                id: "53",
                name: "Klasyczny Wtorek z Dobre Koło",
                time: StartingMonthTime.of("18:20"),
                day: Day.TUESDAY,
                description: "Nie ma osoby prowadzącej grupę, celem jest zrobienie dobrego treningu i poprawienie kondycji, a dodatkową motywacją będzie rywalizacja z innymi. Wszyscy startujemy razem, a grupy same uformują się w zależności od zaawansowania.",
                url: {
                    facebook: "https://www.facebook.com/dobrekolo"
                },
                startingPoint: {
                    latitude: 50.322388,
                    longitude: 19.127940
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Będzin"
            },
            {
                id: "54",
                name: "Czwartek z Dobre Koło",
                time: StartingMonthTime.of("18:20"),
                day: Day.THURSDAY,
                description: "Ruszamy wspólnie na pętlę, którą kończymy w Dąbrowie Górniczej. Planowany dystans +/- 50km.",
                url: {
                    facebook: "https://www.facebook.com/dobrekolo"
                },
                startingPoint: {
                    latitude: 50.314914,
                    longitude: 19.198977
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Dąbrowa Górnicza"
            },
            {
                id: "55",
                name: "Babska Środa",
                time: StartingMonthTime.of("17:30"),
                day: Day.WEDNESDAY,
                description: "Babska Środa to grupa kobiet, różniących się między sobą wiekiem, momentem w życiu, wyglądem, rodzajem wykonywanej pracy i wieloma innymi rzeczami ale wszystkie łączy pasja do kolarstwa, w różnych jego odmianach.",
                url: {
                    facebook: "https://www.facebook.com/baabskasroda/"
                },
                startingPoint: {
                    latitude: 50.343752,
                    longitude: 19.198653
                },
                rideTypes: Set.of(RideType.ROAD, RideType.FOR_LADIES),
                city: "Dąbrowa Górnicza"
            },
            {
                id: "56",
                name: "WelBike Tour",
                time: StartingMonthTime.of("18:00"),
                day: Day.WEDNESDAY,
                description: "Jak środa, to upalanie łydy w dosłownym znaczeniu.",
                url: {
                    facebook: "https://www.facebook.com/WelBike-Tour-117728646669774/"
                },
                startingPoint: {
                    latitude: 50.380434,
                    longitude: 19.135001
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Dąbrowa Górnicza"
            },
            {
                id: "57",
                name: "Czwartkowa ustawka z Kietą",
                time: StartingMonthTime.of("17:00"),
                day: Day.THURSDAY,
                description: "Zapraszamy wszystkich na czwartkowy trening. Przy większej liczbie osób będziemy tworzyć dwie grupy (mocniejsza i słabsza). Tak aby każdy mógł dojechać w grupie do samego końca. Prosimy o zachowanie szczególnej ostrożności podczas jazdy! ",
                url: {
                    facebook: "https://www.facebook.com/KIETArowerowy"
                },
                startingPoint: {
                    latitude: 50.107143,
                    longitude: 18.979832
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Tychy"
            },
            {
                id: "58",
                name: "Czwartkowa Runda",
                time: StartingMonthTime.of("18:00"),
                day: Day.THURSDAY,
                description: "Start w każdy czwartek, w ciągu całego roku. Kask obowiązkowy.",
                url: {
                    strava: "https://www.strava.com/clubs/220622"
                },
                startingPoint: {
                    latitude: 50.190788,
                    longitude: 19.162585
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Mysłowice"
            },
            {
                id: "59",
                name: "Gravelowy Czwartek",
                time: StartingMonthTime.of("17:30"),
                day: Day.THURSDAY,
                description: "Serdecznie zapraszamy na cotygodniowe wyjazdy gravelowe z Roweroteką Gładysz. Trening połączony ze zwiedzaniem okolic Tarnowskie Góry a w szczególności okolicznych leśnych zakątków.\n" +
                    "Tempo rekreacyjne, dobra kolarska atmosfera i finisz na tarnogórskim rynku.",
                url: {
                    facebook: "https://www.facebook.com/roweroteka/"
                },
                startingPoint: {
                    latitude: 50.445533,
                    longitude: 18.850568
                },
                rideTypes: Set.of(RideType.GRAVEL),
                city: "Tarnowskie Góry"
            },
            {
                id: "60",
                name: "Luźna Łyda Road",
                time: StartingMonthTime.of("17:30"),
                day: Day.FRIDAY,
                description: "To co piątkowe treningii na rowerach szosowych. Jak sama nazwa wskazuje ustawki na rowerach szosowych, dla początkujących jak i zawodników chcących zrobić lekki rozjazd przed weekendowym ściganiem.",
                url: {
                    facebook: "https://www.facebook.com/puchalkasport/"
                },
                startingPoint: {
                    latitude: 50.113468,
                    longitude: 18.963200
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Tychy"
            },
            {
                id: "61",
                name: "TRI Zakładka 40+4",
                time: StartingMonthTime.of("09:00"),
                day: Day.SATURDAY,
                description: "Zapraszam Wszystkich chętnych na sobotnią Tri ustawkę - zakładkę nazwaną 40+4 (około 40km🚴🏻‍♂️+4km🏃‍♂️🔥)",
                url: {
                    facebook: "https://www.facebook.com/Bartosz-Dudek-Triathlon-262744154285758/"
                },
                startingPoint: {
                    latitude: 50.310500,
                    longitude: 19.044436
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Siemianowice Śląskie"
            },
            {
                id: "62",
                name: "Tempo 30",
                time: StartingMonthTime.of("12:00"),
                day: Day.SATURDAY,
                description: "Sobotnia ustawka organizowana przez Fenix Tychy.",
                url: {
                    facebook: "https://www.facebook.com/fenixtychy/"
                },
                startingPoint: {
                    latitude: 50.089760,
                    longitude: 18.995632
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Tychy"
            },
            {
                id: "63",
                name: "Ustawki kolarskie - Grodziec",
                time: StartingMonthTime.of("10:00"),
                day: Day.SUNDAY,
                description: "Tradycyjne wspólne niedzielne treningi na dwóch rundach - MEGA oraz STANDARD.",
                url: {
                    facebook: "https://www.facebook.com/ustawkikolarskiegrodziec"
                },
                startingPoint: {
                    latitude: 50.347675,
                    longitude: 19.097050
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Będzin"
            },
            {
                id: "64",
                name: "Gliwice na Górę Św. Anny",
                time: StartingMonthTime.of("10:00"),
                day: Day.SUNDAY,
                description: "Wspólny wyjazd gliwickich kolarzy na Górę Świętej Anny",
                url: {
                },
                startingPoint: {
                    latitude: 50.324431,
                    longitude: 18.661836
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Gliwice"
            },
            {
                id: "65",
                name: "Niedzielna ustawka z Fenix Tychy",
                time: StartingMonthTime.of("11:00"),
                day: Day.SUNDAY,
                description: "Niedzielna ustawka z Fenix Tychy.",
                url: {
                    facebook: "https://www.facebook.com/fenixtychy/"
                },
                startingPoint: {
                    latitude: 50.089760,
                    longitude: 18.995632
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Tychy"
            },
            {
                id: "66",
                name: "Ustawka XC_POZ",
                time: StartingMonthTime.of("11:00"),
                day: Day.THURSDAY,
                description: "Dla wszystkich mających wolne, albo pracujących zdalnie 😃",
                url: {
                    facebook: "https://www.facebook.com/xcpoz/"
                },
                startingPoint: {
                    latitude: 52.382133,
                    longitude: 16.984897
                },
                rideTypes: Set.of(RideType.MTB),
                city: "Poznań"
            },
            {
                id: "67",
                name: "Pasjonaci Kolarstwa Andrespol",
                time: StartingMonthTime.of("10:00"),
                day: Day.SUNDAY,
                description: "Zawodnicy, Amatorzy, kilka grup podzielonych według dystansu i średniej prędkości. Panie i Panowie. Zapraszamy!",
                url: {
                    facebook: "https://www.facebook.com/profile.php?id=100062972153575"
                },
                startingPoint: {
                    latitude: 51.725304,
                    longitude: 19.638193
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Andrespol"
            },
            {
                id: "68",
                name: "Infrasettimanale Classico Zabrnie",
                time: StartingMonthTime.of("17:36"),
                day: Day.WEDNESDAY,
                description: "Kolarskie środy z nutką ścigania zrzeszające kolarzy z okolic Tarnobrzega, Gorzyc, Sandomierza, Stalowej Woli, Nowej Dęby i reszty galaktyki ;) Godzinna jest zmienna w zależności od okresu sezonu.",
                url: {
                    facebook: "https://www.facebook.com/ICZabrnie"
                },
                startingPoint: {
                    latitude: 50.594198,
                    longitude: 21.852245
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Zabrnie"
            },
            {
                id: "69",
                name: "Zorza Tarnobrzeg",
                time: StartingMonthTime.of("10:00"),
                day: Day.SUNDAY,
                description: "Reaktywowana grupa, istniejąca w latach 70-tych na terenie Tarnobrzega i okolic.",
                url: {
                    facebook: "https://www.facebook.com/groups/zorza.tarnobrzeg"
                },
                startingPoint: {
                    latitude: 50.574485,
                    longitude: 21.672954
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Tarnobrzeg"
            },
            {
                id: "70",
                name: "Gravel/MTB z Wertykalem",
                time: StartingMonthTime.of("11:00"),
                day: Day.SATURDAY,
                description: "Ustawka gravelowa i MTB. Około 2 godzinki, tempo umiarkowane. Prowadzone przez trenerów.",
                url: {
                    facebook: "https://facebook.com/Iron-Dragon-Coach-106746445179689/"
                },
                startingPoint: {
                    latitude: 50.116942,
                    longitude: 19.787086
                },
                rideTypes: Set.of(RideType.GRAVEL),
                city: "Zabierzów"
            },
            {
                id: "71",
                name: "Szybka Północ",
                time: StartingMonthTime.of("17:00"),
                day: Day.WEDNESDAY,
                description: "Ustawka tempo tempo +33km/h. Dla kobiet i dla mężczyzn, ale płeć nie ma tu znaczenia. Liczy się fun, ból w nogach, krew w płucach :D i nowe PRk. Jak się dobrze przyjrzeć, jest gdzie skrócić, gdyby deszczyk, gdyby bombka, gdyby tak się chciało :)" +
                    " Obowiązkowe: kask, dętka/mleko/łaty + pompa :) Pamiętaj o: lampy przód-tył, bidon, żel/baton. Zapraszamy 💙",
                url: {
                    facebook: "https://www.facebook.com/groups/546663716667986"
                },
                startingPoint: {
                    latitude: 51.204194,
                    longitude: 17.100844
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Pasikurowice"
            },
            {
                id: "72",
                name: "MUS Mikołowska Ustawka Szosowa",
                time: StartingMonthTime.of("17:00"),
                day: Day.TUESDAY,
                description: "2 grupy: mocna średnia 35/36 km/h oraz grupa dla wszystkich średnia 28/30.",
                url: {
                    facebook: "https://www.facebook.com/groups/152247042309634/"
                },
                startingPoint: {
                    latitude: 50.169302,
                    longitude: 18.904546
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Mikołów"
            },
            {
                id: "73",
                name: "MUS Mikołowska Ustawka Szosowa",
                time: StartingMonthTime.of("17:00"),
                day: Day.THURSDAY,
                description: "2 grupy: mocna średnia 35/36 km/h oraz grupa dla wszystkich średnia 28/30.",
                url: {
                    facebook: "https://www.facebook.com/groups/152247042309634/"
                },
                startingPoint: {
                    latitude: 50.169302,
                    longitude: 18.904546
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Mikołów"
            },
            {
                id: "74",
                name: "Ulanów",
                time: StartingMonthTime.of("11:00"),
                day: Day.SUNDAY,
                description: "Trasa 60-100 km po jakościowo bardzo dobrych i mało ruchliwych trasach. Najczęściej w powiecie niżańskim i biłgorajskim. Amatorzy spotykają się od wielu lat, a niektórzy są już w wielu emerytalnym. Tempo grupy ok. 30km/h",
                url: {
                    facebook: "https://www.facebook.com/krzysztof.skwarek.7"
                },
                startingPoint: {
                    latitude: 50.486734,
                    longitude: 22.265907
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Ulanów"
            },
            {
                id: "75",
                name: "Agenty z Południa",
                time: StartingMonthTime.of("17:30"),
                day: Day.TUESDAY,
                description: "Agenty z Południa zapraszają na żwawą ustawkę po południowych stronach Krakowa. Informacje o spotkaniu zawsze na Facebooku.",
                url: {
                    facebook: "https://www.facebook.com/groups/265494830866431"
                },
                startingPoint: {
                    latitude: 50.018721,
                    longitude: 19.933782
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Kraków"
            },
            {
                id: "76",
                name: "Agenty z Południa",
                time: StartingMonthTime.of("17:30"),
                day: Day.THURSDAY,
                description: "Agenty z Południa zapraszają na żwawą ustawkę po południowych stronach Krakowa. Informacje o spotkaniu zawsze na Facebooku.",
                url: {
                    facebook: "https://www.facebook.com/groups/265494830866431"
                },
                startingPoint: {
                    latitude: 50.018721,
                    longitude: 19.933782
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Kraków"
            },
            {
                id: "77",
                name: "Nie lubię poniedziałków",
                time: StartingMonthTime.of("17:30"),
                day: Day.MONDAY,
                description: "Nie lubię poniedziałków to cotygodniowe ustawki szosowe, które odbywają się od wiosny do jesieni i ruszamy na pętlę wokół komina. Długość pętli zależy od pory roku. Trasa do pobrania w formacie .gpx podawana jest przed każdą ustawką na FB. Informacja o ustawce podawana jest na profilu na facebook'u, na Stravie i na DecathlonGo.",
                url: {
                    facebook: "https://www.facebook.com/Rowerowa-Cz%C4%99stochowa-1559437560965521/"
                },
                startingPoint: {
                    latitude: 50.811949, 
                    longitude: 19.113129
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Częstochowa"
            },
            {
                id: "78",
                name: "Rowerowa Środa z Decathlon Częstochowa Poczesna",
                time: StartingMonthTime.of("17:30"),
                day: Day.WEDNESDAY,
                description: "Rowerowe Środy jeżdżą cały rok ;) Kręcimy po lokalnych bezdrożach, głównie w kierunku Jury Krakowsko-Częstochowskiej. W zależności od pory roku i długości dnia, trasy są mniej lub bardziej techniczne. Spotykamy się w centrum miasta i ruszamy na manewry terenowe! :) Ślad trasy do pobrania w formacie .gpx udostępniany jest przed każdym wyjazdem na profil FB, Stravie i DecathlonGo.",
                url: {
                    facebook: "https://www.facebook.com/Rowerowa-Cz%C4%99stochowa-1559437560965521/"
                },
                startingPoint: {
                    latitude: 50.811949, 
                    longitude: 19.113129
                },
                rideTypes: Set.of(RideType.MTB),
                city: "Częstochowa"
            },
            {
                id: "79",
                name: "#wtorkowkazmtbpokrakowsku",
                time: StartingMonthTime.of("17:00"),
                day: Day.TUESDAY,
                description: "Wspolne treningi rowerowe ćwiczenie techniki w terenie.",
                url: {
                    facebook: "https://www.facebook.com/mtbpokrakowsku"
                },
                startingPoint: {
                    latitude: 50.053309,
                    longitude: 19.901110
                },
                rideTypes: Set.of(RideType.MTB),
                city: "Kraków"
            },
            {
                id: "80",
                name: "Ustawka szosowa z Decathlon Gliwice",
                time: StartingMonthTime.of("17:15"),
                day: Day.THURSDAY,
                description: "Zapraszamy na ustawkę szosową pod Decathlon Gliwice! Spotykamy się na parkingu przed sklepem i lecimy na rundę ok 50-60 km w stronę Mikołowa. Zapraszamy zarówno Panie i Panów. Tempo dostosujemy do możliwości grupy. Stawiamy na luźną rundę (25-30 km/h ..nikogo nie zostawimy). Można dołączyć na trasie. Jeśli będzie potrzeba, to dzielimy się na grupy. Zasady: Obowiązkowy kask. Obowiązują przepisy ruchu drogowego. Każdy uczestnik bierze udział na własną odpowiedzialność.",
                url: {
                    facebook: "https://pl-pl.facebook.com/DecathlonGliwice/"
                },
                startingPoint: {
                    latitude: 50.305704,
                    longitude: 18.650730
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Gliwice"
            },
            {
                id: "81",
                name: "Rondo Chwaszczyno",
                time: StartingMonthTime.of("09:00"),
                day: Day.SATURDAY,
                description: "Treningi kolarstwa szosowego. Obowiązkowy kask. Udział na własną odpowiedzialność!",
                url: {
                    facebook: "https://www.facebook.com/rondoC3C/"
                },
                startingPoint: {
                    latitude: 54.443567,
                    longitude: 18.418957
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Chwaszczyno"
            },
            {
                id: "82",
                name: "Coffee Wanoga",
                time: StartingMonthTime.of("08:30"),
                day: Day.SUNDAY,
                description: "Gravelowy coffee-ride przez TPK i bliskie Kaszuby. Kawa po drodze, staramy się czekac na każdego.",
                url: {
                    facebook: "https://www.facebook.com/PodcastRezerwatPrzygody"
                },
                startingPoint: {
                    latitude: 54.387180,
                    longitude: 18.563426
                },
                rideTypes: Set.of(RideType.GRAVEL),
                city: "Gdańsk"
            },
            {
                id: "83",
                name: "Gdańsk Południe na START",
                time: StartingMonthTime.of("09:00"),
                day: Day.SUNDAY,
                description: "Projekt „Gdańsk Południe na START” to bezpłatne i otwarte treningi w południowych dzielnicach Gdańska dla WSZYSTKICH i dla KAŻDEGO.",
                url: {
                    facebook: "https://www.facebook.com/gdanskpoludnienastart"
                },
                startingPoint: {
                    latitude: 54.317912,
                    longitude: 18.581969
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Gdańsk"
            },
            {
                id: "84",
                name: "KTC Kołobrzeg",
                time: StartingMonthTime.of("10:00"),
                day: Day.SUNDAY,
                description: "Ustawki organizowane przez Kołobrzeskie Towarzystwo Cyklistów",
                url: {
                    facebook: "https://www.facebook.com/KTC-Ko%C5%82obrzeg-176712809186263/",
                    webpage: "http://ktc.kolobrzeg.pl/"
                },
                startingPoint: {
                    latitude: 54.160050,
                    longitude: 15.565681
                },
                rideTypes: Set.of(RideType.MTB),
                city: "Kołobrzeg"
            },
            {
                id: "85",
                name: "KTC Kołobrzeg",
                time: StartingMonthTime.of("10:00"),
                day: Day.SATURDAY,
                description: "Ustawki organizowane przez Kołobrzeskie Towarzystwo Cyklistów",
                url: {
                    facebook: "https://www.facebook.com/KTC-Ko%C5%82obrzeg-176712809186263/",
                    webpage: "http://ktc.kolobrzeg.pl/"
                },
                startingPoint: {
                    latitude: 54.160050,
                    longitude: 15.565681
                },
                rideTypes: Set.of(RideType.MTB),
                city: "Kołobrzeg"
            },
            {
                id: "86",
                name: "Elbląskie Ustawki Szosowe",
                time: StartingMonthTime.of("09:00"),
                day: Day.SATURDAY,
                description: "Ustawki szosowe organizowane przez grupę elbląskich szosowców. Wspólne treningi w grupie, wyjazdy na wyścigi. Miejsce startu ustawki jest potwierdzane na grupie na FB najpóźniej w sobotę.",
                url: {
                    facebook: "https://www.facebook.com/groups/1541387222777761/",
                    strava: "https://www.strava.com/clubs/171428"
                },
                startingPoint: {
                    latitude: 54.188944,
                    longitude: 19.405977
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Elbląg"
            },
            {
                id: "87",
                name: "Kaliski trening na szosie",
                time: StartingMonthTime.of("10:00"),
                day: Day.SUNDAY,
                description: "Tradycyjnie od ponad 10lat treningi szosowe z czynnymi oraz byłymi kolarzami.",
                url: {
                    facebook: "https://facebook.com/Kaliski.trening.na.szosie"
                },
                startingPoint: {
                    latitude: 51.698894,
                    longitude: 18.136035
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Kalisz"
            },
            {
                id: "88",
                name: "Ustawki z PKK",
                time: StartingMonthTime.of("17:00"),
                day: Day.TUESDAY,
                description: "Zapraszamy we wtorki i czwartki na ustawki z Płaszowskim Kołem Kolarskim (PKK). Najczęściej lecimy w południowo-wschodnie i północno-wschodnie rubieże Krakowa, ale trasy i kierunki zmieniamy często. W weekendy często epic fondo z kawką w tle. Tempo raczej żwawe, choć na górkach poczekamy. Jeździmy w parach z zachowaniem etykiety jazdy w grupie i sygnalizujemy zagrożenia na drodze. Każdy jedzie na własną odpowiedzialność. Szczegóły ustawek zawsze na grupie FB i Club Strava",
                url: {
                    facebook: "https://www.facebook.com/groups/1156628978052452",
                    strava: "https://www.strava.com/clubs/pkk-p%C5%82aszowskie-ko%C5%82o-kolarskie-566304"
                },
                startingPoint: {
                    latitude: 50.040034,
                    longitude: 20.000473
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Kraków"
            },
            {
                id: "89",
                name: "Ustawki z PKK",
                time: StartingMonthTime.of("17:00"),
                day: Day.THURSDAY,
                description: "Zapraszamy we wtorki i czwartki na ustawki z Płaszowskim Kołem Kolarskim (PKK). Najczęściej lecimy w południowo-wschodnie i północno-wschodnie rubieże Krakowa, ale trasy i kierunki zmieniamy często. W weekendy często epic fondo z kawką w tle. Tempo raczej żwawe, choć na górkach poczekamy. Jeździmy w parach z zachowaniem etykiety jazdy w grupie i sygnalizujemy zagrożenia na drodze. Każdy jedzie na własną odpowiedzialność. Szczegóły ustawek zawsze na grupie FB i Club Strava",
                url: {
                    facebook: "https://www.facebook.com/groups/1156628978052452",
                    strava: "https://www.strava.com/clubs/pkk-p%C5%82aszowskie-ko%C5%82o-kolarskie-566304"
                },
                startingPoint: {
                    latitude: 50.040034,
                    longitude: 20.000473
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Kraków"
            },
            {
                id: "90",
                name: "Notojadzim CoffeeRide",
                time: StartingMonthTime.of("10:00"),
                day: Day.SUNDAY,
                description: "Niedzielne coffeeride'y z wyznaczoną trasa i prowadzacym dla dwóch grup. Grupa A = trasa krótsza ok. 40-50km. Grupa B = trasa dłuższa ok. 60-70km. W połowie trasy lub na jej końcu pit-stop na łyk espresso. Tempo odpowiednie dla wybranej grupy z akcentami na zdobycie KOM'a",
                url: {
                    facebook: "https://facebook.com/notojadzim",
                    webpage: "https://www.jadzimkujawy.pl/"
                },
                startingPoint: {
                    latitude: 52.806513,
                    longitude: 18.110321
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Inowrocław"
            },
            {
                id: "91",
                name: "Szosa dla Zielonych - ustawki kolarskie dla początkujących",
                time: StartingMonthTime.of("10:00"),
                day: Day.SATURDAY,
                description: "W wydarzeniu, przed każdą ustawką będziemy komunikowali plan gry na jazdę wraz z trasą do pobrania. Wyjazdy w Góry Świętokrzyskie znajdziecie w oddzielnym wydarzeniu. Wpadnij jeżli nie masz z kim wyjść na rower, nie czujesz się pewnie w grupie, chcesz poprawić swoją technikę jazdy, nie wiesz o co chodzi z tą całą jazdą na kole lub po prostu szukasz rowerowych znajomości.",
                url: {
                    facebook: "https://www.facebook.com/KolarskaPrzestrzen"
                },
                startingPoint: {
                    latitude: 52.164757, 
                    longitude: 21.083515
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Warszawa"
            },
            {
                id: "92",
                name: "Laski na szosach",
                time: StartingMonthTime.of("18:10"),
                day: Day.TUESDAY,
                description: "Ustawka odbywa się co dwa tygodnie! Ideą mojej babskiej jazdy jest zachęcenie kobiet do jazdy na szosie w grupie i totalnie bez spiny przejechanie się razem, pogaduchy, a na końcu ciastki 😁 Nie jedziemy na żadną średnią. Jest to jazda rekreacyjna z zachowaniem zasad jazdy w grupie. Prowadzę ja i jadę mega lekko. Około 30 km.",
                url: {
                    facebook: "https://www.facebook.com/Dziewczyna-z-korb%C4%85-269014110400306"
                },
                startingPoint: {
                    latitude: 50.270651,
                    longitude: 18.774489
                },
                rideTypes: Set.of(RideType.ROAD, RideType.FOR_LADIES),
                city: "Zabrze"
            },
            {
                id: "93",
                name: "Szosowa Ustawka Pomnikowa",
                time: StartingMonthTime.of("10:00"),
                day: Day.SUNDAY,
                description: "Najstarsza z przemyskich ustawek szosowych.",
                url: {
                    facebook: "https://www.facebook.com/groups/746455442134043"
                },
                startingPoint: {
                    latitude: 49.785105,
                    longitude: 22.766398
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Przemyśl"
            },
            {
                id: "94",
                name: "Giant Gliwice Road Tour",
                time: StartingMonthTime.of("17:00"),
                day: Day.TUESDAY,
                description: "Przejazd dla wszystkich ze średnią w okolicach 30+km/h.",
                url: {
                    facebook: "https://www.facebook.com/giantgliwice/"
                },
                startingPoint: {
                    latitude: 50.309371,
                    longitude: 18.669526
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Gliwice"
            },
            {
                id: "95",
                name: "Babska Korba Warszawa",
                time: StartingMonthTime.of("17:30"),
                day: Day.THURSDAY,
                description: "Regularne grupowe jazdy gravelem dla dziewczyn w Warszawie. Jest początek sezonu - ruszamy wolno i spokojnie, żeby rozruszać nogi po zimie! Spotykamy się w każdy czwartek o 17:30 w sklepie rowerowym Trirent na Racławickiej 99a, gdzie czekać na nas będzie kawa i pomoc przy przygotowaniu roweru do jazdy jeśli ktoś potrzebuje. 😇",
                url: {
                    facebook: "https://www.facebook.com/babskakorba",
                    webpage: "https://www.picktime.com/babskakorba"
                },
                startingPoint: {
                    latitude: 52.195201,
                    longitude: 20.997931
                },
                rideTypes: Set.of(RideType.GRAVEL, RideType.FOR_LADIES),
                city: "Warszawa"
            },
            {
                id: "96",
                name: "Babska Korba Gliwice",
                time: StartingMonthTime.of("17:00"),
                day: Day.TUESDAY,
                description: "Zapraszamy na wspólną luźną jazdę po asfalcie:) Planujemy pętelkę na chillu ze średnią około 21km/h, żeby każdy mógł zacząć uczyć się jeździć w grupie, w parach lub zrobić sobie rege w fajnym towarzystwie. Wyposażenie obowiązkowe: kask, lampki. Rower: szosa, gravel. Tempo: dostosowane do wszystkich uczestniczek. Luźna jazda.",
                url: {
                    facebook: "https://www.facebook.com/babskakorba",
                    webpage: "https://www.picktime.com/babskakorba"
                },
                startingPoint: {
                    latitude: 50.289079,
                    longitude: 18.650890
                },
                rideTypes: Set.of(RideType.ROAD, RideType.FOR_LADIES),
                city: "Gliwice"
            },
            {
                id: "97",
                name: "Babska Korba Katowice",
                time: StartingMonthTime.of("17:30"),
                day: Day.THURSDAY,
                description: "Cześć dziewczyny, Zapraszamy Was do wspólnego kręcenia na rowerze szosowym. Trasa jest na około 40km i obieramy kierunek Imielin. Udział w wydarzeniu tylko i wyłącznie w kasku i z kompletem lampek. Udział w wydarzeniu na własną odpowiedzialność.",
                url: {
                    facebook: "https://www.facebook.com/babskakorba",
                    webpage: "https://www.picktime.com/babskakorba"
                },
                startingPoint: {
                    latitude: 50.254230, 
                    longitude: 19.047000
                },
                rideTypes: Set.of(RideType.ROAD, RideType.FOR_LADIES),
                city: "Katowice"
            },
            {
                id: "98",
                name: "Babska Korba Trójmiasto",
                time: StartingMonthTime.of("10:00"),
                day: Day.SUNDAY,
                description: "Dziewczyny! Zapraszamy na wspólną luźną jazdę na rowerach gravelowych, trekkingowych oraz MTB. Ruszamy na przejażdkę do Trójmiejskiego Parku Krajobrazowego. Tempo luźniutkie - nikogo nie zostawimy z tyłu.",
                url: {
                    facebook: "https://www.facebook.com/babskakorba",
                    webpage: "https://www.picktime.com/babskakorba"
                },
                startingPoint: {
                    latitude: 54.401695,
                    longitude: 18.572973
                },
                rideTypes: Set.of(RideType.GRAVEL, RideType.FOR_LADIES),
                city: "Gdańsk"
            },
            {
                id: "99",
                name: "Babska Korba Bielsko-Biała",
                time: StartingMonthTime.of("17:30"),
                day: Day.MONDAY,
                description: "Regularne grupowe jazdy szosowe dla dziewczyn w Bielsku-Białej. 🦄  Spotykamy się w każdy poniedziałek o 17:30 w sklepie rowerowym Twomark na Cieszyńskiej 429 (samochody zostawiamy pod Biedronką naprzeciwko), gdzie czekać na nas będzie pomoc przy przygotowaniu roweru do jazdy jeśli ktoś potrzebuje. 😇 Wyposażenie obowiązkowe: kask, lampki. Rower: szosa, gravel.",
                url: {
                    facebook: "https://www.facebook.com/babskakorba",
                    webpage: "https://www.picktime.com/babskakorba"
                },
                startingPoint: {
                    latitude: 49.807336,
                    longitude: 18.978885
                },
                rideTypes: Set.of(RideType.ROAD, RideType.FOR_LADIES),
                city: "Bielsko-Biała"
            },
            {
                id: "100",
                name: "Babska Korba Wrocław",
                time: StartingMonthTime.of("17:30"),
                day: Day.TUESDAY,
                description: "Zapraszamy na szosowe jazdy grupowe ze stypendystką oraz prowadzącą (2w1) Babskiej Korby - Anią Małecką! 🦄 Jazda przeznaczona jest dla wszystkich dziewczyn, które szukają grupki do wspólnej jazdy. Po płaskim jedziemy spokojnie, podjazdy każdy pokonuje we własnym tempie, a na zjazdach zostawiamy między sobą bezpieczne odległości, aby następnie połączyć się z powrotem w grupę. Obowiązkowe wyposażenie: kask i lampki.",
                url: {
                    facebook: "https://www.facebook.com/babskakorba",
                    webpage: "https://www.picktime.com/babskakorba"
                },
                startingPoint: {
                    latitude: 51.127289, 
                    longitude: 16.979407
                },
                rideTypes: Set.of(RideType.ROAD, RideType.FOR_LADIES),
                city: "Wrocław"
            },
            {
                id: "101",
                name: "Babska Korba Olsztyn",
                time: StartingMonthTime.of("17:00"),
                day: Day.TUESDAY,
                description: "Do pokonania będziemy mieć ok. 40 kilometrów. Jazdy w środy będą zawsze na rowerach szosowych lub gravelowych. Wyposażenie obowiązkowe: kask, lampki, rower szosowy lub gravel. Przyda się również: biodon z piciem, przekąska, coś cieplejszego do ubrania.",
                url: {
                    facebook: "https://www.facebook.com/babskakorba",
                    webpage: "https://www.picktime.com/babskakorba"
                },
                startingPoint: {
                    latitude: 53.731640,
                    longitude: 20.493239
                },
                rideTypes: Set.of(RideType.ROAD, RideType.FOR_LADIES),
                city: "Olsztyn"
            },
            {
                id: "102",
                name: "Babska Korba Olsztyn",
                time: StartingMonthTime.of("10:00"),
                day: Day.SUNDAY,
                description: "Do pokonania będziemy mieć ok. 80 kilometrów. Jazdy w niedzielę będą odbywać się czasami na szosie i gravelu, a czasami na MTB. Prosimy o śledzenie postów prowadzącej na wydarzeniu. Wyposażenie obowiązkowe: kask, lampki, rower szosowy lub gravel. Przyda się również: biodon z piciem, przekąska, coś cieplejszego do ubrania.",
                url: {
                    facebook: "https://www.facebook.com/babskakorba",
                    webpage: "https://www.picktime.com/babskakorba"
                },
                startingPoint: {
                    latitude: 53.779583,
                    longitude: 20.464655
                },
                rideTypes: Set.of(RideType.ROAD, RideType.FOR_LADIES),
                city: "Olsztyn"
            },
            {
                id: "103",
                name: "Szosa dla początkujących",
                time: StartingMonthTime.of("11:00"),
                day: Day.SUNDAY,
                description: "Ustawka dla osób zaczynających jeździć na szosie. Łatwe trasy. Tempo bez spiny, nie śgigamy się. Jazda typowo rekreacyjna mająca na celu wymianę doświadczeń świeżaków. Zapraszamy wszystkich! Mile widziane osoby na wyższym poziomie które chcą podzielić się swoją wiedzą.",
                url: {
                    facebook: "https://www.facebook.com/groups/344335397845544"
                },
                startingPoint: {
                    latitude: 50.053622, 
                    longitude: 19.930392
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Kraków"
            },
            {
                id: "104",
                name: "SzoSza Wtorek Ride",
                time: StartingMonthTime.of("18:30"),
                day: Day.TUESDAY,
                description: "Celem ustawki jest sprawna wspólna przejażdżka połączona z szlifowaniem techniki jazdy w grupie oraz wykonywaniem zmian. Jedziemy wg założonego w grupie tempa w parach. Dzielimy się na grupy dostosowane do tempa zawodników. Trasa ok 55km. W połowie spotykamy się na krótko pod sklepem i ruszamy dalej.",
                url: {
                    facebook: "https://www.facebook.com/szosoweszalenstwo"
                },
                startingPoint: {
                    latitude: 52.240591,
                    longitude: 20.891284
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Warszawa"
            },
            {
                id: "105",
                name: "Czwartkowe Przepalanie na pętli Aleksandrów",
                time: StartingMonthTime.of("17:30"),
                day: Day.THURSDAY,
                description: "Cykliczny event Kolarskiej Grupy Białołęckiej na pętli Aleksandrów. Na ogół średnia prędkości 35km/h i więcej. Czasami event odwołany z uwagi na pogodę.",
                url: {
                    facebook: "https://www.facebook.com/groups/575097993418861"
                },
                startingPoint: {
                    latitude: 52.341586,
                    longitude: 21.059607
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Warszawa"
            },
            {
                id: "106",
                name: "Zbiórka Kwiatkowskiego",
                time: StartingMonthTime.of("17:15"),
                day: Day.TUESDAY,
                description: "Trasa płaska.",
                url: {
                    facebook: "https://www.facebook.com/Zbiorka"
                },
                startingPoint: {
                    latitude: 50.017182,
                    longitude: 22.003443
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Rzeszów"
            },
            {
                id: "107",
                name: "Zbiórka Kwiatkowskiego",
                time: StartingMonthTime.of("17:15"),
                day: Day.THURSDAY,
                description: "Trasa górska.",
                url: {
                    facebook: "https://www.facebook.com/Zbiorka"
                },
                startingPoint: {
                    latitude: 50.017182,
                    longitude: 22.003443
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Rzeszów"
            },
            {
                id: "108",
                name: "Zbiórka Kwiatkowskiego",
                time: StartingMonthTime.of("10:15"),
                day: Day.SUNDAY,
                description: "Niedzielne ściganie.",
                url: {
                    facebook: "https://www.facebook.com/Zbiorka"
                },
                startingPoint: {
                    latitude: 50.017182,
                    longitude: 22.003443
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Rzeszów"
            },
            {
                id: "109",
                name: "Jeździmy na Ostro",
                time: StartingMonthTime.of("08:45"),
                day: Day.SUNDAY,
                description: "Ustawki szosowe w prawie każdą niedzielę, dystans ok. 100km z przerwą na kawę i ciacho, tempo w tlenie (średnia ok. 32-35km/h)",
                url: {
                    facebook: "https://www.facebook.com/groups/652423435198850"
                },
                startingPoint: {
                    latitude: 52.234155,
                    longitude: 21.093200
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Warszawa"
            },
            {
                id: "110",
                name: "Retro",
                time: StartingMonthTime.of("17:00"),
                day: Day.WEDNESDAY,
                description: "Środowe treningi odbywają się co tydzień od kwietnia do końca września o 17.00. Start koło kobyły w Kobyłce. Dwie grupy zaawansowania, pierwsza jedzie 30-31 km/h, a druga ile da się radę rozpędzić :) Każdy znajdzie coś dla siebie.",
                url: {
                    facebook: "https://www.facebook.com/RetroStorkTeam"
                },
                startingPoint: {
                    latitude: 52.20148128,
                    longitude: 21.12398412
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Warszawa"
            },
            {
                id: "111",
                name: "NA BAJKU Girl Bike Gang",
                time: StartingMonthTime.of("20:00"),
                day: Day.THURSDAY,
                description: "Krótka i przyjemna ustawka dla kobiet. Spotykamy się, żeby poznawać miasto z innej perspektywy. Gonimy za golden hour i zachodami słońca, wjeżdżamy tam, gdzie inni nie docierają. Szukamy \"Miejskich Smaczków\", a wszystkie przygody kolekcjonujemy i uwieczniamy na zdjęciach i filmikach. Do podglądania na IG: @nabajku",
                url: {
                    facebook: "https://www.facebook.com/groups/nabajku"
                },
                startingPoint: {
                    latitude: 52.407457, 
                    longitude: 16.911518
                },
                rideTypes: Set.of(RideType.FOR_LADIES, RideType.ROAD),
                city: "Warszawa"
            },
            {
                id: "112",
                name: "XC Kruk",
                time: StartingMonthTime.of("18:00"),
                day: Day.FRIDAY,
                description: "Kilka rund XC na wydmie zwanej Kruczkiem w Janowie Lubelskim. Tempo wyścigowe ale można jechać własnym zmniejszyć liczbę rund itp Wymagany rower MTB i kask. Czas startu może ulec zmianie.",
                url: {
                    facebook: "https://www.facebook.com/BikeClubLJA"
                },
                startingPoint: {
                    latitude: 50.682657, 
                    longitude: 22.384404 
                },
                rideTypes: Set.of(RideType.MTB),
                city: "Janów Lubelski"
            },
            {
                id: "113",
                name: "IC Kraków",
                time: StartingMonthTime.of("17:30"),
                day: Day.WEDNESDAY,
                description: "IC mocne szybkie ściganie zawsze na tej samej trasie.",
                url: {
                    facebook: "https://www.facebook.com/profile.php?id=100068611381911"
                },
                startingPoint: {
                    latitude: 50.048030, 
                    longitude: 19.791215 
                },
                rideTypes: Set.of(RideType.ROAD),
                city: "Kraków"
            }
        )
        .map(ride => { return {...ride, time: ride.time.getTimeForCurrentMonth()}})

        return rides;
    }
        ,

    getRidesWithFilter: (query: FilterQuery) => {
        let filteredRides: List<Ride> = Api.getRides()

        if (!query.times.isEmpty()) {
            filteredRides = filteredRides.filter(ride => query.times.contains(ride.time.format(TIME_FORMATTER)))
        }

        if (!query.days.isEmpty()) {
            filteredRides = filteredRides.filter(ride => query.days.contains(ride.day.name))
        }

        if (!query.cities.isEmpty()) {
            filteredRides = filteredRides.filter(ride => query.cities.contains(ride.city))
        }

        if (!query.rideTypes.isEmpty()) {
            filteredRides = filteredRides.filter(ride => 
                query.rideTypes.map(queryRide => ride.rideTypes.contains(queryRide)).contains(true)
            )
        }

        return filteredRides
    }
}

export {Api as RideApi}