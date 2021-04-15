export function EditNew() {
    return (
        <div className="w-5/6 absolute top-0 right-0 flex items-center justify-center min-h-screen">
            <form className="rounded-xl shadow-2xl p-8">
                <h4 className="text-2xl mb-4">Editar Noticia</h4>
                <div className="flex">
                <label className="w-full mt-2" id="titulo">
                    <span>Titulo</span>
                    <input className="w-full border" type="text" id="titulo" />
                </label>
                <label className="w-full mt-2 ml-2" id="titulo">
                    <span>URL imagen</span>
                    <input className="w-full border" type="text" id="titulo" />
                </label>
                </div>
                <label className="w-full mt-2" id="description">
                    <span>Descripcion</span>
                    <textarea id="description" className="border w-full resize-none" cols="30" rows="10"></textarea>
                </label>
                <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg border-0">Actualizar</button>
            </form>
        </div>
    )
}
