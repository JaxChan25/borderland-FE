import axios from 'axios';

//登录
const requestLogin = form=>axios.post('/api/v1/user/login',form).then(res=>res.data);

//读站长信息
const getOwner = () =>axios.get(`/api/v1/user/owner`).then(res=>res.data);

export{
    requestLogin,
    getOwner,
}