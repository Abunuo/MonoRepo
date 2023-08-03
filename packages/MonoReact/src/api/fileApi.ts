/*
 * @Author: Monologue
 * @Date: 2023-08-01 15:59:13
 * @LastEditors: Please set LastEditors
 * @Description: file upload download ...
 */

import request from '@/utils/request'

export const getBucketList = () => {
  return request.get('/buckges')
}

export const uploadFile = (file: FormData) => {
  return request.post('/file', file)
}
