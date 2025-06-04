import React from 'react';
import Hero from '../components/home/Hero';
import FeatureHighlights from '../components/home/FeatureHighlights';
import Testimonials from '../components/home/Testimonials';
import EventsPreview from '../components/home/EventsPreview';
import QuickLinks from '../components/home/QuickLinks';
import AdmissionCta from '../components/home/AdmissionCta';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeatureHighlights />
      <QuickLinks />
      <Testimonials />
      <EventsPreview />
      <AdmissionCta />
    </>
  );
};

export default HomePage;