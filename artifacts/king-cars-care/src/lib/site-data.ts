export type ServiceData = {
  slug: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  intro: string;
  symptoms: string;
  included: string[];
  professional: string;
  questions: string;
  mark: string;
};

export const services: ServiceData[] = [
  {
    slug: 'oil-filter-service',
    shortTitle: 'Oil & Filter Service',
    title: 'OIL & FILTER SERVICE',
    subtitle: 'Keep the heart of your vehicle moving cleanly.',
    intro: 'Routine engine care is not busywork. It is the simplest way to protect performance, fuel economy, and the miles ahead.',
    symptoms: 'Mileage is climbing, the oil warning light is on, or you cannot remember the last service? Start with a clear baseline.',
    included: ['Engine oil and filter replacement', 'Fluid and leak check', 'Service interval reset', 'Visual inspection with honest notes'],
    professional: 'The right oil spec, the right filter, and a careful inspection matter more than a rushed stamp in a service book.',
    questions: 'Ask us about your vehicle’s interval, oil type, driving habits, or any warning light that has appeared.',
    mark: '01',
  },
  {
    slug: 'brake-service',
    shortTitle: 'Brake Service',
    title: 'BRAKE SERVICE',
    subtitle: 'Stopping power should feel predictable every time.',
    intro: 'Noise, vibration, a soft pedal, or a change in feel deserves attention. We inspect first, then explain what your vehicle actually needs.',
    symptoms: 'Squealing, grinding, pulling, pulsation, or extra pedal travel can all point to a brake system asking for a closer look.',
    included: ['Brake pad and rotor inspection', 'Caliper and hardware check', 'Brake fluid condition review', 'Road-test observations when appropriate'],
    professional: 'Brakes are a system, not a single part. Inspection-based recommendations help you avoid both guesswork and unnecessary work.',
    questions: 'Tell us what you feel, hear, or see. Those details help us make the inspection more precise from the start.',
    mark: '02',
  },
  {
    slug: 'computer-diagnostics',
    shortTitle: 'Computer Diagnostics',
    title: 'COMPUTER DIAGNOSTICS',
    subtitle: 'A warning light is a message. We take the time to read it.',
    intro: 'Modern vehicles require modern tools and old-fashioned methodical thinking. We connect the dots between codes, symptoms, and the vehicle in front of us.',
    symptoms: 'Warning lights, drivability changes, hard starts, rough running, or an intermittent issue that keeps returning are all worth documenting.',
    included: ['Full system scan', 'Code and data interpretation', 'Targeted visual checks', 'Clear next-step recommendations'],
    professional: 'A code is not automatically a failed part. Careful diagnostics reduce parts-swapping and get you closer to the real cause.',
    questions: 'Share when the light appeared, what changed, and whether the issue comes and goes. Context saves time.',
    mark: '03',
  },
  {
    slug: 'ac-service',
    shortTitle: 'AC Service',
    title: 'AC SERVICE',
    subtitle: 'Comfort is part of a well-cared-for vehicle.',
    intro: 'Weak airflow, warm vents, odd smells, or strange noises can make every drive harder. We look at the complete climate system, not just the symptom.',
    symptoms: 'The air is not cold, cooling fades at idle, the fan is noisy, or the cabin carries a musty smell? Let’s find the reason.',
    included: ['Climate performance check', 'Refrigerant and leak assessment', 'Blower and airflow inspection', 'Cabin filter recommendation when needed'],
    professional: 'Proper AC service means measuring performance and looking for the cause before adding anything to the system.',
    questions: 'Note whether the issue changes with speed, weather, or engine temperature. Those clues make the next step clearer.',
    mark: '04',
  },
];

export const supportingServices = [
  { title: 'SUSPENSION & STEERING', text: 'Control, stability, and a ride that feels composed.', mark: '05' },
  { title: 'PREVENTIVE MAINTENANCE', text: 'Small, scheduled checks that protect bigger miles.', mark: '06' },
];