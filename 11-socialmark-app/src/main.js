import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/style.css"
import appHeader from '@/components/Shared/appHeader'
import appBookmarkList from '@/components/Shared/appBookmarkList'
import {appAxios} from '@/utils/appAxios'
import store from './store'
import io from "socket.io-client"

const socket = io("http://localhost:2022")


const app = createApp(App)

app.component("appHeader",appHeader)
app.config.globalProperties.$appAxios = appAxios
app.component("appBookmarkList",appBookmarkList)
app.config.globalProperties.$socket = socket
app.use(router)
app.use(store)
app.mount('#app')
