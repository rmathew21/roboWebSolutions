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
    <section
      id="hero"
      className="min-h-screen flex items-center bg-linear-to-br from-[#FAF9F6] to-[#F3F4F6] pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-[#FEF3C7] text-[#F59E0B] rounded-full mb-6">
              <Zap size={16} className="mr-2" />
              <span className="text-sm font-medium">Modern Web Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1E293B] mb-6 leading-tight">
              Elevate Your Local Business Online
            </h1>
            <p className="text-xl text-[#64748B] mb-8 leading-relaxed">
              We specialize in front-end web development, helping local
              businesses modernize their online presence with cutting-edge
              technology and design.
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
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1E293B] border-2 border-[#1E293B] rounded-lg hover:bg-[#1E293B] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
                    <Code size={24} className="text-[#F59E0B]" />
                  </div>
                  <h3 className="font-bold text-[#1E293B] mb-2">Clean Code</h3>
                  <p className="text-sm text-[#64748B]">
                    Built with modern best practices
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
                  <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
                    <Zap size={24} className="text-[#F59E0B]" />
                  </div>
                  <h3 className="font-bold text-[#1E293B] mb-2">Lightning Fast</h3>
                  <p className="text-sm text-[#64748B]">
                    Optimized performance
                  </p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
                    <Award size={24} className="text-[#F59E0B]" />
                </div>
                <h3 className="font-bold text-[#1E293B] mb-2">Award Winning</h3>
                  <p className="text-sm text-[#64748B]">
                    Recognized excellence
                  </p>
                </div>    
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#F59E0B] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#1E293B] rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
