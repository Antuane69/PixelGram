import GuestLayout from "@/Layouts/GuestLayout.jsx";
import {Head} from "@inertiajs/react"
import { useMemo } from "react";

export default function Error({estatus}){
    // const title = estatus === 404 ? "Pagina no Encontrada" : "Ocurrio un Error";
    const title = useMemo(() => {
        return(
            {
                "404": "Pagina no Encontrada",
                "403": "Ocurrio un Error"
            }[estatus] || "Algo Ocurrio"
        );
    },[estatus]);

    const description = useMemo(() => {
        return(
            {
                "404": "La pagina que buscas ya no esta disponible.",
                "403": "No tienes permisos para hacer esta accion."
            }[estatus] || "Contacta a los administradores de la pagina para mas informacion"
        );
    },[estatus]);

    return (
        <GuestLayout>
            <Head title={title}/>
            <div className="mb-4 font-medium text-sm text-red-800">
                {description}
            </div>
        </GuestLayout>
    );
}
