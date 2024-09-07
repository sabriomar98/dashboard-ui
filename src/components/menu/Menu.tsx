import React from 'react';
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { ImProfile } from "react-icons/im";
// import { TfiAnnouncement } from "react-icons/tfi";
// import { MdCoPresent } from "react-icons/md";
// import { BsEnvelopePaperFill } from "react-icons/bs";
// import { MdAssignment } from "react-icons/md";
// import { PiExam } from "react-icons/pi";
// import { MdSubject } from "react-icons/md";
import { MenuList } from '@/lib/type';
import Link from 'next/link';
import { BiHome, BiLogOut } from 'react-icons/bi';
// import { FiMessageCircle } from 'react-icons/fi';
import { CiSettings } from 'react-icons/ci';
import { role } from '@/lib/data';



const menuItems: MenuList[] = [
    {
        title: "Menu",
        items: [
            {
                label: "Home",
                href: "/",
                icon: <BiHome size={20} />,
                visible: ["admin", "teacher", "student", "parent"]

            },
            {
                label: "Teachers",
                href: "/teacher",
                icon: <GiTeacher size={20} />,
                visible: ["admin", "teacher"],

            },
            {
                label: "Students",
                href: "/student",
                icon: <PiStudentBold size={20} />,
                visible: ["admin", "teacher"],

            },
            {
                label: "Parents",
                href: "/parent",
                icon: <RiParentFill size={20} />,
                visible: ["admin", "teacher"],

            },
            {
                label: "Classes",
                href: "/class",
                icon: <SiGoogleclassroom size={20} />,
                visible: ["admin", "teacher"],

            },
            // {
            //     label: "Subjects", href: "/list/subjects", icon: <MdSubject size={20} />,
            // },
            // {
            //     label: "Lessons", href: "/list/lessons", icon: <BiBookOpen size={20} />,
            // },
            // {
            //     label: "Exams", href: "/list/exams", icon: <PiExam size={20} />,
            // },
            // {
            //     label: "Assignments", href: "/list/assignments", icon: <MdAssignment size={20} />,
            // },
            // {
            //     label: "Results", href: "/list/results", icon: <BsEnvelopePaperFill size={20} />,
            // },
            // {
            //     label: "Attendance", href: "/list/attendance", icon: <MdCoPresent size={20} />,
            // },
            // {
            //     label: "Events", href: "/list/events", icon: <BiCalendar size={20} />,
            // },
            // {
            //     label: "Messages", href: "/list/messages", icon: <FiMessageCircle size={20} />,
            // },
            // {
            //     label: "Announcements", href: "/list/announcements", icon: <TfiAnnouncement size={20} />,
            // },
        ]
    },
    {
        title: "OTHER",
        items: [
            {
                label: "Profile",
                href: "/profile",
                icon: <ImProfile size={20} />,
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                label: "Settings",
                href: "/settings",
                icon: <CiSettings size={20} />,
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                label: "Logout",
                href: "/logout",
                icon: <BiLogOut size={20} />,
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
]

const Menu = () => {
    return (
        <div className="mt-4 text-sm">
            {menuItems.map((i) => (
                <div className="flex flex-col gap-2" key={i.title}>
                    <span className="hidden lg:block text-gray-400 font-light my-4">
                        {i.title}
                    </span>
                    {i.items.map((item) => {
                        if (item.visible.includes(role)) {
                            return (
                                <Link
                                    href={item.href}
                                    key={item.label}
                                    className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                                >
                                    {item.icon}
                                    <span className="hidden lg:block">{item.label}</span>
                                </Link>
                            );
                        }
                    })}
                </div>
            ))}
        </div>
    )
}

export default Menu
