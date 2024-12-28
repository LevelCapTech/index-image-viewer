import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ViewerView from '../views/ViewerView.vue';
import GalleryView from '../views/GalleryView.vue';
// import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/txt2img/:id',
    name: 'txt2img',
    component: ViewerView
  },
  {
    path: '/txt2img',
    name: 'txt2img',
    component: GalleryView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
