"use client"
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
const Welcome = () => {
    return (
        <div className="flex flex-col justify-center items-center sm:flex sm:flex-row gap-2 sm:gap-5 md:px-10">
            <div className="p-5 flex flex-col justify-center items-center text-center">
                <h1 className="text-lime-700 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                    <span className="text-[#1e2f59ee]">
                        ¡Desarrolla tu Potencial!{""}
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "Certifícate",
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            "Con MEXING",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
            </div>
            <div className="p-5">
                <Image src="/mexing.jpg" alt="" width={500} height={500} />
            </div>
        </div>
    );
}

export default Welcome;