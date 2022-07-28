export const API_URL = `${process.env.APP_URL}/api`;

const getApiEndpoint = (endpoint: string) => `${API_URL}/${endpoint}`;

export const getAuthUrl = (path: string) => getApiEndpoint(`auth/${path}`);
export const getGenresUrl = (path: string) => getApiEndpoint(`genres/${path}`);
export const getUsersUrl = (path: string) => getApiEndpoint(`users/${path}`);
export const getMoviesUrl = (path: string) => getApiEndpoint(`movies/${path}`);
export const getActorsUrl = (path: string) => getApiEndpoint(`actors/${path}`);
export const getRatingUrl = (path: string) => getApiEndpoint(`ratings/${path}`);
