/*
 * @Author: Monologue
 * @Date: 2023-03-09 16:59:31
 * @LastEditTime: 2023-05-16 17:52:34
 * @LastEditors: Monologue
 * @Description: main 子组件 title
 */
import { type FC } from 'react'
import useStore, { observer } from '@/hooks/useStore'

interface MainTitleProps {

}

const MainTitle: FC<MainTitleProps> = (props) => {
  const store = useStore()

  console.log('MainTitle render')

  const toggleUser = () => {
    store.user.getUserInfo(Math.random().toString(16))
  }

  return (
    <div className="main-page-title">
      <div className="main-page-title-text">mono-react 首页</div>
      <div className="toggle-user" onClick={toggleUser}>切换用户</div>
      <div className="user-name" title={store.user.userInfo.telephone}>{store.user.userInfo.username}</div>
    </div>
  )
}

export default observer(MainTitle)
