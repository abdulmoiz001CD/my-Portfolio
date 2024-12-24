// import React from 'react'
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//   } from "@/components/ui/carousel"
// import Card from './Card'

  

// const Swipe = () => {
//   return (
//   <Carousel>
//   <CarouselContent>
//     <CarouselItem ><Card/></CarouselItem>
//     <CarouselItem ><Card/></CarouselItem>
//     <CarouselItem ><Card/></CarouselItem>
//   </CarouselContent>
// </Carousel>
//   )
// }

// export default Swipe





// import React from 'react'
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import Card from './Card'

// const Swipe = () => {
//   return (
//     <Carousel className=''>
//       <CarouselContent className="flex overflow-x-scroll gap-1">
//         <CarouselItem className="flex-shrink-0 basis-[33.33%]"><Card /></CarouselItem>
//         <CarouselItem className="flex-shrink-0 basis-[33.33%]"><Card /></CarouselItem>
//         <CarouselItem className="flex-shrink-0 basis-[33.33%]"><Card /></CarouselItem>
//         <CarouselItem className="flex-shrink-0 basis-[33.33%]"><Card /></CarouselItem>
//         <CarouselItem className="flex-shrink-0 basis-[33.33%]"><Card /></CarouselItem>
//         <CarouselItem className="flex-shrink-0 basis-[33.33%]"><Card /></CarouselItem>
//       </CarouselContent>
//     </Carousel>
//   )
// }

// export default Swipe






// import React from 'react'
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import Card from './Card'

// const Swipe = () => {
//   return (
//     <div className="w-full max-w-screen-xl mx-auto">
//       <Carousel className="relative overflow-hidden">
//         <CarouselContent className="-ml-4">
//           <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
//             <Card />
//           </CarouselItem>
//           <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
//             <Card />
//           </CarouselItem>
//           <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
//             <Card />
//           </CarouselItem>
//           <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
//             <Card />
//           </CarouselItem>
//           <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
//             <Card />
//           </CarouselItem>
//           <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
//             <Card />
//           </CarouselItem>
//         </CarouselContent>
//         <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
//         <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
//       </Carousel>
//     </div>
//   )
// }

// export default Swipe




import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Card from './Card'


const cardInfo =[
  {title:'Project Title', para:'Voluptates, quisquam. Nostrum expedita corporis an   ducimus exercitationem.', img:'/images/color.png'},
  {title:'Project Title', para:'Voluptates, quisquam. Nostrum expedita corporis an   ducimus exercitationem.', img:'/images/restaurent.png'},
  {title:'Project Title', para:'Voluptates, quisquam. Nostrum expedita corporis an   ducimus exercitationem.', img:'/images/shopify.png'},
  {title:'Project Title', para:'Voluptates, quisquam. Nostrum expedita corporis an   ducimus exercitationem.', img:'/images/password.jpeg'},
  {title:'Project Title', para:'Voluptates, quisquam. Nostrum expedita corporis an   ducimus exercitationem.', img:'/images/logo.webg'},
  {title:'Project Title', para:'Voluptates, quisquam. Nostrum expedita corporis an   ducimus exercitationem.', img:'/images/form.png'},

]



const Swipe = () => {
  return (    

<Carousel>
  <CarouselContent>
  <CarouselItem className= "md:basis-[300px]   lg:basis-[300px]"><Card title='Project Title' descr='Voluptates, quisquam. Nostrum expedita corporis an ducimus exercitationem' img='/images/color.jpeg'/></CarouselItem>
    <CarouselItem className="md:basis-[300px] lg:basis-[300px]"><Card title='Project Title' descr='Voluptates, quisquam. Nostrum expedita corporis an ducimus exercitationem' img='/images/restaurent.png'/></CarouselItem>
    <CarouselItem className="md:basis-[300px] lg:basis-[300px]"><Card title='Project Title' descr='Voluptates, quisquam. Nostrum expedita corporis an ducimus exercitationem' img='/images/shopify.png'/></CarouselItem>
    <CarouselItem className="md:basis-[300px] lg:basis-[300px]"><Card title='Project Title' descr='Voluptates, quisquam. Nostrum expedita corporis an ducimus exercitationem' img='/images/password.jpeg'/></CarouselItem>
    <CarouselItem className="md:basis-[300px] lg:basis-[300px]"><Card title='Project Title' descr='Voluptates, quisquam. Nostrum expedita corporis an ducimus exercitationem' img='/images/GithPic.png'/></CarouselItem>
    <CarouselItem className="md:basis-[300px] lg:basis-[300px]"><Card title='Project Title' descr='Voluptates, quisquam. Nostrum expedita corporis an ducimus exercitationem' img='/images/form.png'/></CarouselItem>
   
  </CarouselContent>


        
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
   
  )
}

export default Swipe
