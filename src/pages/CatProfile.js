import { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function CatProfile() {

    const [cat, setCat] = useState({})
    const params = useParams()
    const catId = params.id

    useEffect(() => {
        fetch(`http://localhost:3000/cats/${catId}`)
            .then(resp => resp.json())
            .then(data => setCat(data))
    }, [catId])

    if (!cat.breed) {
        return <h1>loading...</h1>
    }

    return (
        <div className="main">
            <Navbar />
            <div className="cat-profile">
                <img src={cat.image}/>
                <h3>{cat.breed.toUpperCase()}</h3>
                <p>{cat.about}</p>
                <NavLink to='/all-cats'>Back to All Cats</NavLink>
            </div>
            <Footer />
        </div>
    )
}

export default CatProfile