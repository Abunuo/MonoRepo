/**
 * @description: 路由配置文件
 * @return {RouteRecordRaw[]}
 */
import Layout from "@/layout/default.vue"
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "index",
		component: Layout,
		children: [],
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/Login/index.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		redirect: "/",
	},
]

export default routes
