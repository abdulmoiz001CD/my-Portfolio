import React from 'react'
import { Button, ButtonProps } from '@/components/ui/button'
import Swipe from './Swipe'
import  Card  from '@/app/components/Works/Card'
import Image from 'next/image'




const LatestProject = () => {
  return (
     <>  
     <section className='flex flex-col gap-14 lg:gap-0 justify-between lg:flex-row px-6  mx-auto lg:mt-[10rem] xl:mt-[0rem] py-12'>
        <div className='leftSideContainer flex flex-col justify-center space-y-6  lg:w-[500px] w-full pl-6'>
         <div className='flex gap-4'>
         <Image src='/images/circle.svg' alt='circle' width={20} height={20}/>
         <h1 className='text-3xl md:text-4xl font-bold  leading-tight  text-gray-800 dark:text-gray-100'>
           Latest Projects
          </h1>
         </div>
          <p className='line-clamp-3  lg:w-[80%]  text-sm md:text-base leading-relaxed  text-gray-600 dark:text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, dolorum? 
            Facilis doloremque voluptatum quisquam eveniet in saepe, excepturi aliquid 
            debitis perferendis ipsa eius tempore et reiciendis fugit enim fuga numquam?
          </p>
          
          <Button 
            variant='outline' 
            className='w-fit text-xs md:text-sm px-6 py-2.5  bg-orange-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold border-none transition-colors duration-300 rounded-lg'
          >
            View All Projects
          </Button>

         
        </div>

        <div className='w-full lg:max-w-[600px] xl:max-w-[900px]  mx-auto  md:mx-0 pl-6 overflow-hidden  bg-white dark:bg-gray-700 shadow-lg rounded-lg'>
        
<Swipe/>


        </div>
      </section>
    </>




  )
}

export default LatestProject
