import { RouteComponent } from 'vue-router'

export default {
	name: 'auth',
	component: (): Promise<RouteComponent> => import('../views/AuthView.vue')
}
