/*
 * @Author: Monologue
 * @Date: 2023-08-01 17:20:22
 * @LastEditors: Monologue
 * @Description: request
 */
import axios, { type InternalAxiosRequestConfig, type AxiosResponse } from 'axios'
import { AXIOSTIMEOUT, baseURL } from '@/constants/request'

const request = axios.create({
  timeout: AXIOSTIMEOUT,
  baseURL,
  withCredentials: true
})

request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config
}, (err: any) => {
  return Promise.reject(err)
})

request.interceptors.response.use((response: AxiosResponse) => {
  return Promise.resolve(response)
}, (err: any) => {
  return Promise.reject(err)
})

export default request
