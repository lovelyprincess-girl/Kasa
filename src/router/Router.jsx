import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Logement from '../pages/Logement'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'a-propos',
        element: <About />,
      },
      {
        path: 'logement/:id',
        element: <Logement />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default router