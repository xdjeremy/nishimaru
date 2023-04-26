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
    path: "/admin/categories",
  },
  {
    name: "Food Items",
    path: "/admin/food-items",
  },
  {
    name: "Order Section",
    path: "/admin/orders",
  },
  {
    name: "Manage Admins",
    path: "/admin/admins",
  },
];

export default adminNavLinks;
