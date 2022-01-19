import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const RouteView = {
    name: 'RouteView',
    render: h => h('router-view')
}

export default new Router({
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    },
    routes: [{
        path: '/',
        name: 'Index',
        component: RouteView,
        redirect: '/theme',
        children: [ {
            path: '/theme',
            name: 'theme',
            component: r => require.ensure([], () => r(require('../pages/theme.vue')), 'web_one'),
            meta: {
                title: '主题'
            }
        }
    ]}
    ]
})
