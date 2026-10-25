import React from 'react';
import { ArrowRight } from 'lucide-react';

export const DentalAtmosphereSection: React.FC = () => {
  return (
    <section
      id="atmosphere"
      aria-label="Aurel Dental Atmosphere and Approach"
      className="relative w-full min-h-[740px] sm:min-h-[780px] lg:min-h-[840px] py-14 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-16 overflow-hidden select-none bg-[#17212B] flex items-center"
    >
      {/* ========================================================= */}
      {/* 1. CINEMATIC FULL-WIDTH BACKGROUND PHOTOGRAPHY */}
      {/* ========================================================= */}
      <img
        src="/assets/atmosphere/panoramic_clinic.jpg"
        alt="Panoramic architectural interior of Aurel Dental treatment suite"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      {/* Sophisticated Darkening Overlay for Cinematic Atmosphere & Text Legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/55 lg:to-black/20 pointer-events-none"
      />

      {/* ========================================================= */}
      {/* 2. LEFT VERTICAL EDITORIAL STACK: Enlarged Image + All Content Below */}
      {/* ========================================================= */}
      <div className="relative z-20 flex flex-col items-start text-left w-full max-w-[340px] sm:max-w-[370px] lg:max-w-[420px]">
        {/* 1. Enlarged Upper-Left Dental Inset Image (~340-380px desktop, ~210-230px height) */}
        <div className="w-full h-[200px] sm:h-[215px] lg:h-[230px] rounded-xl lg:rounded-2xl overflow-hidden border border-white/30 shadow-md group select-none flex-shrink-0 bg-black/40">
          <img
            src="/assets/atmosphere/examination_inset.jpg"
            alt="Close-up detail of gentle dental examination"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* 2. Small Eyebrow Label (Directly beneath image) */}
        <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase text-white/80 block mt-6 sm:mt-7 mb-3">
          AUREL DENTAL / THE EXPERIENCE
        </span>

        {/* 3. Main Editorial Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-light tracking-tight text-white leading-[1.18]">
          A more thoughtful approach to your smile.
        </h2>

        {/* 4. Supporting Paragraph */}
        <p className="mt-3 sm:mt-3.5 text-[13px] sm:text-[14px] text-white/85 font-normal leading-relaxed">
          Where modern dentistry meets personal attention, creating a calmer, more considered experience at every visit.
        </p>

        {/* 5. CTA Link */}
        <div className="mt-5 sm:mt-6">
          <a
            href="#treatments"
            className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-white hover:text-white/80 transition-colors group cursor-pointer"
          >
            <span>Discover Our Approach</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
