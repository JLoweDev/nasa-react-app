import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({ center, zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                <LocationMarker lat={center.lat} lng={center.lng}/>
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 51.5074,
        lng: 0.1278
    },
    zoom: 6
}

export default Map
