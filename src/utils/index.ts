export const SERVER_URLS = [
  process.env.NEXT_PUBLIC_SERVER_API,
  process.env.NEXT_PUBLIC_SERVER_API1,
  process.env.NEXT_PUBLIC_SERVER_API2,
];
export const formatCurrency = (
  price: number,
  locale: string = "vi-VN",
  currency: string = "VND"
) => {
  if (price < 0) {
    return "Error : Price must be greater than 0";
  }
  if (isNaN(price)) {
    return "Error : Price must be a number";
  }
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(price);
};

export const formattedTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) {
    return "Error: Invalid date";
  }

  const formattedDate = date.toLocaleString("en-US", {
    dateStyle: "short",
    timeStyle: "short",
  });

  return formattedDate;
};
export const validateUsername = (currentUsername: string) => {
  return (_: any, value: string) => {
    if (value && /\s/.test(value)) {
      return Promise.reject(new Error("Username cannot contain spaces!"));
    }
    if (value === currentUsername) {
      return Promise.reject(
        new Error("New username must be different from the current username!")
      );
    }
    return Promise.resolve();
  };
};