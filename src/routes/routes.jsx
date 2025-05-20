import Home from '../pages/Home'
import Login from '../pages/Login'
import Perfil from '../pages/Perfil'
import Contact from '../pages/Contact'
import Nosotros from '../pages/Nosotros'
import { Products } from '../pages/ProductList'
import { ProductDetails } from '../pages/ProductDetails';
import { NotFound } from '../pages/NotFound';
import { AddProduct } from '../components/AddProduct';
import { EditProduct } from '../components/EditProduct';
import HomePage from '../pages/HomePage'
import { AddUsuario } from '../components/AddUsuario'
import Usuarios  from '../pages/Usuarios'
import { EditUsuario } from '../components/EditUsuario'




export const routes = [
    {
        path: '/', element: <Home />
    },
    /* {
        path: '/homepage', element: <HomePage />
    }, */
    {
        path: '/login', element: <Login />
    },
    {
        path: '/perfil', element: <Perfil />
    },
    {
        path: '/nosotros', element: <Nosotros />
    },
    {
        path: '/contacto', element: <Contact />
    },
    {
        path: '/api/productos', element: <Products />
    },
    {
        path: '/usuarios', element: <Usuarios />
    },

    
    { /* RUTAS DINAMICAS */
        path: '/producto/:id', element: <ProductDetails />
    },
    {
        path: '/add-producto', element: <AddProduct />
    },
    {
        path: '/add-usuario', element: <AddUsuario />
    },
    {
        path: '/producto/:id/edit', element: <EditProduct />
    },
    {
        path: '/edit-usuario/:id', element: <EditUsuario/>
    },
    {
        
    },


    { /* RUTA NO ENCONTRADA */
        path: '*', element: <NotFound />
    }, 
]