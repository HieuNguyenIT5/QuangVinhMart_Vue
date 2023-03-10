import { createApp } from 'vue'
import router from "./router/index.js"

import axios from 'axios'
window.VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
window.axios = axios;
window.baseUrl = "http://localhost/QuangVinhMart";
import {
    Image,
    List,
    Menu,
    Drawer,
    Button,
    Dropdown,
    Card,
    message
}from 'ant-design-vue'

import App from './App.vue'


import "ant-design-vue/dist/antd.min.css"
import "./static/fontawesome/css/all.min.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import "./style.css"


const app = createApp(App);
app.use(router);
app.use(Image);
app.use(Card);
app.use(Menu);
app.use(Dropdown);
app.use(List);
app.use(Button);
app.use(Drawer);
app.mount('#app');
