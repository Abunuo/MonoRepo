import type { UserInfo } from '@/@types/user'

const controller = 'user'

export const getUserDetail = (prams: {user_id: string}) => {
  const userInfo: UserInfo = {
    id: prams.user_id,
    nickname: 'Monologue'
  }
  return Promise.resolve({
    code: 0,
    data: userInfo,
    msg: 'success'
  })
}