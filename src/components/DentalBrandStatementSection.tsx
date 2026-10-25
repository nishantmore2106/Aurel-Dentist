import React from 'react';

export const DentalBrandStatementSection: React.FC = () => {
  return (
    <section
      id="brand-statement"
      aria-label="Aurel Dental Philosophy and Commitment"
      className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-28 transition-colors select-none"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* ========================================================= */}
        {/* TWO-PANEL BALANCED COMPOSITION: Side-by-Side Equal Height */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-5 items-stretch">
          
          {/* ========================================================= */}
          {/* LEFT PANEL: High-End Dental Photography Portrait */}
          {/* ========================================================= */}
          <div className="relative w-full aspect-[4/5] sm:aspect-auto sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[560px] rounded-[22px] sm:rounded-[24px] lg:rounded-[26px] overflow-hidden bg-[#F0F2F5] shadow-xs group">
            <img
              src="/assets/statement/brand_statement_portrait.jpg"
              alt="Aurel Dental practitioner in contemporary clinic consulting gently with a relaxed patient"
              loading="lazy"
              className="w-full h-full object-cover object-[center_20%] sm:object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>

          {/* ========================================================= */}
          {/* RIGHT PANEL: Black Editorial Brand Statement Panel */}
          {/* ========================================================= */}
          <div className="relative w-full min-h-[380px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[560px] rounded-[22px] sm:rounded-[24px] lg:rounded-[26px] bg-[#0A0A0A] p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16 flex flex-col justify-between text-left shadow-xs">
            
            {/* Top-Left: Main Editorial Brand Statement */}
            <div className="pt-1 sm:pt-2">
              <p className="text-white text-xl sm:text-2xl md:text-[24px] lg:text-[28px] xl:text-[32px] font-light leading-[1.3] sm:leading-[1.32] tracking-tight max-w-[520px]">
                “We believe exceptional dentistry begins with listening. Every smile is different, and every patient deserves care that feels personal, thoughtful, and reassuring.”
              </p>
            </div>

            {/* Bottom-Left: Team Attribution & Subtitle */}
            <div className="pt-10 sm:pt-12 lg:pt-16">
              <span className="block text-white text-[15px] sm:text-[16px] lg:text-[17px] font-medium tracking-tight">
                The Aurel Dental Team
              </span>
              <p className="text-[#8E97A0] text-[13px] sm:text-[14px] font-normal tracking-normal mt-1 sm:mt-1.5">
                Modern dentistry. A more personal experience.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
