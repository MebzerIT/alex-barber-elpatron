import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import WlcomeSection from '../WlcomeSection';
import ServiceMenuList from '../ServiceMenuList';




function Home() {
    return (
      <>
        <HeroSection />
        <WlcomeSection/>
        <ServiceMenuList/>
      </>
    );
  }
  
  export default Home;