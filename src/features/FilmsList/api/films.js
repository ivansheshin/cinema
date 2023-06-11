import { apiHelper } from '@/apiHelper'

export const getFilms = async() => apiHelper('get', 'v1.3/movie/random')
