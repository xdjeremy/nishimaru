interface AdminNavLink {
  name: string;
  path: string;
}

const adminNavLinks: AdminNavLink[] = [
  {
    name: "Dashboard",
    path: "/admin",
  },
  {
    name: "Categories",
    path: "/admin/category",
  },
  {
    name: "Food Items",
    path: "/admin/food-items",
  },
  {
    name: "Order Section",
    path: "/admin/order",
  },
  {
    name: "Manage Admins",
    path: "/admin/admins",
  },
];

export default adminNavLinks;
