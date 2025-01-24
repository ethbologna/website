export const isUpcoming = (date: string): boolean => {
    const eventDate = new Date(date);
    const today = new Date();
    
    // Reset time part for accurate date comparison
    eventDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    
    return eventDate >= today;
  };