import { createApp } from "vue"
import router from "./router"
import App from "./App.vue"
import "element-plus/dist/index.css"
import "@/assets/styles/index.scss"

import store from "@/stores"

const app = createApp(App)

app.use(router)
app.use(store)
app.mount("#app")
