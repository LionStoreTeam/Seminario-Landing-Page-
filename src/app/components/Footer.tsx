import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <div className="bg-slate-50 w-full flex flex-col text-[12px] py-2 text-center place-content-center items-center fixed bottom-0">
            <h1>&copy;{" "}{currentYear} {" "} Todos los derechos reservados</h1>

        </div>
    )
}
