import React, { useState } from 'react';
import { X, Calendar, Check, ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { validateBookingForm, BookingData } from '../utils/dentalHero';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatment?: string;
}

const TREATMENTS = [
  { id: 'aesthetic', label: 'Aesthetic Smile Architecture', duration: '60 min', tag: 'Bespoke' },
  { id: 'invisalign', label: 'Invisalign & Clear Orthodontics', duration: '45 min', tag: 'Digital 3D' },
  { id: 'porcelain', label: 'Ultra-Thin Ceramic Veneers', duration: '90 min', tag: 'Microscopic' },
  { id: 'preventative', label: 'Comprehensive Dental Health Check', duration: '45 min', tag: 'Preventative' },
  { id: 'whitening', label: 'Laser Teeth Brightening & Polish', duration: '40 min', tag: 'Fast-Track' },
];

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultTreatment = 'Aesthetic Smile Architecture',
}) => {
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    email: '',
    phone: '',
    treatment: defaultTreatment,
    date: '2026-10-28',
  });
  const [timeSlot, setTimeSlot] = useState('10:30 AM');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateBookingForm(formData);
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    const randomRef = 'AUR-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      treatment: defaultTreatment,
      date: '2026-10-28',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#17212B]/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-[#F8FAFC] border border-white/80 rounded-[4px] shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#CCD8E5]/50 bg-white/60">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-[2px] bg-[#050505] flex items-center justify-center text-white text-[10px] font-bold">
              A
            </div>
            <span id="modal-title" className="text-xs font-semibold tracking-wider uppercase text-[#17212B]">
              Aurel Dental · Reserve Consultation
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close appointment modal"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#59697A] hover:text-[#17212B] hover:bg-black/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#17212B] text-white flex items-center justify-center mx-auto shadow-md">
              <Check className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-light text-[#17212B] tracking-tight">
                Consultation Confirmed
              </h3>
              <p className="text-xs text-[#59697A] mt-1.5 leading-relaxed">
                Thank you, <span className="font-medium text-[#17212B]">{formData.name}</span>. Your personalized appointment request has been scheduled with our senior clinic specialist.
              </p>
            </div>

            <div className="p-4 rounded-[4px] bg-[#CCD8E5]/30 border border-[#CCD8E5]/70 text-left space-y-2 text-xs">
              <div className="flex justify-between text-[#59697A]">
                <span>Reference ID</span>
                <span className="font-mono font-medium text-[#17212B]">{bookingRef}</span>
              </div>
              <div className="flex justify-between text-[#59697A]">
                <span>Treatment</span>
                <span className="font-medium text-[#17212B]">{formData.treatment}</span>
              </div>
              <div className="flex justify-between text-[#59697A]">
                <span>Date & Time</span>
                <span className="font-medium text-[#17212B]">{formData.date} at {timeSlot}</span>
              </div>
              <div className="flex justify-between text-[#59697A]">
                <span>Location</span>
                <span className="font-medium text-[#17212B]">Aurel Clinic · Vadodara, India</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 bg-[#050505] text-white text-xs font-medium rounded-[2px] hover:bg-black/85 transition-colors"
              >
                Close & Return to Clinic
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-[11px] font-medium tracking-wide uppercase text-[#59697A] mb-1.5">
                Select Treatment
              </label>
              <select
                aria-label="Treatment type"
                value={formData.treatment}
                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                className="w-full text-xs bg-white border border-[#CCD8E5] rounded-[2px] px-3 py-2 text-[#17212B] focus:outline-none focus:border-[#17212B]"
              >
                {TREATMENTS.map((t) => (
                  <option key={t.id} value={t.label}>
                    {t.label} ({t.duration}) — {t.tag}
                  </option>
                ))}
              </select>
              {errors.treatment && <p className="text-[11px] text-red-600 mt-1">{errors.treatment}</p>}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-medium tracking-wide uppercase text-[#59697A] mb-1.5">
                  Consultation Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    aria-label="Appointment date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full text-xs bg-white border border-[#CCD8E5] rounded-[2px] px-3 py-2 text-[#17212B] focus:outline-none focus:border-[#17212B]"
                  />
                </div>
                {errors.date && <p className="text-[11px] text-red-600 mt-1">{errors.date}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-medium tracking-wide uppercase text-[#59697A] mb-1.5">
                  Preferred Time Slot
                </label>
                <select
                  aria-label="Preferred time slot"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full text-xs bg-white border border-[#CCD8E5] rounded-[2px] px-3 py-2 text-[#17212B] focus:outline-none focus:border-[#17212B]"
                >
                  <option value="09:30 AM">09:30 AM (Morning)</option>
                  <option value="10:30 AM">10:30 AM (Morning)</option>
                  <option value="12:00 PM">12:00 PM (Midday)</option>
                  <option value="02:30 PM">02:30 PM (Afternoon)</option>
                  <option value="04:30 PM">04:30 PM (Evening)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium tracking-wide uppercase text-[#59697A] mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. Dr. Jennifer Vance"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full text-xs bg-white border border-[#CCD8E5] rounded-[2px] px-3 py-2 text-[#17212B] focus:outline-none focus:border-[#17212B]"
              />
              {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-medium tracking-wide uppercase text-[#59697A] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs bg-white border border-[#CCD8E5] rounded-[2px] px-3 py-2 text-[#17212B] focus:outline-none focus:border-[#17212B]"
                />
                {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-medium tracking-wide uppercase text-[#59697A] mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98200 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs bg-white border border-[#CCD8E5] rounded-[2px] px-3 py-2 text-[#17212B] focus:outline-none focus:border-[#17212B]"
                />
                {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#050505] text-white text-xs font-medium rounded-[2px] hover:bg-black/85 transition-colors flex items-center justify-center gap-2 group"
              >
                <span>Confirm Consultation Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-[10px] text-[#59697A] pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#17212B]" /> Private & Confidential
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#17212B]" /> Immediate Confirmation
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
