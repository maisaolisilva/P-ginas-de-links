import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider, useParams} from "react-router-dom";
import Home from './paginas/Home/index.jsx';
import ProdutosLista from './paginas/ProdutosLista';
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/produtos/:tipo",
    element: <ProdutosLista />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>
)
