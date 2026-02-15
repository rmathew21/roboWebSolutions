import React, { useEffect } from "react";
import { X, Check } from "lucide-react";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {

    if (!project) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in duration-300">
        <div className="relative h-80 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#1E293B] to-transparent opacity-70"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-[#F59E0B] hover:text-white transition-all shadow-lg"
          >
            <X size={24} />
          </button>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 bg-[#F59E0B] text-white text-sm font-medium rounded-full mb-2">
              {project.category}
            </span>
            <h2 className="text-white text-4xl font-bold">{project.title}</h2>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
              Project Overview
            </h3>
            <p className="text-[#64748B] leading-relaxed text-lg">
              {project.fullDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-4">
                The Challenge
              </h3>
              <p className="text-[#64748B] leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-4">
                Our Solution
              </h3>
              <p className="text-[#64748B] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#1E293B] mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-[#FAF9F6] text-[#1E293B] rounded-lg border border-[#E5E7EB] font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#FAF9F6] rounded-xl p-6">
          <h3 className="text-xl font-bold text-[#1E293B] mb-4">Results</h3>
            <div className="space-y-3">
                {project.results.map((result, index) => (
                    <div key={index} className="flex items-start">
                        <div className="shrink-0 w-6 h-6 bg-[#F59E0B] rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <Check size={14} className="text-white" />
                        </div>
                        <p className="text-[#334155]">{result}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
