import { apiHelper } from '@/api/apiHelper'

export const getFilms = async() => apiHelper('get', 'v1.3/movie/random')
export const getFilm = async(params) => apiHelper('get', 'v1.3/movie', { params })
