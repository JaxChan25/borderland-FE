import Home from './components/Home.vue'
import  ListArticle from './components/ListArticle.vue'

//懒加载 ok
const Catalog = ()=> import ('./components/Catalog.vue');
const Login =()=> import ('./components/Login.vue');
const HelloWorld = ()=> import ('./components/HelloWorld.vue');
const Article = ()=> import ('./components/Article.vue');
const Archives =()=>import ('./components/Archives.vue')
const Activity =()=>import ('./components/Activity.vue')
const IELTS =()=>import ('./ielts/IELTS.vue')


let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
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
                path: '/listarticle',
                component: ListArticle,
                name: '',
                hidden: true
            },
            {
                path: '/catalog',
                component: Catalog,
                name: '',
                hidden: true
            },
            {
                path: '/archives',
                component: Archives,
                name: '',
                hidden: true
            },
            {
                path: '/activity',
                component: Activity,
                name: '',
                hidden: true
            },
            {
                path: '/IELTS',
                component: IELTS,
                name: '',
                hidden: true
            },
            {
                path: '/article/:articleID',
                component: Article,
                name: 'article',
                hidden: true
            },
          ]
    },
    

]

export default routes;