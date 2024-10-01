import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';  // 라우터 설정 가져오기


const app = createApp(App);  // createApp을 사용해 app 변수 선언
app.use(router);  // 라우터를 Vue 인스턴스에 연결
app.mount('#app');  // Vue 인스턴스를 마운트