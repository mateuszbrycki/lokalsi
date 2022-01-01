import React from 'react'
import * as Icon from "react-bootstrap-icons";

export interface FooterProps {
}

export interface FooterActionProps {
}


const Footer: React.FC<FooterProps & FooterActionProps> = (props) => {

    return (
        <footer className="text-center text-lg-start bg-light text-muted border-top mt-5" id="footer">
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6>
                                lokalsi.cc
                            </h6>
                            <p>
                                Zbieramy i aktualizujemy dane na temat ustawek kolarskich w Polsce. Liczymy, że nasza strona
                                pomoże w rozrastaniu się kolarskich społeczności.
                            </p>
                            <p>
                                Mamy nadzieję, że niedługo uda nam się zebrać pokaźną listę wydarzeń, która pomoże nie tylko nowym
                                pasjonatom kolarstwa, ale również tym, którzy podróżują po Polsce i chcieliby pojeździć z
                                <div className="fw-bold"> Lokalsami.</div>
                            </p>

                        </div>
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6>
                                Jak działamy?
                            </h6>
                            <p>
                                Dane o ustakach zbieramy i aktualizujemy sami. Będziemy bardzo wdzięczni za podrzucanie nam
                                informacji o ustawkach, które żyją w Twoim regionie.
                            </p>
                            <p>
                                Do tego celu przygotowaliśmy specjalny formularz (<span className="badge" style={{backgroundColor: '#4c9db4'}}>Nowa Ustawka</span>),
                                za pomocą którego możesz podesłać nam niezbędne informacje. Będziemy wdzięczni za informacje o każdej ustawce!
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6>
                                Kontakt
                            </h6>
                            <p>
                                Jeżeli znalazłeś na naszej stronie błędne informacje lub masz pomysł co moglibyśmy zmienić,
                                aby korzystanie z <a href="https://lokalsi.cc/">lokalsi.cc</a> było łatwiejsze, to skontaktuj się z nami za pomocą
                                poniższego adresu e-mail.
                            </p>
                            <p className="fw-bold">
                                <Icon.Envelope className="me-2"/>
                                lokalsicc@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                Copyright © 2021 - 2022 <a className="text-reset fw-bold text-decoration-none" href="https://lokalsi.cc/">lokalsi.cc</a>
            </div>
        </footer>
    )
}

export default Footer