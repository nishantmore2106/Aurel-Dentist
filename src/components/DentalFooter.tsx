import React from 'react';

export const DentalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      aria-label="Aurel Dental Footer"
      className="relative w-full bg-[#050505] text-white pt-16 sm:pt-20 lg:pt-24 pb-0 overflow-hidden select-none"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* ========================================================= */}
        {/* TOP FOOTER ROW: Left Brand Area + Right Navigation Area */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          
          {/* ========================================================= */}
          {/* LEFT: Brand Identity (Small Photograph & Description) */}
          {/* ========================================================= */}
          <div className="flex flex-col items-start max-w-[300px]">
            {/* Small Landscape Dental Clinic Photograph (~180-210px wide) */}
            <div className="w-[180px] sm:w-[195px] md:w-[210px] aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 shadow-xs group flex-shrink-0">
              <img
                src="/assets/intro/modern_treatment.jpg"
                alt="Aurel Dental modern clinical care in practice"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Brand Description directly below image */}
            <p className="mt-4 sm:mt-5 text-[13px] sm:text-[14px] text-white/85 font-normal leading-relaxed text-left max-w-[280px]">
              Thoughtful dentistry. Healthier smiles. A more personal approach to care.
            </p>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: Three Compact Navigation Columns */}
          {/* ========================================================= */}
          <nav aria-label="Footer Navigation" className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {/* Column 1 — Explore */}
            <div>
              <span className="text-[13px] sm:text-[14px] font-medium text-white tracking-tight block mb-3.5 sm:mb-4">
                Explore
              </span>
              <ul className="space-y-2.5 sm:space-y-3">
                <li>
                  <a
                    href="#treatments"
                    className="text-[11.5px] sm:text-[12px] text-[#7E8B98] hover:text-white transition-colors duration-200"
                  >
                    Our Treatments
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-[11.5px] sm:text-[12px] text-[#7E8B98] hover:text-white transition-colors duration-200"
                  >
                    Dental Services
                  </a>
                </li>
                <li>
                  <a
                    href="#guide"
                    className="text-[11.5px] sm:text-[12px] text-[#7E8B98] hover:text-white transition-colors duration-200"
                  >
                    Patient Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#book"
                    className="text-[11.5px] sm:text-[12px] text-[#7E8B98] hover:text-white transition-colors duration-200"
                  >
                    Book an Appointment
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 — About */}
            <div>
              <span className="text-[13px] sm:text-[14px] font-medium text-white tracking-tight block mb-3.5 sm:mb-4">
                About
              </span>
              <ul className="space-y-2.5 sm:space-y-3">
                <li>
                  <a
                    href="#clinic"
                    className="text-[11.5px] sm:text-[12px] text-[#7E8B98] hover:text-white transition-colors duration-200"
                  >
                    Our Clinic
                  </a>
                </li>
                <li>
                  <a
                    href="#approach"
                    className="text-[11.5px] sm:text-[12px] text-[#7E8B98] hover:text-white transition-colors duration-200"
                  >
                    Our Approach
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-[11.5px] sm:text-[12px] text-[#7E8B98] hover:text-white transition-colors duration-200"
                  >
                    Patient Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[11.5px] sm:text-[12px] text-[#7E8B98] hover:text-white transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 — Connect */}
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[13px] sm:text-[14px] font-medium text-white tracking-tight block mb-3.5 sm:mb-4">
                Connect
              </span>
              <ul className="space-y-2.5 sm:space-y-3">
                <li>
                  <a
                    href="#instagram"
                    className="text-[11.5px] sm:text-[12px] text-[#7E8B98] hover:text-white transition-colors duration-200"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#facebook"
                    className="text-[11.5px] sm:text-[12px] text-[#7E8B98] hover:text-white transition-colors duration-200"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[11.5px] sm:text-[12px] text-[#7E8B98] hover:text-white transition-colors duration-200"
                  >
                    Get in Touch
                  </a>
                </li>
              </ul>
            </div>
          </nav>

        </div>

        {/* ========================================================= */}
        <div className="mt-14 sm:mt-18 lg:mt-20 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <p className="text-[11px] sm:text-[11.5px] text-[#7E8B98]">
            © {currentYear} Aurel Dental. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[11px] sm:text-[11.5px] text-[#7E8B98]">
            <a href="#privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <span aria-hidden="true" className="opacity-50">·</span>
            <a href="#terms" className="hover:text-white transition-colors duration-200">
              Terms of Use
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* OVERSIZED BACKGROUND WORDMARK EXTENDING BEYOND BOTTOM EDGE */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        className="w-full flex justify-center items-end overflow-hidden pointer-events-none select-none mt-8 sm:mt-12 lg:mt-14"
      >
        <span className="font-light tracking-[-0.03em] text-[#252525] text-[18vw] sm:text-[20vw] lg:text-[22vw] leading-[0.78] translate-y-[26%] whitespace-nowrap uppercase">
          AUREL DENTAL
        </span>
      </div>
    </footer>
  );
};
