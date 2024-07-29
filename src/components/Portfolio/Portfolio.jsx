import { useState } from 'react'
import React from 'react';
import cabin from "./../../images/cabin.4417330275f78faa31c3.png"
import cake from "./../../images/cake.6554473016d32b343f02.png"
import circus from "./../../images/circus.494a4a914b5471b41f3e.png"
import game from "./../../images/game.a940b57aa7bab2eacc52.png"
import safe from "./../../images/safe.01792c0bdc342bf4bf9c.png"
import submarine from "./../../images/submarine.48c9704ca7f8ce901038.png"

export default function Portfolio() {

    const [modalCabin, setModalCabin] = useState(false)
    const toggleModalCabin = () => {
        setModalCabin(!modalCabin)
    }

    const [modalCake, setModalCake] = useState(false)
    const toggleModalCake = () => {
        setModalCake(!modalCake)
    }

    const [modalCircus, setModalCircus] = useState(false)
    const toggleModalCircus = () => {
        setModalCircus(!modalCircus)
    }

    const [modalGame, setModalGame] = useState(false)
    const toggleModalGame = () => {
        setModalGame(!modalGame)
    }

    const [modalSafe, setModalSafe] = useState(false)
    const toggleModalSafe = () => {
        setModalSafe(!modalSafe)
    }

    const [modalSubmarine, setModalSubmarine] = useState(false)
    const toggleModalSubmarine = () => {
        setModalSubmarine(!modalSubmarine)
    }

    return <>
        <section className='pb-20 pt-48'>
            {/* ===== Portfolio Header ===== */}
            <div>
                <h1 className='header-color font-bold text-5xl tracking-wider'>PORTFOLIO</h1>
                <i class="fa-solid fa-star  fa-2xl my-10 header-color"></i>
            </div>
            {/* ===== Portfolio Content ===== */}
            <div className="grid mt-10  grid-cols-3 gap-10 px-28 overflow-hidden">
                <div className="relative m-auto" onClick={toggleModalCabin} >
                    <div>
                        <img src={cabin} className="rounded-xl w-fit" alt="" />
                    </div>

                    <div className="bg-emerald-600 rounded-xl absolute text-center flex items-center justify-center top-0 left-0 right-0 bottom-0 opacity-0 z-30 transition-all hover:opacity-75">
                        <i className="fa-solid fa-5x text-white fa-plus"></i>
                    </div>
                </div>
                <div className="relative m-auto" onClick={toggleModalCake}>
                    <div>
                        <img src={cake} className="rounded-xl w-fit" alt="" />
                    </div>

                    <div className="bg-emerald-600 rounded-xl absolute text-center flex items-center justify-center top-0 left-0 right-0 bottom-0 opacity-0 z-30 transition-all hover:opacity-75">
                        <i className="fa-solid fa-5x text-white fa-plus"></i>
                    </div>
                </div>
                <div className="relative m-auto" onClick={toggleModalCircus}>
                    <div>
                        <img src={circus} className="rounded-xl w-fit" alt="" />
                    </div>

                    <div className="bg-emerald-600 rounded-xl absolute text-center flex items-center justify-center top-0 left-0 right-0 bottom-0 opacity-0 z-30 transition-all hover:opacity-75">
                        <i className="fa-solid fa-5x text-white fa-plus"></i>
                    </div>
                </div>
                <div className="relative m-auto" onClick={toggleModalGame}>
                    <div>
                        <img src={game} className="rounded-xl w-fit" alt="" />
                    </div>

                    <div className="bg-emerald-600 rounded-xl absolute text-center flex items-center justify-center top-0 left-0 right-0 bottom-0 opacity-0 z-30 transition-all hover:opacity-75">
                        <i className="fa-solid fa-5x text-white fa-plus"></i>
                    </div>
                </div>
                <div className="relative m-auto" onClick={toggleModalSafe}>
                    <div>
                        <img src={safe} className="rounded-xl w-fit" alt="" />
                    </div>

                    <div className="bg-emerald-600 rounded-xl absolute text-center flex items-center justify-center top-0 left-0 right-0 bottom-0 opacity-0 z-30 transition-all hover:opacity-75">
                        <i className="fa-solid fa-5x text-white fa-plus"></i>
                    </div>
                </div>
                <div className="relative m-auto" onClick={toggleModalSubmarine}>
                    <div>
                        <img src={submarine} className="rounded-xl w-fit" alt="" />
                    </div>

                    <div className="bg-emerald-600 rounded-xl absolute text-center flex items-center justify-center top-0 left-0 right-0 bottom-0 opacity-0 z-30 transition-all hover:opacity-75">
                        <i className="fa-solid fa-5x text-white fa-plus"></i>
                    </div>
                </div>
            </div>
        </section>
        
        {modalCabin && (
            <div>
                <div className='w-full h-screen top-0 left-0 right-0 bottom-0 z-50 fixed bg-slate-900/75' onClick={toggleModalCabin}>
                    <div className='w-1/3 m-auto pt-52'>
                        <img src={cabin} alt="" />
                    </div>
                </div>
            </div>
        )}

        {modalCake && (
            <div>
                <div className='w-full h-screen top-0 left-0 right-0 bottom-0 z-50 fixed bg-slate-900/75' onClick={toggleModalCake}>
                    <div className='w-1/3 m-auto pt-52'>
                        <img src={cake} alt="" />
                    </div>
                </div>
            </div>
        )}

        {modalCircus && (
            <div>
                <div className='w-full h-screen top-0 left-0 right-0 bottom-0 z-50 fixed bg-slate-900/75' onClick={toggleModalCircus}>
                    <div className='w-1/3 m-auto pt-52'>
                        <img src={circus} alt="" />
                    </div>
                </div>
            </div>
        )}

        {modalGame && (
            <div>
                <div className='w-full h-screen top-0 left-0 right-0 bottom-0 z-50 fixed bg-slate-900/75' onClick={toggleModalGame}>
                    <div className='w-1/3 m-auto pt-52'>
                        <img src={game} alt="" />
                    </div>
                </div>
            </div>
        )}

        {modalSafe && (
            <div>
                <div className='w-full h-screen top-0 left-0 right-0 bottom-0 z-50 fixed bg-slate-900/75' onClick={toggleModalSafe}>
                    <div className='w-1/3 m-auto pt-52'>
                        <img src={safe} alt="" />
                    </div>
                </div>
            </div>
        )}

        {modalSubmarine && (
            <div>
                <div className='w-full h-screen top-0 left-0 right-0 bottom-0 z-50 fixed bg-slate-900/75' onClick={toggleModalSubmarine}>
                    <div className='w-1/3 m-auto pt-52'>
                        <img src={submarine} alt="" />
                    </div>
                </div>
            </div>
        )}



    </>


}