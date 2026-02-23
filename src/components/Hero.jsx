import React from "react";
import { ArrowRight, Code, Zap, Award } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    //   <section
    //     id="hero"
    //     className="min-h-screen flex items-center bg-linear-to-br from-[#FAF9F6] to-[#F3F4F6] pt-20"
    //   >
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    //       <div className="grid md:grid-cols-2 gap-12 items-center">
    //         <div>
    //           <div className="inline-flex items-center px-4 py-2 bg-[#FEF3C7] text-[#F59E0B] rounded-full mb-6">
    //             <Zap size={16} className="mr-2" />
    //             <span className="text-sm font-medium">Modern Web Solutions</span>
    //           </div>
    //           <h1 className="text-5xl md:text-6xl font-bold text-[#1E293B] mb-6 leading-tight">
    //             Elevate Your Local Business Online
    //           </h1>
    //           <p className="text-xl text-[#64748B] mb-8 leading-relaxed">
    //             We specialize in front-end web development, helping local
    //             businesses modernize their online presence with cutting-edge
    //             technology and design.
    //           </p>
    //           <div className="flex flex-col sm:flex-row gap-4">
    //             <button
    //               onClick={() => scrollToSection("projects")}
    //               className="inline-flex items-center justify-center px-8 py-4 bg-[#1E293B] text-white rounded-lg hover:bg-[#F59E0B] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    //             >
    //               View Our Work
    //               <ArrowRight size={20} className="ml-2" />
    //             </button>
    //             <button
    //               onClick={() => scrollToSection("contact")}
    //               className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1E293B] border-2 border-[#1E293B] rounded-lg hover:bg-[#1E293B] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
    //             >
    //               Get Started
    //             </button>
    //           </div>
    //         </div>

    //         <div className="relative">
    //           <div className="grid grid-cols-2 gap-6">
    //             <div className="space-y-6">
    //               <div className="bg-white p-6 rounded-2xl shadow-lg">
    //                 <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
    //                   <Code size={24} className="text-[#F59E0B]" />
    //                 </div>
    //                 <h3 className="font-bold text-[#1E293B] mb-2">Clean Code</h3>
    //                 <p className="text-sm text-[#64748B]">
    //                   Built with modern best practices
    //                 </p>
    //               </div>
    //               <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
    //                 <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
    //                   <Zap size={24} className="text-[#F59E0B]" />
    //                 </div>
    //                 <h3 className="font-bold text-[#1E293B] mb-2">Lightning Fast</h3>
    //                 <p className="text-sm text-[#64748B]">
    //                   Optimized performance
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="space-y-6 mt-12">
    //               <div className="bg-white p-6 rounded-2xl shadow-lg">
    //               <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
    //                   <Award size={24} className="text-[#F59E0B]" />
    //               </div>
    //               <h3 className="font-bold text-[#1E293B] mb-2">Award Winning</h3>
    //                 <p className="text-sm text-[#64748B]">
    //                   Recognized excellence
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#F59E0B] rounded-full opacity-20 blur-3xl"></div>
    //           <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#1E293B] rounded-full opacity-10 blur-3xl"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // );

    //   <section id="hero" className="relative min-h-screen flex items-center pt-20">

    //     <div className="pointer-events-none absolute inset-0 overflow-hidden">
    //       <div className="absolute inset-0 bg-linear-to-br from-[#FAF9F6] to-[#F3F4F6]" />

    //       <div
    //         className="absolute inset-0 opacity-[0.06]"
    //         style={{
    //           backgroundImage:
    //             "linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)",
    //           backgroundSize: "56px 56px",
    //         }}
    //       />

    //       <div className="absolute -top-24 -right-24 w-105 h-105 bg-[#F59E0B] rounded-full opacity-20 blur-3xl" />
    //       <div className="absolute -bottom-32 -left-24 w-130 h-130 bg-[#1E293B] rounded-full opacity-10 blur-3xl" />
    //     </div>

    //     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    //       <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">

    //         <div>
    //           <div className="inline-flex items-center px-4 py-2 bg-[#FEF3C7] text-[#F59E0B] rounded-full mb-6">
    //             <Zap size={16} className="mr-2" />
    //             <span className="text-sm font-medium">Modern Web Solutions</span>
    //           </div>

    //           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1E293B] mb-6 leading-[1.05] tracking-tight">
    //             Elevate Your{" "}
    //             <span className="relative inline-block">
    //               <span className="relative z-10">Local Business</span>
    //               <span className="absolute -inset-x-2 bottom-1 h-3 bg-[#FEF3C7] rounded-full z-0" />
    //             </span>{" "}
    //             Online
    //           </h1>

    //           <p className="text-xl text-[#64748B] mb-8 leading-relaxed max-w-xl">
    //             We specialize in front-end web development, helping local businesses
    //             modernize their online presence with cutting-edge technology and design.
    //           </p>

    //           <div className="flex flex-col sm:flex-row gap-4">
    //             <button
    //               onClick={() => scrollToSection("projects")}
    //               className="inline-flex items-center justify-center px-8 py-4 bg-[#1E293B] text-white rounded-lg hover:bg-[#F59E0B] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    //             >
    //               View Our Work
    //               <ArrowRight size={20} className="ml-2" />
    //             </button>

    //             <button
    //               onClick={() => scrollToSection("contact")}
    //               className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur text-[#1E293B] border border-black/10 rounded-lg hover:bg-[#1E293B] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
    //             >
    //               Get Started
    //             </button>
    //           </div>

    //           <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#64748B]">
    //             <div className="flex items-center gap-2">
    //               <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
    //               Fast turnaround
    //             </div>
    //             <div className="flex items-center gap-2">
    //               <span className="w-2 h-2 rounded-full bg-[#1E293B]" />
    //               Mobile-first + SEO-ready
    //             </div>
    //             <div className="flex items-center gap-2">
    //               <span className="w-2 h-2 rounded-full bg-[#64748B]" />
    //               Modern stack builds
    //             </div>
    //           </div>
    //         </div>

    //         <div className="relative md:pl-6 lg:pl-10">

    //           <div className="hidden md:block mb-6">
    //             <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-black/10 bg-white">

    //               <img
    //                 src="https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvZGV8ZW58MHx8MHx8fDA%3D"
    //                 alt="Website preview"
    //                 className="h-60 w-full object-cover"
    //                 loading="eager"
    //               />

    //               <div className="absolute top-0 left-0 right-0 h-10 bg-white/90 backdrop-blur border-b border-black/5 flex items-center px-4 gap-2">
    //                 <span className="w-3 h-3 rounded-full bg-black/15" />
    //                 <span className="w-3 h-3 rounded-full bg-black/10" />
    //                 <span className="w-3 h-3 rounded-full bg-black/5" />
    //               </div>
    //               <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
    //               <div className="absolute bottom-4 left-4 right-4 text-white">

    //                 <p className="text-lg font-semibold">High-converting redesign</p>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="grid grid-cols-2 gap-6">
    //             <div className="space-y-6">
    //               <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-lg border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all">
    //                 <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
    //                   <Code size={24} className="text-[#F59E0B]" />
    //                 </div>
    //                 <h3 className="font-bold text-[#1E293B] mb-2">Clean Code</h3>
    //                 <p className="text-sm text-[#64748B]">
    //                   Built with modern best practices
    //                 </p>
    //               </div>

    //               <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-lg border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all mt-8">
    //                 <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
    //                   <Zap size={24} className="text-[#F59E0B]" />
    //                 </div>
    //                 <h3 className="font-bold text-[#1E293B] mb-2">Lightning Fast</h3>
    //                 <p className="text-sm text-[#64748B]">Optimized performance</p>
    //               </div>
    //             </div>

    //             <div className="space-y-6 mt-12">
    //               <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-lg border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all">
    //                 <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
    //                   <Award size={24} className="text-[#F59E0B]" />
    //                 </div>
    //                 <h3 className="font-bold text-[#1E293B] mb-2">Conversion Focused</h3>
    //                 <p className="text-sm text-[#64748B]">
    //                   Designed to generate leads
    //                 </p>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F59E0B] rounded-full opacity-20 blur-3xl" />
    //           <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1E293B] rounded-full opacity-10 blur-3xl" />
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // );

    <section id="hero" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          // src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2400&q=60"
          src="https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvZGV8ZW58MHx8MHx8fDA%3D"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />

        {/* Readability overlay */}
        <div className="absolute inset-0 bg-slate-950/65" />

        {/* Color overlay (adds “pop” without hurting readability) */}
        <div className="absolute inset-0 bg-linear-to-br from-amber-500/25 via-slate-900/10 to-sky-500/20" />

        {/* Optional: subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Optional: bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-950/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-white/10 backdrop-blur border border-white/15 text-white">
              <span className="mr-2">⚡</span>
              <span className="text-sm font-medium tracking-wide">
                Modern Web Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
              Elevate Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Local Business</span>
                <span className="absolute -inset-x-2 bottom-1 h-3 bg-amber-400/40 rounded-full z-0" />
              </span>{" "}
              Online
            </h1>

            <p className="text-xl text-slate-200/90 mb-8 leading-relaxed max-w-2xl">
              We specialize in front-end web development, helping local
              businesses modernize their online presence with cutting-edge
              technology and design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg
                         bg-amber-400 text-slate-950 font-semibold
                         hover:bg-amber-300 transition-all duration-300
                         shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Our Work
                <span className="ml-2">→</span>
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg
                         bg-white/10 backdrop-blur text-white
                         border border-white/20
                         hover:bg-white hover:text-slate-950 transition-all duration-300
                         transform hover:-translate-y-1"
              >
                Get Started
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Fast turnaround
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                Mobile-first + SEO-ready
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/70" />
                Modern stack builds
              </div>
            </div>
          </div>

          {/* Right: proof/cards (optional, keeps your “feature cards” vibe) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* <div className="bg-white/10 hover:bg-white/20 transition-colors backdrop-blur rounded-2xl p-6 border"> */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15 shadow-lg hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-amber-400/20 flex items-center justify-center mb-4">
                  <span className="text-amber-300 text-xl">{"</>"}</span>
                </div>
                <h3 className="font-bold text-white mb-2">Clean Code</h3>
                <p className="text-sm text-slate-200/85">
                  Built with modern best practices
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15 shadow-lg hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-sky-400/20 flex items-center justify-center mb-4">
                  <span className="text-sky-300 text-xl">⚡</span>
                </div>
                <h3 className="font-bold text-white mb-2">Lightning Fast</h3>
                <p className="text-sm text-slate-200/85">
                  Optimized performance
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15 shadow-lg hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <span className="text-white text-xl">★</span>
                </div>
                <h3 className="font-bold text-white mb-2">
                  Conversion Focused
                </h3>
                <p className="text-sm text-slate-200/85">
                  Designed to generate leads
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
