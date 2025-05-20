import { useTheme } from "../context/ThemeContext";

export const Footer = () =>{

    const { theme } = useTheme()

    return(
        <footer className={`bg-[#eccac8] py-10 text-center text-lg text-[#5E272D] ${theme === "oscuro" ? "bg-[#5B0601]/30 text-white" : "bg-[#eccac8]/30 text-black"}`}>
            <div className="mb-6 font-semibold">
                <p>Visitanos en Ayacucho 909, esq Mota Botello - San Fernando del Valle de Catamarca, Catamarca</p>
            </div>
            <div className="flex justify-center gap-8 text-4xl">
                <a href="https://www.facebook.com/panificadoramathius" target="_blank"  rel="noopener noreferrer">
                <i className={`bi bi-facebook text-3xl hover:text-blue-600 ${theme === "oscuro" ? "text-white" : "text-black"}`}></i>
                
                </a>
                <a href="https://www.instagram.com/panificadora.mathius/" target="_blank">
                <i className={`bi bi-instagram text-3xl hover:text-pink-500 ${theme === "oscuro" ? "text-white" : "text-black"}`}></i>
                </a>
            </div>
                <p className="mt-6">
                 Desarrollado por{" "}
                    <a
                        href="https://instagram.com/AGUSTINA_SC"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline"
                    >
                        @AGUSTINA_SC
                    </a>
                </p>

        </footer>

    )
}

