import Leaflet from 'leaflet'
import * as ReactLeaflet from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const { MapContainer } = ReactLeaflet

const Map = ({ children, className, width, height, ...rest }) => {
  let mapClassName

  if (className) {
    mapClassName = `${mapClassName} ${className}`
  }

  return (
    <MapContainer className={mapClassName} {...rest}>
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  )
}

export default Map
