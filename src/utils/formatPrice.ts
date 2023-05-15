// format price with currency
export const formatPrice = (
  price: number,
  local = "en-US",
  currency = "USD"
) => {
  return new Intl.NumberFormat(local, { style: "currency", currency }).format(
    price
  );
};

// format price or number with commas
export const priceWithCommas = (
  price: number,
  startIcon = "",
  endIcon = "",
  local = "en-US"
) => {
  return (
    (startIcon && `${startIcon} `) +
    Intl.NumberFormat(local).format(price) +
    (endIcon && ` ${endIcon}`)
  );
};
