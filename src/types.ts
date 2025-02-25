import {Map as LeafletMap, Popup as LeafletPopup} from "leaflet";
import {LocalDate, LocalDateTime, LocalTime, Month} from "@js-joda/core";
import {Set, Map as ImmutableMap} from "immutable";

export interface Ride {
    readonly id: RideId;
    readonly name: string;
    readonly time: LocalTime;
    readonly day: Day;
    readonly description: string;
    readonly url: RideUrls;
    readonly startingPoint: MapPoint;
    readonly rideTypes: Set<RideType>;
    readonly city: string;
    readonly lastVerified?: LocalDate; // lastVerified: LocalDate.parse("2023-02-23")
}

export interface StartingMonthTimeEntry {
    readonly startingMonth: Month;
    readonly time: LocalTime;
}

export class StartingMonthTime {

    private entries: ImmutableMap<Month, LocalTime>;

    constructor(...entries: StartingMonthTimeEntry[]) {
        this.entries = Set(entries)
                    .sort(
                        (valueA: StartingMonthTimeEntry, valueB: StartingMonthTimeEntry) => 
                                valueA.startingMonth.compareTo(valueB.startingMonth))
                    .toMap()
                    .mapKeys(entry => entry.startingMonth)
                    .map(entry => entry.time)
    }

    static of(time: string): StartingMonthTime {
        return new StartingMonthTime(
            { startingMonth: Month.JANUARY, time: LocalTime.parse(time)}
        )
    }

    getTimeForCurrentMonth(): LocalTime {
        const month: Month = LocalDateTime.now().month()
        var time = this.entries.get(month);
        if (time) {
            return time;
        }

        
        time = this.entries.first(LocalTime.parse("00:00"))
        for (const key of Array.from(this.entries.keys())) {
            if (month.compareTo(key) > 0) {
                return time ? time : LocalTime.parse("00:00");
            }
            time = this.entries.get(key)
        }

        return time ? time : LocalTime.parse("00:00");

    }

}

export interface MapPoint {
    readonly latitude: number;
    readonly longitude: number;
}

export interface RideUrls {
    readonly facebook?: string;
    readonly strava?: string;
    readonly webpage?: string;
    readonly instagram?: string;
}


export class RideType {
    public static readonly ROAD = new RideType('Szosa', '#3E885B');
    public static readonly GRAVEL = new RideType('Gravel', '#6b706f');
    public static readonly MTB = new RideType('MTB/XC', '#916953');
    public static readonly FOR_LADIES = new RideType('Dla kobiet', '#FFC0CB');

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

export interface MultiselectOption {
    readonly id: string | number;
    readonly name: string;
    readonly key: string;
}

export interface MultiselectState {
    readonly options: MultiselectOption[];
}

export interface FilterQuery {
    readonly rideTypes: Set<RideType>;
    readonly cities: Set<string>;
    readonly times: Set<string>;
    readonly days: Set<string>;
}

export interface RidesFilterConfig {
    readonly rideTypes: Set<RideType>
    readonly cities: Set<MultiselectOption>
    readonly days: Set<MultiselectOption>
    readonly times: Set<MultiselectOption>
}

export type RideId = string

export interface Map extends LeafletMap {
}

export interface MapPopup extends LeafletPopup {
}

export const CENTER_POINT: MapPoint = {
    latitude: 52.125736,
    longitude: 19.080392
}