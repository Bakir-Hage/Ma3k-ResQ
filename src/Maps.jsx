import { APIProvider, Map } from "@vis.gl/react-google-maps";
import PioMarkers from "./PoiMarkers";

class Poi {
  constructor(key, location) {
    this.key = key;
    this.location = location;
  }
}

const key = import.meta.env.VITE_GOOGLE_MAPS_API;

const location = new Poi("كراج علي قاسم", { lat: 32.721274, lng: 35.314566 });
const location2 = new Poi("كراج ابو صخر", { lat: 32.7218, lng: 35.3145 });

export default function Maps() {
  return (
    <APIProvider
      apiKey={key}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <Map
        style={{ minWidth: "500px", width: "100%", height: "500px" }}
        defaultZoom={13}
        defaultCenter={{ lat: 32.721274, lng: 35.314566 }}
        mapId="5b35e6f259822ef481376d47"
        onCameraChanged={(ev) =>
          console.log(
            "camera changed:",
            ev.detail.center,
            "zoom:",
            ev.detail.zoom,
          )
        }
      >
        <PioMarkers locations={[location, location2]} />
      </Map>
    </APIProvider>
  );
}
