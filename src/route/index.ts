import { lazy } from 'react'

const router = [{
  path: '/',
  exact: true,
  component: lazy(() => import('@/views/home'))
},{
    path: '/login',
    exact: true,
    component: lazy(() => import('@/views/login'))
}]

export default router
