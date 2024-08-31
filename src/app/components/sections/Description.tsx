import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"


const DescriptionSection = () => {
    return (
        <section className="flex flex-col mt-10 mb-10 px-5 sm:px-10 xl:px-40">
            <h1 className="text-center text-4xl font-bold text-blue-950 mb-10 hover:scale-105 transition-all ease-in duration-300">¿Qué Ofrecemos?</h1>
            <div className="">
                <p className="text-xl sm:text-2xl hover:scale-105 transition-all ease-in duration-300">
                    En el Instituto de Formación y Certificación de México (MEXING), te ofrecemos la oportunidad de certificarte en competencias laborales clave que potencian tu carrera profesional. Nuestra capacitación abarca seis estándares reconocidos: EC0217.01, EC0301, EC0366, EC0249, EC0076 y EC01061. Con nuestros cursos, podrás adquirir y demostrar las competencias requeridas por el estándar de competencia que elijas y puedas  destacar en tu área de especialización y certificarte en un corto tiempo. Recuerda: como Institución, Méxing forma parte de la red de prestadores de servicios con registro oficial ante el
                    <span className="text-blue-800">
                        <HoverCard>
                            <HoverCardTrigger>{" "}CONOCER{" "}</HoverCardTrigger>
                            <HoverCardContent className="bg-blue-950 text-white">
                                Consejo Nacional de Evaluación de Competencias laborales.
                            </HoverCardContent>
                        </HoverCard>

                    </span>
                    de la
                    <span className="text-blue-800">
                        <HoverCard>
                            <HoverCardTrigger>{" "}SEP{" "}</HoverCardTrigger>
                            <HoverCardContent className="bg-blue-950 text-white">
                                Secretaría de Educación Pública del Gobierno de México.
                            </HoverCardContent>
                        </HoverCard>
                    </span>
                    en México.
                </p>
            </div>
        </section>

    );
}

export default DescriptionSection;