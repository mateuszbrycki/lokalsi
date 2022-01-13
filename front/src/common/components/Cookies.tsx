import React, {useState} from 'react'
import {Button, Modal} from "react-bootstrap";
import Cookies from 'universal-cookie';

const COOKIE_NAME = "user-accepted-cookies-consent";

const CookiesPopup: React.FC<any> = () => {

    const cookies = new Cookies();

    const hasUserAcceptedCookies = () => cookies.get(COOKIE_NAME) === 'true'
    const setCookieValue = (value: boolean) => cookies.set(COOKIE_NAME, value, {path: '/'})
    const acceptCookies = () => {
        setCookieValue(true)
        setShowCookiesConsent(true)
    }

    const [showPrivacyPolicyModal, setShowPrivacyPolicyModal] = useState(false);
    const [showCookiesConsent, setShowCookiesConsent] = useState(hasUserAcceptedCookies());

    const handleCloseModal = () => setShowPrivacyPolicyModal(false);
    const handleShowModal = () => setShowPrivacyPolicyModal(true);

    return (
        <>
            {(!hasUserAcceptedCookies() || !showCookiesConsent) ?
                <div className="cookie-consent border-top p-2"><span>Serwis <a href="https://lokalsi.cc">lokalsi.cc</a> wykorzystuje pliki cookies. Korzystając ze strony wyrażasz zgodę na ich użycie.
                <span className="ml-1 fw-bold" onClick={handleShowModal}> Polityka prywatności</span>.</span>
                    <div className=" ms-2 d-flex align-items-center justify-content-center g-2">
                        <Button className="btn btn-success me-1" onClick={acceptCookies}>Akceptuj</Button>
                    </div>
                </div> : <></>}

            <Modal
                show={showPrivacyPolicyModal}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Polityka Prywatności</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul style={{listStyleType: 'upper-roman'}}>
                        <li>Serwis zbiera w sposób automatyczny tylko informacje zawarte w plikach cookies.</li>

                        <li>Pliki (cookies) są plikami tekstowymi, które przechowywane są w urządzeniu końcowym
                            użytkownika serwisu. Przeznaczone są do korzystania ze stron serwisu. Przede wszystkim
                            zawierają nazwę strony internetowej swojego pochodzenia, swój unikalny numer, czas
                            przechowywania na urządzeniu końcowym.
                        </li>

                        <li>Operator serwisu Mateusz Brycki jest podmiotem zamieszczającym na
                            urządzeniu końcowym swojego użytkownika pliki cookies oraz mającym do nich dostęp.
                        </li>

                        <li>Operator serwisu wykorzystuje pliki (cookies) w celu:
                            <ul>
                                <li>dopasowania zawartości strony internetowej do indywidualnych preferencji
                                    użytkownika, przede wszystkim pliki te rozpoznają jego urządzenie, aby zgodnie z
                                    jego preferencjami wyświetlić stronę;
                                </li>
                                <li>przygotowywania statystyk pomagających poznaniu preferencji i zachowań użytkowników,
                                    analiza tych statystyk jest anonimowa i umożliwia dostosowanie zawartości i wyglądu
                                    serwisu do panujących trendów, statystyki stosuje się też do oceny popularności
                                    strony;
                                </li>
                                <li>możliwości logowania do serwisu;</li>
                                <li>utrzymania logowania użytkownika na każdej kolejnej stronie serwisu.</li>
                            </ul>
                        </li>
                        <li>Serwis stosuje dwa zasadnicze rodzaje plików (cookies) - sesyjne i stałe. Pliki sesyjne
                            są tymczasowe, przechowuje się je do momentu opuszczenia strony serwisu (poprzez wejście na
                            inną stronę, wylogowanie lub wyłączenie przeglądarki). Pliki stałe przechowywane są w
                            urządzeniu końcowym użytkownika do czasu ich usunięcia przez użytkownika lub przez czas
                            wynikający z ich ustawień.
                        </li>
                        <li>Użytkownik może w każdej chwili dokonać zmiany ustawień swojej przeglądarki, aby
                            zablokować obsługę plików (cookies) lub każdorazowo uzyskiwać informacje o ich umieszczeniu
                            w swoim urządzeniu. Inne dostępne opcje można sprawdzić w ustawieniach swojej przeglądarki
                            internetowej. Należy pamiętać, że większość przeglądarek domyślnie jest ustawione na
                            akceptację zapisu plików (cookies)w urządzeniu końcowym.
                        </li>
                        <li>Operator Serwisu informuje, że zmiany ustawień w przeglądarce internetowej użytkownika
                            mogą ograniczyć dostęp do niektórych funkcji strony internetowej serwisu.
                        </li>
                        <li>Pliki (cookies) z których korzysta serwis (zamieszczane w urządzeniu końcowym
                            użytkownika) mogą być udostępnione jego partnerom oraz współpracującym z nim reklamodawcą.
                        </li>
                        <li>Informacje dotyczące ustawień przeglądarek internetowych dostępne są w jej menu (pomoc)
                            lub na stronie jej producenta.
                        </li>
                        <li>Bardziej szczegółowe informacje na temat plików (cookies) dostępne są na stronie
                            ciasteczka.org.pl
                        </li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Zamknij
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CookiesPopup