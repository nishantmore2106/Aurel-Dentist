/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DentalHero } from './components/DentalHero';
import { DentalIntroSection } from './components/DentalIntroSection';
import { DentalExperienceSection } from './components/DentalExperienceSection';
import { DentalAtmosphereSection } from './components/DentalAtmosphereSection';
import { DentalBrandStatementSection } from './components/DentalBrandStatementSection';
import { DentalFooter } from './components/DentalFooter';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section Container with Framed Border Space */}
      <div className="p-2.5 sm:p-3.5 md:p-4.5 lg:p-5 pb-0">
        <DentalHero />
      </div>

      {/* Second Section: Pure White Background, Seamless Transition */}
      <DentalIntroSection />

      {/* Third Section: The Aurel Dental Experience (Reference-Matched Layout) */}
      <DentalExperienceSection />

      {/* Fourth Section: Cinematic Full-Width Atmosphere & Experience */}
      <DentalAtmosphereSection />

      {/* Fifth Section: Balanced Two-Panel Brand Statement & Portrait */}
      <DentalBrandStatementSection />

      {/* Footer Section: Minimalist Editorial Black Footer */}
      <DentalFooter />
    </div>
  );
}
