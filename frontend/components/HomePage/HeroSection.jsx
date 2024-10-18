

import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-blue-800 overflow-hidden">
      {/* Blue background without an image */}
      <div className="absolute inset-0 bg-blue-800"></div>

      <div className="relative z-10 text-center text-white px-6 md:px-0">
        {/* SVG logo */}
        <div className="flex justify-center mb-6">
          <Image src="/MPS_logo.svg" alt="School Logo" width={500} height={300} />
        </div>

        {/* Headline and description */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to Mumbai Public School
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Empowering students with efficient attendance management.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-4 justify-center">
          <a 
            href="/login" 
            className="bg-white text-blue-600 px-4 py-3 rounded-lg font-semibold shadow-md transition duration-300"
          >
            Get Started
          </a>
          <a 
            href="/about" 
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}


