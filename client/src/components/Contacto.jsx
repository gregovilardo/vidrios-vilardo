import { useState } from "react";
import axios from "axios";

function Contacto() {
    const [state, setState] = useState({
        name: "",
        location: "",
        email: "",
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setState((prevVal) => ({ ...prevVal, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { name, location, email, phone, message } = state;
        const userInput = {
            name,
            location,
            email,
            phone,
            message,
        };
        axios
            .post("http://localhost:4000/contacto", userInput)
            .then(() => {
                console.log("form submited");
            })
            .catch((err) => {
                console.log(err);
            });
        setSubmitted(true);
    }

    return (
        <section id="contacto" style={{ margin: "auto" }}>
            <div className="content color-c container pb-3">
                <h1 className="pt-5 titles" style={{ color: "whitesmoke" }}>
                    Contactenos<div className="subrayado cont"></div>
                </h1>
                <p style={{ textAlign: "center", color: "whitesmoke" }}>
                    No dudes en consultar, es gratis!!
                </p>

                <div className="mb-3">
                    <form onSubmit={handleSubmit}>
                        <label for="nombre" className="form-label mt-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="nombre"
                            onChange={handleChange}
                            className="input-style col-12 form-control"
                        />
                        <label
                            for="barrio-localidad"
                            className="form-label mt-3"
                        >
                            Barrio o Localidad
                        </label>
                        <input
                            type="text"
                            name="location"
                            id="barrio-localidad"
                            onChange={handleChange}
                            className="input-style col-12 form-control"
                        />
                        <label for="email" className="form-label mt-3">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            className="input-style col-12 form-control"
                            placeholder="ejemplo@gmail.com"
                        />
                        <label for="celular" className="form-label mt-3">
                            Celular
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="celular"
                            onChange={handleChange}
                            className="input-style col-12 form-control"
                        />
                        <label
                            for="mensaje"
                            className="form-label mt-3 text-start"
                        >
                            Mensaje
                        </label>
                        <textarea
                            className="form-control"
                            name="message"
                            id="mensaje"
                            onChange={handleChange}
                            rows="3"
                        ></textarea>
                        <div className="boton p-4 ps-0 pb-0">
                            <button className="btn enviar" type="submit">
                                Enviar
                            </button>
                            <div className="submitted-msg col-4">
                                {submitted && (
                                    <h5>
                                        Se ha enviado el formulario
                                        correctamente!
                                    </h5>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contacto;
