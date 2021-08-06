import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import TrabajoSection from "./components/TrabajoSection"
import Servicios from "./components/Servicios"
import Contacto from "./components/Contacto"
import Ubicacion from "./components/Ubicacion"

class App extends Component {
    state = {
        data: null,
    };

    componentDidMount() {
        this.callBackendAPI()
            .then((res) => this.setState({ data: res.express }))
            .catch((err) => console.log(err));
    }
    // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch("/express_backend");
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    render() {
        return (
            <div>
                <Navbar />
                <Home />
                <TrabajoSection nameSection="Vidrio"/>
                <TrabajoSection nameSection="Aluminio"/>
                <Servicios />
                <Contacto />
                <Ubicacion />
            </div>
        );
    }
}
export default App;


