import { Link } from "react-router-dom";

export function MenuAdmin() {
    return (
        <aside className="absolute z-0 top-0 left-0 w-1/6 p-8 pt-20 bg-gray-100 h-screen">
            <li className="w-full p-2 pl-4 rounded-full mb-2 bg-gray-200 hover:bg-gray-400 list-none duration-300">
            <Link to={"/admin/dashboard/registerNew"}>
                Registrar Noticias
            </Link>
            </li>
            <li className="w-full p-2 pl-4 rounded-full mb-2 bg-gray-200 hover:bg-gray-400 list-none duration-300">
            <Link to={"/admin/dashboard/editNew"}>
                Editar Noticias
            </Link>
            </li>
            <li className="w-full p-2 pl-4 rounded-full mb-2 bg-gray-200 hover:bg-gray-400 list-none duration-300">
            <Link to={"/admin/dashboard/deleteNew"}>
                Eliminar Noticias
            </Link>
            </li>
            <li className="w-full p-2 pl-4 rounded-full mb-2 bg-gray-200 hover:bg-gray-400 list-none duration-300">
            <Link to={"/admin/dashboard/editSlider"}>
                Editar Slider
            </Link>
            </li>
        </aside>
    )
}
