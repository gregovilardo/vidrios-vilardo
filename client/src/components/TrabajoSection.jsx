import Trabajo from "./Trabajo";

function TrabajoSection(props) {
    const nameProductos = {
        vidrio: [
            "Espejos",
            "Templados",
            "DVH",
            "Mamparas para Baño",
            "Profilit",
            "Baranda para Piletas",
        ],
        aluminio: [
            "Puertas",
            "Ventanas",
            "Barandas",
            "Balcones",
            "Trabajos Especiales",
            "Cerramientos",
        ],
    };

    // the imgAmount its a little hardcoded, 
    //its how many times is going to iterate a for loop in "trabajo.jsx" for the ammount of pictures that the folder has 

    return (
        <section id={props.nameSection}>
            <div className="content titles color container">
                <h1 className="pt-5">
                    {props.nameSection}
                    <div
                        className={
                            props.nameSection === "Aluminio"
                                ? "subrayado alum"
                                : "subrayado vid"
                        }
                    ></div>
                </h1>

                <div className="row p-lg-5">
                    <Trabajo
                        section={props.nameSection}
                        product={
                            props.nameSection === "Vidrio"
                                ? nameProductos.vidrio[0]
                                : nameProductos.aluminio[0]
                        }
                        imgAmount={3}
                        name={
                            props.nameSection === "Vidrio"
                                ? nameProductos.vidrio[0]
                                : nameProductos.aluminio[0]
                        }
                    />
                    <Trabajo
                        section={props.nameSection}
                        product={
                            props.nameSection === "Vidrio"
                                ? nameProductos.vidrio[1]
                                : nameProductos.aluminio[1]
                        }
                        imgAmount={3}
                        name={
                            props.nameSection === "Vidrio"
                                ? nameProductos.vidrio[1]
                                : nameProductos.aluminio[1]
                        }
                    />
                    <Trabajo
                        section={props.nameSection}
                        product={
                            props.nameSection === "Vidrio"
                                ? nameProductos.vidrio[2]
                                : nameProductos.aluminio[2]
                        }
                        imgAmount={props.nameSection === "Vidrio" ? 2 : 4}
                        name={
                            props.nameSection === "Vidrio"
                                ? nameProductos.vidrio[2]
                                : nameProductos.aluminio[2]
                        }
                    />
                    <Trabajo
                        section={props.nameSection}
                        product={
                            props.nameSection === "Vidrio"
                                ? nameProductos.vidrio[3]
                                : nameProductos.aluminio[3]
                        }
                        imgAmount={props.nameSection === "Vidrio" ? 8 : 2}
                        name={
                            props.nameSection === "Vidrio"
                                ? nameProductos.vidrio[3]
                                : nameProductos.aluminio[3]
                        }
                    />
                    <Trabajo
                        section={props.nameSection}
                        product={
                            props.nameSection === "Vidrio"
                                ? nameProductos.vidrio[4]
                                : nameProductos.aluminio[4]
                        }
                        imgAmount={5}
                        name={
                            props.nameSection === "Vidrio"
                                ? nameProductos.vidrio[4]
                                : nameProductos.aluminio[4]
                        }
                    />
                    <Trabajo
                        section={props.nameSection}
                        product={
                            props.nameSection === "Vidrio"
                                ? nameProductos.vidrio[5]
                                : nameProductos.aluminio[5]
                        }
                        imgAmount={3}
                        name={
                            props.nameSection === "Vidrio"
                                ? nameProductos.vidrio[5]
                                : nameProductos.aluminio[5]
                        }
                    />
                </div>
            </div>
        </section>
    );
}

export default TrabajoSection;
