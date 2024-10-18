// "use client"

// import React, { useEffect } from 'react'
// import Image from 'next/image'
// import { GraduationCap, LayoutIcon,  Settings, HandHeartIcon } from 'lucide-react'
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { primaryKey } from 'drizzle-orm/mysql-core'


// function SideNav() {
    
//   const {user}=useKindeBrowserClient()
//   const menuList=[
//     {
//         id:1,
//         name:'Dashboard',
//         icon:LayoutIcon,
//         path:'/dashboard'
//     },
//     {
//         id:2,
//         name:'Students',
//         icon:GraduationCap,
//         path:'/dashboard/students'
//     },
//     {
//         id:3,
//         name:'Attendance', 
//         icon:HandHeartIcon,
//         path:'/dashboard/attendance'
//     },
//     {
//         id:4,
//         name:'Settings',
//         icon:Settings,
//         path:'/dashboard/settings'
//     }
// ]

//   const path=usePathname();
//   useEffect(()=>{
//       console.log(path);
//   },[path])

//   return (
//     <div className='border shadow-md h-screen p-5'>
//         <Image src={'/school-logo.svg'} width={140} height={40} alt='logo'/>

//         <hr className='my-5'></hr>

//         {menuList.map((menu,index)=>(
//           <Link href={menu.path}>
//         <h2 className={`flex items-center gap-3 text-md p-4
//           text-slate-500 
//           hover:bg-blue-600
//           hover:text-white
//           cursor-pointer
//           rounded-lg
//           my-2
//           ${path==menu.path&&'bg-primary text-white'}
//           `}>
//             <menu.icon/>
//             {menu.name}
//           </h2>
//           </Link>
//         ))}

//         <div className='flex gap-2 items-center bottom-5 fixed p-4'>
//             <Image src={user?.picture} width={35} 
//             height={35}
//             alt='user'
//             className='rounded-full'
//             />

//             <div>
//               <h2 className='text-sm font-bold'>{user?.given_name} {user?.family_name}</h2>
//               <h2 className='text-xs text-slate-400'>{user?.email}</h2>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default SideNav

"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GraduationCap, LayoutIcon, Settings, HandHeartIcon, Icon, Settings2Icon, Hand, HandIcon } from 'lucide-react';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SideNav() {
    const { user } = useKindeBrowserClient();
    const [isOpen, setIsOpen] = useState(false); // State for toggle side nav
    const menuList = [
        { id: 1, name: 'Dashboard', icon: LayoutIcon, path: '/dashboard' },
        { id: 2, name: 'Students', icon: GraduationCap, path: '/dashboard/students' },
        { id: 3, name: 'Attendance', icon: HandIcon, path: '/dashboard/attendance' },
        { id: 4, name: 'Profile', icon: Settings2Icon, path: '/dashboard/settings' }
    ];

    const path = usePathname();
    useEffect(() => {
        console.log(path);
    }, [path]);

    // Function to handle window resize
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsOpen(true); // Always open on medium screens and up
        } else {
            setIsOpen(false); // Collapse on smaller screens
        }
    };

    useEffect(() => {
        // Set initial state based on window size
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`relative border shadow-md h-screen p-5 ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300`}>
            {/* Toggle Button for mobile view */}
            <button
                className="absolute top-5 left-5 md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? '⮖' : '⮔'} {/* Change icon based on state */}
            </button>

            <Image src={'/school-logo.svg'} width={100} height={40} alt='logo' />

            <hr className='my-5' />

            <div className={`flex flex-col space-y-2`}>
                {menuList.map((menu) => (
                    <Link href={menu.path} key={menu.id}>
                        <h2 className={`flex items-center gap-3 text-md p-4 text-slate-500 hover:bg-blue-600 hover:text-white cursor-pointer rounded-lg my-2 ${path === menu.path && 'bg-primary text-white'}`}>
                            <menu.icon />
                            {isOpen && menu.name} {/* Only show name if open */}
                        </h2>
                    </Link>
                ))}
            </div>

            {/* User info section */}
            <div className='flex gap-2 items-center bottom-5 fixed p-4'>
                <Image src={user?.picture} width={35} height={35} alt='user' className='rounded-full' />

                <div className={`${isOpen ? 'block' : 'hidden'} transition-opacity duration-300`}>
                    <h2 className='text-sm font-bold'>{user?.given_name} {user?.family_name}</h2>
                    <h2 className='text-xs text-slate-400'>{user?.email}</h2>
                </div>
            </div>
        </div>
    );
}

export default SideNav;

