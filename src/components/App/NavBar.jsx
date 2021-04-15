import { IoChevronDownOutline } from "react-icons/io5"
export function NavBar() {
    return (
        <div className="w-full bg-white py-3">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div>
                        <a href="/">
                        <img className="w-14 h-14 mr-3" src="http://www.cucuta-nortedesantander.gov.co/sites/cucutanortedesantander/content/files/000881/44010_300x300-alcaldia_200x200.png" alt="Alcaldia Municipal de San Jose de Cucuta"/>
                        </a>
                    </div>
                    <a className="text-gray-700 font-medium" href="/"><h1>Alcaldía Municipal de San José de Cúcuta</h1></a>
                </div>
            </div>
            <div className="container mx-auto bg-gray-100 border-br border-red-500">
                <ul className="max-w-7xl flex h-14">
                    <li className="relative w-24 flex items-center justify-center hover:bg-red-500 hover:text-white">
                        <a className="px-2" href="/">Inicio</a>
                    </li>
                    <li className="relative w-1/6 flex items-center justify-center hover:bg-red-500 hover:text-white">
                        <a className="break-words px-2 text-center" href="/">Transparencia y acceso a la información pública </a>
                    </li>
                    <li className=" group relative w-1/6 flex items-center justify-center hover:bg-red-500">
                        <a className="break-words px-2 text-center flex justify-center items-center" href="/">Servicios de atención a la ciudadanía<IoChevronDownOutline size={20}  /></a>
                        <ul className="z-10 absolute invisible group-hover:visible top-14 left-0 bg-gray-100 w-auto md:w-72 transition-all duration-100">
                            <li className="p-1 w-full block relative hover:bg-red-300">
                                <a className="w-64 px-2" href="/">Trámites y servicios</a>
                            </li>
                            <li className="p-1 w-full block relative hover:bg-red-300">
                                <a className="w-64 px-2" href="/">Mecanismos de contacto</a>
                            </li>
                            <li className="p-1 w-full block relative hover:bg-red-300">
                                <a className="w-64 px-2" href="/">PQRDS Recepción de Solicitudes</a>
                            </li>
                            <li className="p-1 w-full block relative hover:bg-red-300">
                                <a className="w-64 px-2" href="/">Política y protección de datos</a>
                            </li>
                            <li className="p-1 w-full block relative hover:bg-red-300">
                                <a className="w-64 px-2" href="/">Cucuta se reactiva</a>
                            </li>
                        </ul>
                    </li>
                    <li className="group relative w-1/6 flex items-center justify-center hover:bg-red-500">
                        <a className="px-2 text-center flex justify-center items-center" href="/">Participa <IoChevronDownOutline size={20}  /></a>
                        <ul className="z-10 absolute invisible group-hover:visible top-14 left-0 bg-gray-100 w-auto md:w-72 transition-all duration-100">
                            <li className="p-1 w-full block relative hover:bg-red-300">
                                <a className="w-64 px-2" href="/">Calendario de actividades</a>
                            </li>
                            <li className="p-1 w-full block relative hover:bg-red-300">
                                <a className="w-64 px-2" href="/">Niños, niñas, adolescentes</a>
                            </li>
                            <li className="p-1 w-full block relative hover:bg-red-300">
                                <a className="w-64 px-2" href="/">Retos de participación</a>
                            </li>
                            <li className="p-1 w-full block relative hover:bg-red-300">
                                <a className="w-64 px-2" href="/">Instancias de participación</a>
                            </li>
                            <li className="p-1 w-full block relative hover:bg-red-300">
                                <a className="w-64 px-2" href="/">RETO DE RENDICION</a>
                            </li>
                        </ul>
                    </li>
                    <li className="relative w-1/6 flex items-center justify-center hover:bg-red-500 hover:text-white">
                        <a className="px-2 text-center" href="/">Noticias  </a>
                    </li>
                    <li className="relative w-1/6 flex items-center justify-center hover:bg-red-500 hover:text-white">
                        <a className="px-2 text-center" href="/">Normatividad  </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
