"use client"

import { formSchema } from '@/lib/validationSchema';
import { useState } from 'react';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';

type FormValues = z.infer<typeof formSchema>;

const mapErrors = (errorList: z.ZodError['errors']) => {
    const newErrors: { [key in keyof FormValues]?: string } = {};
    errorList.forEach(err => {
        newErrors[err.path[0] as keyof FormValues] = err.message;
    });
    return newErrors;
};
// Mostrar los Toast correspondientes al éxito o error en el envío del formulario.
const notifySuccess = () => toast.success('¡Correo enviado con éxito!', {
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
});

const notifyFailed = () => toast.error('No se pudo enviar el correo.', {
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
});

export default function ContactForm() {
    const [values, setValues] = useState<FormValues>({
        nombre: '',
        celular: '',
        correo: ''
    });

    const [errors, setErrors] = useState<{ [key in keyof FormValues]?: string }>({});
    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = formSchema.safeParse(values);

        if (!result.success) {
            setErrors(mapErrors(result.error.errors));
            return;
        }

        setErrors({});
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            const data = await response.json();
            if (response.ok) {
                setStatus('Correo enviado con éxito');
                notifySuccess();
            } else {
                setStatus(`Error: ${data.message}`);
                notifyFailed();
            }
        } catch (error) {
            console.error('Error enviando el correo:', error);
            setStatus('Error al enviar el correo');
            notifyFailed();
        }
    };

    return (
        <section className="transition-all duration-300 ease-in w-full p-4 sm:p-1 sm:mt-10 bg-transparent flex flex-col justify-center items-center">
            <div className="border-4 rounded-lg md:w-1/2 xl:w-1/3 p-3 flex flex-col place-content-center items-center text-center transition-all hover:border-blue-950 ease-in duration-300">
                <form onSubmit={handleSubmit} className='p-2 flex flex-col justify-center items-center text-center gap-3'>
                    <h1 className="text-blue-950 font-bold md:text-[20px]">
                        Programar una primera reunión GRATIS:
                    </h1>
                    <div className='flex flex-col justify-start items-start'>
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={values.nombre}
                            onChange={handleChange}
                            placeholder='Jose Luis Torres'
                            className='p-2 rounded-xl border-2'
                        />
                        {errors.nombre && <p className='text-red-500 text-wrap'>{errors.nombre}</p>}
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <label htmlFor="celular">Celular:</label>
                        <input
                            type="text"
                            id="celular"
                            name="celular"
                            value={values.celular}
                            onChange={handleChange}
                            placeholder='777 00 00 000'
                            className='p-2 rounded-xl border-2'
                        />
                        {errors.celular && <p className='text-red-500 text-wrap'>{errors.celular}</p>}
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <label htmlFor="correo">Correo:</label>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            value={values.correo}
                            onChange={handleChange}
                            placeholder='correo@gmail.com'
                            className='p-2 rounded-xl border-2'
                        />
                        {errors.correo && <p className='text-red-500'>{errors.correo}</p>}
                    </div>
                    <button
                        type="submit"
                        className='px-4 py-2 bg-lime-700 rounded-xl text-white'>¡Sí quiero más información!</button>
                    {status &&
                        <p className='text-green-500 mt-3'>{status}</p>
                    }
                </form>
            </div>
            <Toaster />
        </section>
    );
}

