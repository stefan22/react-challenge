import React from 'react'
import Landing from './pages/landing'

const Popular = React.lazy(() => import('./pages/Popular'))

const routes = [
  {
    id: 1,
    path: '/',
    component: Landing,
  },
  {
    id: 2,
    path: '/popular/:id',
    component: Popular,
  },
]

export default routes
