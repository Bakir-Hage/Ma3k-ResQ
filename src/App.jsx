import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { LocationContext } from "./config/LocationContext";
import { getUserLocation } from "./config/GoogleMapLogic";

function App() {
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchLocation() {
      try {
        const pos = await getUserLocation(); // { lat, lng }

        if (!cancelled) {
          setLocation(pos);
        }
      } catch (err) {
        if (!cancelled) {
          setLocationError(err?.message || "Location error");
        }
      }
    }

    fetchLocation();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <LocationContext.Provider value={{ location, error: locationError }}>
      <div className="appShell">
        <NavBar />
        <div className="appContent">
          <Outlet />
        </div>
        <Footer />
      </div>
    </LocationContext.Provider>
  );
}

export default App;
