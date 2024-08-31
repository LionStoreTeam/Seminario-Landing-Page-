import Image from "next/image"


export default function Reviews() {
    return (
        <section>
            <div className="flex flex-col justify-center items-center text-center px-5 mb-10">
                <h2 className='pb-10 text-4xl font-semibold text-lime-700'>Escucha lo que dicen los clientes sobre Mexing:</h2>
                <div className="p-2 flex flex-col gap-3 md:gap-4 justify-center items-center text-center">
                    <div className="p-4 bg-slate-100 flex flex-col justify-center items-center text-center sm:w-[500px] hover:bg-blue-100 transition-all ease-in duration-300">
                        <Image src="/adan_lopez.png" alt="" width={200} height={200} className="pb-5" />
                        <h3 className="font-semibold text-lime-700 pb-5">Adan López</h3>
                        <hr className="border-2 border-gray-300 w-full" />
                        <p className="pt-5">
                            <i>
                                “Decidí inscribirme en el programa de certificación del estándar 366 con MEXING porque quería especializarme y destacar en mi campo. La experiencia superó mis expectativas. El contenido del curso es muy relevante y actualizado, y los recursos de aprendizaje son excelentes. Después de obtener mi certificación, he tenido más entrevistas y me han ofrecido mejores posiciones. Recomiendo MEXING a cualquier persona que quiera avanzar en su carrera.”
                            </i>
                            <br />
                            <br />
                            <span className="font-semibold">
                                <span className="text-lime-700">
                                — Adan López.
                                </span>
                                <br />
                                 Consultor de Recursos Humanos
                            </span>
                        </p>
                    </div>
                    <div className="p-4 bg-slate-100 flex flex-col justify-center items-center text-center sm:w-[500px] hover:bg-blue-100 transition-all ease-in duration-300">
                        <Image src="/laura_garcia.png" alt="" width={200} height={200} className="pb-5" />
                        <h3 className="font-semibold text-lime-700 pb-5">Laura García</h3>
                        <hr className="border-2 border-gray-300 w-full" />
                        <p className="pt-5">
                            <i>
                                “Tomar el curso de certificación en el estándar 301 con MEXING fue una experiencia transformadora para mi carrera. Antes, sentía que mis habilidades no estaban lo suficientemente reconocidas. La certificación no solo me dio confianza, sino que también me abrió nuevas oportunidades laborales. Ahora, trabajo como supervisor en mi empresa y puedo aplicar lo aprendido cada día. ¡Gracias, MEXING!”
                            </i>
                            <br />
                            <br />
                            <span className="font-semibold">
                                <span className="text-lime-700">
                                — Laura García. 
                                </span>
                                <br />
                                 Capacitador externo en las empresas.
                            </span>
                        </p>
                    </div>
                    <div className="p-4 bg-slate-100 flex flex-col justify-center items-center text-center sm:w-[500px] hover:bg-blue-100 transition-all ease-in duration-300">
                        <Image src="/carlos_ramirez.png" alt="" width={200} height={200} className="pb-5" />
                        <h3 className="font-semibold text-lime-700 pb-5">Carlos Ramirez</h3>
                        <hr className="border-2 border-gray-300 w-full" />
                        <p className="pt-5">
                            <i>
                                “La capacitación en el estándar 217.01 de MEXING me permitió adquirir competencias clave que nunca imaginé que podría dominar. La metodología de enseñanza es muy práctica y los instructores son expertos en sus áreas. Desde que obtuve mi certificación, he notado un incremento en mis responsabilidades y he sido considerado para promociones. Sin duda, MEXING ha sido un catalizador en mi desarrollo profesional.”
                            </i>
                            <br />
                            <br />
                            <span className="font-semibold">
                                <span className="text-lime-700">
                                — Carlos Ramírez. 
                                <br />
                                </span>
                                 Especialista en Control de Calidad, servicios de capacitación.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
