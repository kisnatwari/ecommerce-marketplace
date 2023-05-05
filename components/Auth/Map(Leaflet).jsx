import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import "leaflet/dist/images/marker-icon.png"

const Map = () => {
    const position = [51.505, -0.09];

    return (
        <>
            <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: '400px', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
};

export default Map;