/*
 * @Author: Monologue
 * @Date: 2023-03-08 11:05:01
 * @LastEditors: Monologue
 * @Description: 用户 store
 */
import { runInAction } from 'mobx'
import { uuid } from 'mono-utils'

export interface UserInfoType {
  userId: string
  telephone?: string
  username: string
}

const INIT_USER_INFO: UserInfoType = {
  userId: uuid(),
  telephone: uuid(11, 10),
  username: 'Monologue'
}

const UserContext = {
  userInfo: INIT_USER_INFO,
  token: '',
  async getUserInfo (token: string) {
    console.log('get user info', token)
    this.token = token
    const newUserId: string = uuid()
    const userInfo = await Promise.resolve({
      userId: newUserId,
      username: `test${newUserId}`,
      telephone: uuid(11, 10)
    })
    runInAction(() => {
      this.userInfo = userInfo
    })
  }
}

export default UserContext
