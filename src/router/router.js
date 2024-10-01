// router.js
import { createRouter, createWebHistory } from 'vue-router';  // Vue 3 라우터 기능 가져오기
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Binding1 from '@/components/Binding1.vue';
import Binding2 from '@/components/Binding2.vue';
import Vvalue from '@/pages/FormPage.vue';
import Props from '@/pages/ParentComponent.vue'
import Props2 from '@/pages/ParentForm.vue'
import Wizard from '@/components/props/Wizard/WizardForm.vue'

// 각 경로와 컴포넌트를 매핑하는 라우터 설정
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }, // About 페이지 경로
  { path: '/binding1', component: Binding1},
  { path: '/binding2', component: Binding2},
  { path: '/vvalue', component: Vvalue},
  { path: '/props', component: Props},
  { path: '/props2', component: Props2},
  { path: '/Wizard', component: Wizard}
];

// 라우터 인스턴스 생성 (Vue 3 방식)
const router = createRouter({
  history: createWebHistory(),  // 히스토리 모드 사용
  routes,  // 설정된 경로 사용
});

export default router;
