import VueRouter from "vue-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Message from "../pages/Message"
import News from "../pages/News"
import Detail from "../pages/Detail"

const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
            meta: { title: '关于' }
        },
        {
            name: "zhuye",
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    // beforeEnter: (to, from, next) => {
                    //     if (to.meta.isAuth) { //判断是否需要鉴权
                    //         if (localStorage.getItem('school') === 'aliba') {
                    //             next()
                    //         } else {
                    //             alert('学校名不对，无权限查看！')
                    //         }
                    //     } else {
                    //         next()
                    //     }
                    // }
                },
                {
                    name: "xiaoxi",
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        // {
                        //     name: 'xiangqing',
                        //     path: 'detail',
                        //     component: Detail
                        // },
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:message',
                            component: Detail,
                            meta: { isAuth: true, title: '详情' },
                        }
                    ]
                }
            ]
        }
    ]
})

//全局前置路由守卫——初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//     // if (to.name == "xinwen" || to.name == "xiaoxi") {
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === "aliba") {
//             next()
//         } else {
//             alert('school有误')
//         }
//     } else {
//         next()
//     }
// })
//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
// router.afterEach((to, from) => {
//     document.title = to.meta.title || '硅谷系统'

// })

export default router