import { Card } from "../Card";

export function NewsGrid() {
    return (
        <section className="w-full my-5">
            <article className="w-4/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                <Card url="https://cucutanortedesantander.micolombiadigital.gov.co/sites/cucutanortedesantander/content/files/000971/48505_vicepresidenta-marta-lucia-ramirez-y-alcalde-jairo-yanez_1024x600.jpg" />
                <Card url="https://cucutanortedesantander.micolombiadigital.gov.co/sites/cucutanortedesantander/content/files/000970/48487_alcaldia-de-cucuta-e-innpulsa-colombia-trabajan-de-la_1024x600.jpeg" />
                <Card url="https://cucutanortedesantander.micolombiadigital.gov.co/sites/cucutanortedesantander/content/files/000968/48374_como-una-apuesta-por-la-seguridad-y-la-movilidad-alcaldia_1024x600.jpeg" />
            </article>
        </section>
    )
}
