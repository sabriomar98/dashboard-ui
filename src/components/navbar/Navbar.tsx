import { MessageCircleMore, Search, Bell } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100 sticky top-0 z-10'>
            {/* Search Bar */}
            <div className='hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 w-72 focus-within:ring-2 focus-within:ring-lamaSky transition-all'>
                <Search size={16} className="text-gray-400" />
                <input
                    type='text'
                    className='bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 w-full'
                    placeholder='Search students, teachers...'
                />
            </div>

            {/* Icons and user */}
            <div className='flex items-center gap-3 ml-auto'>
                {/* Messages */}
                <button className='relative w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-lamaSkyLight text-gray-500 hover:text-sky-600 transition-colors'>
                    <MessageCircleMore size={18} />
                    <span className='absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-sky-500 rounded-full border-2 border-white' />
                </button>

                {/* Notifications */}
                <button className='relative w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-lamaYellowLight text-gray-500 hover:text-yellow-600 transition-colors'>
                    <Bell size={18} />
                    <span className='absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full border-2 border-white flex items-center justify-center'>3</span>
                </button>

                {/* Divider */}
                <div className='w-px h-8 bg-gray-200 mx-1' />

                {/* User profile */}
                <div className='flex items-center gap-3 cursor-pointer group'>
                    <div className='text-right hidden sm:block'>
                        <p className='text-sm font-semibold text-gray-800 leading-none'>Omsa4code</p>
                        <p className='text-xs text-gray-400 mt-0.5'>Administrator</p>
                    </div>
                    <div className='relative'>
                        <div className='w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold ring-2 ring-purple-200 group-hover:ring-purple-400 transition-all'>
                            O
                        </div>
                        <span className='absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
