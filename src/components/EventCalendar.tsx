import { CalendarDays, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { eventsData } from "@/lib/data";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function buildCalendar(year: number, month: number) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date().getDate();
    const isCurrentMonth =
        new Date().getFullYear() === year && new Date().getMonth() === month;

    const cells: (number | null)[] = [...Array(firstDay).fill(null)];
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    while (cells.length % 7 !== 0) cells.push(null);

    return { cells, today: isCurrentMonth ? today : -1 };
}

const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

export default function EventCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const { cells, today } = buildCalendar(year, month);

    const upcoming = eventsData.slice(0, 4);

    return (
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            {/* Calendar header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-800">
                    {MONTHS[month]} {year}
                </h2>
                <div className="flex items-center gap-1">
                    <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400">
                        <ChevronLeft size={15} />
                    </button>
                    <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400">
                        <ChevronRight size={15} />
                    </button>
                </div>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 mb-1">
                {DAYS.map((d) => (
                    <div key={d} className="text-center text-[10px] font-semibold text-gray-400 py-1">
                        {d}
                    </div>
                ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-y-0.5">
                {cells.map((day, i) => (
                    <div
                        key={i}
                        className={`h-8 flex items-center justify-center text-sm rounded-full mx-0.5 transition-colors
                            ${day === null ? "" : "cursor-pointer hover:bg-lamaSkyLight"}
                            ${day === today
                                ? "bg-gradient-to-br from-sky-400 to-violet-500 text-white font-semibold shadow-sm hover:opacity-90"
                                : "text-gray-600"
                            }
                        `}
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Upcoming events */}
            <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-800 text-sm">Upcoming Events</h3>
                    <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400">
                        <MoreHorizontal size={15} />
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    {upcoming.map((event) => (
                        <div
                            key={event.id}
                            className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-lamaSkyLight transition-colors"
                        >
                            <div className="w-9 h-9 bg-lamaSky rounded-lg flex items-center justify-center shrink-0">
                                <CalendarDays size={16} className="text-sky-600" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-medium text-gray-800 truncate">{event.title}</p>
                                <p className="text-xs text-gray-400 mt-0.5">
                                    {event.class} · {event.startTime}–{event.endTime}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
