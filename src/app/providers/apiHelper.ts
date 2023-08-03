import axios from 'axios'

type TMethod = 'get' | 'post' | 'put' | 'delete'
type TError = {
  response?: {
    data: string
    status: number
  }
}
axios.interceptors.request.use(
  (config) => {
    const axiosConfig = config
    axiosConfig.headers['x-api-key'] = import.meta.env.VITE_APP_CINEMA_API_KEY
    return axiosConfig
  },
  (error) => Promise.reject(error),
)

export const apiHelper = async(method: TMethod, url: string, body: Record<string, unknown>) => {
  const baseUrl = 'https://api.kinopoisk.dev'

  try {
    const { data } = await axios[method](`${baseUrl}/${url}`, body)

    return data
  } catch (err) {
    const { response } = err as TError
    return {
      data: null,
      error: {
        text: response?.data,
        status: response?.status,
      },
    }
  }
}
