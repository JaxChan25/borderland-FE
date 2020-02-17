import axios from 'axios';


//读文章详情
const getArticle = id => axios.get(`/api/v1/article/${id}`).then(res => res.data);

//读文章列表
const getArticles = () => axios.get('/api/v1/articles').then(res => res.data);


export {
    getArticles,
    getArticle
}