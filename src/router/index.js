import { createRouter, createWebHistory } from "vue-router"

import Login from '../components/Login.vue'
import Lophoc from '../components/Lophoc.vue'
import Lichthi from '../components/Lichthi.vue'
import Thoikhoabieu from '../components/Thoikhoabieu.vue'
import Tintuc from '../components/Tintuc.vue'
import Error from '../components/Error.vue'
import Diemdanh from '../components/Diemdanh.vue'
import Thongke from '../components/Thongke.vue'
import Dschitiet from '../components/Dschitiet.vue'
import Tilevang from '../components/Tilevang.vue'



const routes = [
    { path: '/login', component: Login },
    { path: '/', component: Lophoc },
    { path: '/lichthi', component: Lichthi },
    { path: '/thoikhoabieu', component: Thoikhoabieu },
    { path: '/tintuc', component: Tintuc },
    { path: '/pathMatch(.*)*', component: Error },
    { path: '/diemdanh', component: Diemdanh },
    { path: '/thongke', component: Thongke },
    { path: '/chitiet', component: Dschitiet },
    { path: '/tilevang', component: Tilevang }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
