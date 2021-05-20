import { lazy } from 'react'

const router = [{
  path: '/',
  exact: true,
  component: lazy(() => import('@/components/home'))
},{
    path: '/login',
    exact: true,
    component: lazy(() => import('@/components/login'))
}]

export default router
