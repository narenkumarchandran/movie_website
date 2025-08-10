import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar(){
    return (
        <header>
            <div className="left-content">
                <Link to="/">NkMovies</Link>
            </div>
            <div className="rigth-content">
                <Link to="/">Home</Link> 
                <Link to="/favorites">Favorites</Link>
            </div>
        </header>
    );
}

export default NavBar;
