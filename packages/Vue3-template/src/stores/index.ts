/*
 * @Date: 2024-11-25 09:10:34
 * @Description: pinia store 入口
 * 额外配置可以在此处初始化，比如持久化
 */
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();
// 部分信息本地 session 存储
pinia.use(piniaPluginPersistedstate)

export default pinia;