

// export default function Footer() {
//     return (
//       <footer className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-8">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Contact Links Section */}
//           <div className="flex flex-col space-y-2">
//             <p className="text-lg">&copy; {new Date().getFullYear()} School Attendance System. All rights reserved.</p>
//             <div className="flex space-x-6">
//               <a href="https://www.facebook.com/ChunabhattiMPS?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Facebook</a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Twitter</a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
//             </div>
//           </div>
  
//           {/* School Map Section */}
//           <div className="flex justify-center mb-6">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5391407354824!2d72.8715805!3d19.0523955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c900a5b5f077%3A0xbfcc4de0336b9f9e!2sChunabhatti%20Municipal%20School!5e0!3m2!1sen!2sin!4v1697536909987!5m2!1sen!2sin"
//               width="400"
//               height="300"
//               allowFullScreen=""
//               loading="lazy"
//               className="border-0"
//               title="School Location"
//             ></iframe>
//           </div>
//         </div>
//       </footer>
//     );
//   }
  

import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importing icon components

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Contact Links Section */}
        <div className="flex flex-col space-y-2">
          <p className="text-lg">&copy; {new Date().getFullYear()} Mumbai Public School. All rights reserved.</p>
          <p className="text-sm">Chunabhatti, Mumbai</p>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/ChunabhattiMPS?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 flex items-center space-x-1">
              <FaFacebook />
              <span>Facebook</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 flex items-center space-x-1">
              <FaTwitter />
              <span>Twitter</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 flex items-center space-x-1">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* School Map Section */}
        <div className="flex justify-center mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5391407354824!2d72.8715805!3d19.0523955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c900a5b5f077%3A0xbfcc4de0336b9f9e!2sChunabhatti%20Municipal%20School!5e0!3m2!1sen!2sin!4v1697536909987!5m2!1sen!2sin"
            width="350" // Smaller width for the map
            height="250" // Smaller height for the map
            allowFullScreen=""
            loading="lazy"
            className="border-0 rounded-lg" // Added rounded corners
            title="School Location"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
