import UserCard from "@/components/ui/UserCard";
import CountChart from "@/components/charts/CountChart";
import AttendanceChart from "@/components/charts/AttendanceChart";
import FinanceChart from "@/components/charts/FinanceChart";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";
import {
    teachersData,
    studentsData,
    examsData,
    eventsData,
} from "@/lib/data";
import Image from "next/image";
import { BookOpen, GraduationCap, CalendarDays, ClipboardCheck } from "lucide-react";

export default function AdminPage() {
    return (
        <div className="p-6 flex gap-6 flex-col xl:flex-row">
            {/* ── LEFT COLUMN ── */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">

                {/* Stats Row */}
                <div className="flex gap-4 flex-wrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>

                {/* Charts Row */}
                <div className="flex gap-5 flex-col lg:flex-row">
                    {/* Donut */}
                    <div className="lg:w-[38%] h-[420px]">
                        <CountChart />
                    </div>
                    {/* Attendance */}
                    <div className="flex-1 h-[420px]">
                        <AttendanceChart />
                    </div>
                </div>

                {/* Finance */}
                <div className="h-[420px]">
                    <FinanceChart />
                </div>

                {/* Quick tables row */}
                <div className="flex gap-5 flex-col lg:flex-row">
                    {/* Recent teachers */}
                    <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-lamaYellowLight rounded-lg flex items-center justify-center">
                                    <BookOpen size={16} className="text-yellow-600" />
                                </div>
                                <h2 className="font-semibold text-gray-800">Recent Teachers</h2>
                            </div>
                            <button className="text-xs text-sky-600 hover:underline">View all</button>
                        </div>
                        <div className="flex flex-col gap-3">
                            {teachersData.slice(0, 5).map((t) => (
                                <div key={t.id} className="flex items-center gap-3 group">
                                    <Image
                                        src={t.photo}
                                        alt={t.name}
                                        width={36}
                                        height={36}
                                        className="rounded-full object-cover w-9 h-9 ring-2 ring-gray-100 group-hover:ring-sky-200 transition-all"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-800 truncate">{t.name}</p>
                                        <p className="text-xs text-gray-400 truncate">{t.subjects.join(", ")}</p>
                                    </div>
                                    <span className="text-xs text-gray-400 hidden sm:block">{t.classes[0]}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent students */}
                    <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-lamaSkyLight rounded-lg flex items-center justify-center">
                                    <GraduationCap size={16} className="text-sky-600" />
                                </div>
                                <h2 className="font-semibold text-gray-800">Recent Students</h2>
                            </div>
                            <button className="text-xs text-sky-600 hover:underline">View all</button>
                        </div>
                        <div className="flex flex-col gap-3">
                            {studentsData.slice(0, 5).map((s) => (
                                <div key={s.id} className="flex items-center gap-3 group">
                                    <Image
                                        src={s.photo}
                                        alt={s.name}
                                        width={36}
                                        height={36}
                                        className="rounded-full object-cover w-9 h-9 ring-2 ring-gray-100 group-hover:ring-sky-200 transition-all"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-800 truncate">{s.name}</p>
                                        <p className="text-xs text-gray-400">{s.email}</p>
                                    </div>
                                    <span className="text-xs bg-lamaSkyLight text-sky-700 px-2 py-0.5 rounded-full font-medium">
                                        Gr.{s.grade}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Upcoming exams */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-lamaPurpleLight rounded-lg flex items-center justify-center">
                                <ClipboardCheck size={16} className="text-violet-600" />
                            </div>
                            <h2 className="font-semibold text-gray-800">Upcoming Exams</h2>
                        </div>
                        <button className="text-xs text-sky-600 hover:underline">View all</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="text-left text-xs font-semibold text-gray-400 pb-3">Subject</th>
                                    <th className="text-left text-xs font-semibold text-gray-400 pb-3">Class</th>
                                    <th className="text-left text-xs font-semibold text-gray-400 pb-3">Teacher</th>
                                    <th className="text-left text-xs font-semibold text-gray-400 pb-3">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {examsData.slice(0, 6).map((e) => (
                                    <tr key={e.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                        <td className="py-3 font-medium text-gray-800">{e.subject}</td>
                                        <td className="py-3">
                                            <span className="bg-lamaSkyLight text-sky-700 text-xs px-2 py-0.5 rounded-full font-medium">
                                                {e.class}
                                            </span>
                                        </td>
                                        <td className="py-3 text-gray-500">{e.teacher}</td>
                                        <td className="py-3 text-gray-500">{e.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="xl:w-80 flex flex-col gap-6 shrink-0">
                {/* Quick stats */}
                <div className="bg-gradient-to-br from-violet-500 to-sky-500 rounded-2xl p-5 text-white shadow-sm">
                    <p className="text-sm font-medium opacity-80 mb-1">Academic Year</p>
                    <p className="text-2xl font-bold">2024 – 2025</p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        {[
                            { label: "Exams", value: examsData.length, icon: ClipboardCheck },
                            { label: "Events", value: eventsData.length, icon: CalendarDays },
                        ].map(({ label, value, icon: Icon }) => (
                            <div key={label} className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                                <Icon size={16} className="opacity-80 mb-1" />
                                <p className="text-xl font-bold">{value}</p>
                                <p className="text-xs opacity-70">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
}
