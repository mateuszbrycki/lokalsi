import {List} from "immutable";
import {Ride, RideType} from "../../types";

export interface RideHttpApi {
    readonly getRides: () => List<Ride>
}

const Api: RideHttpApi = {
    getRides: () =>
        List.of(
            {
                id: "1",
                name: "72D Athlete Bike",
                time: "17:30",
                day: "Poniedziałek",
                description: "7R Rowmix Team zapraszają na otwarte treningi kolarskie. Proponujemy wspólny trening dostosowany do trwającego sezonu startowego na rowerach górskich/szosowych na dwóch lub trzech poziomach zaawansowania, trwający ok 150 min. pod okiem i uchem trenera.",
                url: {
                    facebook: "https://www.facebook.com/groups/472569526423414"
                },
                startingPoint: {
                    latitude: 50.057093,
                    longitude: 19.910316
                },
                rideType: RideType.ROAD,
                city: "Kraków"
            },
            {
                id: "2",
                name: "IC Babski Blat",
                time: "17:00",
                day: "Wtorek",
                description: "Formuła IC. Czyli imitujemy prawdziwe ściganie. Dziewczyny z naszego teamu wytyczyły juz trasę, i nawet ją przejechały 😊. Stravovy segment o nazwie 'Babski blat' to wasza runda wyścigowa. Wygrywa ta, która poprostu przyjedzie na metę pierwsza 😃 Możecie atakować, naciągać, spawać, albo spokojnie czekać na ostatnie metry 😃.",
                url: {
                    facebook: "https://www.facebook.com/InnergyRacingTeam"
                },
                startingPoint: {
                    latitude: 50.062523,
                    longitude:19.902603
                },
                rideType: RideType.ROAD,
                city: "Kraków"
            },
            {
                id: "3",
                name: "Damskie wtorki z Profidea dla Kobiet",
                time: "17:30",
                day: "Wtorek",
                description: "Zapraszam wszystkie panie, które KONTYNUUJĄ Z NAMI KOLEJNY SEZON ROWEROWY, na rowerze szosowym. Jedziemy przejażdżki typu Coffee Ride. Nie ścigamy się, tylko zwiedzamy nowe trasy, uczymy się techniki, jazdy w grupie i bezpiecznego poruszania po drogach.",
                url: {
                    facebook: "https://fb.com/ProfideadlaKobiet"
                },
                startingPoint: {
                    latitude: 50.059196,
                    longitude:19.923766
                },
                rideType: RideType.ROAD,
                city: "Kraków"
            },
            {
                id: "4",
                name: "Damskie Środy z Profidea dla Kobiet",
                time: "17:30",
                day: "Środa",
                description: "Zapraszam wszystkie panie, które chcą ➡️ ROZPOCZĄĆ przygodę na rowerze szosowym. Jedziemy przejażdżki typu Coffee Ride. Nie ścigamy się, tylko zwiedzamy nowe trasy, uczymy się techniki, jazdy w grupie i bezpiecznego poruszania po drogach.",
                url: {
                    facebook: "https://fb.com/ProfideadlaKobiet"
                },
                startingPoint: {
                    latitude: 50.059196,
                    longitude:19.923766
                },
                rideType: RideType.ROAD,
                city: "Kraków"
            },
            {
                id: "5",
                name: "Trening MTB I GRAVEL z Profidea dla Kobiet",
                time: "11:00",
                day: "Sobota",
                description: "Dziewczyny wskakujemy na rowery Mtb, trekkingowe lub gravelowe.\n" +
                    "Zbiórka - Błonia róg Focha i 3 Maja Kraków\n",
                url: {
                    facebook: "https://fb.com/ProfideadlaKobiet"
                },
                startingPoint: {
                    latitude: 50.059196,
                    longitude:19.923766
                },
                rideType: RideType.MTB,
                city: "Kraków"
            },
            {
                id: "6",
                name: "Ekspressoride bikeshow.cc",
                time: "9:30",
                day: "Poniedziałek",
                description: "Ustawka rowerowa dla prywaciarzy. Kierunek Niepołomice.",
                url: {
                    facebook: "https://www.facebook.com/groups/1606940372774784"
                },
                startingPoint: {
                    latitude: 50.053387,
                    longitude:20.049247
                },
                rideType: RideType.ROAD,
                city: "Kraków"
            },
            {
                id: "7",
                name: "Ekspressoride bikeshow.cc",
                time: "9:30",
                day: "Piątek",
                description: "Ustawka rowerowa dla prywaciarzy. Kierunek Czernichów.",
                url: {
                    facebook: "https://www.facebook.com/groups/1606940372774784"
                },
                startingPoint: {
                    latitude: 50.050136,
                    longitude: 19.930474
                },
                rideType: RideType.ROAD,
                city: "Kraków"
            },
            {
                id: "8",
                name: "Czwartki z Chodźże na Rower",
                time: "17:20",
                day: "Czwartek",
                description: "Grupa \"Co, ja nie podjadę? Potrzymaj mi bidon!\", czyli nietypowe podjazdy z #KrulLasu.",
                url: {
                    facebook: "https://fb.com/chodzzenarower/"
                },
                startingPoint: {
                    latitude: 50.053309,
                    longitude:19.901110
                },
                rideType: RideType.MTB,
                city: "Kraków"
            },
            {
                id: "11",
                name: "Czwartki z Chodźże na Rower",
                time: "17:30",
                day: "Czwartek",
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
                rideType: RideType.MTB,
                city: "Kraków"
            },
            {
                id: "12",
                name: "Czwartki z Chodźże na Rower",
                time: "17:00",
                day: "Czwartek",
                description: "Hutasy i Mateusz w roli głownej. Dokładnych informacji szukajcie pod wydarzeniem i w naszej grupie.",
                url: {
                    facebook: "https://fb.com/chodzzenarower/"
                },
                startingPoint: {
                    latitude: 50.076142,
                    longitude: 20.051179
                },
                rideType: RideType.ROAD,
                city: "Kraków"
            },
            {
                id: "13",
                name: "Czwartki z Chodźże na Rower",
                time: "17:00",
                day: "Czwartek",
                description: "Kuba i Grupetto łognitto 🔥🔥🔥 Szczegółów szukaj w grupie i pod wydarzeniem.",
                url: {
                    facebook: "https://fb.com/chodzzenarower/"
                },
                startingPoint: {
                    latitude: 50.058665,
                    longitude: 19.921278
                },
                rideType: RideType.ROAD,
                city: "Kraków"
            },
            {
                id: "14",
                name: "Wrześniowe wtorki z Cyklo Jurą w terenie",
                time: "17:00",
                day: "Wtorek",
                description: "Stratujemy max 5 minut po wyznaczonym czasie z miejsca zbiórki.",
                url: {
                    facebook: "https://www.facebook.com/cyklojura"
                },
                startingPoint: {
                    latitude: 50.116404,
                    longitude: 19.800578
                },
                rideType: RideType.MTB,
                city: "Zabierzów"
            },
            {
                id: "15",
                name: "Pokręcona Środa z CJZ",
                time: "16:30",
                day: "Środa",
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
                rideType: RideType.ROAD,
                city: "Zabierzów"
            },
            {
                id: "16",
                name: "Damska Szosa",
                time: "16:30",
                day: "Środa",
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
                rideType: RideType.ROAD,
                city: "Kraków"
            },
            {
                id: "17",
                name: "Ustawka kolarska z Bike RS",
                time: "16:45",
                day: "Czwartek",
                description: "Jeździmy w zróżnicowanym terenie, głównie po \"południowej\" stronie Krakowa, ze względu na naszą lokalizację.\n" +
                    "Zapraszamy do wspólnej jazdy",
                url: {
                    facebook: "https://www.facebook.com/groups/403048707156938"
                },
                startingPoint: {
                    latitude: 49.988630,
                    longitude: 19.913532
                },
                rideType: RideType.ROAD,
                city: "Kraków"
            },
            {
                id: "18",
                name: "Gravelowy wtorek z Bike RS",
                time: "16:45",
                day: "Czwartek",
                description: "Jeździmy w zróżnicowanym terenie, głównie po \"południowej\" stronie Krakowa, ze względu na naszą lokalizację.\n" +
                    "Zapraszamy do wspólnej jazdy",
                url: {
                    facebook: "https://www.facebook.com/groups/403048707156938"
                },
                startingPoint: {
                    latitude: 49.988630,
                    longitude: 19.913532
                },
                rideType: RideType.GRAVEL,
                city: "Kraków"
            },
            {
                id: "19",
                name: "Cichy kącik",
                time: "10:10",
                day: "Sobota",
                description: "Grupa krakowskich kolarzy. Regularne spotkania na treningi szosowe w weekendy.",
                url: {
                    facebook: "https://www.facebook.com/groups/cichykacik/"
                },
                startingPoint: {
                    latitude: 50.062519,
                    longitude: 19.902593
                },
                rideType: RideType.ROAD,
                city: "Kraków"
            },
            {
                id: "20",
                name: "Coffee Ride",
                time: "10:30",
                day: "Sobota",
                description: "Grupa sympatyków kolarstwa szosowego. Celem tej ustawki zawsze będzie \"mała czarna\" przy okazji\n",
                url: {
                    facebook: "https://fb.com/Coffee-Ride-1759901340903034/"
                },
                startingPoint: {
                    latitude: 50.047979,
                    longitude: 19.902815
                },
                rideType: RideType.ROAD,
                city: "Kraków"
            },
            {
                id: "21",
                name: "NIEPOkręcę",
                time: "10:30",
                day: "Sobota",
                description: "Znudziła Ci się samotna jazda na szosie? - Tu możesz spróbować swoich sił jazdy w peletonie.",
                url: {
                    facebook: "https://fb.com/Coffee-Ride-1759901340903034/"
                },
                startingPoint: {
                    latitude: 50.032902,
                    longitude: 20.217230
                },
                rideType: RideType.ROAD,
                city: "Niepołomice"
            },
            {
                id: "22",
                name: "Grupetto Zielona Góra Ride",
                time: "10:00",
                day: "Sobota",
                description: "Każdy, kto chce pojeździć w grupie, jest mile widziany!",
                url: {
                    facebook: "https://www.facebook.com/Grupetto-Zielona-G%C3%B3ra-822020794664238"
                },
                startingPoint: {
                    latitude: 51.938334,
                    longitude: 15.514192
                },
                rideType: RideType.ROAD,
                city: "Zielona Góra"
            },
            {
                id: "23",
                name: "Palma Ride",
                time: "17:15",
                day: "Wtorek",
                description: "Treningowa ustawka z Grupetto Zielona Góra.",
                url: {
                    facebook: "https://www.facebook.com/Grupetto-Zielona-G%C3%B3ra-822020794664238"
                },
                startingPoint: {
                    latitude: 51.938334,
                    longitude: 15.514192
                },
                rideType: RideType.ROAD,
                city: "Zielona Góra"
            },
            {
                id: "24",
                name: "Palma Ride",
                time: "17:15",
                day: "Czwartek",
                description: "Treningowa ustawka z Grupetto Zielona Góra.",
                url: {
                    facebook: "https://www.facebook.com/Grupetto-Zielona-G%C3%B3ra-822020794664238"
                },
                startingPoint: {
                    latitude: 51.938334,
                    longitude: 15.514192
                },
                rideType: RideType.ROAD,
                city: "Zielona Góra"
            },
            {
                id: "25",
                name: "Niedzielna100 Poznań Winogrady",
                time: "10:00",
                day: "Niedziela",
                description: "Dla fanów szosowych dwóch kółek, którzy lubią kręcić kilometry w super towarzystwie, pić dobrą kawę, jeść ciasto i cieszyć się jazdą.",
                url: {
                    facebook: "https://www.facebook.com/Niedzielna100Winogrady"
                },
                startingPoint: {
                    latitude: 52.432057,
                    longitude: 16.952341
                },
                rideType: RideType.ROAD,
                city: "Poznań"
            },
            {
                id: "26",
                name: "GraveLove Poznań",
                time: "10:00",
                day: "Niedziela",
                description: "Celem organizowanych utawek kolarskich GraveLove Niedziele oraz innych wydarzeń rowerowych pod szyldem GraveLove Poznań jest popularyzacja Poznańskego kolarstwa przełajowego i gravelowego, zwiększenie liczby osób jeżdżących na rowerach \"szutrowych\", integracja Poznańskego środowiska kolarskiego oraz prezentowanie i promowanie szutrowej odmany koalrstwa.",
                url: {
                    facebook: "https://www.facebook.com/GraveLove-Pozna%C5%84-106410877548498/"
                },
                startingPoint: {
                    latitude: 52.432057,
                    longitude: 16.952341
                },
                rideType: RideType.GRAVEL,
                city: "Poznań"
            },
            {
                id: "27",
                name: "Trening Szosowy Zgrupka Team",
                time: "09:00",
                day: "Sobota",
                description: "Ustawki MTB ,kolarskie, zakładki triathlonowe, wypady rekreacyjne i wydarzenia promujące kolarstwo. Społeczność fanów kolarstwa i triathlonu.",
                url: {
                    facebook: "https://www.facebook.com/Zgrupka/"
                },
                startingPoint: {
                    latitude: 52.379108,
                    longitude: 16.943422
                },
                rideType: RideType.ROAD,
                city: "Poznań"
            },
            {
                id: "28",
                name: "Szosa ONLY FOR GIRLS ",
                time: "09:00",
                day: "Sobota",
                description: "Szosa dla Dziewczyn- TYLKO DLA DZIEWCZYN! Panowie będą odsyłani do domu. Będzie przerwa na kawe( o ile pogoda pozwoli). Obowiązkowy kask i oświetlenie tył.",
                url: {
                    facebook: "https://www.facebook.com/babskiekrecenie/"
                },
                startingPoint: {
                    latitude: 54.382605,
                    longitude: 18.598718
                },
                rideType: RideType.ROAD,
                city: "Gdańsk"
            }
        )
}

export {Api as RideApi}