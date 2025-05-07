# 🧁 Panadería React - Frontend

Este proyecto es la interfaz de usuario de una panadería en línea desarrollada con **React**. 
Permite a los usuarios explorar productos, filtrarlos por nombre o categoría, agregarlos al carrito.

## 📦 Tecnologías utilizadas

- ⚛️ **React** (con Vite)
- 🎨 **TailwindCSS v4**
- 🔐 **React Router DOM** para navegación y rutas protegidas
- 📡 **Axios** para peticiones HTTP al backend
- 🧠 **useState**, **useEffect**, **useContext**, y custom hooks
- ✅ **react-hook-form** + **Yup** para formularios con validaciones
- 💬 **React Toastify** y **SweetAlert2** para notificaciones
- 🌗 **Theme claro / oscuro** persistente

## 🧩 Funcionalidades

- **Login** con guardado de token en localStorage
- **Selector de perfiles** al iniciar sesión
- **Catálogo de productos** 
- **Carritos** por perfil (persistente)
- **CRUD completo** de entidades conectadas al backend
- **Administración de perfiles** (crear, editar, eliminar)
- **Formularios validados** con feedback visual
- **Ruteo dinámico y rutas protegidas**
- **Mapa interactivo** con Leaflet mostrando ubicación de la panadería
- **Modo claro / oscuro** 

## 📁 Estructura general

src/
├── components/
├───────AddProduct.jsx
├───────AddUsuario.jsx
├───────Cart.jsx
├───────EditProduct.jsx
├───────EditUsuario.jsx
├───────Footer.jsx
├───────Loader.jsx
├───────MapaPanaderia.jsx
├───────Navbar.jsx
├───────ProductCard.jsx
├── components/
├───────CartContext.jsx
├───────ThemeContext.jsx
├───────UserContext.jsx
├── pages/
├───────Contact.jsx
├───────Home.jsx
├───────HomePage.jsx
├───────Login.jsx
├───────Nosotros.jsx
├───────NotFound.jsx
├───────ProductDetails.jsx
├───────ProductList.jsx
├───────Perfil.jsx
├───────Usuarios.jsx
├── routes/
├───────routes.jsx


## ✨ Créditos

Desarrollado por AGUSTINASC como parte del TP Final de la carrera Full Stack.

