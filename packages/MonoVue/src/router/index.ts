import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { uuid } from 'mono-utils'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, _from, next) => {
  const { userInfo, getUserInfo } = useUserStore();
  const userId = uuid()
  if(to.meta.manageAuth && !userInfo?.id) {
    await getUserInfo(userId)
  }
  next();
})

export default router
