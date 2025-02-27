/*
 * @Date: 2024-11-25 09:05:04
 * @Description: user store
 */
import { defineStore } from "pinia";
import { reactive } from "vue";

interface UserStore {
  userId: string;
  username: string;
  avatar?: string;
  token: string;
  permission: string[];
}

const useUserStore = defineStore('user', () => {

  const state: UserStore = reactive({
    userId: '',
    username:  '',
    avatar: '',
    token: '',
    permission: [],
  })

  const cleanUserState = () => {
    Object.assign(state, {
      userId: '',
      username:  '',
      avatar: '',
      token: '',
      permission: [],
    })
  }

  const setUserState = (user: Partial<UserStore>) => {
    Object.assign(state, user);
  }
  
  return {
    state,
    setUserState,
    cleanUserState
  }
}, {
  persist: {
    storage: window.sessionStorage
  }
})

export default useUserStore