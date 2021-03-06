import Main from '@/pages/Main'
import UserPage from '@/pages/UserPage'
import About from '@/pages/About'
import PostIdPage from '@/pages/PostIdPage'
import PostPageWithStore from '@/pages/PostPageWithStore'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/users',
		component: UserPage,
	},
	{
		path: '/about',
		component: About,
	},
	{
		path: '/users/:id',
		component: PostIdPage,
	},
	{
		path: '/store',
		component: PostPageWithStore,
	},
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
})

export default router
