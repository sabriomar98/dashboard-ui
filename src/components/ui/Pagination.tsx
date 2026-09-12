import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
    page: number;
    total: number;
    pageSize?: number;
};

export default function Pagination({ page, total, pageSize = 10 }: Props) {
    const totalPages = Math.ceil(total / pageSize);
    return (
        <div className="flex items-center justify-between mt-4">
            <p className="text-xs text-gray-400">
                Showing {Math.min((page - 1) * pageSize + 1, total)}–{Math.min(page * pageSize, total)} of {total}
            </p>
            <div className="flex items-center gap-1">
                <button
                    disabled={page === 1}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronLeft size={14} />
                </button>
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((p) => (
                    <button
                        key={p}
                        className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors
                            ${p === page
                                ? "bg-gradient-to-br from-sky-400 to-violet-500 text-white shadow-sm"
                                : "border border-gray-200 text-gray-500 hover:bg-gray-50"
                            }`}
                    >
                        {p}
                    </button>
                ))}
                <button
                    disabled={page === totalPages}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronRight size={14} />
                </button>
            </div>
        </div>
    );
}
