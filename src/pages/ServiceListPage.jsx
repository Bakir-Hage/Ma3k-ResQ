import "./ServiceListPage.css";
import ServiceDetailsCard from "../components/ServiceDetailsCard/ServiceDetailsCard";

const ServiceListPage = ({ categoryTitle, services }) => {
  return (
    <section className="serviceList" aria-label={categoryTitle}>
      <div className="serviceList__container">
        <header className="serviceList__header">
          <h1 className="serviceList__title">{categoryTitle}</h1>
          <p className="serviceList__subtitle">
            Found {services?.length || 0} services near you
          </p>
        </header>

        <div className="serviceList__list">
          {services?.map((service, index) => (
            <ServiceDetailsCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceListPage;