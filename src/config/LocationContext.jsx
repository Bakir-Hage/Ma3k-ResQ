import { createContext, useContext } from "react";

export const LocationContext = createContext({
  location: null, // { lat, lng }
  loading: false,
  error: null,
});

export function useLocation() {
  return useContext(LocationContext);
}
// It would be helpful to export a custom hook like `useLocationContext()` so consuming components do not all import the raw context directly.
