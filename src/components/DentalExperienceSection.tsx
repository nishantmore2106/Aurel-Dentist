import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const DentalExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="The Aurel Dental Experience"
      className="relative w-full bg-white text-[#17212B] py-20 sm:py-24 md:py-28 lg:py-32 transition-colors"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* ========================================================= */}
        {/* SECTION HEADER: Top-Left Eyebrow & Large Editorial Heading */}
        {/* ========================================================= */}
        <header className="mb-10 sm:mb-14 lg:mb-16 text-left">
          <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase text-[#59697A] block mb-3.5">
            THE AUREL DENTAL EXPERIENCE / 03
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-light tracking-tight text-[#17212B] leading-[1.12] max-w-[840px]">
            More than just a dental visit.
          </h2>
        </header>

        {/* ========================================================= */}
        {/* THREE-COLUMN MAIN CONTENT ROW */}
        {/* Col 1: Large Standalone Image (~32%) */}
        {/* Col 2: Light Feature Card + Strip (~32%) */}
        {/* Col 3: Dark Feature Card + Strip (~32%) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          
          {/* ========================================================= */}
          {/* COLUMN 1: Large Standalone Dental Image */}
          {/* 4:3 / Balanced aspect ratio, rounded corners, strictly no overlays */}
          {/* ========================================================= */}
          <div className="flex flex-col h-full">
            <div className="w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-0 rounded-[20px] lg:rounded-[22px] overflow-hidden bg-[#F0F0F0] shadow-xs">
              <img
                src="/assets/features/master_suite.jpg"
                alt="Contemporary architectural dental suite at Aurel Dental with natural daylight"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02] select-none"
              />
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 2: Light Feature Card (#F0F0F0) + Information Strip */}
          {/* ========================================================= */}
          <div className="flex flex-col gap-4 sm:gap-4.5 lg:gap-5 justify-between h-full">
            {/* Upper Feature Card (Light Gray) */}
            <article className="bg-[#F0F0F0] rounded-[22px] lg:rounded-[26px] p-6 sm:p-7 md:p-8 flex flex-col justify-between flex-1 select-none">
              {/* Top Row: Small Landscape Photo (Left) + Circular Icon Button (Right) */}
              <div className="flex items-start justify-between gap-4">
                <div className="w-28 h-20 sm:w-32 sm:h-22 rounded-xl overflow-hidden bg-white shadow-2xs flex-shrink-0">
                  <img
                    src="/assets/features/precision_tech.jpg"
                    alt="Dentist operating precision diagnostic intraoral 3D scanner"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="w-9 h-9 rounded-full bg-white text-[#17212B] flex items-center justify-center shadow-xs transition-transform duration-300 hover:scale-105 cursor-pointer flex-shrink-0"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Middle/Bottom Content: Heading, Description, Bottom Label */}
              <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col items-start text-left">
                <h3 className="text-2xl sm:text-[26px] font-light tracking-tight text-[#17212B] leading-snug">
                  Curated Dental Care
                </h3>
                <p className="mt-2.5 text-[13px] sm:text-[14px] text-[#59697A] font-normal leading-relaxed max-w-[320px]">
                  Thoughtfully planned treatments, tailored to your needs and designed around your comfort.
                </p>

                {/* Bottom Label */}
                <div className="w-full mt-6 pt-5 border-t border-[#17212B]/10">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#59697A]">
                    01 / PERSONALIZED CARE
                  </span>
                </div>
              </div>
            </article>

            {/* Information Strip Beneath Middle Card */}
            <div className="bg-[#F0F0F0] rounded-[10px] sm:rounded-[12px] px-5 py-4 flex items-center justify-between gap-4 select-none">
              <div className="text-2xl sm:text-[26px] font-light tracking-tight text-[#17212B] leading-none">
                05+
              </div>
              <div className="text-[12px] sm:text-[13px] font-medium text-[#59697A] tracking-normal">
                Dental Care Services
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 3: Dark Feature Card (#0A0A0A) + Information Strip */}
          {/* ========================================================= */}
          <div className="flex flex-col gap-4 sm:gap-4.5 lg:gap-5 justify-between h-full">
            {/* Upper Feature Card (Near Black) */}
            <article className="bg-[#0A0A0A] rounded-[22px] lg:rounded-[26px] p-6 sm:p-7 md:p-8 flex flex-col justify-between flex-1 select-none">
              {/* Top Row: Small Landscape/Square Photo (Left) + Circular Icon Button (Right) */}
              <div className="flex items-start justify-between gap-4">
                <div className="w-28 h-20 sm:w-32 sm:h-22 rounded-xl overflow-hidden bg-white/10 shadow-2xs flex-shrink-0">
                  <img
                    src="/assets/features/patient_care.jpg"
                    alt="Empathetic consultation with dental patient"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer flex-shrink-0"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Middle/Bottom Content: Heading, Description, Bottom Label */}
              <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col items-start text-left">
                <h3 className="text-2xl sm:text-[26px] font-light tracking-tight text-white leading-snug">
                  Effortless Dental Care
                </h3>
                <p className="mt-2.5 text-[13px] sm:text-[14px] text-[#9AA8B6] font-normal leading-relaxed max-w-[320px]">
                  Discover modern treatments and thoughtful support for a healthier, more confident smile.
                </p>

                {/* Bottom Label */}
                <div className="w-full mt-6 pt-5 border-t border-white/10">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9AA8B6]">
                    02 / PATIENT EXPERIENCE
                  </span>
                </div>
              </div>
            </article>

            {/* Information Strip Beneath Dark Card */}
            <div className="bg-[#F0F0F0] rounded-[10px] sm:rounded-[12px] px-5 py-3.5 sm:py-4 flex items-center gap-3.5 select-none">
              {/* Overlapping Circular Dental Photographs */}
              <div className="flex items-center -space-x-2 flex-shrink-0">
                <img
                  src="/assets/features/patient_care.jpg"
                  alt="Aurel patient"
                  className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-2xs"
                />
                <img
                  src="/assets/intro/personalized_care.jpg"
                  alt="Aurel patient consultation"
                  className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-2xs"
                />
                <img
                  src="/assets/intro/confident_smiles.jpg"
                  alt="Aurel patient smile"
                  className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-2xs"
                />
              </div>

              {/* Supporting Text */}
              <div className="text-[12px] sm:text-[13px] font-medium text-[#17212B] tracking-tight">
                Thoughtful care. Confident smiles.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
