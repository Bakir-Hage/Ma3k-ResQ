import { useParams } from "react-router-dom";
import { getServicesByType } from "../../config/firestoreLogic";
import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

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
      <ServiceCard services={services} />
    </>
  );
}
