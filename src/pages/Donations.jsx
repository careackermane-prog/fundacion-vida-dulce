import PageTransition from "../components/layout/PageTransition";

import DonationHero from "../components/donations/DonationHero";
import DonationCauses from "../components/donations/DonationCauses";
import DonationMethods from "../components/donations/DonationMethods";
import DonationImpact from "../components/donations/DonationImpact";
import DonationForm from "../components/donations/DonationForm";
import DonationFaq from "../components/donations/DonationFaq";
import DonationCTA from "../components/donations/DonationCTA";

function Donations() {
  return (
    <PageTransition>

      <DonationHero />

      <DonationCauses />

      <DonationMethods />

      <DonationImpact />

      <DonationForm />

      <DonationFaq />

      <DonationCTA />

    </PageTransition>
  );
}

export default Donations;