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
                name: "Pierwsza ustawka",
                time: "16:00",
                day: "Poniedziałek",
                description: "Pierwsza poniedziałkowa ustawka",
                url: {
                    strava: "#"
                },
                startingPoint: {
                    latitude: 50.059319,
                    longitude: 19.923351
                },
                rideType: RideType.ROAD
            },
            {
                id: "2",
                name: "Druga ustawka",
                time: "15:00",
                day: "Wtorek",
                description: "Pierwsza wtorkowa ustawka",
                url: {
                    facebook: "#",
                    webpage: "#"
                },
                startingPoint: {
                    latitude: 50.045210,
                    longitude: 19.922492
                },
                rideType: RideType.GRAVEL
            },
            {
                id: "3",
                name: "Trzecia ustawka",
                time: "17:00",
                day: "Środa",
                description: "Pierwsza środowa ustawka",
                url: {
                    facebook: "#",
                    webpage: "#",
                    strava: "#"
                },
                startingPoint: {
                    latitude: 50.019552,
                    longitude: 19.932342
                },
                rideType: RideType.MTB
            },
            {
                id: "4",
                name: "Czwarta ustawka",
                time: "18:00",
                day: "Czwartek",
                description: "Pierwsza czwartkowa ustawka",
                url: {
                    facebook: "#",
                    strava: "#"
                },
                startingPoint: {
                    latitude: 50.052917,
                    longitude: 20.049306
                },
                rideType: RideType.ROAD
            },
            {
                id: "5",
                name: "Piąta ustawka",
                time: "13:00",
                day: "Piątek",
                description: "Pierwsza piątkowa ustawka",
                url: {
                    facebook: "#",
                    strava: "#",
                    webpage: "#"
                },
                startingPoint: {
                    latitude: 50.062529,
                    longitude: 19.902527
                },
                rideType: RideType.GRAVEL
            }

        )
}

export {Api as RideApi}