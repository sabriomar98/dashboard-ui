import { Megaphone, MoreHorizontal } from "lucide-react";
import { announcementsData } from "@/lib/data";

const colors = [
    { bg: "bg-lamaSkyLight", dot: "bg-sky-400", text: "text-sky-700" },
    { bg: "bg-lamaYellowLight", dot: "bg-yellow-400", text: "text-yellow-700" },
    { bg: "bg-lamaPurpleLight", dot: "bg-violet-400", text: "text-violet-700" },
    { bg: "bg-lamaRedLight", dot: "bg-rose-400", text: "text-rose-700" },
    { bg: "bg-lamaGreenLight", dot: "bg-emerald-400", text: "text-emerald-700" },
];

export default function Announcements() {
    const items = announcementsData.slice(0, 5);
    return (
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-800">Announcements</h2>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400">
                    <MoreHorizontal size={16} />
                </button>
            </div>
            <div className="flex flex-col gap-3">
                {items.map((a, idx) => {
                    const c = colors[idx % colors.length];
                    return (
                        <div
                            key={a.id}
                            className={`${c.bg} rounded-xl p-3 flex items-start gap-3 hover:opacity-90 transition-opacity cursor-pointer`}
                        >
                            <div className={`w-8 h-8 ${c.bg} rounded-lg flex items-center justify-center shrink-0 border border-white`}>
                                <Megaphone size={15} className={c.text} />
                            </div>
                            <div className="min-w-0">
                                <p className={`text-sm font-medium ${c.text} truncate`}>{a.title}</p>
                                <p className="text-xs text-gray-400 mt-0.5">
                                    Class {a.class} · {a.date}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className="mt-4 w-full text-center text-xs text-gray-400 hover:text-sky-600 transition-colors py-1">
                View all announcements →
            </button>
        </div>
    );
}
