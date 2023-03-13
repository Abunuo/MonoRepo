/*
 * @Author: Monologue
 * @Date: 2023-03-09 16:18:30
 * @LastEditTime: 2023-05-16 17:51:52
 * @LastEditors: Monologue
 * @Description: store entry
 */
import { type FC, createContext } from 'react'
import { observer, useLocalObservable } from 'mobx-react-lite'

import UserContext from './modules/user'

const RootState = {
  user: UserContext
}

export type RootStateType = typeof RootState

export const RootContext = createContext(RootState)

const StoreProvider: FC<any> = observer(({ children }) => {
  const store = useLocalObservable(() => RootState)
  return (
    <RootContext.Provider value={store}>
      {children}
    </RootContext.Provider>
  )
})

export default StoreProvider
