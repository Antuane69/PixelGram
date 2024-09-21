import toast, { Toaster } from "react-hot-toast";
import { useEffect } from 'react';
import { usePage } from "@inertiajs/react";

export default function Toastify() {
    const page = usePage();

    useEffect(() => {
        if(page?.props?.message){
            toast(page.props.message.body,{
                type: page.props.message.type,
                position: "top-right",
            })
        }
    },[page.props.message])

  return (
    <>
        <Toaster />
    </>
  )
}
