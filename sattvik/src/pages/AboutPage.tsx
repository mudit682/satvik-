// You can delete the 'import React' line. It's not needed.

// We don't need Navbar or Footer here, they are probably in App.tsx
// import Navbar from '../components/Navbar'; 
// import Footer from '../components/Footer'; 

import Vision from '../components/Vision';
import WhatWeDo from '../components/WhatWeDo'; 
import About from '../components/About'; 
import Philosophy from '../components/Philosophy';
import CallToAction from '../components/CallToAction'; // <-- 1. IMPORTED CALLTOACTION

export default function AboutPage() {
  return (
    // We only need a Fragment or a <div> here, not the full layout
    <> 
      <About />
      <WhatWeDo /> 
      <Vision />
      <Philosophy />
      <CallToAction /> {/* <-- 2. ADDED CALLTOACTION COMPONENT */}
    </>
  );
}