import axios from 'axios'

axios.interceptors.request.use(
  (config) => {
    const axiosConfig = config
    axiosConfig.headers['x-api-key'] = import.meta.env.VITE_APP_CINEMA_API_KEY
    return axiosConfig
  },
  (error) => Promise.reject(error),
)

export const apiHelper = async(method, url, body) => {
  const baseUrl = 'https://api.kinopoisk.dev'

  try {
    const { data } = await axios[method](`${baseUrl}/${url}`, body)

    return data
  } catch (err) {
    alert(err)
    return null
  }
}
