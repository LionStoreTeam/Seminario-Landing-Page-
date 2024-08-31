import Image from 'next/image';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const ContentSection = () => {
    return (
        <section className="mb-10">
            {/* Banner Person */}
            <div className="flex flex-col sm:flex sm:flex-row justify-center items-center gap-2">
                <div className="p-5 text-center sm:w-1/2">
                    <h2 className='text-lime-700 text-4xl font-semibold hover:scale-110 transition-all ease-in duration-300'>Algunas buenas razones para capacitarte y evaluarte con fines de certificación en Méxing.</h2>
                </div>
                <div className="p-5 hover:scale-110 transition-all ease-in duration-300">
                    <Image src="/person.png" alt='' width={200} height={200} />
                </div>
            </div>
            {/* Content Accordion */}
            <div className="flex flex-col gap-2 mt-10 md:text-lg xl:text-2xl border-2 rounded-xl mx-5 sm:mx-10 p-3 hover:transition-all hover:border-blue-950 ease-in duration-300">
                <Accordion type="single" collapsible className="w-full ">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='font-semibold'>¿Eres un instructor, te dedicas a la capacitación?</AccordionTrigger>
                        <AccordionContent className='md:text-lg xl:text-xl'>
                            Imagina diseñar cursos de formación del capital humano de manera magistral, como un verdadero artista que esculpe el conocimiento. Con el estándar EC0301, aprenderás a crear experiencias de aprendizaje memorables, desde la elaboración de cartas descriptivas hasta la selección de las técnicas de instrucción más impactantes. ¡Convierte tus cursos en obras maestras que transformen vidas!

                            Pero eso no es todo. ¿Deseas certificar tu noble tarea como instructor de cursos? ¡El estándar EC0217.01 es tu boleto dorado hacia la excelencia pedagógica! Prepárate para ser el conductor de la sabiduría, dominando cada sesión con precisión y pasión. Desde la planeación hasta la evaluación, serás el guía que ilumina mentes y corazones y como complemento el EC0366- Desarrollo de cursos de formación en línea, sirve como referencia para la evaluación y certificación de las personas que se desempeñan como desarrolladores de cursos para formación en línea.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className='font-semibold'>Eres un Consultor? Certifica tu competencia a través de una metodología probada.</AccordionTrigger>
                        <AccordionContent className='md:text-lg xl:text-xl'>
                            ¡Descubre el poder de ser un Consultor destacado con el EC0249! Este estándar te certifica en la identificación y satisfacción de las necesidades de tus clientes, asegurando que ofrezcas soluciones precisas y efectivas. Con la certificación EC0249, te destacarás en tu área de especialidad y ganarás la confianza de quienes buscan tu experiencia. Todo respaldado por el CONOCER, avalado por la SEP en México. Aprovecha esta oportunidad para elevar tu carrera. ¡Fácil, rápido y directo al punto! Regístrate hoy y comienza tu camino hacia la excelencia profesional.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className='font-semibold'>¡Descubre al líder que llevas dentro con el EC01061!</AccordionTrigger>
                        <AccordionContent className='md:text-lg xl:text-xl'>
                            Este estándar te certifica como un líder nato, capaz de guiar, inspirar y llevar a tu equipo al éxito. Con el EC01061, desarrollarás habilidades clave para tomar decisiones acertadas y manejar situaciones complejas con confianza y autoridad. Todo respaldado por el CONOCER y avalado por la SEP en México. No pierdas tiempo, haz que tu liderazgo hable por ti. ¡Regístrate hoy y transforma tu futuro con un simple paso!
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            {/* Content Cards */}
            <div className="p-1 mt-10 flex flex-col gap-2">
                <h2 className='text-center text-2xl sm:text-4xl font-semibold text-lime-700 mt-10 mb-5 hover:scale-95 transition-all ease-in duration-300'>¿Quieres formar parte de nuestro equipo como evaluador independiente? ¡Certifícate en el EC076 como evaluador de competencias!</h2>
                <div className="p-2 mx-2 flex flex-col gap-2 sm:flex sm:flex-row sm:gap-5 justify-center items-center">
                    <div className="p-4 sm:w-[500px] bg-slate-100 rounded-xl flex flex-col justify-center items-center text-center hover:bg-blue-100 transition-all ease-in duration-300">
                        <Image src="/brain.png" alt='' width={150} height={150} className='pb-5 hover:scale-110 transition-all ease-in duration-300' />
                        <h2 className='font-semibold text-lg pb-3'>Objetivo principal</h2>
                        <p>Promover los programas de capacitación y certificación en competencias laborales que ofrece el CONOCER, dirigidos a profesionales que buscan fortalecer su perfil laboral y obtener una certificación oficial.</p>
                    </div>
                    <div className="p-4 sm:w-[500px] bg-slate-100 rounded-xl flex flex-col justify-center items-center text-center hover:bg-blue-100 transition-all ease-in duration-300">
                        <Image src="/sheet.png" alt='' width={150} height={150} className='pb-5 hover:scale-110 transition-all ease-in duration-300' />
                        <h2 className='font-semibold text-lg pb-3'>Dirigido a</h2>
                        <p>
                            Profesionales de diversas industrias interesados en certificar sus competencias laborales.
                            Empresas que desean capacitar a sus empleados.
                            Recién egresados que buscan diferenciarse en el mercado laboral.
                        </p>
                    </div>
                </div>
                <div className="p-2 mx-2 flex flex-col gap-2 sm:flex sm:flex-row sm:gap-5 justify-center items-center">
                    <div className="p-4 sm:w-[500px] bg-slate-100 rounded-xl flex flex-col justify-center items-center text-center hover:bg-blue-100 transition-all ease-in duration-300">
                        <Image src="/blumb.png" alt='' width={150} height={150} className='pb-5 pt-2 hover:scale-110 transition-all ease-in duration-300' />
                        <h2 className='font-semibold text-lg pb-3'>Beneficios de certificarte en
                            <span className='text-lime-700'>
                                {" "}MEXING{" "}
                            </span>:
                        </h2>
                        <p>
                            Reconocimiento Oficial: Certificaciones avaladas por estándares oficiales.
                            Flexibilidad: Programas diseñados para adaptarse a tus necesidades de tiempo y ubicación.
                            Crecimiento Profesional: Mejora tu perfil laboral y aumenta tus oportunidades de empleo.
                            Calidad y Experiencia: Instructores con amplia experiencia en cada área de competencia.
                        </p>
                    </div>
                    <div className="p-4 sm:w-[500px] bg-slate-100 rounded-xl flex flex-col justify-center items-center text-center hover:bg-blue-100 transition-all ease-in duration-300">
                        <Image src="/grown.png" alt='' width={150} height={150} className='pb-5 hover:scale-110 transition-all ease-in duration-300' />
                        <h2 className='font-semibold text-lg pb-3'>Cambia tu perfil Profesional</h2>
                        <p>
                            No pierdas la oportunidad de certificarte con los mejores. ¡MEXING te ayuda a construir un futuro brillante!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContentSection;

