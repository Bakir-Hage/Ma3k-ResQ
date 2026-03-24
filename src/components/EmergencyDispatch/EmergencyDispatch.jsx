import EmergencyButton from "../EmergencyButton/EmergencyButton";
import "./EmergencyDispatch.css";
import { LuTimer, LuTruck, LuWrench } from "react-icons/lu";

export default function EmergencyDispatch() {
  const emergencyServices = [
    {
      icon: LuTruck,
      title: "Tow Truck",
      color: "service-amber",
      type: "tow-truck",
    },
    {
      icon: LuWrench,
      title: "Nearby Garage",
      color: "service-blue",
      type: "garage",
    },
    {
      icon: LuTimer,
      title: "Mobile Tire Service",
      color: "service-emerald",
      type: "tire-service",
    },
  ];
  return (
    <section className="heroSection" aria-label="Emergency dispatch">
      <div className="hero-background">
        <img
          src="src/assets/Truck.jpg"
          //`src="src/assets/Truck.jpg"` is not the ideal way to use local assets in Vite. Import the image instead.
          alt="Roadside Assistance"
          className="hero-background-image"
        />
        <div className="hero-background-overlay"></div>
      </div>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Car breakdown?
            <br />
            <span className="hero-highlight">Ma3k ResQ – We're here</span>
          </h1>

          <p className="hero-description">
            Fast and reliable roadside assistance available 24/7
          </p>
        </div>
        <EmergencyButton emergencyServices={emergencyServices} />
      </div>
    </section>
  );
}
