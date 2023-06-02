import { createPinia } from 'pinia'
import { SecretPiniaPlugin } from '@/stores/plugins/secret'
// 引入持久化插件
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(SecretPiniaPlugin)
pinia.use(createPersistedState({key: key => `__monovue__${key}`}))

export default pinia
