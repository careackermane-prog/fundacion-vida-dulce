import PageTransition from "../components/layout/PageTransition";

import HelpHero from "../components/help/HelpHero";
import HelpWays from "../components/help/HelpWays";
import HelpProcess from "../components/help/HelpProcess";
import HelpImpact from "../components/help/HelpImpact";
import DonationCards from "../components/help/DonationCards";
import VolunteerSection from "../components/help/VolunteerSection";
import HelpFaq from "../components/help/HelpFaq";
import HelpCTA from "../components/help/HelpCTA";

function Help() {
  return (
    <PageTransition>

      <HelpHero />

      <HelpWays />

      <HelpProcess />

      <HelpImpact />

      <DonationCards />

      <VolunteerSection />

      <HelpFaq />

      <HelpCTA />

    </PageTransition>
  );
}

export default Help;