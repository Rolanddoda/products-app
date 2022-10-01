import ProductOverviewRoute from "./overview/route";
import ProductDetailRoute from "./detail/route";

export default {
  path: "/products",
  name: "products",
  children: [ProductOverviewRoute, ProductDetailRoute],
};
