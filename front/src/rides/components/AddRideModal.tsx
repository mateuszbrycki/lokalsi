import React, {useState} from 'react'
import {Ride} from "../../types";
import {Marker, Popup} from "react-leaflet";
import {Button, Modal} from "react-bootstrap";

export interface AddRideModalProps {
}

export interface AddRideModalActionProps {
}


const AddRideModal: React.FC<AddRideModalProps & AddRideModalActionProps> = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Dodaj ustawkę!
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Dodawanie ustawki</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScxxRtu0CD7ypsb6ZfY0PU6GAb34vOo-T1s9MC_H3gmQvzq1g/viewform?embedded=true"
                        className="w-100" height="600px" frameBorder="0">Ładuję…
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