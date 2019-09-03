import VueRouter from "vue-router";
import Users from "@/views/Users/Index";
import Login from "@/views/Login";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      name: "users",
      path: "/users",
      component: Users
    }
  ]
});
