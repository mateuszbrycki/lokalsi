export interface Ride {
    readonly id: string;
    readonly name: string;
    readonly time: string;
    readonly day: string;
    readonly description: string;
    readonly url: string;
    readonly startingPoint: MapPoint;
}

export interface MapPoint {
    readonly latitude: number;
    readonly longitude: number;
}