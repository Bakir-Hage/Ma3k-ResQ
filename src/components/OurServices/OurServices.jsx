import "./OurServices.css";
import { CiSearch } from "react-icons/ci";
import { GoZap } from "react-icons/go";
import { SlWrench } from "react-icons/sl";
import ServiceCard from "../ServiceCard/ServiceCard";

export default function OurServices() {
  const services = [
    {
      icon: SlWrench,
      title: "General Maintenance",
      desc: "Complete inspection and periodic maintenance",
      image:
        "https://images.unsplash.com/photo-1637640125496-31852f042a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtZWNoYW5pYyUyMGdhcmFnZSUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MDcxMjk3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "bg-blue-600",
      type: "maintenance",
    },
    {
      icon: GoZap,
      title: "Auto Electrical",
      desc: "Repair all electrical and electronics issues",
      image:
        "https://images.unsplash.com/photo-1673337188103-c196140adebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBiYXR0ZXJ5JTIwYXV0b21vdGl2ZXxlbnwxfHx8fDE3NzA3NTYzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "bg-amber-500",
      type: "electrical",
    },
    {
      icon: CiSearch,
      title: "Diagnostic Check",
      desc: "Detect faults with latest equipment",
      image:
        "https://images.unsplash.com/photo-1764015805414-df7de89d405b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB0aXJlJTIwc2VydmljZXxlbnwxfHx8fDE3NzA3NTYzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "bg-emerald-600",
      type: "diagnostic",
    },
  ];
  return (
    <>
      <section className="services-section">
        <div className="services-container">
          <h2 className="services-heading">Our Services</h2>

          <div className="services-grid">
            <ServiceCard services={services} />
          </div>
        </div>
      </section>
    </>
  );
}
