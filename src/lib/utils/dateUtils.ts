export const isUpcoming = (date: string): boolean => {
  // Treat TBD or invalid dates as upcoming
  if (!date || date === "TBD" || date.toLowerCase().includes("confermare")) return true;

  const eventDate = new Date(date);
  const today = new Date(); // Current date (2025-01-09)

  // Reset time part for accurate date comparison
  today.setHours(0, 0, 0, 0);

  // If invalid date object (e.g. unparseable format), treat as upcoming
  if (isNaN(eventDate.getTime())) return true;

  eventDate.setHours(0, 0, 0, 0);

  return eventDate >= today;
};
