import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../context/UserContext"



const Login = () => {
    const { login } = useUser()
    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        if (usuario && usuario.rol) {
        navigate("/perfil")
        }
    }, [navigate])

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                email, 
                contraseña
            }, {
                withCredentials: true
            })

            const { token, usuario } = res.data;
            // Usamos el login del contexto, que puede guardar todo en state o localStorage
            login({ token, usuario })

            toast.success(`Bienvenido ${usuario.usuario}`, {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
            });

            navigate('/perfil')
        } catch (error) {
            console.error('Error al Iniciar Sesion', error)
            toast.error('Error al Iniciar Sesion!', {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",
                                });
        }
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF5EC] p-6">
            <form 
                onSubmit={handleLogin} 
                className="w-full max-w-md mx-4 p-8 shadow-2xl rounded-2xl bg-[#FFF5EC]"
            >
                <h2 
                    className="text-xl font-bold mb-6 text-[#5E272D]"
                >
                    INICIAR SESIÓN
                </h2>
                <input 
                    className="border p-3 mb-4 w-full rounded" 
                    type="email" 
                    name="email" 
                    placeholder="Ingresa tu email"
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />
                <input 
                    className="border p-3 mb-4 w-full rounded" 
                    type="password" 
                    name="password" 
                    placeholder="Ingresa tu contraseña"
                    value={contraseña} 
                    onChange={e => setContraseña(e.target.value)} 
                />
                <button className="bg-cyan-800 hover:bg-cyan-600 text-white p-3 rounded w-full font-semibold" type="submit">Entrar</button>
                <button 
                className="flex items-center gap-2   hover:bg-indigo-100 text-black px-4 py-2 rounded transition duration-300 m-2"
                onClick={() => navigate(-1)}
                >
                   <i className="bi bi-arrow-left-circle-fill text-xl"></i>
                     Volver atras
                </button>
            </form>
        </div>
    )
}
export default Login