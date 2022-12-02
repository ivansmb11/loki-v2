import { RouteComponent } from 'vue-router'

//TODO: Change this with respective routes

export default {
	name: 'home',
	component: (): Promise<RouteComponent> => import('../layouts/HomeLayout.vue'),
  children: [
		{
			path: '/clients',
			name: 'Clients',
			component: (): Promise<RouteComponent> => import('../views/Clients.vue')
		},
		{
			path: '/cotizacion',
			name: 'Cotizacion',
			component: (): Promise<RouteComponent> => import('../views/Cotizacion.vue')
		},
		// {
		// 	path: '/rp',
		// 	name: 'rps',
		// 	component: (): Promise<RouteComponent> => import('../../rp/views/RpRecordsView.vue')
		// },
		// {
		// 	path: '/qr/:id',
		// 	name: 'qr',
		// 	component: (): Promise<RouteComponent> => import('../../guest/views/QrCodeView.vue')
		// },
		// {
		// 	path: '/guest/:id',
		// 	name: 'guest',
		// 	component: (): Promise<RouteComponent> => import('../../guest/views/GuestProfileView.vue')
		// }
	]
}
