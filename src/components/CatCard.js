import { Link } from "react-router-dom"

function CatCard({ catId, catBreed, catImage, catAbout }) {
    return (
        <div className="cat-card">
            <img src={catImage} />
            <h3>{catBreed}</h3>
            <Link to={`/cat-profile/${catId}`}>See more</Link>
        </div>
    )
}

export default CatCard