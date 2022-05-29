import React from "react"
import { useLocation } from 'react-router-dom';

const LocationChecker = (props) => {
  const location = useLocation()

  React.useEffect(() => {
    props.onLocationChange(location.pathname)
    console.log('handle route change here', location)
  }, [location, props])
}

export default LocationChecker