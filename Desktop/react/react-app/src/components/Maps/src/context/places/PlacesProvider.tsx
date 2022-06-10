import { useEffect, useReducer } from "react";
import { getUserLocation } from "../../helpers";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};
interface Props {
  children: JSX.Element | JSX.Element[];
}


export const PlacesProvider = ({ children }: Props) => {


  const [placesState, dispatch] = useReducer(placesReducer, INITIAL_STATE);
  
  useEffect(() => {
    getUserLocation().then((coords) => {
      dispatch({ type: "setUserLocation", payload: coords });
    });
  }, []);

  return (
    <PlacesContext.Provider
      value={{
        ...placesState,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
