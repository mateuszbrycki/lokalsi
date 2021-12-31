export interface Ride {
    readonly id: string;
    readonly name: string;
    readonly time: string;
    readonly day: string;
    readonly description: string;
    readonly url: RideUrls;
    readonly startingPoint: MapPoint;
    readonly rideType: RideType;
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
    public static readonly GRAVEL = new RideType('Gravel', '#CDD7D6');
    public static readonly MTB = new RideType('MTB/XC', '#916953');

    private constructor(public readonly name: string, public readonly color: string) {
    }
}