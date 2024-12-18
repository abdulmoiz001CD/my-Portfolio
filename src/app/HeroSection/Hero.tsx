import Image from 'next/image';
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import Social from '../components/Social';


const HeroSection = () => {
  return (
    <section className="min-h-screen  flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 md:py-24 max-w-7xl mx-auto">
      {/* Content Div */}
      <div className="flex-1 text-center md:text-left space-y-6 mt-8 md:mt-0">
        <h2 className="text-sm md:text-base text-orange-600 font-semibold tracking-[1px] uppercase">
          Frontend Developer
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Building Digital Experiences
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          Transforming ideas into elegant, responsive, and user-friendly web applications. 
          Specialized in modern web technologies and best practices.
        </p>
        
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start">
  <Link 
    href="/contact" 
    className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex justify-center items-center gap-2 text-center"
  >
    Contact me <FaLocationArrow />
  </Link>
  <Link 
    href="/projects" 
    className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors inline-flex justify-center items-center gap-2 text-center"
  >
    Download CV <FiDownload />
  </Link>




</div>

<Social 
  contClass="flex items-center justify-center md:justify-start gap-7 md:gap-14 pt-5"
  stylClass="text-[22px] md:text-[25px]  hover:text-orange-600 transition-transform transform hover:scale-110"
/>


      </div>



      {/* Image Div */}
      <div className="flex-1 flex justify-center items-center">
  <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-lg">
    <Image
      src="/images/img.jpeg"
      alt="Hero Image"
      fill
      className="object-contain"
      priority
      sizes="(max-width: 768px) 280px, (max-width: 1200px) 400px, 400px"
    />
  </div>
</div>

     


    </section>
   
  );
};

export default HeroSection;
