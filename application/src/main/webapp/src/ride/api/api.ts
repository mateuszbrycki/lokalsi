import {List} from 'immutable'
import {Ride} from "../../types"
import axios from "axios"


const API_URL = 'http://localhost:8080'


export interface RideHttpApi {
    readonly getRides: () => Promise<List<Ride>>
}

const Api: RideHttpApi = {
    getRides: () =>
        axios.get(API_URL + '/rides')
            .then(result => List(result.data))

}

export {Api as RideApi}