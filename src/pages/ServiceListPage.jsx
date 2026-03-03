import React from "react";
import ServiceDetailsCard from "../components/ServiceDetailsCard/ServiceDetailsCard";

const ServiceListPage = ({ categoryTitle, services }) => {
  return (
    <div style={{ padding: "40px 80px" }}>

      {/* Header */}
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "700" }}>
          {categoryTitle}
        </h1>
        <p style={{ color: "#666", marginTop: "8px" }}>
          Found {services?.length || 0} services near you
        </p>
      </div>

      {/* Cards Container */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {services?.map((service, index) => (
          <ServiceDetailsCard key={index} {...service} />
        ))}
      </div>

    </div>
  );
};

export default ServiceListPage;