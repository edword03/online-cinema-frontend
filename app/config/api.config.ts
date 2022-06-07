export const API_URL = `${process.env.APP_URL}/api`

export const getAuthUrl = (path: string) => `/auth/${path}`
export const getGenresUrl = (path: string) => `${API_URL}/genres/${path}`
export const getUserUrl = (path: string) => `/users/${path}`
export const getMoviesUrl = (path: string) => `/movies/${path}`
export const getActorsUrl = (path: string) => `/actors/${path}`
export const getRatingUrl = (path: string) => `/rating/${path}`