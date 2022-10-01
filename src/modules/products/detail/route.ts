export default {
  path: "/:id",
  name: "product-detail",
  props: true,
  component: () => import("./DetailPage.vue"),
};
