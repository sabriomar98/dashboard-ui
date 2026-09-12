import Image from "next/image";
import { studentsData } from "@/lib/data";
import Pagination from "@/components/ui/Pagination";
import { Search, Plus, SlidersHorizontal, Eye, Pencil, Trash2 } from "lucide-react";

export default function StudentPage() {
    return (
        <div className="p-6 flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">Students</h1>
                    <p className="text-sm text-gray-400 mt-0.5">{studentsData.length} students enrolled</p>
                </div>
                <button className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-violet-500 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-sm">
                    <Plus size={16} />
                    Add Student
                </button>
            </div>

            {/* Stats chips */}
            <div className="flex gap-3 flex-wrap">
                {[
                    { label: "All Grades", value: studentsData.length, color: "bg-lamaSkyLight text-sky-700" },
                    { label: "Grade 5", value: studentsData.filter((s) => s.grade === 5).length, color: "bg-lamaYellowLight text-yellow-700" },
                    { label: "Class 1B", value: studentsData.filter((s) => s.class === "1B").length, color: "bg-lamaPurpleLight text-violet-700" },
                ].map(({ label, value, color }) => (
                    <div key={label} className={`${color} px-3 py-1.5 rounded-xl text-xs font-semibold`}>
                        {label}: {value}
                    </div>
                ))}
            </div>

            {/* Table card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between gap-3 p-4 border-b border-gray-100 flex-wrap">
                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 w-64 focus-within:ring-2 focus-within:ring-lamaSky">
                        <Search size={15} className="text-gray-400 shrink-0" />
                        <input
                            type="text"
                            placeholder="Search students..."
                            className="bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 w-full"
                        />
                    </div>
                    <button className="flex items-center gap-2 border border-gray-200 text-gray-500 px-3 py-2 rounded-xl text-sm hover:bg-gray-50 transition-colors">
                        <SlidersHorizontal size={15} />
                        Filter
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                {["Student", "Student ID", "Grade", "Class", "Phone", "Address", "Actions"].map((h) => (
                                    <th key={h} className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-4 py-3 first:pl-5 last:pr-5">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {studentsData.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-50/70 transition-colors group">
                                    <td className="px-4 py-3 pl-5">
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={student.photo}
                                                alt={student.name}
                                                width={38}
                                                height={38}
                                                className="rounded-full object-cover w-[38px] h-[38px] ring-2 ring-gray-100 group-hover:ring-sky-200 transition-all"
                                            />
                                            <div>
                                                <p className="font-medium text-gray-800">{student.name}</p>
                                                <p className="text-xs text-gray-400">{student.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg font-mono">
                                            #{student.studentId.slice(-6)}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="bg-lamaSkyLight text-sky-700 text-xs px-2.5 py-1 rounded-full font-semibold">
                                            Grade {student.grade}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="bg-lamaPurpleLight text-violet-700 text-xs px-2.5 py-1 rounded-full font-semibold">
                                            {student.class}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-gray-600">{student.phone}</td>
                                    <td className="px-4 py-3 text-gray-500 max-w-[180px] truncate">{student.address}</td>
                                    <td className="px-4 py-3 pr-5">
                                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-lamaSkyLight text-sky-600 hover:bg-sky-100 transition-colors">
                                                <Eye size={14} />
                                            </button>
                                            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-lamaYellowLight text-yellow-600 hover:bg-yellow-100 transition-colors">
                                                <Pencil size={14} />
                                            </button>
                                            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-lamaRedLight text-rose-600 hover:bg-red-100 transition-colors">
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="px-5 pb-4 pt-2">
                    <Pagination page={1} total={studentsData.length} />
                </div>
            </div>
        </div>
    );
}
