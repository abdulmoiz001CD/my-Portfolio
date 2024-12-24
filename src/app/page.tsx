// import FeaturedScroll from './Hook/FeaturedScroll';
import Hero from './components/HeroSection/Hero';
import Service from './components/Service/Service';
// import ThemeUses from './components/Theme/ThemeUses';
import About from '@/app/components/About/About';
import LatestProject from './components/Works/LatestProject';

export default function Home() {
  return (
    <>
   
   <Hero/>
   <About/>
    <Service/>
   <LatestProject/>
    </>
   
  );
}
