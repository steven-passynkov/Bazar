import axios from 'axios'

const baseURL = ``
const timeout = 5000

/*
 * Instantiation of axios with defaults
 */
const axiosInstance = axios.create({
    baseURL,
    timeout,
})

export default axiosInstance
