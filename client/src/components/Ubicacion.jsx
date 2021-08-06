function Ubicacion() {
    return (
        <section id="ubicacion">
            <div className="content color-u container p-3">
                <footer>
                    <div className="row data">
                        <div className="ubic col-lg-4">
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
                                Abrir en Google{" "}
                                <u>
                                    <b>Maps</b>
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
                                <b>Whatsapp:</b> <u>+54 3547 588654</u>
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

export default Ubicacion