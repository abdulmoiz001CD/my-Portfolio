import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { ReactElement } from "react";
import Link from "next/link";

interface IconType {
    path: string;
    name: ReactElement;
}

const icon: IconType[] = [
    {
        path: "/",
        name: <FaLinkedinIn />,
    },
    {
        path: "/",
        name: <FaGithub />,
    },
    {
        path: "/",
        name: <MdEmail />,
    },
    {
        path: "/",
        name: <FaPhoneAlt />,
    },
];

interface SocialProps {
    contClass: string;
    stylClass: string;
}

const Social: React.FC<SocialProps> = ({ contClass, stylClass }) => {
    return (
        <div className={`${contClass}`}>
            {icon.map((value, index) => (
                <Link key={index}
                    href={value.path} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={stylClass}>
                    {value.name}
                </Link>
            ))}
        </div>
    );
};

export default Social;
