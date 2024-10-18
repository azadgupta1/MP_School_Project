"use client";

import Navbar from "@/components/HomePage/Navbar";
import HeroSection from "@/components/HomePage/HeroSection";
import InfoSection from "@/components/HomePage/InfoSection";
import Footer from "@/components/HomePage/Footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Info Section */}
      <InfoSection />

      

      {/* Footer */}
      <Footer />
    </div>
  );
}













// "use client"
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs";
// import { useEffect } from "react";
// import { redirect } from "next/navigation";



// export default function Home() {
//   useEffect(()=>{
//     redirect('/api/auth/login?post_login_redirect_url=/dashboard')
//   },[])
//   return (
//     <div>
      
//     </div>
//   );
// }
