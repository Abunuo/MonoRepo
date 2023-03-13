/*
 * @Author: Monologue
 * @Date: 2023-03-08 15:00:18
 * @LastEditTime: 2023-04-06 15:54:07
 * @LastEditors: Monologue
 * @Description: 项目主页
 */
import { type FC } from 'react'
import MainTitle from './components/Title'
import MainList from './components/List'

import './index.scss'

interface MainPageProps {

}

const MainPage: FC<MainPageProps> = (props) => {
  console.log('MainPage render')

  return (
    <div className="main-page">
      <MainTitle />
      <MainList />
    </div>
  )
}

export default MainPage
