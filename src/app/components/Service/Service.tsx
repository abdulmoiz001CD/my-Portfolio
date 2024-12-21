// import React from 'react';
// import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// const serviceTile = [
//   {
//     icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
//     title: 'Fronted Developer',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit mollitia vero neque ab odio quod. Temporibus odit quis laborum laboriosam architecto maxime facere corrupti cum optio itaque aperiam, ea in.',
//   },
//   {
//     icon: <Blocks size={72} strokeWidth={0.8} />,
//     title: 'UI & UX Designer',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit mollitia vero neque ab odio quod. Temporibus odit quis laborum laboriosam architecto maxime facere corrupti cum optio itaque aperiam, ea in.',
//   },
//   {
//     icon: <Gem size={72} strokeWidth={0.8} />,
//     title: 'Web Developer',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit mollitia vero neque ab odio quod. Temporibus odit quis laborum laboriosam architecto maxime facere corrupti cum optio itaque aperiam, ea in.',
//   },
// ];

// const Service = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-10">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h1>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//         {serviceTile.map((value, index) => (
//           <Card
//             key={index}
//             className="h-[270px] rounded-lg border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 my-7"
//           >
//             <CardHeader className="flex flex-col items-center text-center py-6">
//               <div className="text-pink-600 absolute md:top-[1990px] lg:top-[1560px] 4xl:top-[1720px] px-[15px] bg-white">{value.icon}</div>
//             </CardHeader>
//             <CardContent className="p-6">
//               <CardTitle className="text-xl text-center font-semibold text-gray-800 mb-2">{value.title}</CardTitle>
//               <CardDescription className="text-gray-600 text-center line-clamp-3">{value.description}</CardDescription>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Service;








import React from 'react';
import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const serviceTile = [


    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Fronted Developer',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit mollitia vero neque ab odio quod. Temporibus odit quis laborum laboriosam architecto maxime facere corrupti cum optio itaque aperiam, ea in.',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'UI & UX Designer',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit mollitia vero neque ab odio quod. Temporibus odit quis laborum laboriosam architecto maxime facere corrupti cum optio itaque aperiam, ea in.',
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Web Developer',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit mollitia vero neque ab odio quod. Temporibus odit quis laborum laboriosam architecto maxime facere corrupti cum optio itaque aperiam, ea in.',
    },
];

const Service = () => {
    return (
        <div className="min-h-screen  py-10">
            <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {serviceTile.map((value, index) => (
                    <Card
                        key={index}
                        className="h-[259px] rounded-lg border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 mt-12" // Added mt-12 for icon space
                    >
                        <CardHeader className="flex flex-col items-center text-center py-6 relative">
                            <div className="text-pink-600 absolute -top-10 left-1/2 transform -translate-x-1/2  px-4">
                                {value.icon}
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <CardTitle className="text-xl text-center font-semibold text-gray-800 mb-2">
                                {value.title}
                            </CardTitle>
                            <CardDescription className="text-gray-600 text-center line-clamp-3">
                                {value.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Service;
