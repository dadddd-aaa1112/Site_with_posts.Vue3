import Main from '@/pages/Main'
import About from '@/pages/About'
import UserPage from '@/pages/UserPage'
import PostIdPage from '@/pages/PostIdPage'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Main,
		},
		{
			path: '/about',
			component: About,
		},
		{
			path: '/users',
			component: UserPage,
		},
		{
			path: '/users/:id',
			component: PostIdPage,
		},
	],
})

export default router
