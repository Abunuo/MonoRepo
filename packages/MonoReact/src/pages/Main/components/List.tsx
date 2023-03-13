/*
 * @Author: Monologue
 * @Date: 2023-03-09 17:00:16
 * @LastEditTime: 2023-05-29 14:46:43
 * @LastEditors: Monologue
 * @Description: main 子组件 list
 */
import { type FC } from 'react'
import useStore, { observer } from '@/hooks/useStore'

interface MainListProps {

}

const MainList: FC<MainListProps> = (props) => {
  const token = useStore<string>('user.token')

  console.log('MainList render', token)

  return (
    <div className="main-page-list">
      {token || 'no token'}
    </div>
  )
}

export default observer(MainList)
