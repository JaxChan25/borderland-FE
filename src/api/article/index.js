import axios from 'axios';


//读文章详情
const getArticle = id => axios.get(`/api/v1/article/${id}`).then(res => res.data);

//读文章列表
// const getArticles = () => axios.get('/api/v1/articles').then(res => res.data);
const getArticles = (start,limit,catalog) => axios.get('/api/v1/articles',{params:{start,limit,catalog}}).then(res => res.data);

//读文章所有类别
const getCatalogs = () => axios.get('/api/v1/catalogs').then(res => res.data);


//增加文章的Like 
const addLike = id => axios.post(`/api/v1/article/like/${id}`).then(res => res.data);

export {
    getArticles,
    getArticle,
    getCatalogs,
    addLike

}