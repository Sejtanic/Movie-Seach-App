export const ratingColorReturn = (rating) => {
  if (rating < 5) return "red";
  if (rating > 5 && rating < 7.5) return "orange";
  if (rating > 7.5) return "green";
};
