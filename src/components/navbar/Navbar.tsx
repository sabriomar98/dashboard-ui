import { MessageCircleMore, Search } from 'lucide-react'
import React from 'react'
import { RxAvatar } from 'react-icons/rx';
import { TfiAnnouncement } from "react-icons/tfi";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4 bg-slate-200'>
            {/* Search Bar */}
            <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
                <Search size={25} />
                <input type='text' className='w-[200px] p-2 bg-transparent outline-none' placeholder='Search...' />
            </div>
            {/* Icons and user */}
            <div className='flex items-center gap-6 justify-end w-full'>
                <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                    <MessageCircleMore size={25} />
                </div>
                <div className='relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                    <TfiAnnouncement size={25} />
                    <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>

                </div>
                <div className='flex flex-col'>
                    <span className='text-xs leading-3 font-medium'>Omsa4code</span>
                    <span className='text-[10px] text-gray-800 text-right'>Admin</span>
                </div>
                <RxAvatar size={30} className='rounded-full' />
            </div>
        </div>
    )
}

export default Navbar
