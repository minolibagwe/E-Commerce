const routesPath = {
  home: {
    id: "1",
    name: "Home",
    path: `/`,
    transKey: "navigationTabHome",
  },
  mens: {
    id: "2",
    name: "Mens",
    path: "mens",
  },
  womens: {
    id: "3",
    name: "womens",
    path: `/womens`,
  },
  electronics: {
    id: "4",
    name: "electronics",
    path: "/electronics",
  },
  cart: {
    id: "5",
    name: "cart",
    path: "/cart",
  },
  login: {
    id: "6",
    name: "login",
    path: "/login",
  },
  productdetails: {
    id: "7",
    name: "productdetails",
    path: "/product/:productId",
  },
};
export default routesPath;
