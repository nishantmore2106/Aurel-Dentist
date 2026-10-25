import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ImageCardProps {
  imageSrc: string;
  altText: string;
  caption: string;
  subtitle: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageSrc,
  altText,
  caption,
  subtitle,
}) => {
  return (
    <article className="relative w-full h-[320px] sm:h-[360px] md:h-[400px] lg:h-[440px] rounded-xl lg:rounded-2xl overflow-hidden group select-none shadow-xs">
      {/* Background Photography */}
      <img
        src={imageSrc}
        alt={altText}
        loading="lazy"
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />

      {/* Ambient Gradient Scrim for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />

      {/* Text INSIDE the Image (Matching Reference Bottom Container) */}
      <div className="absolute inset-x-3.5 sm:inset-x-4 bottom-3.5 sm:bottom-4 p-4 sm:p-5 rounded-xl bg-white/92 backdrop-blur-md border border-white/60 shadow-sm flex flex-col items-start text-left transition-transform duration-300 group-hover:-translate-y-1">
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#59697A]">
          {caption}
        </span>
        <p className="mt-1 text-[13px] sm:text-[14px] font-medium text-[#17212B] leading-snug">
          {subtitle}
        </p>
      </div>
    </article>
  );
};

export const DentalIntroSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Aurel Dental Philosophy"
      className="relative w-full bg-white text-[#17212B] py-16 sm:py-20 md:py-24 lg:py-28 transition-colors"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* ========================================================= */}
        {/* SECTION HEADER: Only the Main Headline (Clean & Editorial) */}
        {/* ========================================================= */}
        <header className="flex flex-col items-center text-center max-w-[860px] mx-auto mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-light tracking-tight text-[#17212B] leading-[1.12]">
            Dentistry, Designed Around You.
          </h2>
        </header>

        {/* ========================================================= */}
        {/* THREE BLOCKS: 1fr : 1fr : 0.55fr Desktop Composition */}
        {/* Card 1 & 2: Images with Text INSIDE */}
        {/* Card 3: No image, 'View All Services' with Arrow */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_0.55fr] gap-6 lg:gap-7 items-stretch">
          {/* Card 1 — Personalized Care (Landscape with Text Inside) */}
          <ImageCard
            imageSrc="/assets/intro/personalized_care.jpg"
            altText="Aurel dental personalized consultation with patient"
            caption="PERSONALIZED CARE"
            subtitle="Thoughtful consultations tailored to your individual dental journey"
          />

          {/* Card 2 — Modern Treatments (Landscape with Text Inside) */}
          <ImageCard
            imageSrc="/assets/intro/modern_treatment.jpg"
            altText="Gentle and precise dental examination using modern clinical technology"
            caption="MODERN TREATMENTS"
            subtitle="Advanced precision methods focused on gentleness and patient comfort"
          />

          {/* Card 3 — 'View All Services' Action Card (Narrower, No Image) */}
          <div className="md:col-span-2 lg:col-span-1">
            <a
              href="#treatments"
              className="relative w-full h-[320px] sm:h-[360px] md:h-[400px] lg:h-[440px] rounded-xl lg:rounded-2xl bg-gradient-to-b from-[#F2F6FA] to-[#E5EDF5] border border-[#CCD8E5]/80 hover:border-[#17212B]/40 shadow-xs hover:shadow-md p-6 sm:p-7 md:p-8 flex flex-col justify-between items-start text-left group transition-all duration-300 cursor-pointer overflow-hidden select-none"
            >
              {/* Top Row: Micro-Label & Action Arrow Circle */}
              <div className="w-full flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#59697A]">
                  CLINICAL DIRECTORY
                </span>
                <div className="w-9 h-9 rounded-full bg-[#17212B] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:bg-black shadow-xs">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>

              {/* Lower Body: 'View All Services' with Arrow */}
              <div className="mt-auto pt-6 flex flex-col items-start w-full">
                <div className="inline-flex items-center gap-2.5 text-2xl sm:text-[26px] font-light tracking-tight text-[#17212B] group-hover:text-black transition-colors">
                  <span>View All Services</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
                <p className="mt-2 text-[13px] text-[#59697A] leading-relaxed max-w-[270px]">
                  Explore our complete range of specialized smile architecture & diagnostic procedures.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
