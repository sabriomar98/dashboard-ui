import Menu from "@/components/menu/Menu";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex overflow-hidden bg-[#f8fafc]">
            {/* SIDEBAR */}
            <aside className="w-16 lg:w-60 xl:w-64 flex-shrink-0 bg-white border-r border-gray-100 flex flex-col overflow-y-auto scrollbar-hide">
                {/* Logo */}
                <Link
                    href="/admin"
                    className="flex items-center justify-center lg:justify-start gap-3 px-4 py-5 border-b border-gray-100"
                >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center shrink-0 shadow-sm">
                        <Image src="/images/logo1.png" alt="logo" width={22} height={22} className="brightness-200" />
                    </div>
                    <div className="hidden lg:block">
                        <span className="font-bold text-gray-900 text-base tracking-tight">SchooLama</span>
                        <p className="text-[10px] text-gray-400 leading-none mt-0.5">Management System</p>
                    </div>
                </Link>

                {/* Menu */}
                <Menu />
            </aside>

            {/* MAIN CONTENT */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
