"use client";

import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { MoreHorizontal } from "lucide-react";
import { GraduationCap } from "lucide-react";

const data = [
    { name: "Total", count: 1234, fill: "#f1f0ff" },
    { name: "Girls", count: 614, fill: "#CFCEFF" },
    { name: "Boys", count: 620, fill: "#C3EBFA" },
];

export default function CountChart() {
    return (
        <div className="bg-white rounded-2xl p-5 h-full shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
                <div>
                    <h2 className="font-semibold text-gray-800">Students</h2>
                    <p className="text-xs text-gray-400 mt-0.5">Boys & Girls ratio</p>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                    <MoreHorizontal size={16} />
                </button>
            </div>

            {/* Radial chart */}
            <div className="relative w-full h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={28}
                        data={data}
                        startAngle={90}
                        endAngle={-270}
                    >
                        <RadialBar background dataKey="count" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-lamaPurpleLight flex items-center justify-center">
                        <GraduationCap size={24} className="text-violet-600" />
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="flex justify-around mt-4">
                <div className="text-center">
                    <div className="w-5 h-5 rounded-full bg-lamaSky mx-auto mb-1" />
                    <p className="text-base font-bold text-gray-800">620</p>
                    <p className="text-xs text-gray-400">Boys (50%)</p>
                </div>
                <div className="text-center">
                    <div className="w-5 h-5 rounded-full bg-lamaPurple mx-auto mb-1" />
                    <p className="text-base font-bold text-gray-800">614</p>
                    <p className="text-xs text-gray-400">Girls (50%)</p>
                </div>
            </div>
        </div>
    );
}
