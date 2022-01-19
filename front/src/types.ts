import {Map as LeafletMap} from "leaflet";
import {LocalTime} from "@js-joda/core";

export interface Ride {
    readonly id: string;
    readonly name: string;
    readonly time: LocalTime;
    readonly day: Day;
    readonly description: string;
    readonly url: RideUrls;
    readonly startingPoint: MapPoint;
    readonly rideType: RideType;
    readonly city: string;
}

export interface MapPoint {
    readonly latitude: number;
    readonly longitude: number;
}

export interface RideUrls {
    readonly facebook?: string;
    readonly strava?: string;
    readonly webpage?: string;
}


export class RideType {
    public static readonly ROAD = new RideType('Road', '#3E885B');
    public static readonly GRAVEL = new RideType('Gravel', '#6b706f');
    public static readonly MTB = new RideType('MTB/XC', '#916953');

    private constructor(public readonly name: string, public readonly color: string) {
    }
}

export class Day {
    public static readonly MONDAY = new Day('Poniedziałek', 0);
    public static readonly TUESDAY = new Day('Wtorek', 1);
    public static readonly WEDNESDAY = new Day('Środa', 2);
    public static readonly THURSDAY = new Day('Czwartek', 3);
    public static readonly FRIDAY = new Day('Piątek', 4);
    public static readonly SATURDAY = new Day('Sobota', 5);
    public static readonly SUNDAY = new Day('Niedziela', 6);

    private constructor(public readonly name: string, public readonly number: number) {
    }
}

export interface Map extends LeafletMap {}