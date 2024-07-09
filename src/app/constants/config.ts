export const LOGO_URL = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'

export const BG_IMG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/75f18f30-711b-4c14-a1f4-fe1c4426f811/UZ-ru-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg'

export const tmdbConfigs = {
    apiKey: 'bc0111e7822e97dc4b1a18d773932ec3',
    accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzAxMTFlNzgyMmU5N2RjNGIxYTE4ZDc3MzkzMmVjMyIsInN1YiI6IjY2Mzk1OWRlOTRkOGE4MDEyNjMzY2NlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iyPAQibEQniMBTtfOJl6vUy8XZI0YZwnntqtWE-27Jc',
    base_path:'https://image.tmdb.org/t/p/w500'
}

 export const options = {
    params: {
      include_adult: 'false',
      include_video: 'true',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc'
  
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${tmdbConfigs.accessToken}`
  
    }
  }