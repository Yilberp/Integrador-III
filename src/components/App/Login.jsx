import styles from "./Login.module.css"
export function Login() {
    return (
        <div className={styles.login}>
            <form action="/admin/dashboard/registerNew" className="w-96 gap-6 py-10 border border-gray-200 rounded shadow-md flex flex-col justify-center items-center">
                <h1 className="font-bold text-2xl">INICIA SESION</h1>
                <div className="flex flex-col">
                <label htmlFor="">Email:</label>
                <input className="py-3 px-2 mt-1 w-72 rounded border border-gray-300 shadow-sm focus:outline-none focus:border-red-400 focus:ring focus:ring-red-300 focus:ring-opacity-50" type="email" name="" id="" placeholder="Correo electronico" />
                </div>
                <div className="flex flex-col">
                <label htmlFor="">Contraseña:</label>
                <input className="py-3 px-2 mt-1 w-72 rounded border border-gray-300 shadow-sm focus:outline-none focus:border-red-400 focus:ring focus:ring-red-300 focus:ring-opacity-50" type="password" name="" id="" placeholder="Contraseña" />
                </div>
                <a className="text-blue-500" href="/">Recuperar Contraseña</a>
                <button type="submit" className="w-36 py-2 px-4 border rounded bg-red-500 hover:bg-red-700 text-white">Entrar</button>
            </form>
        </div>
    )
}
