import Login from './components/Login.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'
import Article from './components/Article.vue'
import HelloWorld from './components/HelloWorld.vue'

let routes = [
    {
        path: '/',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/hello',
        component: HelloWorld,
        name: '',
        hidden: true
    },
    
    {
        path: '/home',
        component: Home,
        name: '',
        hidden: true,
        children: [
            {
                path: '/about',
                component: About,
                name: '',
                hidden: true
            },
            {
                path: '/article',
                component: Article,
                name: '',
                hidden: true
            },
          ]
    },
    

]

export default routes;