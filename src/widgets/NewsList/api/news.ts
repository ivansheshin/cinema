import { apiHelperNews } from '@/app/providers/apiHelper'

export const getNews = async(params) => apiHelperNews('get', '', { params })
