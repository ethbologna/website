export const parseDate = (dateStr: string): Date | null => {
  if (!dateStr || dateStr === "TBD" || dateStr.toLowerCase().includes("confermare")) return null;

  // Handle DD.MM.YYYY format
  if (dateStr.includes('.')) {
    const parts = dateStr.split('.');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed in JS Date
      const year = parseInt(parts[2], 10);
      const date = new Date(year, month, day);
      if (!isNaN(date.getTime())) return date;
    }
  }

  // Fallback to standard parsing (e.g. YYYY-MM-DD)
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? null : date;
};

export const isUpcoming = (date: string): boolean => {
  const eventDate = parseDate(date);
  if (!eventDate) return true; // Treat TBD as upcoming

  const today = new Date();
  // Reset time part for accurate date comparison
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);

  return eventDate >= today;
};
