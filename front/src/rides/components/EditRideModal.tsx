import React, {useState} from 'react'
import {Button, Modal} from "react-bootstrap";
import {FlagFill} from "react-bootstrap-icons";
import { Ride, RideType, RideUrls } from '../../types';
import { Set } from 'immutable'

export interface EditRideModalProps {
    readonly ride: Ride;
}

export interface EditRideModalActionProps {
}


const AddRideModal: React.FC<EditRideModalProps & EditRideModalActionProps> = (props) => {

    const {ride} = props

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const prepareLinks = (rideUrls: RideUrls) => {

        let links = []

        if (rideUrls.facebook) {
            links.push(rideUrls.facebook)
        }
        if (rideUrls.strava) {
            links.push(rideUrls.strava)
        }
        if (rideUrls.webpage) {
            links.push(rideUrls.webpage)
        }

        return links.join(", ")
    }

    const getFormLink = (ride: Ride) => {

        const fieldsAndValues: [ string, string | number ][] = [
            ["entry.392229269", ride.name],
            ["entry.1549898596", `${ride.startingPoint.latitude} ${ride.startingPoint.longitude}`],
            ["entry.721382862_hour", ride.time.hour()],
            ["entry.721382862_minute", ride.time.minute()],
            ["entry.1500882275", ride.description],
            ["entry.1641036664", `${prepareLinks(ride.url)}`],
            ["entry.1065389571", `${ride.day.name.toLowerCase()}`]
        ];
        
        for (const rideType of  Array.from(ride.rideTypes)) {
            fieldsAndValues.push(["entry.1236303941", rideType.name])
        }

        let url = "https://docs.google.com/forms/d/e/1FAIpQLSdapFyHGAst4RVlQjHkCSdW7CdiNcjMMB-2adlpi_VEo_467w/viewform?embedded=true"
        for (const element of fieldsAndValues) {
            url += `&${element[0]}=${element[1]}`
        }
        return url;
    }


    return (
        <>
            <span onClick={handleShow} className="text-muted edit-ride-text"> Zaproponuj zmiany <FlagFill /></span>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Proponowanie zmian</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        src={getFormLink(ride)}
                        className="w-100" height="600px" frameBorder="0" title="add-ride-form">Ładuję…
                    </iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Zamknij
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddRideModal