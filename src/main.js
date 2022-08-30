import Vue from "vue"
import App from "./App"
import VueRouter from "vue-router"
import router from "./router"

//关闭Vue的生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)

new Vue({
    el: "#app",
    render: h => h(App),
    router: router

})