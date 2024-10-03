export const URL = process.env.NEXT_PUBLIC_SERVER_API;
export const formatCurrency = (
  price: number,
  locale: string = "vi-VN",
  currency: string = "VND"
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(price);
};

export const formattedTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString("en-US", {
    dateStyle: "short",
    // timeStyle: "short",
  });
  return formattedDate;
};
