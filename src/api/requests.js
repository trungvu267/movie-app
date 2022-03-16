import axios from "./axios"


const API_KEY ='f6e631dacba18f57807f7f76ffd164f1'

// export const category = {
//     movie: 'movie',
//     tv: 'tv'
// }
// export const movieType = {
//     upcoming: 'upcoming',
//     popular: 'popular',
//     top_rated: 'top_rated'
// }

// export const tvType = {
//     popular: 'popular',
//     top_rated: 'top_rated',
//     on_the_air: 'on_the_air'
// }

// const requests = {
//     getMoviesList: (type, params) => {
//         const url = 'movie/' + movieType[type];
//         return axios.get(url, params);
//     },
//     getTvList: (type, params) => {
//         const url = 'tv/' + tvType[type];
//         return axios.get(url, params);
//     },
//     getVideos: (cate, id) => {
//         const url = category[cate] + '/' + id + '/videos';
//         return axios.get(url, {params: {}});
//     },
//     search: (cate, params) => {
//         const url = 'search/' + category[cate];
//         return axios.get(url, params);
//     },
//     detail: (cate, id, params) => {
//         const url = category[cate] + '/' + id;
//         return axios.get(url, params);
//     },
//     credits: (cate, id) => {
//         const url = category[cate] + '/' + id + '/credits';
//         return axios.get(url, {params: {}});
//     },
//     similar: (cate, id) => {
//         const url = category[cate] + '/' + id + '/similar';
//         return axios.get(url, {params: {}});
//     },
// }

export const type = {
    movie: 'movie',
    tv: 'tv'
}

const category = {
    popular: 'popular',
    search:'search'

}


const requests = {
    getTrending: async ()=>{
        const res = axios.get(`/trending/movie/day`,{
            params:{api_key:API_KEY}
        })
        return res
    },
    getPopularMovie: async (page) =>{
        const res =  await axios.get(`${type.movie}/${category.popular}`,{
            params: {api_key: API_KEY, page: page}
        })
        return res
    },
    getPopularTv: async (page) =>{
        const res =  await axios.get(`${type.tv}/${category.popular}`,{
            params: {api_key: API_KEY, page: page}
        })
        return res
    },
    getVideo: async (movie_id) =>{
        const res = await axios.get(`/movie/${movie_id}/videos`,{
            params:{api_key:API_KEY}
        })
        return res
    },
    search: async (search,page) =>{
        const res = await axios.get(`${category.search}/${type.movie}`,{
            params:{
                api_key: API_KEY,
                query: search,
                page: page
            }
        })
        return res
    },
    searchTv: async (search,page) =>{
        const res = await axios.get(`${category.search}/${type.tv}`,{
            params:{
                api_key: API_KEY,
                query: search,
                page: page
            }
        })
        return res
    },
    getDetalMovie: async (movieId) =>{
        const res = await axios.get(`${type.movie}/${movieId}`,{
            params:{
                api_key: API_KEY,
                append_to_response: 'videos,credits'
            }
        })
        return res
    }, 
    getDetalTv: async (movieId) =>{
        const res = await axios.get(`${type.tv}/${movieId}`,{
            params:{
                api_key: API_KEY,
                append_to_response: 'videos,credits'
            }
        })
        return res
    }, 
}
export default requests