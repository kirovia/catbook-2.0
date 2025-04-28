import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import CatCard from "../components/CatCard"
import Footer from "../components/Footer"
import Form from "../components/Form"
import { useOutletContext } from "react-router-dom"

function CatList() {

    const {allCats, setAllCats} = useOutletContext()

    return (
        <div className="main">
            <Navbar />
                <section>
                    {allCats.map(cat => <CatCard key={cat.id} catId={cat.id} catAbout={cat.about} catBreed={cat.breed} catImage={cat.image}/>)}
                    <Form allCats={allCats} setAllCats={setAllCats}/>
                </section>
            <Footer />
        </div>
    )
}

export default CatList