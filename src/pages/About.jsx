import AboutHero from "../components/about/AboutHero";
import AboutHistory from "../components/about/AboutHistory";
import AboutMission from "../components/about/AboutMission";
import AboutStats from "../components/about/AboutStats";
import AboutTeam from "../components/about/AboutTeam";
import AboutCTA from "../components/about/AboutCTA";

import PageTransition from "../components/layout/PageTransition";

function About() {
  return (
    <PageTransition>
      <AboutHero />

      <AboutHistory />

      <AboutMission />

      <AboutStats />

      <AboutTeam />

      <AboutCTA />
    </PageTransition>
  );
}

export default About;