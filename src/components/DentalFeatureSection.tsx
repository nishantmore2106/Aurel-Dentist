import React from 'react';

export const DentalFeatureSection: React.FC = () => {
  return (
    <section
      id="features"
      aria-label="Aurel Dental Technology and Patient Care"
      className="relative w-full bg-white text-[#17212B] py-20 sm:py-24 md:py-28 lg:py-32 transition-colors"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* ========================================================= */}
        {/* ASYMMETRIC THREE-BLOCK LAYOUT: 1.35fr : 1fr : 1fr (~40% Left Image) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr] gap-8 xl:gap-10 items-stretch">
          
          {/* ========================================================= */}
          {/* BLOCK 1: Large Anchor Architectural Dental Image (Left) */}
          {/* Strict: No text overlays, badges, or buttons on top */}
          {/* ========================================================= */}
          <div className="md:col-span-2 lg:col-span-1 flex flex-col">
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px] rounded-xl lg:rounded-2xl overflow-hidden bg-[#F5F7FA]">
              <img
                src="/assets/features/master_suite.jpg"
                alt="State-of-the-art dental clinical treatment suite at Aurel Dental with natural daylight"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02] select-none"
              />
            </div>
          </div>

          {/* ========================================================= */}
          {/* BLOCK 2: Modern Dentistry & Precision Care (Center Card) */}
          {/* ========================================================= */}
          <article className="flex flex-col justify-between h-full">
            {/* Top Image: Modern Dental Precision Technology */}
            <div>
              <div className="w-full h-[200px] sm:h-[220px] lg:h-[210px] rounded-xl lg:rounded-2xl overflow-hidden bg-[#F5F7FA]">
                <img
                  src="/assets/features/precision_tech.jpg"
                  alt="Dentist operating precision diagnostic intraoral 3D scanner"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03] select-none"
                />
              </div>

              {/* Eyebrow Label (Clean typography, no numbers or slashes) */}
              <div className="mt-6 mb-2">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#59697A]">
                  MODERN DENTISTRY
                </span>
              </div>

              {/* Editorial Heading */}
              <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#17212B] leading-snug">
                Precision Meets Personal Care
              </h3>

              {/* Description Paragraph */}
              <p className="mt-3 text-[13px] sm:text-[14px] text-[#59697A] font-normal leading-relaxed">
                Modern techniques and thoughtful treatment plans help make every visit more comfortable, precise, and personalized to your needs.
              </p>
            </div>

            {/* Bottom Statistics: Subtle Divider & Two Compact Metrics */}
            <div className="mt-8 pt-5 border-t border-[#17212B]/10 grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-light tracking-tight text-[#17212B] leading-none">
                  12+
                </div>
                <div className="text-[11px] sm:text-[12px] text-[#59697A] mt-2 leading-tight">
                  Years of Experience
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-light tracking-tight text-[#17212B] leading-none">
                  4.9/5
                </div>
                <div className="text-[11px] sm:text-[12px] text-[#59697A] mt-2 leading-tight">
                  Patient Rating
                </div>
              </div>
            </div>
          </article>

          {/* ========================================================= */}
          {/* BLOCK 3: Personalized Patient Experience (Right Card) */}
          {/* ========================================================= */}
          <article className="flex flex-col justify-between h-full">
            {/* Top Image: Empathetic Doctor-Patient Consultation */}
            <div>
              <div className="w-full h-[200px] sm:h-[220px] lg:h-[210px] rounded-xl lg:rounded-2xl overflow-hidden bg-[#F5F7FA]">
                <img
                  src="/assets/features/patient_care.jpg"
                  alt="Empathetic dentist consulting warmly with patient"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03] select-none"
                />
              </div>

              {/* Eyebrow Label (Clean typography, no numbers or slashes) */}
              <div className="mt-6 mb-2">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#59697A]">
                  PATIENT EXPERIENCE
                </span>
              </div>

              {/* Editorial Heading */}
              <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#17212B] leading-snug">
                Care That Puts You First
              </h3>

              {/* Description Paragraph */}
              <p className="mt-3 text-[13px] sm:text-[14px] text-[#59697A] font-normal leading-relaxed">
                From your first consultation to follow-up care, we focus on clear communication, individual attention, and helping you feel confident at every step.
              </p>
            </div>

            {/* Bottom Statistics: Subtle Divider & Two Compact Metrics */}
            <div className="mt-8 pt-5 border-t border-[#17212B]/10 grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-light tracking-tight text-[#17212B] leading-none">
                  1:1
                </div>
                <div className="text-[11px] sm:text-[12px] text-[#59697A] mt-2 leading-tight">
                  Personalized Attention
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-light tracking-tight text-[#17212B] leading-none">
                  100%
                </div>
                <div className="text-[11px] sm:text-[12px] text-[#59697A] mt-2 leading-tight">
                  Patient-Focused Care
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};
