import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  MapPin,
  X,
  Volume2,
  VolumeX,
  ChevronDown,
  Info,
  Check,
  Compass,
  Sparkles,
  Layers,
  Globe,
} from 'lucide-react';
import { AppointmentModal } from './AppointmentModal';
import { getClinicHoursStatus } from '../utils/dentalHero';

export const DentalHero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('Aesthetic Smile Architecture');
  const [currentLang, setCurrentLang] = useState<'EN' | 'DE' | 'FR'>('EN');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [clinicStatus, setClinicStatus] = useState(getClinicHoursStatus());
  const [sidebarDismissed, setSidebarDismissed] = useState(false);

  useEffect(() => {
    setClinicStatus(getClinicHoursStatus());
  }, []);

  const toggleAudioAmbience = () => {
    if (isAudioMuted) {
      try {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(432, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(528, ctx.currentTime + 1.2);
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 2.6);
      } catch {
        // Fallback gracefully
      }
      setIsAudioMuted(false);
    } else {
      setIsAudioMuted(true);
    }
  };

  const handleOpenBooking = (treatment = 'Aesthetic Smile Architecture') => {
    setSelectedTreatment(treatment);
    setIsModalOpen(true);
  };

  return (
    <section
      aria-label="Aurel Dental Clinic Hero"
      className="relative w-full min-h-[calc(100vh-1.25rem)] sm:min-h-[calc(100vh-1.75rem)] md:min-h-[calc(100vh-2.25rem)] lg:min-h-[calc(100vh-2.5rem)] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] border-2 border-white/90 shadow-[0_4px_32px_rgba(23,33,43,0.06),0_0_0_1px_rgba(255,255,255,0.7)] flex flex-col justify-between overflow-hidden select-none bg-gradient-to-b from-[#CCD8E5] via-[#BACEE4] to-[#A9C9E8]"
    >
      {/* Ambient Lighting & Vignette Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-80"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.48) 0%, rgba(204, 216, 229, 0) 65%), radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.2) 0%, rgba(169, 201, 232, 0) 50%)',
        }}
      />



      {/* ========================================================= */}
      {/* A. TOP NAVIGATION */}
      {/* ========================================================= */}
      <header className="relative z-20 w-full pt-5 md:pt-7 px-6 md:px-12 lg:px-16">
        <nav className="flex items-center justify-between">
          {/* Left: Brand Mark & Clinic Name */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Aurel Dental Clinic Home"
            >
              {/* Monogram Brand Mark: Rounded square with abstract dental monogram */}
              <div className="w-8 h-8 rounded-[7px] bg-[#050505] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Stylized monogram combining geometric 'A' & smooth anatomical dental arc */}
                  <path d="M12 3.5C7.5 3.5 4 7 4 11.5C4 16 7.5 20.5 12 20.5C16.5 20.5 20 16 20 11.5C20 7 16.5 3.5 12 3.5Z" strokeOpacity="0.4" strokeWidth="1.2" />
                  <path d="M9 16L12 8L15 16" />
                  <path d="M10 13.5H14" />
                </svg>
              </div>
              <span className="text-[15px] font-medium tracking-tight text-[#17212B]">
                Aurel Dental
              </span>
            </a>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-9 lg:gap-11">
            <a
              href="#home"
              className="text-[13px] text-[#17212B] font-medium tracking-tight relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#17212B]"
            >
              Home
            </a>
            <a
              href="#treatments"
              onClick={(e) => {
                e.preventDefault();
                handleOpenBooking('Aesthetic Smile Architecture');
              }}
              className="text-[13px] text-[#17212B]/75 hover:text-[#17212B] transition-colors font-normal tracking-tight"
            >
              Treatments
            </a>
            <a
              href="#clinic"
              onClick={(e) => {
                e.preventDefault();
                setActiveTooltip('Aurel Dental Studio · Vadodara flagship facility equipped with digital scanner suites.');
                setTimeout(() => setActiveTooltip(null), 4000);
              }}
              className="text-[13px] text-[#17212B]/75 hover:text-[#17212B] transition-colors font-normal tracking-tight"
            >
              Our Clinic
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleOpenBooking();
              }}
              className="text-[13px] text-[#17212B]/75 hover:text-[#17212B] transition-colors font-normal tracking-tight"
            >
              Contact
            </a>
          </div>

          {/* Right: Language Selector & Primary Header Action */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                aria-label="Select language"
                aria-expanded={isLangOpen}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-white/40 hover:bg-white/60 border border-white/60 backdrop-blur-xs text-[12px] font-medium text-[#17212B] transition-colors"
              >
                <Globe className="w-3 h-3 text-[#59697A]" />
                <span>{currentLang}</span>
                <ChevronDown className="w-3 h-3 text-[#59697A]" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-1 w-24 bg-white/95 backdrop-blur-md border border-[#CCD8E5] rounded-[3px] shadow-lg py-1 z-30 animate-in fade-in">
                  {(['EN', 'DE', 'FR'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1 text-xs flex items-center justify-between hover:bg-[#CCD8E5]/30 ${
                        currentLang === lang ? 'font-semibold text-[#17212B]' : 'text-[#59697A]'
                      }`}
                    >
                      {lang}
                      {currentLang === lang && <Check className="w-3 h-3" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Black Header Action Button (Crisp rectangular style) */}
            <button
              onClick={() => handleOpenBooking()}
              className="bg-[#050505] text-white text-[12px] font-medium px-4 py-2 rounded-[2px] hover:bg-black/85 transition-all shadow-sm active:scale-95"
            >
              Book Visit
            </button>
          </div>
        </nav>
      </header>

      {/* ========================================================= */}
      {/* MAIN HERO CONTENT AREA */}
      {/* ========================================================= */}
      <main className="relative z-10 w-full flex-1 flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-5 pb-6">
        {/* UPPER ROW: Micro-Badge (Left) & Location / Operating Hours (Right) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2">
          {/* Top-Left Trust Badge (matching reference's "• Trusted Dental Care") */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/45 backdrop-blur-md border border-white/65 shadow-[0_2px_8px_rgba(23,33,43,0.04)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#17212B] animate-pulse" />
            <span className="text-[11px] md:text-[12px] font-medium tracking-wide text-[#17212B]/90">
              Trusted Dental Care
            </span>
          </div>

          {/* Top-Right Location Indicator & Schedule (Reference Fidelity) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-left sm:text-right">
            {/* Location */}
            <div className="flex items-center gap-1.5 text-[12px] md:text-[13px] font-medium text-[#17212B]/85">
              <MapPin className="w-3.5 h-3.5 text-[#59697A]" />
              <span>Vadodara, India</span>
            </div>

            {/* Clinic Schedule Micro-Label */}
            <div className="text-left sm:text-right border-l-0 sm:border-l sm:border-[#17212B]/15 sm:pl-5">
              <p className="text-[10px] tracking-wider uppercase text-[#59697A]">
                October 24, 2026
              </p>
              <p className="text-[11px] font-medium text-[#17212B]">
                {clinicStatus.statusText}
              </p>
              <p className="text-[10px] text-[#59697A]">
                {clinicStatus.formattedHours}
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* EDITORIAL HEADLINE & FOCAL COMPOSITION */}
        {/* ========================================================= */}
        <div className="relative my-auto py-2 lg:py-4 z-10 w-full">
          <div className="w-full flex flex-col lg:flex-row items-start justify-between relative">
            {/* LEFT COLUMN: Headline + Description + CTA */}
            {/* Has z-10, extends into center so "Exceptional" slides behind the z-20 3D tooth crown */}
            <div className="w-full lg:w-[58%] xl:w-[56%] flex flex-col items-start z-10 pr-0">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[104px] xl:text-[118px] 2xl:text-[130px] font-light tracking-tight leading-[0.90] text-[#17212B]">
                <span className="block font-light text-[#17212B] whitespace-nowrap">
                  Exceptional
                </span>
                <span
                  className="block font-light text-white select-all drop-shadow-[0_2px_8px_rgba(23,33,43,0.12)] whitespace-nowrap"
                  style={{
                    textShadow:
                      '0 1px 3px rgba(23,33,43,0.15), 0 0 16px rgba(255,255,255,0.4)',
                  }}
                >
                  Dental Care
                </span>
              </h1>

              {/* Supporting Description */}
              <p className="mt-5 md:mt-7 text-[13px] md:text-[14px] text-[#59697A] leading-relaxed max-w-[340px] font-normal">
                Thoughtful dentistry, advanced technology, and personalized care for a healthier, more confident smile.
              </p>

              {/* Primary CTA: Solid black rectangular button with arrow */}
              <div className="mt-6 md:mt-8 flex items-center gap-4">
                <button
                  onClick={() => handleOpenBooking()}
                  className="group relative inline-flex items-center gap-3 px-6 py-3.5 bg-[#050505] text-white text-[13px] font-medium rounded-[2px] shadow-sm hover:bg-black/85 transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => {
                    setActiveTooltip(
                      'Explore our specialized smile architecture & diagnostic scanner services.'
                    );
                    setTimeout(() => setActiveTooltip(null), 4000);
                  }}
                  className="text-[12px] text-[#59697A] hover:text-[#17212B] transition-colors underline underline-offset-4 decoration-[#59697A]/40"
                >
                  Explore Services
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Aligned with proper right screen margin & matching scale */}
            <div className="w-full lg:w-[42%] xl:w-[44%] flex flex-col items-start lg:items-end text-left lg:text-right z-10 mt-8 lg:mt-0 pr-0 lg:pr-6">
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[104px] xl:text-[118px] 2xl:text-[130px] font-light tracking-tight leading-[0.90] text-[#17212B]">
                <span className="block font-light text-[#17212B]/90 whitespace-nowrap">
                  &amp; Straight
                </span>
                <span className="block font-light text-[#17212B] whitespace-nowrap">
                  Smile
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CENTER 3D DENTAL IMPLANT & ANNOTATION ECOSYSTEM */}
        {/* Positioned at left-[53%] top-[55%] so "Exceptional" hides cleanly behind the crown (z-20) */}
        {/* ========================================================= */}
        <div className="absolute left-[53%] top-[55%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex flex-col items-center justify-center">
          {/* Soft Static Ambient Radial Halo behind Crown */}
          <div className="absolute top-[26%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] rounded-full bg-white/40 blur-3xl pointer-events-none animate-halo-fade" />

          {/* 3D Implant Vessel Wrapper with smooth bottom-to-up reveal animation */}
          <div className="relative flex items-center justify-center animate-reveal-up">
            {/* Elliptical Perspective Orbit Ring */}
            <div
              className="absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] md:w-[490px] lg:w-[550px] h-[95px] sm:h-[115px] lg:h-[125px] rounded-[100%] border border-white/50 pointer-events-none -rotate-[14deg] shadow-[0_0_18px_rgba(255,255,255,0.3)] opacity-75"
            />

            {/* Central 3D Implant Image Container (pixel-perfect optical centering & increased scale) */}
            <div className="relative w-[350px] sm:w-[420px] md:w-[500px] lg:w-[580px] xl:w-[640px] h-[480px] sm:h-[600px] md:h-[720px] lg:h-[820px] xl:h-[870px] max-h-[92vh] flex items-center justify-center overflow-visible">
              <img
                src="/assets/aistudio/4e674d26-77e4-49b9-98c3-5c73ffcdb3c7.png"
                alt="Aurel High-Precision Dental Implant"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto max-w-none select-none pointer-events-none drop-shadow-[0_28px_56px_rgba(23,33,43,0.24)]"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* LOWER SECTION: Secondary Information & Understated Statistics */}
        {/* Matching Reference Image: Left stat vs Right vertical stat stack */}
        {/* ========================================================= */}
        <div className="relative z-10 w-full mt-6 md:mt-8 pt-5 border-t border-[#17212B]/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          {/* Lower-Left Area: Statistic 827+ (as specified in prompt) */}
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#17212B] mt-2.5 flex-shrink-0" />
            <div>
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#17212B] tracking-tight leading-none">
                827+
              </div>
              <p className="text-[12px] md:text-[13px] text-[#59697A] mt-1.5 leading-snug max-w-[240px]">
                Transform your smile quickly and with our exceptional services.
              </p>
            </div>
          </div>

          {/* Lower-Right Area: Vertical Stack (170+ & 85% Satisfied Clients) */}
          <div className="flex md:flex-col items-start md:items-end gap-6 md:gap-4 text-left md:text-right">
            {/* Stat: 170+ */}
            <div>
              <div className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#17212B] tracking-tight leading-none">
                170+
              </div>
              <p className="text-[11px] md:text-[12px] text-[#59697A] mt-1 leading-tight">
                Performed surgeries
              </p>
            </div>

            {/* Stat: 85% Satisfied Clients */}
            <div>
              <div className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#17212B] tracking-tight leading-none">
                85%
              </div>
              <p className="text-[11px] md:text-[12px] text-[#59697A] mt-1 leading-tight">
                Satisfied Clients
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* ========================================================= */}
      {/* G. BACKGROUND DECORATION: Oversized Typography Watermark */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-4%] left-0 right-0 z-0 flex justify-center overflow-hidden opacity-[0.045] select-none"
      >
        <span className="text-[20vw] font-extralight tracking-[0.06em] text-[#17212B] leading-none whitespace-nowrap uppercase">
          Aurel Dental
        </span>
      </div>

      {/* ========================================================= */}
      {/* H. RIGHT-SIDE UTILITY CONTROLS (Exact Reference Layout) */}
      {/* ========================================================= */}
      {!sidebarDismissed && (
        <aside
          aria-label="Clinic utility controls"
          className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-2.5"
        >
          {/* Control 1: Black circular close / toggle button (Reference style with 'x') */}
          <button
            onClick={() => setSidebarDismissed(true)}
            aria-label="Minimize utility controls"
            className="w-8 h-8 rounded-full bg-[#050505] text-white flex items-center justify-center hover:bg-black/80 transition-colors shadow-sm"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Control 2: Acoustic ambient soundscape */}
          <button
            onClick={toggleAudioAmbience}
            aria-label={isAudioMuted ? 'Play subtle acoustic clinic soundscape' : 'Mute soundscape'}
            className="w-8 h-8 rounded-full bg-white/40 hover:bg-white/70 border border-white/60 backdrop-blur-md flex items-center justify-center text-[#17212B] transition-colors"
          >
            {isAudioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* Control 3: Compass / Location quick info */}
          <button
            onClick={() => {
              setActiveTooltip(
                'Aurel Dental Clinic · 104 Alkapuri Avenue, Vadodara. Mon-Sat 09:00 - 18:00.'
              );
              setTimeout(() => setActiveTooltip(null), 5000);
            }}
            aria-label="Clinic details and coordinates"
            className="w-8 h-8 rounded-full bg-white/40 hover:bg-white/70 border border-white/60 backdrop-blur-md flex items-center justify-center text-[#17212B] transition-colors"
          >
            <Compass className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

      {/* Floating active tooltip toast */}
      {activeTooltip && (
        <div
          role="status"
          className="fixed bottom-6 right-6 md:right-16 z-40 max-w-sm px-4 py-2.5 bg-[#17212B] text-white text-xs rounded-[3px] shadow-lg animate-in fade-in slide-in-from-bottom-2 flex items-center gap-3"
        >
          <span>{activeTooltip}</span>
          <button
            onClick={() => setActiveTooltip(null)}
            className="text-white/60 hover:text-white"
            aria-label="Dismiss notification"
          >
            ×
          </button>
        </div>
      )}

      {/* Reservation Dialog Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTreatment={selectedTreatment}
      />
    </section>
  );
};
