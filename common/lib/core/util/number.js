export const commaFormat = number =>
  number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0
