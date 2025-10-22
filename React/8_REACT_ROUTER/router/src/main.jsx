import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Contact from './routes/Contact.jsx';

// 2- pagina de erro
import ErrorPage from './routes/ErrorPage.jsx';

// 1- configurando o router
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// 3- componente base
import Home from './routes/Home.jsx';

// 7- rota dinamica
import Product from './routes/Product.jsx';

// 8 - nested routes
import Info from './routes/Info.jsx';

// 9- search params
import Search from './routes/Search.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3- componente base
    children: [
      {
        path: "/",      
        element: <Home />
      },
      {
        path: "contact",      
        element: <Contact />
      },
      // 7- rota dinamica
      {
        path: "products/:id",
        element: <Product />
      },
      // 8 - nested routes
      {
        path: "products/:id/info",
        element: <Info />
      },
      // 9- search params
      {
        path: "search",
        element: <Search />,
      },
      // 10- redirect
      {
        path: "teste",
        element: <Navigate to="/" />
      }
    ],
  },
  // {
  //   path: "/contact",
  //   element: <Contact />
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
