import {
  APIProvider,
  Map,
} from "@vis.gl/react-google-maps";
import PioMarkers from "./PoiMarkers";

class Poi { 
  constructor(key, location){
    this.key= key;
    this.location = location;
  }
 }

 const key = "AIzaSyB2HuCcYndLpsfINk4ExYaesv0Ts2yUvf4";

 const location = new Poi("كراج علي قاسم", { lat: 32.721274, lng: 35.314566 });

export default function Maps(){
  return (
    <APIProvider
      apiKey={key}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <Map
        style={{ width: "200%", height: "500px" }}
        defaultZoom={13}
        defaultCenter={{ lat:32.721274, lng:35.314566 }}
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
        <PioMarkers locations={[location]} />
      </Map>
    </APIProvider>
  );
}