import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './routes/Home.tsx'
import { Error } from './routes/Error.tsx'
import { AboutUs } from './routes/AboutUs.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      }
    ]
  },
])

createRoot(document.getElementById('root')!)
  .render(<RouterProvider router={router} />)
