interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Categories",
    path: "/category",
  },
  {
    name: "Foods",
    path: "/foods",
  },
  {
    name: "Cart",
    path: "/checkout",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Register",
    path: "/register",
  },
  {
    name: "Logout",
    path: "/logout",
  },
];

export default navLinks;
