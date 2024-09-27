export const URL = "https://server-api-mauve.vercel.app";
// ;
// "http://127.0.0.1:8080/"
export function formatCurrency(price: any) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}
export function formattedTimestamp(timestamp: any) {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString("en-US", {
    dateStyle: "short",
    timeStyle: "medium",
  });
  return formattedDate;
}
