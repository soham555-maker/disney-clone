import axios from "axios";

const movieBaseURL = 'https://api.themoviedb.org/3'
const API_KEY = '4ca73e02ab55fb6b975cab83eb309f27'
// 'https://api.themoviedb.org/3/trending/movie/week?api_key=4ca73e02ab55fb6b975cab83eb309f27&language=en-US'
const getTrendingVideos = axios.get(movieBaseURL+'/trending/movie/week?api_key='+API_KEY+'&language=en-US')

// https://api.themoviedb.org/3/discover/movie?api_key=4ca73e02ab55fb6b975cab83eb309f27&language=en-US&with_genres={id}
const getVideosByGenere = (id)=>
    axios.get(movieBaseURL+"/discover/movie?api_key="+API_KEY+"&language=en-US&with_genres="+id)

export default {
    getTrendingVideos,
    getVideosByGenere,
}
