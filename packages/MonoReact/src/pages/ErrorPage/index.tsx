/*
 * @Author: Monologue
 * @Date: 2023-03-08 14:57:24
 * @LastEditTime: 2023-04-06 15:38:53
 * @LastEditors: Monologue
 * @Description: 捕获异常页面
 */

import { type FC } from 'react'

interface ErrorPageProps {

}

const ErrorPage: FC<ErrorPageProps> = (props) => {
  return (
    <div className="not-found">
      糟糕糟糕 OMG
    </div>
  )
}

export default ErrorPage
