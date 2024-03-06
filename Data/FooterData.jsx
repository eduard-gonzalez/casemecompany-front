import { RiAppsFill, RiAppsLine, RiHeart3Fill, RiHeart3Line, RiHome2Fill, RiHome2Line, RiSearchFill, RiSearchLine, RiShoppingBagFill, RiShoppingBagLine } from "react-icons/ri";

export const footerMenuItems = [
  {
    id: 1,
    active: true,
    title: "Inicio",
    fillIcon: <RiHome2Fill className="activated" />,
    lineIcon: <RiHome2Line className="deactivated" />,
    path: "/",
  },
  {
    id: 2,
    active: false,
    title: "Tienda",
    className: "mobile-category",
    fillIcon: <RiAppsFill className="activated" />,
    lineIcon: <RiAppsLine className="deactivated" />,
    path: "/collections",
  },
  {
    id: 3,
    active: false,
    title: "Buscar",
    lineIcon: <RiSearchLine className="deactivated" />,
    fillIcon: <RiSearchFill className="activated" />,
    path: "/search",
  },
  {
    id: 4,
    active: false,
    title: "Mi lista",
    lineIcon: <RiHeart3Line className="deactivated" />,
    fillIcon: <RiHeart3Fill className="activated" />,
    path: "/wishlist",
  },
  {
    id: 5,
    active: false,
    title: "Carrito",
    lineIcon: <RiShoppingBagLine className="deactivated" />,
    fillIcon: <RiShoppingBagFill className="activated" />,
    path: "/cart",
  },
];
