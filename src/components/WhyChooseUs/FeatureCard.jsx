

export default function FeatureCard({ title, description, icon, iconclass, highlight }) {
  return (
    <div className="why__card">
     
        <div className={`why__icon ${iconclass}`}>{icon}</div>
       
      <h3>{title}</h3>
    <p>
        {highlight ? (
        <span className="highlight">{description}</span>
        ) : (
        description
        )}
    </p>
    </div>
  );
}