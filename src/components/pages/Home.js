import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import WlcomeSection from '../WlcomeSection';
import ServiceMenuList from '../ServiceMenuList';
import ImageSlider from '../ImageSlider';




function Home() {
    return (
      <>
        <HeroSection />
        <WlcomeSection/>
        <ServiceMenuList/>
        <ImageSlider/>
        
      </>
    );
  }
  
  export default Home;