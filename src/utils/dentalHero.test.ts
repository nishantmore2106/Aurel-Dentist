import test from 'node:test';
import assert from 'node:assert/strict';
import { getClinicHoursStatus, validateBookingForm, formatMetricNumber } from './dentalHero';

test('getClinicHoursStatus reports open during clinic hours (11:00)', () => {
  const status = getClinicHoursStatus(11);
  assert.equal(status.isOpen, true);
  assert.equal(status.statusText, "We're Open Clinic");
  assert.equal(status.formattedHours, '09:00 AM – 06:00 PM');
});

test('getClinicHoursStatus reports closed during evening hours (21:00)', () => {
  const status = getClinicHoursStatus(21);
  assert.equal(status.isOpen, false);
  assert.equal(status.statusText, "Clinic Closed · Opens 09:00 AM");
});

test('validateBookingForm accepts valid booking details', () => {
  const result = validateBookingForm({
    name: 'Elena Rostova',
    email: 'elena@example.com',
    phone: '+41 79 123 4567',
    treatment: 'Aesthetic Smile Architecture',
    date: '2026-10-30',
  });
  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});
});

test('validateBookingForm rejects invalid email and short name', () => {
  const result = validateBookingForm({
    name: 'A',
    email: 'not-an-email',
    phone: '123',
    treatment: '',
    date: '',
  });
  assert.equal(result.valid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.treatment);
  assert.ok(result.errors.date);
});

test('formatMetricNumber correctly formats small and large counts', () => {
  assert.equal(formatMetricNumber(827), '827+');
  assert.equal(formatMetricNumber(1200), '1.2k+');
});
