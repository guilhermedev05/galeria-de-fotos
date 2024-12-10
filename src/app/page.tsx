"use client"

import { Fotos } from "@/data/Fotos"
import { useState } from "react"

const Page = () => {

    const [open, setOpen] = useState(false)
    const [imgModal, setImgModal] = useState({ id: 0, url: '' })

    const openModal = (id: number) => {
        Fotos.filter(item => item.id == id ? setImgModal(item) : '')
        setOpen(true)
    }

    return (
        <main className="h-screen flex flex-col items-center text-2xl">
            {!open &&
                <section className="w-full max-w-screen-md">
                    <h1 className="text-center my-2.5">Fotos intergalacticas</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Fotos.map(foto => (
                            <figure onClick={() => openModal(foto.id)}>
                                <img key={foto.id} src={foto.url} alt="" />
                            </figure>
                        ))}
                    </div>
                </section>
            }
            {open &&
                <section className="w-screen h-screen flex justify-center" onClick={() => setOpen(false)}>
                    <div className="w-full max-w-screen-lg h-screen flex justify-center items-center">
                        <button className="absolute top-5 right-5" onClick={() => setOpen(false)}>x</button>
                        <figure className="h-full my-5">
                            <img className="w-full h-full" key={imgModal.id} src={imgModal.url} />
                        </figure>
                    </div>
                </section>
            }
        </main>
    )
}

export default Page