export default function ServiceCard({ services }) {
  return (
    <div>
      {services.map((service) => (
        <div key={service.title}>{service.title}</div>
      ))}
    </div>
  );
}
