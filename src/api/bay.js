import axios from "axios";
//import store from '../store/index'


const api = {
    baseURL: "https://openapi.itembay.com/",
};

function SetToken(userData) {
    return axios.post(`${api.baseURL}common/token`, userData);
}

function GetGames(token) {
    return axios.get(`${api.baseURL}common/games`,{
        headers : {Authorization:`Bearer ${token}`}
    });
}

function SeachGame(seqGameName, token) {
    return axios.get(`${api.baseURL}common/games/${seqGameName}`,{
        headers : {Authorization:`Bearer ${token}`}
    });
}

function SeachGameServer(gameSeq, token) {
    return axios.get(`${api.baseURL}common/games/${gameSeq}/servers`,{
        headers : {Authorization:`Bearer ${token}`}
    });
}

function SeachGameServerSeq(gameSeq, gameServerSeq) {
    return axios.get(`${api.baseURL}common/games/${gameSeq}/servers/${gameServerSeq} `);
}

export { SetToken, GetGames, SeachGame, SeachGameServer, SeachGameServerSeq };


// const axiosInstance = axios.create({
// })

// axiosInstance.interceptors.request.use(
//     config => {
//         store.commit('startSpinner');
//         return config;
//     },
//     error => {
//         alert('데이터 요청 실패');
//         return Promise.reject(error);
//     }
// );

// axiosInstance.interceptors.response.use(
//     response => {
//         store.commit('endSpinner');
//         return response;
//     },
//     error => {
//         alert('데이터 응답 실패');
//         return Promise.reject(error);
//     }
// )

// export default axiosInstance