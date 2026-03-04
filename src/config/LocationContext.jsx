import { createContext, useContext } from "react";

export const LocationContext = createContext({
  location: null, // { lat, lng }
  loading: false,
  error: null,
});

export function useLocation() {
  return useContext(LocationContext);
}
