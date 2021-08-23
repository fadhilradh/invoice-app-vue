import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import InvoiceDetail from "../views/InvoiceDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
