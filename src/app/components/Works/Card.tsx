import React from 'react'
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle
} from '@/components/ui/card'


interface ProjectCardProps {
  title: string;
  descr: string;
  img: string;
}

// Rename the component to avoid naming conflict with the imported Card component
const ProjectCard: React.FC<ProjectCardProps> = ({ title, descr, img }) => {
  return (
    <>
    <Card className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  bg-white dark:bg-gray-800">
        <CardHeader className="p-0">
        
          <img
            src={img} 
            alt="Project"
            className="w-full lg:h-[9rem] xl:h-48 object-center hover:scale-105 transition-transform duration-300"
          />
        </CardHeader>

        <CardContent className="p-5 space-y-3">
          <CardTitle className="text-xl font-bold  text-gray-800 dark:text-gray-100">
           {title}
          </CardTitle>
          
          <CardDescription className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {descr}
          </CardDescription>

         
          <div className="flex flex-wrap gap-2 pt-2 ">
            <span className="px-2 py-1 text-xs font-medium rounded-full  bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              React
            </span>
            <span className="px-2 py-1 text-xs font-medium   bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full ">
              Tailwind
            </span>
            <span className="px-2 py-1 text-xs font-medium  bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
              TypeScript
            </span>
          </div>
        </CardContent>
      </Card> 
     

    </>
  )
}

export default ProjectCard
