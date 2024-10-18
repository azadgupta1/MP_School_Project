// export default function InfoSection() {
//     return (
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-blue-600 mb-4">Why Choose Our Attendance System?</h2>
//             <p className="text-lg text-gray-700">
//               Manage student attendance effortlessly with our secure, intuitive, and easy-to-use system.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Feature 1 */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-blue-600 mb-4">Accurate Attendance Tracking</h3>
//               <p className="text-gray-600">Our system ensures accurate and reliable attendance tracking for students and teachers.</p>
//             </div>
  
//             {/* Feature 2 */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-blue-600 mb-4">Easy Reporting</h3>
//               <p className="text-gray-600">Get real-time reports on attendance and performance for parents and administrators.</p>
//             </div>
  
//             {/* Feature 3 */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-blue-600 mb-4">Mobile Friendly</h3>
//               <p className="text-gray-600">Access the system from any device, anywhere, anytime with our mobile-friendly design.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

import Image from "next/image";

export default function InfoSection() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4 animate-bounce">Why Choose Our Attendance System?</h2>
                    <p className="text-lg text-gray-700">
                        Manage student attendance effortlessly with our secure, intuitive, and easy-to-use system.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">Accurate Attendance Tracking</h3>
                        <p className="text-gray-600">Our system ensures accurate and reliable attendance tracking for students and teachers.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">Easy Reporting</h3>
                        <p className="text-gray-600">Get real-time reports on attendance and performance for parents and administrators.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">Mobile Friendly</h3>
                        <p className="text-gray-600">Access the system from any device, anywhere, anytime with our mobile-friendly design.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
