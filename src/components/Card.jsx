export function Card({url}) {
    return (
        <a href="/" className="border border-gray-200 rounded">
            <figure className="">
            <img className="w-full max-h-96" src={url} alt=""/>
            <figcaption className="p-4">
                <p>Hace 5 horas</p>
                <h3 className="my-2 underline uppercase text-blue-700 text-xl">ALCALDÍA DE CÚCUTA E INNPULSA COLOMBIA TRABAJAN DE LA MANO POR LA REACTIVACIÓN ECONÓMICA DE LA CIUDAD </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus suscipit nemo saepe non. Officia odio veniam, adipisci quia, deleniti perspiciatis corporis ipsum incidunt fuga pariatur quibusdam voluptates atque enim?</p>
            </figcaption>
        </figure>
        </a>
    )
}
