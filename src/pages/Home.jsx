import PageTransition from "../components/layout/PageTransition";

import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import Mission from "../components/sections/Mission";
import ProgramsSection from "../components/sections/ProgramsSection";

function Home() {
  return (
    <PageTransition>

      <Hero />

      <Stats />

      <Mission />

      <ProgramsSection />

    </PageTransition>
  );
}

export default Home;