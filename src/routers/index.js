/*
 * @Date: 2020-02-13 12:36:59
 * @LastEditTime: 2020-02-13 14:22:35
 * @Author: 李芳芳
 * @Github: https://github.com/J-Fan-Fan/
 */
import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import adminRouter from './admin'
import myRouter from './my'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        movieRouter,
        cinemaRouter,
        mineRouter,
        adminRouter,
        myRouter,
        {
            path: '/*',
            redirect: '/movie'
        }
    ]
})