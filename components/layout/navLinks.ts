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
    path: "/categories",
  },
  {
    name: "Foods",
    path: "/foods",
  },
  {
    name: "Signout",
    path: "/signout",
  },
];

export default navLinks;