import axios from "axios";

const movieBaseURL = 'https://api.themoviedb.org/3'
const API_KEY = '4ca73e02ab55fb6b975cab83eb309f27'
// 'https://api.themoviedb.org/3/trending/movie/week?api_key=4ca73e02ab55fb6b975cab83eb309f27&language=en-US'
const getTrendingVideos = axios.get(this.movieBaseURL+'trending/movie/week?api_key='+this.API_KEY+'&language=en-US')

export default {
    getTrendingVideos
}
