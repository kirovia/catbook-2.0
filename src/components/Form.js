import { useState } from "react"

function Form({ allCats, setAllCats }) {

    const [formData, setFormData] = useState(['', '', ''])

    const handleSubmit = e => {
        e.preventDefault()
        const newCat = {
            breed: formData[0],
            image: formData[1],
            about: formData[2]
        }
        fetch(`http://localhost:3000/cats`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCat)
        })
        setAllCats([...allCats, newCat])
    }

    const handleFormChange = e => {
        if (e.target.placeholder === 'breed') {
            setFormData([e.target.value, formData[1], formData[2]])
        } else if (e.target.placeholder === 'image') {
            setFormData([formData[0], e.target.value, formData[2]])
        } else if (e.target.placeholder === 'about') {
            setFormData([formData[0], formData[1], e.target.value])
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>ADD NEW CAT</h3>
            <input type="text" placeholder="breed" value={formData[0]} onChange={handleFormChange}></input>
            <br></br>
            <input type="text" placeholder="image" value={formData[1]} onChange={handleFormChange}></input>
            <br></br>
            <textarea placeholder="about" value={formData[2]} onChange={handleFormChange}></textarea>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form