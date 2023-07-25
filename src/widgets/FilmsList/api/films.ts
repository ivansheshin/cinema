import { apiHelper } from '@/api/apiHelper'
import type { ISearchParams } from '../types'

export const getFilms = async() => apiHelper('get', 'v1.3/movie/random')
export const getFilm = async(params: ISearchParams) => apiHelper('get', 'v1.3/movie', { params })
