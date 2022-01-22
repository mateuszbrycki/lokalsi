import React from 'react'
import * as Icon from "react-bootstrap-icons";
import {Plus} from "react-bootstrap-icons";

export interface FooterProps {
}

export interface FooterActionProps {
}


const Footer: React.FC<FooterProps & FooterActionProps> = (props) => {

    const fbPluginSize = {
        width: 320,
        height: 350
    }

    return (
        <footer className="text-center text-lg-start bg-light text-muted border-top mt-1" id="footer">
            <section className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <section className="col-12 col-lg-4 col-xxl-3 mx-auto mb-4">
                        <h2>
                            lokalsi.cc
                        </h2>
                        <p>
                            Zbieramy i aktualizujemy dane na temat ustawek kolarskich w Polsce.
                            Liczymy, że nasza strona pomoże w rozrastaniu się kolarskiej społeczności.
                        </p>
                        <p>
                            Chcemy, aby każdy chętny miał możliwość zintegrowania się z lokalną kolarską
                            społecznością - <span className="fw-bold d-inline"> lokalsami</span>.
                        </p>

                    </section>
                    <section className="col-12 col-lg-4 col-xxl-3 mx-auto mb-4">
                        <h2>
                            Jak działamy?
                        </h2>
                        <p>
                            Wszystkie dane zbieramy i aktualizujemy ręcznie.
                            Mamy nadzieję, że liczba ustawek prezentowanych na stronie będzie się stale zwiększać.
                        </p>
                        <p>
                            Jeżeli Twoje ulubiona ustawka nie jest widoczna na mapie, to bylibyśmy wdzięczni za
                            podesłanie nam jej szczegółów.
                            W tym celu przygotowaliśmy specjalny formularz (<span className="badge add-ride-badge"
                                                                                  onClick={() => {
                                                                                      document?.getElementById("add-ride-button")?.click();
                                                                                  }}>Nowa ustawka<Plus
                            className="ms-1"/></span>). Dziękujemy!
                        </p>
                    </section>
                    <section className="col-12 col-lg-4 col-xxl-3 mx-auto mb-md-0 mb-4">
                        <h2>
                            Kontakt
                        </h2>
                        <p>
                            Jeżeli znalazłeś na naszej stronie błędne informacje lub masz pomysł co moglibyśmy
                            zmienić,
                            aby korzystanie z <a href="https://lokalsi.cc/">lokalsi.cc</a> było łatwiejsze, to
                            skontaktuj się z nami za pomocą
                            poniższego adresu e-mail.
                        </p>
                        <address className="fw-bold">
                            <Icon.Envelope className="me-2"/>
                            lokalsicc@gmail.com
                        </address>
                    </section>
                    <section className="col-12 col-lg-4 col-xxl-3 mx-auto mb-md-0 mb-4">
                        <iframe
                            src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLokalsicc-105036815418252%2F&tabs=timeline&width=${fbPluginSize.width}&height=${fbPluginSize.height}&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=1795776397407591`}
                            width={fbPluginSize.width} height={fbPluginSize.height} style={{border: "none", overflow: "hidden"}} scrolling="no"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

                    </section>
                </div>
            </section>

            <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                Copyright © 2021 - 2022 <a className="text-reset fw-bold text-decoration-none"
                                           href="https://lokalsi.cc/">lokalsi.cc</a>
            </div>
        </footer>
    )
}

export default Footer