import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StarterLibrary from '@/components/StarterLibrary';
import Pain from '@/components/Pain';
import WorkshopAgenda from '@/components/WorkshopAgenda';
import MidCTA from '@/components/MidCTA';
import CounterPositioning from '@/components/CounterPositioning';
import Audience from '@/components/Audience';
import Testimonials from '@/components/Testimonials';
import Timeline from '@/components/Timeline';
import Bio from '@/components/Bio';
import FAQ from '@/components/FAQ';
import ClosingCTA from '@/components/ClosingCTA';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StarterLibrary />
        <Pain />
        <WorkshopAgenda />
        <MidCTA />
        <CounterPositioning />
        <Audience />
        <Testimonials />
        <Timeline />
        <Bio />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
