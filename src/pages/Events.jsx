import PageTransition from "../components/layout/PageTransition";

import EventHero from "../components/events/EventHero";
import FeaturedEvents from "../components/events/FeaturedEvents";
import EventStats from "../components/events/EventStats";
import EventTimeline from "../components/events/EventTimeline";
import EventCalendar from "../components/events/EventCalendar";
import EventGallery from "../components/events/EventGallery";
import EventCTA from "../components/events/EventCTA";

function Events() {
  return (
    <PageTransition>

      <EventHero />

      <FeaturedEvents />

      <EventStats />

      <EventTimeline />

      <EventCalendar />

      <EventGallery />

      <EventCTA />

    </PageTransition>
  );
}

export default Events;