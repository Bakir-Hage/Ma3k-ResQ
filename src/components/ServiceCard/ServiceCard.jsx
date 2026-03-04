import { useContext, useEffect, useState } from "react";
import { FiPhone, FiMapPin, FiStar, FiNavigation, FiMap } from "react-icons/fi";
import "./ServiceCard.css";
import { LocationContext } from "../../config/LocationContext";
import { calculateRouteDistance } from "../../config/GoogleMapLogic";

export default function ServiceCard({ services }) {
  const { location } = useContext(LocationContext); // { lat, lng } or null
  const [sortedServices, setSortedServices] = useState(services);
  const [showPhone, setShowPhone] = useState(null);

  const handleShowPhone = (id) => {
    setShowPhone((prev) => (prev === id ? null : id));
  };

  const openInMaps = (service) => {
    const latitude = service.location?.latitude;
    const longitude = service.location?.longitude;

    if (latitude == null || longitude == null) return;

    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    // Don’t run until we know the user location and have services
    if (!location || !services?.length) return;

    let cancelled = false;

    async function computeDistances() {
      try {
        // For each service, compute distance from user
        const withDistances = await Promise.all(
          services.map(async (service) => {
            const origin = { lat: location.lat, lng: location.lng };
            const destination = {
              lat: service.location?.latitude,
              lng: service.location?.longitude,
            };

            // You might want a try/catch here per service to avoid
            // one failure breaking all of them.
            const route = await calculateRouteDistance(origin, destination);

            return {
              ...service,
              distanceMeters: route.distanceMeters,
            };
          }),
        );

        if (!cancelled) {
          const sorted = withDistances
            .slice()
            .sort(
              (a, b) =>
                (a.distanceMeters ?? Infinity) - (b.distanceMeters ?? Infinity),
            );
          setSortedServices(sorted);
        }
      } catch (e) {
        if (!cancelled) {
          // handle/log error if you want
          setSortedServices(services); // fallback: unsorted
        }
      }
    }

    computeDistances();

    return () => {
      cancelled = true;
    };
  }, [location, services]);
  console.log("distance-sorted services", sortedServices);

  // Fallback: if we haven’t computed yet, just show original order
  const listToRender = sortedServices ?? services;

  return listToRender.map((service) => (
    <div key={service.id} className="horizontal-card">
      <div className="card-body">
        <div className="info-section">
          <h3 className="service-name">{service.serviceName}</h3>
          <div className="meta-data">
            <span className="distance">
              <FiNavigation />{" "}
              {service.distanceMeters
                ? (service.distanceMeters / 1000).toFixed(1) + " km"
                : "–"}
            </span>
          </div>

          <div className="provider-actions">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleShowPhone(service.id);
              }}
              className="call-button"
            >
              <FiPhone className="icon" />
              {showPhone === service.id ? (
                <a
                  href={`tel:${service.phone || ""}`}
                  className="phone-number"
                  onClick={(e) => e.stopPropagation()}
                >
                  {service.phone || "No phone"}
                </a>
              ) : (
                <span>Call Now</span>
              )}
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openInMaps(service);
              }}
              className="map-button"
            >
              <FiMap className="icon" />
              <span>Open Map</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
}
