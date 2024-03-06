import paris from "../public/assets/images/themes/01.jpg";
import tokyo from "../public/assets/images/themes/02.jpg";
import osaka from "../public/assets/images/themes/03.jpg";
import rome from "../public/assets/images/themes/04.jpg";
import madrid from "../public/assets/images/themes/05.jpg";
import berlin from "../public/assets/images/themes/06.jpg";
import denver from "../public/assets/images/themes/07.jpg";
import commingSoon from "../public/assets/images/themes/08.jpg";

export const headerMenu = [
  {
    id: 1,
    title: "Inicio",
    styleType: "link",
    customChildren: true,
    children: [
      {
        title: "Paris",
        path: "/theme/paris",
        image: paris,
      },
      {
        title: "Tokyo",
        path: "/theme/tokyo",
        image: tokyo,
      },
      {
        title: "Osaka",
        path: "/theme/osaka",
        image: osaka,
      },
      {
        title: "Rome",
        path: "/theme/rome",
        image: rome,
      },
      {
        title: "Madrid",
        path: "/theme/madrid",
        image: madrid,
      },
      {
        title: "Berlin",
        path: "/theme/berlin",
        image: berlin,
      },
      {
        title: "Denver",
        path: "/theme/denver",
        image: denver,
      },
      {
        title: "",
        path: "",
        image: commingSoon,
      },
    ],
  },
  {
    id: 2,
    title: "Productos",
    styleType: "link",
    customChildren: true,
    children: [
      {
        column: [
          {
            title: "Categoria",
            type: "sub",
          },
          {
            title: "Tienda",
            path: "collections",
            params: { layout: "collection_left_sidebar" },
            label: "OFERTAS",
            labelClass: "warning-label",
          },
          {
            title: "Telefonos",
            path: "collections",
            params: { layout: "collection_right_sidebar" },
          },
          {
            title: "Computadoras",
            path: "collections",
            params: { layout: "collection_full_width" },
          },
          {
            title: "Electrodomesticos",
            path: "collections",
            params: { layout: "collection_full_width" },
          },
          {
            title: "Juguetes",
            path: "collections",
            params: { layout: "collection_full_width" },
          },
          {
            title: "Ropa",
            path: "collections",
            params: { layout: "collection_full_width" },
          },
          {
            title: "Zapatos",
            path: "collections",
            params: { layout: "collection_full_width" },
          },
          {
            title: "Accesorios",
            path: "collections",
            params: { layout: "collection_full_width" },
          },
        ],

      },
    ],
  },
  {
    id: 3,
    title: "Menu",
    badge: "New",
    styleType: "link",
    customChildren: true,
    children: [
      {
        column: [
          {
            title: "Categorias Populares",
            type: "sub",
          },
          {
            title: "Telefonos",
            type: "link",
            path: "collections",
            params: { category: "telefonia" },
          },
          {
            title: "Computadoras",
            type: "link",
            path: "collections",
            params: { category: "computadoras" },
          },
          {
            title: "Electrodomesticos",
            type: "link",
            path: "collections",
            params: { category: "electrodomesticos" },
          },
          {
            title: "Juguetes",
            type: "link",
            path: "collections",
            params: { category: "juguetes" },
          },
          {
            title: "Ropa",
            type: "link",
            path: "collections",
            params: { category: "ropa" },
          },
          {
            title: "Zapatos",
            type: "link",
            path: "collections",
            params: { category: "zapatos" },
          },
          {
            title: "Accesorios",
            type: "link",
            path: "collections",
            params: { category: "accesorios" },
          },
        ],
      },
      {
        column: [
          {
            title: "Etiquetas",
            type: "sub",
          },
          {
            title: "Ofertas",
            type: "link",
            path: "collections",
            params: { tag: "ofertas" },
          },
          {
            title: "Nuevo",
            type: "link",
            path: "collections",
            params: { tag: "nuevo" },
          },
          {
            title: "Popular",
            type: "link",
            path: "collections",
            params: { tag: "popular" },
          },
          {
            title: "Rebajas",
            type: "link",
            path: "collections",
            params: { tag: "rebajas" },
          },
        ],
      },
      {
        column: [
          {
            title: "Marcas",
            type: "sub",
          },
          {
            title: "Apple",
            type: "link",
            path: "collections",
            params: { brand: "apple" },
          },
          {
            title: "Samsung",
            type: "link",
            path: "collections",
            params: { brand: "samsung" },
          },
          {
            title: "Sony",
            type: "link",
            path: "collections",
            params: { brand: "sony" },
          },
          {
            title: "Dell",
            type: "link",
            path: "collections",
            params: { brand: "dell" },
          },
          
        ],
      },
      {
        column: [
          {
            title: "Modelos",
            type: "sub",
          },
          {
            title: "Iphone 12",
            type: "link",
            path: "collections",
            params: { model: "iphone-12" },
          },
          {
            title: "Galaxy S21",
            type: "link",
            path: "collections",
            params: { model: "galaxy-s21" },
          },
          {
            title: "Vaio",
            type: "link",
            path: "collections",
            params: { model: "vaio" },
          },
          {
            title: "Inspiron",
            type: "link",
            path: "collections",
            params: { model: "inspiron" },
          },
          
        ],
      },
    ],
  },

  {
    id: 6,
    title: "Paginas",
    customChildren: false,
    children: [
      {
        title: "Authentication",
        type: "sub",
        children: [
          {
            title: "SignIn",
            path: "/auth/login",
            type: "link",
          },
          {
            title: "SignUp",
            path: "/auth/register",
            type: "link",
          },
          {
            title: "ForgotPassword",
            path: "/auth/forgot-password",
            type: "link",
          },
        /*   {
            title: "VerifyOtp",
            path: "/auth/otp-verification",
            type: "link",
          },
          {
            title: "UpdatePassword",
            path: "/auth/update-password",
            type: "link",
          }, */
        ],
      },
      {
        title: "account",
        type: "sub",
        children: [
          {
            title: "MyDashboard",
            path: "/account/dashboard",
            type: "link",
          },
          {
            title: "MyNotifications",
            path: "/account/notification",
            type: "link",
          },
          {
            title: "MyAddresses",
            path: "/account/addresses",
            type: "link",
          },
          {
            title: "MyWallet",
            path: "/account/wallet",
            type: "link",
          },
          {
            title: "MyPoints",
            path: "/account/point",
            type: "link",
          },
          {
            title: "MyOrders",
            path: "/account/order",
            type: "link",
          },
          {
            title: "RefundHistory",
            path: "/account/refund",
            type: "link",
          },
          {
            title: "PayoutDetails",
            path: "/account/bank-details",
            type: "link",
          },
        ],
      },
  /*     {
        title: "AboutUs",
        type: "link",
        path: "/about-us",
      },
      {
        title: "BrowseFaqs",
        type: "link",
        path: "/faq",
        label: "hot",
        labelClass: "warning-label",
      },
      {
        title: "Cart",
        type: "link",
        path: "/cart",
      },
      {
        title: "Checkout",
        type: "link",
        path: "/checkout",
      },
      {
        title: "Compare",
        type: "link",
        path: "/compare",
      },
      {
        title: "ContactUs",
        path: "/contact-us",
        type: "link",
      },
      {
        title: "Maintenance",
        type: "link",
        path: "/maintenance",
      },
      {
        title: "Offers",
        type: "link",
        path: "/offers",
        label: "new",
      },
      {
        title: "Search",
        type: "link",
        path: "/search",
        label: "hot",
        labelClass: "warning-label",
      },
      {
        title: "Wishlist",
        type: "link",
        path: "/wishlist",
      },
      {
        title: "404",
        type: "link",
        path: "/404",
      },
   */  ],
  },
 
];
