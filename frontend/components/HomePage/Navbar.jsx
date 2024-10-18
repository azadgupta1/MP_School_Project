
// import Link from 'next/link';
// import { Button } from "@/components/ui/button"; // Ensure the path is correct
// import { useRouter } from "next/navigation";

// export default function Navbar() {
//   const router = useRouter(); // Initialize the router

//   return (
//     <nav className="bg-blue-900 text-white py-4 shadow-md sticky top-0 z-50 transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-opacity-90">
//       <div className="container mx-auto flex justify-between items-center px-6">
//         {/* Logo */}
//         <div className="text-3xl font-bold">
//           <Link href="/">AttendEase</Link>
//         </div>

//         {/* Links */}
//         <div className="flex space-x-8">
//           <Link href="/" className="text-xl hover:text-gray-300 transition duration-300">Home</Link>
//           <Link href="/about" className="text-xl hover:text-gray-300 transition duration-300">About Us</Link>
//           <Link href="/contact" className="text-xl hover:text-gray-300 transition duration-300">Contact</Link>
//         </div>

//         {/* Login/Register Buttons */}
//         <div className="flex space-x-4">
//           <Button 
//             onClick={() => router.push('/api/auth/login?post_login_redirect_url=/dashboard')}
//             className="bg-blue-500 hover:bg-blue-700 text-white rounded-full px-4 py-2 transition duration-300"
//           >
//             Login
//           </Button>
//           <Button 
//             onClick={() => router.push('/api/auth/register')}
//             className="bg-red-500 hover:bg-red-700 text-white rounded-full px-4 py-2 transition duration-300"
//           >
//             Register
//           </Button>
//         </div>
//       </div>
//     </nav>
//   );
// }



import Link from 'next/link';
import { Button } from "@/components/ui/button"; // Ensure the path is correct
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter(); // Initialize the router

  const handleNavClick = () => {
    router.push('/'); // Navigate to the home page
  };

  return (
    <nav className="bg-blue-900 text-white py-4 shadow-md sticky top-0 z-50 transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <Link href="/">AttendEase</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white" onClick={handleNavClick}>
            &#9776; {/* Hamburger icon */}
          </button>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <button onClick={handleNavClick} className="text-xl hover:text-gray-300 transition duration-300">Home</button>
          <button onClick={handleNavClick} className="text-xl hover:text-gray-300 transition duration-300">About Us</button>
          <button onClick={handleNavClick} className="text-xl hover:text-gray-300 transition duration-300">Contact</button>
        </div>

        {/* Login/Register Buttons */}
        <div className="flex space-x-4">
          <Button 
            onClick={() => router.push('/api/auth/login?post_login_redirect_url=/dashboard')}
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-full px-4 py-2 transition duration-300"
          >
            Login
          </Button>
          <Button 
            onClick={() => router.push('/api/auth/register')}
            className="bg-green-500 hover:bg-green-700 text-white rounded-full px-4 py-2 transition duration-300"
          >
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
}
