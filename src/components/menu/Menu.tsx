import React from 'react';
import { MenuList } from '@/lib/type';
import Link from 'next/link';
import { role } from '@/lib/data';
import {
    Home, GraduationCap, BookOpen, Users, LayoutGrid,
    BookMarked, CalendarDays, ClipboardList, BarChart3,
    Megaphone, MessageSquare, Settings, LogOut, User,
    FileText, Timer
} from 'lucide-react';

const menuItems: MenuList[] = [
    {
        title: "OVERVIEW",
        items: [
            {
                label: "Dashboard",
                href: "/admin",
                icon: <Home size={18} />,
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
    {
        title: "MANAGEMENT",
        items: [
            {
                label: "Teachers",
                href: "/teacher",
                icon: <BookOpen size={18} />,
                visible: ["admin", "teacher"],
            },
            {
                label: "Students",
                href: "/student",
                icon: <GraduationCap size={18} />,
                visible: ["admin", "teacher"],
            },
            {
                label: "Parents",
                href: "/parent",
                icon: <Users size={18} />,
                visible: ["admin", "teacher"],
            },
            {
                label: "Classes",
                href: "/class",
                icon: <LayoutGrid size={18} />,
                visible: ["admin", "teacher"],
            },
            {
                label: "Subjects",
                href: "/subject",
                icon: <BookMarked size={18} />,
                visible: ["admin"],
            },
            {
                label: "Lessons",
                href: "/lesson",
                icon: <Timer size={18} />,
                visible: ["admin", "teacher"],
            },
        ],
    },
    {
        title: "ACADEMIC",
        items: [
            {
                label: "Exams",
                href: "/exam",
                icon: <FileText size={18} />,
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                label: "Assignments",
                href: "/assignment",
                icon: <ClipboardList size={18} />,
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                label: "Results",
                href: "/result",
                icon: <BarChart3 size={18} />,
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                label: "Attendance",
                href: "/attendance",
                icon: <CalendarDays size={18} />,
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                label: "Events",
                href: "/event",
                icon: <CalendarDays size={18} />,
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                label: "Announcements",
                href: "/announcement",
                icon: <Megaphone size={18} />,
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
    {
        title: "ACCOUNT",
        items: [
            {
                label: "Profile",
                href: "/profile",
                icon: <User size={18} />,
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                label: "Messages",
                href: "/messages",
                icon: <MessageSquare size={18} />,
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                label: "Settings",
                href: "/settings",
                icon: <Settings size={18} />,
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                label: "Logout",
                href: "/logout",
                icon: <LogOut size={18} />,
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
];

const Menu = () => {
    return (
        <nav className="mt-6 px-2">
            {menuItems.map((section) => (
                <div key={section.title} className="mb-6">
                    <p className="hidden lg:block text-[10px] font-semibold text-gray-400 tracking-widest uppercase px-3 mb-2">
                        {section.title}
                    </p>
                    <div className="flex flex-col gap-0.5">
                        {section.items.map((item) => {
                            if (!item.visible.includes(role)) return null;
                            return (
                                <Link
                                    href={item.href}
                                    key={item.label}
                                    className="flex items-center justify-center lg:justify-start gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-lamaSkyLight hover:text-sky-700 font-medium text-sm transition-all group"
                                >
                                    <span className="text-gray-400 group-hover:text-sky-600 transition-colors shrink-0">
                                        {item.icon}
                                    </span>
                                    <span className="hidden lg:block">{item.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            ))}
        </nav>
    );
};

export default Menu;
