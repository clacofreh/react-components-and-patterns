import React from 'react'
import { PlacesProvider } from './src/context'
import {HomeScreen} from './src/screens'

const Maps = () => {
  return (
  <PlacesProvider>
    <HomeScreen/>
  </PlacesProvider>
  )
}

export default Maps