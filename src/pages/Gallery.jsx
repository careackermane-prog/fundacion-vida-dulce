import PageTransition from "../components/layout/PageTransition";

import GalleryHero from "../components/gallery/GalleryHero";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryCTA from "../components/gallery/GalleryCTA";

function Gallery() {
  return (
    <PageTransition>

      <GalleryHero />

      <GalleryGrid />

      <GalleryCTA />

    </PageTransition>
  );
}

export default Gallery;