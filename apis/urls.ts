export const urls= {
  account: {
    login: "accounts/api/token/",
    signup: "accounts/register/",
    refresh: "accounts/api/token/refresh/"
  },
  products: {
    list: (page: number, perPage: number) => `Product/list/?p=${page}&size=${perPage}`
  }
}