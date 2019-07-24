import home from '../components/home'
import blog from '../components/blog'
import services from '../components/services'
import contact from '../components/contact'
import details from '../components/details'
import editing from '../components/editing'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueBreadcrumbs from 'vue-breadcrumbs'

Vue.use(VueRouter);
Vue.use(VueBreadcrumbs);
export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            meta: {
                breadcrumb: 'home'
            }
        },
        {
            path: '/blog',
            name: 'blog',
            component: blog,
            meta: {
                breadcrumb: 'blog'
            }
        },
        {
            path: '/services',
            name: 'services',
            component: services,
            meta: {
                breadcrumb: 'services'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact,
            meta: {
                breadcrumb: 'contact'
            }
        },
        {
            path: '/details/:Pid',
            name: 'details',
            component: details,
            meta: {
                breadcrumb: '/details/:Pid'
            }
        },
        {
            path: '/details/:Pid/edit',
            name: 'edit',
            component: editing,
            meta: {
                breadcrumb: '/details/:Pid/edit'
            }
        }
    ]
})
