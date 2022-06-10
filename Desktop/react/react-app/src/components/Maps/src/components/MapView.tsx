import { Map } from 'mapbox-gl';
import { useContext , useRef, useLayoutEffect} from 'react';
import { PlacesContext } from '../context';
import { Loading } from './';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhY29mcmVoIiwiYSI6ImNsNDZzZ3ptZzBiaGgza213ZnloeDBnZTkifQ.9_P-Ueky-lN4GJB8Ib55qg';


export const MapView = () => {
  
    const { isLoading, userLocation } = useContext( PlacesContext );
  

    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if ( !isLoading ) {

            const map = new Map({
                container: mapDiv.current! , // container ID
                style: 'mapbox://styles/mapbox/light-v10', // style URL
                center: userLocation, // starting position [lng, lat]
                zoom: 14 // starting zoom
            });


        }
    }, [ isLoading ])


    if ( isLoading ) {
        return ( <Loading /> )
    }


    return (
        <div ref={ mapDiv }
            style={{
                height: '100vh',
                left: 0,
                position: 'fixed',
                top: 0,
                width: '100vw',
            }}
        >
    
            { userLocation?.join(',') }
        </div>
    )
}