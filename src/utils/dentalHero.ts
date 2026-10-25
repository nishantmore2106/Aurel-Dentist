export interface ClinicHoursStatus {
  isOpen: boolean;
  statusText: string;
  formattedHours: string;
  nextOpening?: string;
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  date: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

/**
 * Checks clinic operational status based on time (09:00 - 18:00 local time).
 */
export function getClinicHoursStatus(currentHour: number = new Date().getHours()): ClinicHoursStatus {
  const isOpen = currentHour >= 9 && currentHour < 18;
  return {
    isOpen,
    statusText: isOpen ? "We're Open Clinic" : "Clinic Closed · Opens 09:00 AM",
    formattedHours: "09:00 AM – 06:00 PM",
  };
}

/**
 * Validates dental consultation booking form input.
 */
export function validateBookingForm(data: BookingData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your full name (at least 2 characters).";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please provide a valid email address.";
  }

  const phoneClean = data.phone.replace(/[^0-9+]/g, "");
  if (!data.phone || phoneClean.length < 8) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.treatment || data.treatment.trim() === "") {
    errors.treatment = "Please select a dental service.";
  }

  if (!data.date || data.date.trim() === "") {
    errors.date = "Please select a preferred consultation date.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formats statistics with clean thousand separators and plus suffixes.
 */
export function formatMetricNumber(val: number, suffix: string = "+"): string {
  if (val >= 1000) {
    return `${(val / 1000).toFixed(1)}k${suffix}`;
  }
  return `${val}${suffix}`;
}
