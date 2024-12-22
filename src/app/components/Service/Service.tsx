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
        <div className="Card min-h-screen  py-10">
            <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {serviceTile.map((value, index) => (
                    <Card
                        key={index}
                        className="h-[259px] rounded-lg border border-graynpm run dev-100 bg-white dark:bg-[#000000] hover:shadow-xl dark:shadow-white-100 transition-all duration-300 mt-12" // Added mt-12 for icon space
                    >
                        <CardHeader className="flex flex-col items-center text-center py-6 relative">
                            <div className="text-pink-600 dark:text-[#e14040] absolute -top-10 left-1/2 transform -translate-x-1/2  px-4">
                                {value.icon}
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <CardTitle className="text-xl text-center font-semibold text-gray-800 dark:text-[white] mb-2">
                                {value.title}
                            </CardTitle>
                            <CardDescription className="text-gray-600 dark:text-[white] text-center line-clamp-3">
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
