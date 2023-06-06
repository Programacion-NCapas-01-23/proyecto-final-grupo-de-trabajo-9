import React from 'react'
import Footer from "../../components/Footer/Footer";
import CardHome from "../../components/Card/CardHome";


export const Record = () => {
    return (
        <>
            <h1 className="text-center text-4xl font-bold mt-8 mb-4">Asistencias</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10" style={{ justifyItems: 'center', alignItems: 'center' }} >
                <CardHome />
                <CardHome />
                <CardHome />

                <CardHome />
                <CardHome />
                <CardHome />

                <CardHome />
                <CardHome />
                <CardHome />
            </div>

            <Footer />
        </>
    )
}

export default Record;