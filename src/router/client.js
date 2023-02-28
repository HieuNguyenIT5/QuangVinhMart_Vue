import { advancePositionWithMutation } from "@vue/compiler-core";

const client = [
    {
        path: "/",
        component: () => import("../layouts/client.vue"),
        children: [
            //Module home
            {
                path: "trang_chu",
                name: "home",
                component: () => import("../pages/home/index.vue")
            },
            
            //Module product
            {
                path: "san_pham",
                name: "product",
                component: () => import("../pages/product/index.vue"),
            },
            {
                path: "san_pham/chi_tiet_san_pham/:code",
                name: "product-detail",
                component: () => import("../pages/product/detail.vue")
            },

            //Module cart
            {
                path: "gio_hang",
                name: "cart",
                component: () => import("../pages/cart/index.vue"),
            },

        ]
    }
];
export default client;
