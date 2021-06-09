const API_KEY =  '379f01d4089ae71284ce622c7baa4bf3';
console.log(API_KEY)

export default {
    fetchTrending: {
        title:'trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title:'Top rated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title:'Actions',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title:'Comedy',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies: {
        title:'Horror',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        title:'Romance',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchMystery: {
        title:'mystery',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchSciFi: {
        title:'sci-Fi',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchWestern: {
        title:'Western',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchAnimation: {
        title:'Animation',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTv: {
        title:'TV Movies',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    }
}