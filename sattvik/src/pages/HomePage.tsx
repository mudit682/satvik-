import Hero from '../components/Hero';
import About from '../components/About';
import Philosophy from '../components/Philosophy';
import Menu from '../components/Menu';
// import WhyChoose from '../components/WhyChoose'; // <-- 1. REMOVED IMPORT
import Vision from '../components/Vision';
import Testimonials from '../components/Testimonials';
import Sustainability from '../components/Sustainability';
import CallToAction from '../components/CallToAction';
import WhatWeDo from '../components/WhatWeDo'; 

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhatWeDo /> 
      <Vision />
      <Philosophy />
      <Menu />
      <Testimonials />
      {/* <WhyChoose /> */} {/* <-- 2. REMOVED COMPONENT */}
      <CallToAction />
    </>
  );
}