import React, { useState } from "react";
import SimpleMap from "./GoogleMaps";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

function Ubicacion() {
    const [visibility, setVisibility] = useState(false);

    function showMap() {
        if (!visibility) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    }

    const modalStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
    };

    return (
        <section id="ubicacion">
            <Modal size="lg" style={modalStyle} isOpen={visibility}>
                <ModalHeader onClick={showMap}>
                    <Button
                        className="me-3"
                        href="https://www.google.com.ar/maps/place/31%C2%B036'38.1%22S+64%C2%B026'34.3%22W/@-31.6105814,-64.4440844,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d-31.6105837!4d-64.4428556"
                        outline
                        color="primary"
                    >
                        Abrir en GoogleMaps
                    </Button>
                    <Button color="danger">X</Button>
                </ModalHeader>
                <ModalBody>
                    <SimpleMap />
                </ModalBody>
            </Modal>
            <div className="content color-u container p-3">
                <footer>
                    <div className="row data">
                        <div onClick={showMap} className="ubic col-lg-4">
                            <img
                                className="m-3"
                                style={{ filter: "invert(100%)" }}
                                src="img/alfiler.svg"
                                width="60px"
                                height="60px"
                                alt="alfiler svg"
                            />
                            <h3>Ubicacion</h3>
                            <p>
                                <b>
                                    <u>Cirilo Allende 248</u>
                                </b>
                            </p>
                            <p>
                                <u>
                                    Abrir
                                    <b> Mapa</b>
                                </u>
                            </p>
                        </div>

                        <div className="horario col-lg-4">
                            <img
                                className="m-3"
                                style={{ filter: "invert(100%)" }}
                                src="img/hora.svg"
                                width="60px"
                                height="60px"
                                alt="reloj"
                            />
                            <h3>Horarios</h3>
                            <p>
                                <b>Lun a Vie:</b>
                                <u> 8hs - 17hs</u>
                            </p>
                        </div>

                        <div className="contact col-lg-4">
                            <img
                                className="m-3"
                                style={{ filter: "invert(100%)" }}
                                src="img/atencion-al-cliente.svg"
                                width="60px"
                                height="60px"
                                alt="atencion al cliente"
                            />
                            <h3>Contacto</h3>
                            <p>
                                <b>Whatsapp:</b> <u>+54 3547 582654</u>
                            </p>
                            <p>
                                <b>Email:</b> <u>a.s.dvilardo@gmail.com</u>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}

export default Ubicacion;
