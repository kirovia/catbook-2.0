import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"

function App() {

    const [allCats, setAllCats] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/cats')
            .then(resp => resp.json())
            .then(data => setAllCats(data))
            .then(console.log('fetch'))
    }, [])

    return (
        <>
            <Outlet context={{allCats: allCats, setAllCats: setAllCats}} />
        </>
    )
}

export default App