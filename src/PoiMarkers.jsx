import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

export default function PioMarkers({locations}) {
  return (
    <>
      {locations.map((poi) => 
        <AdvancedMarker key={poi.key} position={poi.location} title={poi.key}>
          <Pin
            background={"cyan"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
        </AdvancedMarker>
      )}
    </>
  );
}
