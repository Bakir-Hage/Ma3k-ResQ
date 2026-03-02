import "./WhyChooseUs.css";
import FeatureCard from "./FeatureCard";
import {Clock, Wrench, MapPin} from "lucide-react";  // Importing icons from lucide-react


export default function WhyChooseUs() {
    return (
        <section className="why">
            <div className="why__container">
                <h3 className="why__title">
                    Why Choose Ma3k ResQ?
                    </h3>
                <div className="why__grid">
                  <FeatureCard
                  title="Fast Response"
                  description="We reach you as quickly as possible"
                  icon={<Clock size={28} />}
                  iconclass="icon-yellow"
                  />
                  <FeatureCard
                  title="Professional Technicians"
                  description="Team of trained experts"
                  icon={<Wrench size={28} />}
                  iconclass="icon-blue"
                  />
                  <FeatureCard
                  title="Wide Coverage"
                  description="Service throughout the city"
                  icon={<MapPin size={28} />}
                  iconclass="icon-green"
            
                  />
                  
                </div>
            </div>
        </section>
    );
} 