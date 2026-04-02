// Central event configuration
// Update these values each year — all components pull from here automatically
const currentYear = new Date().getFullYear();

const eventConfig = {
  year: currentYear,
  name: `Dental Trade Show ${currentYear}`,
  shortName: `NEPDENT DTS ${currentYear}`,
  dates: `April 9-11, ${currentYear}`,
  dateRange: `April 9-11, ${currentYear}`,
  location: 'Kathmandu, Nepal',
  venue: 'Kathmandu Exhibition Center, Nepal',
  hours: '9:00 AM - 6:00 PM Daily',
  // ISO date for countdown timer (first day of event, 9 AM local)
  startDate: `${currentYear}-04-09T09:00:00`,
  supportEmail: `support@nepdent${currentYear}.com`,
};

export default eventConfig;