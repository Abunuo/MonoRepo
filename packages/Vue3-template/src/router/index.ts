import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from '@/stores/modules/user'
import Storage from '@/utils/storage'
import routes from './routes'
import { ElMessage } from 'element-plus'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, _savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

router.beforeEach(async (to, _from, next) => {
  const { state: { token, permission } } = useUserStore();
  // 校验当前打开路由是否需要用户登录
  if(to.meta.manageAuth && !(token || Storage.getItem('token')) ) {
    return next('/login')
  }

  // 校验后台管理用户权限（身份）
  if(to.meta.permission) {
    if(!permission.includes(to.meta.permission as string)) {
      ElMessage.warning('你没有该页面的权限')
      return next('/login')
    }
  }
  next();
})

export default router
