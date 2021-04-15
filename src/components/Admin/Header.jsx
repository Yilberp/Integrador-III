import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="z-10 fixed top-0 left-0 w-full bg-red-500">
      <nav className="container py-3 flex justify-between">
        <img className="w-80" src="" alt="" />
        <div className="flex items-center text-white">
            <p className="mr-4 uppercase">ADMIN</p>
            <Link to={"/admin"}>
            <FaSignOutAlt className="cursor-pointer" size={20}/>
            </Link>
        </div>
      </nav>
    </header>
  );
}
