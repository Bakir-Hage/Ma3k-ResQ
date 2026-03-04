import GaragePartsHeader from "../components/GaragePartsHeader/GaragePartsHeader";
import ImplementEmergencyHelpSection from "../components/ImplementEmergencyHelpSection/ImplementEmergencyHelpSection";
import OurServices from "../components/OurServices/OurServices";
import ServiceBanner from "../components/ServiceBanner/ServiceBanner";

function GarageParts() {
  return (
    <>
      <GaragePartsHeader />
      <ServiceBanner />
      <OurServices />
      <ImplementEmergencyHelpSection />
    </>
  );
}
export default GarageParts;
