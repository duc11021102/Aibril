import { createRouter, createWebHashHistory } from "vue-router";

// import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView";
import UserManagement from "../views/UserManagementView.vue"
import RoleManagementView from "../views/RoleManagementView.vue"
import SettingsView from "../views/SettingsView.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/", component: DashboardView, children: [
        {
          path: "/", component: UserManagement
        },
        {
          path: "/user-management", component: UserManagement
        },
        {
          path: "/role-management", component: RoleManagementView
        },
        {
          path: "/settings", component: SettingsView
        },
        // {
        //   path:"/", component: UserManagement
        // },
        // {
        //   path:"/", component: UserManagement
        // },
      ]
    },
    { path: "/login", component: LoginView },

  ]
})
export default router;
// import { createRouter, createWebHistory } from "vue-router";

// // import HomeView from "../views/HomeView.vue";
// import LoginView from "../views/LoginView.vue";
// import DashboardView from "../views/DashboardView";
// import UserManagement from "../views/UserManagementView.vue"
// // import RoleManagementView from "../views/RoleManagementView.vue"
// // import SettingsView from "../views/SettingsView.vue"

// const routes = [
//   {
//     path: "/login",
//     name: "login",
//     component: LoginView,
//   },
//   {
//     path: "/",
//     name: "dashboard",
//     component: DashboardView,
//     children: [{
//       name: 'userManagement',
//       path: '/userManagement',
//       component: UserManagement
//     },
//       // {
//       //   name: 'roleManagement',
//       //   path: '/roleManagement',
//       //   component: RoleManagementView
//       // }, {
//       //   name: 'settings',
//       //   path: '/settings',
//       //   component: SettingsView
//       // }
//     ]
//   },

// ];

// const router = Router();
// export default router;
// function Router() {
//   const router = new createRouter({
//     history: createWebHistory(),
//     routes,
//   });
//   return router;
// }
