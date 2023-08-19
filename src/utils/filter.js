export function registerGlobalFilter(app) {
  app.config.globalProperties.$filters = {
    toCurrency(value) {
      if (typeof value !== "number") {
        return value;
      }

      var formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(value);
    },
  };
}
