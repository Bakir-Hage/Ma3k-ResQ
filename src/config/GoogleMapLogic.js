const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API;

//----------------------------------//
// function to get user's current location using Geolocation API
//-----------------------------------//
export async function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        reject(error.message);
      },
    );
  });
}

//-----------------------------------//
// function to calculate distance between two points using Haversine formula
//-----------------------------------//
export async function calculateRouteDistance(origin, destination) {
  const response = await fetch(
    "https://routes.googleapis.com/directions/v2:computeRoutes",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "routes.distanceMeters,routes.duration,routes.legs",
      },
      body: JSON.stringify({
        origin: {
          location: {
            latLng: {
              latitude: origin.lat,
              longitude: origin.lng,
            },
          },
        },
        destination: {
          location: {
            latLng: {
              latitude: destination.lat,
              longitude: destination.lng,
            },
          },
        },
        travelMode: "DRIVE",
        routingPreference: "TRAFFIC_AWARE",
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch route");
  }

  const data = await response.json();

  if (!data.routes || data.routes.length === 0) {
    throw new Error("No route found");
  }

  return {
    distanceMeters: data.routes[0].distanceMeters,
    duration: data.routes[0].duration,
  };
}
