import PageTransition from "../components/layout/PageTransition";

import ProgramHero from "../components/program/ProgramHero";
import ProgramCards from "../components/program/ProgramCards";
import ProgramProcess from "../components/program/ProgramProcess";
import ProgramImpact from "../components/program/ProgramImpact";
import ProgramCTA from "../components/program/ProgramCTA";
import ProgramGallery from "../components/program/ProgramGallery";


function Programs() {
  return (
    <PageTransition>

  <ProgramHero />

  <ProgramCards />

  <ProgramProcess />

  <ProgramImpact />

  <ProgramGallery />

  <ProgramCTA />

</PageTransition>
  );
}

export default Programs;