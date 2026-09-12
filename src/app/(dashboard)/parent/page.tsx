import { parentsData } from "@/lib/data";
import Pagination from "@/components/ui/Pagination";
import { Search, Plus, SlidersHorizontal, Eye, Pencil, Trash2, User2 } from "lucide-react";

export default function ParentPage() {
    return (
        <div className="p-6 flex flex-col gap-5">
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">Parents</h1>
                    <p className="text-sm text-gray-400 mt-0.5">{parentsData.length} parents registered</p>
                </div>
                <button className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-violet-500 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-sm">
                    <Plus size={16} />
                    Add Parent
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between gap-3 p-4 border-b border-gray-100 flex-wrap">
                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 w-64 focus-within:ring-2 focus-within:ring-lamaSky">
                        <Search size={15} className="text-gray-400 shrink-0" />
                        <input
                            type="text"
                            placeholder="Search parents..."
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
                                {["Parent", "Students", "Phone", "Address", "Actions"].map((h) => (
                                    <th key={h} className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-4 py-3 first:pl-5 last:pr-5">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {parentsData.map((parent) => (
                                <tr key={parent.id} className="hover:bg-gray-50/70 transition-colors group">
                                    <td className="px-4 py-3 pl-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-white text-sm font-semibold ring-2 ring-gray-100 shrink-0">
                                                {parent.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-800">{parent.name}</p>
                                                <p className="text-xs text-gray-400">{parent.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex flex-wrap gap-1">
                                            {parent.students.map((s) => (
                                                <span key={s} className="flex items-center gap-1 bg-lamaPurpleLight text-violet-700 text-xs px-2 py-0.5 rounded-full font-medium">
                                                    <User2 size={10} />
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-gray-600">{parent.phone}</td>
                                    <td className="px-4 py-3 text-gray-500 max-w-[180px] truncate">{parent.address}</td>
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
                    <Pagination page={1} total={parentsData.length} />
                </div>
            </div>
        </div>
    );
}
