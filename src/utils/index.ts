const IntlCurrencyBRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export function formatMoney(value: string | number) {
  try {
    return IntlCurrencyBRL.format(Number(value));
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.error(error);
    return value;
  }
}
