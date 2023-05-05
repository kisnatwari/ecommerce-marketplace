import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"

const Map = () => {
    const position = [8, 27];

    return (
        <>
            <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: '400px', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                </Marker>
            </MapContainer>
        </>
    );
};

export default Map;