import Image from 'next/image';
const Partners = () => {
    return (
        <section className="flex flex-col justify-center items-center mb-10">
            <div className="">
                <h2 className='text-center mt-16 text-lime-700 text-4xl font-semibold hover:scale-95 transition-all ease-in duration-300'>Con la confianza de estas empresas:</h2>
                <Image src="/logos.png" alt='' width={1000} height={200} />
            </div>
        </section>
    );
}

export default Partners;