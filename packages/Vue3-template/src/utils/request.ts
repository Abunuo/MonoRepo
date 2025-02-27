/*
 * @LastEditors: Please set LastEditors
 * @Description: request
 */
import { useRouter } from 'vue-router'
import axios, { type InternalAxiosRequestConfig, type AxiosResponse } from 'axios'
import { AXIOSTIMEOUT, baseURL } from '@/config/constants'
import useUserStore from '@/stores/modules/user'
import storage from '@/utils/storage'
import { ElMessage } from 'element-plus'

const request = axios.create({
  timeout: AXIOSTIMEOUT,
  baseURL,
  withCredentials: true
})

request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const userStore = useUserStore()
  const token = userStore.state.token || storage.getItem('token')
  config.headers['Authorization'] = token
  return config
}, (err: any) => {
  return Promise.reject(err)
})

request.interceptors.response.use((response: AxiosResponse<AxiosResponseData>) => {
  const { code, msg } = response.data
  if(code === '100001') {
    ElMessage.warning(msg)
    const router = useRouter()
    router.push('/login')
  }
  if(code === '1') {
    return Promise.resolve(response)
  } else {
    ElMessage.warning(msg)
    return Promise.reject(response)
  }
}, (err: any) => {
  if(err?.response?.data?.msg) {
    ElMessage.warning(err.response.data.msg)
  }
  return Promise.reject(err)
})

export type AxiosResponseData<T = any, D = {
  code: string;  // 1: 成功  100001: 登录失效
  msg?: string;
  data?: T;
}> = D;

export default request
