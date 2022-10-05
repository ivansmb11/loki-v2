import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import authRouter from '../modules/auth/router';
import isAuthGuard from '../modules/auth/router/authGuard';
import homeRouter from '../modules/home/router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '',
		beforeEnter: [ isAuthGuard ],
		...homeRouter
	},
	{
		path: '/auth',
		...authRouter
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
