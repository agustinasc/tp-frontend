import { useTheme } from "../context/ThemeContext";

export const Footer = () =>{

    const { theme } = useTheme()

    return(
        <footer className={`p-4 text-center ${theme === "oscuro" ? "bg-[#5B0601] bg-opacity-30" : "bg-[#eccac8] bg-opacity-30"}`}>
            <div className="flex justify-center gap-6">
                <a href="https://facebook.com" target="_blank">
                <i className="bi bi-facebook text-2xl text-[#3b5998] hover:text-blue-700"></i>
                </a>
                <a href="https://instagram.com" target="_blank">
                <i className="bi bi-instagram text-2xl text-[#C13584] hover:text-pink-400"></i>
                </a>
            </div>
            <p className="mt-2 text-sm text-gray-400">© 2025 Panificadora Mathius</p>
        </footer>

    )
}

