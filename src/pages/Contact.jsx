import PageTransition from "../components/layout/PageTransition";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import ContactCTA from "../components/contact/ContactCTA";

function Contact() {
  return (
    <PageTransition>

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <ContactMap />

      <ContactCTA />

    </PageTransition>
  );
}

export default Contact;