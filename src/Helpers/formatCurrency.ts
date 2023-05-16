function formatCurrency(number: number) {
  return number.toLocaleString("es-MX", { style: "currency", currency: "MXN" });
}
export default formatCurrency;
