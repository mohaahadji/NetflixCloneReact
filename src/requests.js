const API_KEY = 'd274ef151167e8b1fc33a20b957f883c';


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en_US`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&widthnetwork=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en_US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&width_generes=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&width_generes=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&width_generes=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&width_generes=17039`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&width_generes=99`,
    fetchVideos: `/movie/popular?api_key=${API_KEY}&languages=en_US&page=1`



    





};

export default requests;