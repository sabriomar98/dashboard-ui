"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { MoreHorizontal } from "lucide-react";

const data = [
    { month: "Jan", income: 48000, expense: 32000 },
    { month: "Feb", income: 52000, expense: 35000 },
    { month: "Mar", income: 47000, expense: 31000 },
    { month: "Apr", income: 61000, expense: 38000 },
    { month: "May", income: 55000, expense: 33000 },
    { month: "Jun", income: 67000, expense: 41000 },
    { month: "Jul", income: 58000, expense: 36000 },
    { month: "Aug", income: 72000, expense: 44000 },
    { month: "Sep", income: 64000, expense: 39000 },
    { month: "Oct", income: 69000, expense: 42000 },
    { month: "Nov", income: 75000, expense: 46000 },
    { month: "Dec", income: 83000, expense: 51000 },
];

const formatCurrency = (v: number) =>
    v >= 1000 ? `$${(v / 1000).toFixed(0)}k` : `$${v}`;

export default function FinanceChart() {
    return (
        <div className="bg-white rounded-2xl p-5 h-full shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="font-semibold text-gray-800">Finance Overview</h2>
                    <p className="text-xs text-gray-400 mt-0.5">Income vs Expenses — 2025</p>
                </div>
                <div className="flex items-center gap-2">
                    <select className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 text-gray-500 outline-none focus:ring-2 focus:ring-lamaSky bg-gray-50">
                        <option>2025</option>
                        <option>2024</option>
                    </select>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                        <MoreHorizontal size={16} />
                    </button>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="88%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#C3EBFA" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#C3EBFA" stopOpacity={0.05} />
                        </linearGradient>
                        <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#CFCEFF" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#CFCEFF" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#94a3b8" }}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#94a3b8" }}
                        tickFormatter={formatCurrency}
                    />
                    <Tooltip
                        contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.07)" }}
                        formatter={(value: number) => [`$${value.toLocaleString()}`]}
                        cursor={{ stroke: "#e2e8f0" }}
                    />
                    <Legend
                        iconType="circle"
                        iconSize={8}
                        wrapperStyle={{ fontSize: "12px", color: "#64748b" }}
                    />
                    <Area
                        type="monotone"
                        dataKey="income"
                        stroke="#67c5f0"
                        strokeWidth={2.5}
                        fill="url(#incomeGrad)"
                        name="Income"
                        dot={false}
                    />
                    <Area
                        type="monotone"
                        dataKey="expense"
                        stroke="#a78bfa"
                        strokeWidth={2.5}
                        fill="url(#expenseGrad)"
                        name="Expenses"
                        dot={false}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
