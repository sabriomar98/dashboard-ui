"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { MoreHorizontal } from "lucide-react";

const data = [
    { day: "Mon", present: 92, absent: 8 },
    { day: "Tue", present: 87, absent: 13 },
    { day: "Wed", present: 95, absent: 5 },
    { day: "Thu", present: 89, absent: 11 },
    { day: "Fri", present: 83, absent: 17 },
];

export default function AttendanceChart() {
    return (
        <div className="bg-white rounded-2xl p-5 h-full shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="font-semibold text-gray-800">Weekly Attendance</h2>
                    <p className="text-xs text-gray-400 mt-0.5">Present vs Absent (%)</p>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                    <MoreHorizontal size={16} />
                </button>
            </div>
            <ResponsiveContainer width="100%" height="85%">
                <BarChart data={data} barSize={16} barGap={4}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#94a3b8" }}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#94a3b8" }}
                        domain={[0, 100]}
                        tickFormatter={(v) => `${v}%`}
                    />
                    <Tooltip
                        contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.07)" }}
                        formatter={(value: number) => [`${value}%`]}
                        cursor={{ fill: "rgba(195,235,250,0.2)" }}
                    />
                    <Legend
                        iconType="circle"
                        iconSize={8}
                        wrapperStyle={{ fontSize: "12px", color: "#64748b" }}
                    />
                    <Bar dataKey="present" fill="#C3EBFA" radius={[6, 6, 0, 0]} name="Present" />
                    <Bar dataKey="absent" fill="#FAE27C" radius={[6, 6, 0, 0]} name="Absent" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
