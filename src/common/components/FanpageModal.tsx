import React, {useState, useEffect} from 'react'
import {Button, Modal} from "react-bootstrap";
import Cookies from 'universal-cookie';

export interface WindowDimensions {
    readonly width: number;
    readonly height: number;
}

const COOKIE_NAME = "user-closed-fanpage-modal";

const FanpageModal: React.FC<any> = () => {

    const [showFanpageModal, setShowFanpageModal] = useState(false);
    
    useEffect(() => {
        if (!hasUserClosedModal()) {
            const timer = setTimeout(() => {
                setShowFanpageModal(true);
            }, 6000);
            return () => clearTimeout(timer);
        }

        return () => null;
      }, []);
      
    const cookies = new Cookies();
    const hasUserClosedModal = () => cookies.get(COOKIE_NAME) === 'true'
    const setCookieValue = (value: boolean) => cookies.set(COOKIE_NAME, value, {path: '/', maxAge: 31556926 }) //1 year

    const handleCloseModal = () => {
        setShowFanpageModal(false);
        setCookieValue(true);
    }

    const getWindowDimensions = (): WindowDimensions => {
        const {innerWidth: width, innerHeight: height} = window;
        return {
            width,
            height
        };
    }

    const useWindowDimensions = (): WindowDimensions => {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    const getModalWidth = (windowWidth: number): number => {
        
        if (windowWidth < 768) {
            return 300 * 0.98;
        }

        if (windowWidth < 992) {
            return 500 * 0.9;
        }

        return 500;
        
    }

    const fbPluginSize = {
        width: getModalWidth(useWindowDimensions().width) ,
        height: Math.ceil(useWindowDimensions().height * 0.4)
    }

    return (
            <Modal
                show={showFanpageModal}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={false}
                dialogClassName="modal-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Wpadnij na nasz fanpage!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{textAlign:"center"}} className="mx-auto">
                        <iframe
                            src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLokalsicc-105036815418252%2F&tabs=timeline&width=${fbPluginSize.width}&height=${fbPluginSize.height}&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=1795776397407591`}
                            width={fbPluginSize.width} height={fbPluginSize.height} style={{border: "none", overflow: "hidden"}} scrolling="no"
                            frameBorder="0"
                            allowFullScreen={true}
                            title="lokalsi-facebook"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Zamknij
                    </Button>
                </Modal.Footer>
            </Modal>

    );
}

export default FanpageModal