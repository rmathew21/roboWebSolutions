import React from "react";
import { ArrowRight, Code, Zap, Award } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center bg-linear-to-br from-[#FAF9F6] to-[#F3F4F6] pt-20"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <div className="inline-flex items-center px-4 py-2 bg-[#FEF3C7] text-[#F59E0B] rounded-full mb-6">
//               <Zap size={16} className="mr-2" />
//               <span className="text-sm font-medium">Modern Web Solutions</span>
//             </div>
//             <h1 className="text-5xl md:text-6xl font-bold text-[#1E293B] mb-6 leading-tight">
//               Elevate Your Local Business Online
//             </h1>
//             <p className="text-xl text-[#64748B] mb-8 leading-relaxed">
//               We specialize in front-end web development, helping local
//               businesses modernize their online presence with cutting-edge
//               technology and design.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button
//                 onClick={() => scrollToSection("projects")}
//                 className="inline-flex items-center justify-center px-8 py-4 bg-[#1E293B] text-white rounded-lg hover:bg-[#F59E0B] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//               >
//                 View Our Work
//                 <ArrowRight size={20} className="ml-2" />
//               </button>
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1E293B] border-2 border-[#1E293B] rounded-lg hover:bg-[#1E293B] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 Get Started
//               </button>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="grid grid-cols-2 gap-6">
//               <div className="space-y-6">
//                 <div className="bg-white p-6 rounded-2xl shadow-lg">
//                   <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
//                     <Code size={24} className="text-[#F59E0B]" />
//                   </div>
//                   <h3 className="font-bold text-[#1E293B] mb-2">Clean Code</h3>
//                   <p className="text-sm text-[#64748B]">
//                     Built with modern best practices
//                   </p>
//                 </div>
//                 <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
//                   <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
//                     <Zap size={24} className="text-[#F59E0B]" />
//                   </div>
//                   <h3 className="font-bold text-[#1E293B] mb-2">Lightning Fast</h3>
//                   <p className="text-sm text-[#64748B]">
//                     Optimized performance
//                   </p>
//                 </div>
//               </div>
//               <div className="space-y-6 mt-12">
//                 <div className="bg-white p-6 rounded-2xl shadow-lg">
//                 <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
//                     <Award size={24} className="text-[#F59E0B]" />
//                 </div>
//                 <h3 className="font-bold text-[#1E293B] mb-2">Award Winning</h3>
//                   <p className="text-sm text-[#64748B]">
//                     Recognized excellence
//                   </p>
//                 </div>    
//               </div>
//             </div>
//             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#F59E0B] rounded-full opacity-20 blur-3xl"></div>
//             <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#1E293B] rounded-full opacity-10 blur-3xl"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );

return (
  <section id="hero" className="relative min-h-screen flex items-center pt-20">
    {/* Background layers */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#FAF9F6] to-[#F3F4F6]" />

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* glows */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-[#F59E0B] rounded-full opacity-20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-[520px] h-[520px] bg-[#1E293B] rounded-full opacity-10 blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center px-4 py-2 bg-[#FEF3C7] text-[#F59E0B] rounded-full mb-6">
            <Zap size={16} className="mr-2" />
            <span className="text-sm font-medium">Modern Web Solutions</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1E293B] mb-6 leading-[1.05] tracking-tight">
            Elevate Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Local Business</span>
              <span className="absolute -inset-x-2 bottom-1 h-3 bg-[#FEF3C7] rounded-full z-0" />
            </span>{" "}
            Online
          </h1>

          <p className="text-xl text-[#64748B] mb-8 leading-relaxed max-w-xl">
            We specialize in front-end web development, helping local businesses
            modernize their online presence with cutting-edge technology and design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1E293B] text-white rounded-lg hover:bg-[#F59E0B] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Our Work
              <ArrowRight size={20} className="ml-2" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur text-[#1E293B] border border-black/10 rounded-lg hover:bg-[#1E293B] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started
            </button>
          </div>

          {/* Proof row */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#64748B]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              Fast turnaround
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1E293B]" />
              Mobile-first + SEO-ready
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#64748B]" />
              Modern stack builds
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative md:pl-6 lg:pl-10">
          {/* Hero visual (desktop) */}
          <div className="hidden md:block mb-6">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-black/10 bg-white">
              {/* Replace with your screenshot */}
              <img
                src="https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvZGV8ZW58MHx8MHx8fDA%3D"
                alt="Website preview"
                className="h-60 w-full object-cover"
                loading="eager"
              />
              {/* browser top bar */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-white/90 backdrop-blur border-b border-black/5 flex items-center px-4 gap-2">
                <span className="w-3 h-3 rounded-full bg-black/15" />
                <span className="w-3 h-3 rounded-full bg-black/10" />
                <span className="w-3 h-3 rounded-full bg-black/5" />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                {/* <p className="text-sm opacity-90">Recent work</p> */}
                <p className="text-lg font-semibold">High-converting redesign</p>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-lg border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
                  <Code size={24} className="text-[#F59E0B]" />
                </div>
                <h3 className="font-bold text-[#1E293B] mb-2">Clean Code</h3>
                <p className="text-sm text-[#64748B]">
                  Built with modern best practices
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-lg border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all mt-8">
                <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
                  <Zap size={24} className="text-[#F59E0B]" />
                </div>
                <h3 className="font-bold text-[#1E293B] mb-2">Lightning Fast</h3>
                <p className="text-sm text-[#64748B]">Optimized performance</p>
              </div>
            </div>

            <div className="space-y-6 mt-12">
              <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-lg border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
                  <Award size={24} className="text-[#F59E0B]" />
                </div>
                <h3 className="font-bold text-[#1E293B] mb-2">Conversion Focused</h3>
                <p className="text-sm text-[#64748B]">
                  Designed to generate leads
                </p>
              </div>
            </div>
          </div>

          {/* Extra glow accents */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F59E0B] rounded-full opacity-20 blur-3xl" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1E293B] rounded-full opacity-10 blur-3xl" />
        </div>
      </div>
    </div>
  </section>
);
}
