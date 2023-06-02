import { ref, computed } from 'vue'
import { defineStore, type PiniaPluginContext } from 'pinia'
import type { UserInfo } from '@/@types/user'
import { getUserDetail } from '@/api/user'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<UserInfo>()

    const userId = computed<string|undefined>(() => userInfo.value?.id)

    const getUserInfo = async (user_id: string) => {
      const { data } = await getUserDetail({ user_id })
      userInfo.value = data
    }

    return { userInfo, userId, getUserInfo }
  },
  {
    persist: {
      paths: [
        'userInfo',
      ],
      beforeRestore: (ctx: PiniaPluginContext) => {
        console.log(`即将恢复 '${ctx.store.$id}'`)
      },
    },
  }
)