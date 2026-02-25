import { useParams } from "react-router-dom";
import { getServicesByType } from "../../config/firestoreLogic";
import { useEffect, useState } from "react";

export default function ServiceDetails() {
  const { serviceType } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await getServicesByType(serviceType);
      if (response.success) {
        setServices(response.services);
      }
    };

    fetchServices();
  }, [serviceType]);

  return (
    <>
      {services.map((service) => {
        return (
          <div key={service.id}>
            <h2>{service.serviceName}</h2>
            <p>Type: {service.serviceType}</p>
            <p>Status: {service.isOpen ? "Open" : "Closed"}</p>
          </div>
        );
      })}
    </>
  );
}
