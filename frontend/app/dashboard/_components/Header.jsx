// "use client"

// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
// import React from 'react'
// import Image from 'next/image'


// function Header() {
//   const {user}=useKindeBrowserClient()

//   return (
//     <div className='p-4 shadow-sm border flex justify-between'>
//       <div>

//       </div>
//       <div>
//         <Image src={user?.picture}
//         width={35}
//         height={35}
//         alt='user'
//         className='rounded-full'
//         />
//       </div>
//     </div>
//   )
// }

// export default Header

"use client"

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'
import Image from 'next/image'

function Header() {
  const { user } = useKindeBrowserClient();

  return (
    <div className='p-4 shadow-sm border flex justify-between items-center'>
      <div className="flex-grow text-center">
        <h1 className="text-lg font-bold">Attendance Tracker</h1>
        <h2>Mumbai Public School</h2>
      </div>
      <div className="relative">
        <Image
          src={user?.picture}
          width={35}
          height={35}
          alt='user'
          className='rounded-full'
        />
      </div>
    </div>
  )
}

export default Header;

