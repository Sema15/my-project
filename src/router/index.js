import home from '../components/home'
import blog from '../components/blog'
import services from '../components/services'
import contact from '../components/contact'
import details from '../components/details'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/blog',
            name: 'blog',
            component: blog
        },
        {
            path: '/services',
            name: 'services',
            component: services
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        },
        {
            path: '/details/:Pid',
            name: 'details',
            component: details
        }
    ]
})
