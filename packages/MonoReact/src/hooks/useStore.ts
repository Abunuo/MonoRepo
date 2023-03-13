/*
 * @Author: Monologue
 * @Date: 2023-03-13 17:43:06
 * @LastEditTime: 2023-05-29 14:47:26
 * @LastEditors: Monologue
 * @Description: useStore
 */

import { useContext } from 'react'
import { RootContext, type RootStateType } from '@/store'

export { observer } from 'mobx-react-lite'

interface UseContext {
  (): RootStateType
  <T = any>(path?: string): T
}

const useStore: UseContext = (path?: string) => {
  const store = useContext(RootContext)
  if (path) {
    const pathArr = path.split('.')
    return pathArr.reduce((prev, key) => {
      if (key in prev) return prev[key]
      return prev
    }, store)
  } else {
    return store
  }
}

export default useStore
