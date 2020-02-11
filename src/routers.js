import Login from './components/Login.vue'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'

let routes = [
    {
        path: '/',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/test',
        component: HelloWorld,
        name: '',
        hidden: true
    },
    {
        path: '/home',
        component: Home,
        name: '',
        hidden: true
    },


]

export default routes;