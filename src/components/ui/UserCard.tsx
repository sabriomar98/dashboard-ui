import { GraduationCap, BookOpen, Users, Briefcase, TrendingUp } from "lucide-react";

type CardType = "student" | "teacher" | "parent" | "staff";

const cardConfig: Record<
    CardType,
    { icon: React.ElementType; count: number; label: string; bg: string; iconBg: string; iconColor: string; trend: number }
> = {
    student: {
        icon: GraduationCap,
        count: 1_234,
        label: "Total Students",
        bg: "bg-lamaSkyLight",
        iconBg: "bg-lamaSky",
        iconColor: "text-sky-600",
        trend: 12,
    },
    teacher: {
        icon: BookOpen,
        count: 124,
        label: "Total Teachers",
        bg: "bg-lamaYellowLight",
        iconBg: "bg-lamaYellow",
        iconColor: "text-yellow-600",
        trend: 4,
    },
    parent: {
        icon: Users,
        count: 754,
        label: "Total Parents",
        bg: "bg-lamaPurpleLight",
        iconBg: "bg-lamaPurple",
        iconColor: "text-violet-600",
        trend: 8,
    },
    staff: {
        icon: Briefcase,
        count: 56,
        label: "Total Staff",
        bg: "bg-lamaRedLight",
        iconBg: "bg-lamaRed",
        iconColor: "text-rose-600",
        trend: 2,
    },
};

export default function UserCard({ type }: { type: CardType }) {
    const { icon: Icon, count, label, bg, iconBg, iconColor, trend } = cardConfig[type];
    return (
        <div className={`${bg} rounded-2xl p-5 flex-1 min-w-[200px] border border-white shadow-sm`}>
            <div className="flex items-start justify-between mb-4">
                <div className={`${iconBg} ${iconColor} w-11 h-11 rounded-xl flex items-center justify-center shadow-sm`}>
                    <Icon size={22} />
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <TrendingUp size={11} />
                    +{trend}%
                </span>
            </div>
            <div>
                <p className="text-3xl font-bold text-gray-900 tracking-tight">
                    {count.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
            <div className="mt-3 text-xs text-gray-400">vs last month</div>
        </div>
    );
}
