// "use client";

// import React from 'react';
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
// import LogoutButton from './_components/logout';

// function SettingsPage() {
//   const { user } = useKindeBrowserClient(); // Get the user from Kinde

//   return (
//     <div className='p-10'>
//       <h1 className='text-2xl font-bold mb-5'>Settings</h1>
//       {user ? (
//         <div>
//           <h2 className='text-xl'>User Information</h2>
//           <p><strong>Name:</strong> {user.given_name} {user.family_name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           {user.picture && <img src={user.picture} alt="User Profile" className='rounded-full w-20 h-20' />}
//         </div>
//       ) : (
//         <p>Loading user information...</p>
//       )}

//         <LogoutButton />
//     </div>
//   );
// }

// export default SettingsPage; // Export the component


// "use client";

// import React from 'react';
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
// import LogoutButton from './_components/logout';
// import Image from 'next/image';

// function SettingsPage() {
//   const { user } = useKindeBrowserClient(); // Get the user from Kinde

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg md:max-w-2xl">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Profile</h1>
//         <Image src={'/profile.svg'} width={100} height={40} alt='logo' />
//         {user ? (
//           <div className="mb-6">
//             <h2 className="text-2xl font-semibold text-gray-700 mb-2">User Information</h2>
//             <div className="flex items-center mb-4">
//               {user.picture && (
//                 <img src={user?.picture} alt="User Profile" className="rounded-full w-24 h-24 border-2 border-gray-300 mr-4" />
//               )}
//               <div>
//                 <p className="text-lg text-gray-900">
//                   <strong>Name:</strong> {user.given_name} {user.family_name}
//                 </p>
//                 <p className="text-lg text-gray-900">
//                   <strong>Email:</strong> {user.email}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <p className="text-gray-600">Loading user information...</p>
//         )}
//         <div className="flex justify-center">
//           <LogoutButton />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SettingsPage;



"use client";

import React from 'react';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import LogoutButton from './_components/logout';
import Image from 'next/image';

function SettingsPage() {
  const { user } = useKindeBrowserClient(); // Get the user from Kinde

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg md:max-w-2xl flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Profile</h1>
        <div className="mb-4">
          <Image src={'/profile.svg'} width={100} height={100} alt='logo' className="mx-auto" />
        </div>
        {user ? (
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">User Information</h2>
            <div className="flex flex-col items-center mb-4">
              {user.picture && (
                <img src={user?.picture} alt="User Profile" className="rounded-full w-24 h-24 border-2 border-gray-300 mb-4" />
              )}
              <div>
                <p className="text-lg text-gray-900">
                  <strong>Name:</strong> {user.given_name} {user.family_name}
                </p>
                <p className="text-lg text-gray-900">
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Loading user information...</p>
        )}
        <div className="flex justify-center">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
