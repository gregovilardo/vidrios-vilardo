import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: -31.61058,
            lng: -64.442856,
        },
        zoom: 13,
    };
    render() {
        return (
            // Important! Always set the container height explicitly
            <div
                className="googleMap"
                style={{ height: "80vh", width: "80vh" }}
            >
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyAIZaajzFFbjdYM35dPDx69gF4ckkWJWnc",
                        language: "es",
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={this.props.center.lat}
                        lng={this.props.center.lng}
                    />

                    <AnyReactComponent lat={-31.610584} lng={-64.442856} />
                </GoogleMapReact>
            </div>
        );
    }
}

const Marker = (props) => {
    return (
        <>
            <div className="pin"></div>
            <div className="pulse"></div>
        </>
    );
};

export default SimpleMap;
