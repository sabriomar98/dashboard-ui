import { classesData } from "@/lib/data";
import Pagination from "@/components/ui/Pagination";
import { Search, Plus, SlidersHorizontal, Eye, Pencil, Trash2, Users2 } from "lucide-react";

const gradeColors: Record<number, string> = {
    1: "bg-lamaSkyLight text-sky-700",
    2: "bg-lamaYellowLight text-yellow-700",
    3: "bg-lamaPurpleLight text-violet-700",
    4: "bg-lamaGreenLight text-emerald-700",
    5: "bg-lamaRedLight text-rose-700",
    6: "bg-orange-50 text-orange-700",
    7: "bg-teal-50 text-teal-700",
};

export default function ClassPage() {
    return (
        <div className="p-6 flex flex-col gap-5">
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">Classes</h1>
                    <p className="text-sm text-gray-400 mt-0.5">{classesData.length} classes active</p>
                </div>
                <button className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-violet-500 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-sm">
                    <Plus size={16} />
                    Add Class
                </button>
            </div>

            {/* Summary cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                    { label: "Total Classes", value: classesData.length, color: "bg-lamaSkyLight", text: "text-sky-700", border: "border-sky-100" },
                    { label: "Total Capacity", value: classesData.reduce((a, c) => a + c.capacity, 0), color: "bg-lamaGreenLight", text: "text-emerald-700", border: "border-emerald-100" },
                    { label: "Avg Capacity", value: Math.round(classesData.reduce((a, c) => a + c.capacity, 0) / classesData.length), color: "bg-lamaYellowLight", text: "text-yellow-700", border: "border-yellow-100" },
                    { label: "Grade Levels", value: new Set(classesData.map((c) => c.grade)).size, color: "bg-lamaPurpleLight", text: "text-violet-700", border: "border-violet-100" },
                ].map(({ label, value, color, text, border }) => (
                    <div key={label} className={`${color} ${border} border rounded-xl p-4`}>
                        <p className={`text-2xl font-bold ${text}`}>{value}</p>
                        <p className="text-xs text-gray-500 mt-1">{label}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between gap-3 p-4 border-b border-gray-100 flex-wrap">
                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 w-64 focus-within:ring-2 focus-within:ring-lamaSky">
                        <Search size={15} className="text-gray-400 shrink-0" />
                        <input
                            type="text"
                            placeholder="Search classes..."
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
                                {["Class Name", "Capacity", "Grade", "Supervisor", "Actions"].map((h) => (
                                    <th key={h} className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-4 py-3 first:pl-5 last:pr-5">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {classesData.map((cls) => (
                                <tr key={cls.id} className="hover:bg-gray-50/70 transition-colors group">
                                    <td className="px-4 py-3 pl-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 flex items-center justify-center text-white text-sm font-bold">
                                                {cls.name}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-24 bg-gray-100 rounded-full h-1.5">
                                                <div
                                                    className="bg-gradient-to-r from-sky-400 to-violet-500 h-1.5 rounded-full"
                                                    style={{ width: `${(cls.capacity / 25) * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-gray-600 text-xs flex items-center gap-1">
                                                <Users2 size={11} />
                                                {cls.capacity}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${gradeColors[cls.grade] ?? "bg-gray-100 text-gray-600"}`}>
                                            Grade {cls.grade}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-xs font-semibold">
                                                {cls.supervisor.charAt(0)}
                                            </div>
                                            <span className="text-gray-700 font-medium">{cls.supervisor}</span>
                                        </div>
                                    </td>
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
                    <Pagination page={1} total={classesData.length} />
                </div>
            </div>
        </div>
    );
}
