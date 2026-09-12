import Image from "next/image";
import { teachersData } from "@/lib/data";
import Pagination from "@/components/ui/Pagination";
import { Search, Plus, SlidersHorizontal, Eye, Pencil, Trash2 } from "lucide-react";

const columns = [
    { key: "info", label: "Teacher" },
    { key: "teacherId", label: "ID" },
    { key: "subjects", label: "Subjects" },
    { key: "classes", label: "Classes" },
    { key: "phone", label: "Phone" },
    { key: "address", label: "Address" },
    { key: "actions", label: "Actions" },
];

export default function TeacherPage() {
    return (
        <div className="p-6 flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">Teachers</h1>
                    <p className="text-sm text-gray-400 mt-0.5">{teachersData.length} teachers registered</p>
                </div>
                <button className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-violet-500 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-sm">
                    <Plus size={16} />
                    Add Teacher
                </button>
            </div>

            {/* Table card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Toolbar */}
                <div className="flex items-center justify-between gap-3 p-4 border-b border-gray-100 flex-wrap">
                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 w-64 focus-within:ring-2 focus-within:ring-lamaSky">
                        <Search size={15} className="text-gray-400 shrink-0" />
                        <input
                            type="text"
                            placeholder="Search teachers..."
                            className="bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 w-full"
                        />
                    </div>
                    <button className="flex items-center gap-2 border border-gray-200 text-gray-500 px-3 py-2 rounded-xl text-sm hover:bg-gray-50 transition-colors">
                        <SlidersHorizontal size={15} />
                        Filter
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                {columns.map((col) => (
                                    <th
                                        key={col.key}
                                        className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-4 py-3 first:pl-5 last:pr-5"
                                    >
                                        {col.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {teachersData.map((teacher) => (
                                <tr key={teacher.id} className="hover:bg-gray-50/70 transition-colors group">
                                    {/* Info */}
                                    <td className="px-4 py-3 pl-5">
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={teacher.photo}
                                                alt={teacher.name}
                                                width={38}
                                                height={38}
                                                className="rounded-full object-cover w-[38px] h-[38px] ring-2 ring-gray-100 group-hover:ring-sky-200 transition-all"
                                            />
                                            <div>
                                                <p className="font-medium text-gray-800">{teacher.name}</p>
                                                <p className="text-xs text-gray-400">{teacher.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    {/* ID */}
                                    <td className="px-4 py-3">
                                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg font-mono">
                                            #{teacher.teacherId.slice(-6)}
                                        </span>
                                    </td>
                                    {/* Subjects */}
                                    <td className="px-4 py-3">
                                        <div className="flex flex-wrap gap-1">
                                            {teacher.subjects.map((s) => (
                                                <span key={s} className="bg-lamaYellowLight text-yellow-700 text-xs px-2 py-0.5 rounded-full font-medium">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    {/* Classes */}
                                    <td className="px-4 py-3">
                                        <div className="flex flex-wrap gap-1">
                                            {teacher.classes.slice(0, 2).map((c) => (
                                                <span key={c} className="bg-lamaSkyLight text-sky-700 text-xs px-2 py-0.5 rounded-full font-medium">
                                                    {c}
                                                </span>
                                            ))}
                                            {teacher.classes.length > 2 && (
                                                <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">
                                                    +{teacher.classes.length - 2}
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    {/* Phone */}
                                    <td className="px-4 py-3 text-gray-600">{teacher.phone}</td>
                                    {/* Address */}
                                    <td className="px-4 py-3 text-gray-500 max-w-[180px] truncate">{teacher.address}</td>
                                    {/* Actions */}
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

                {/* Pagination */}
                <div className="px-5 pb-4 pt-2">
                    <Pagination page={1} total={teachersData.length} />
                </div>
            </div>
        </div>
    );
}
