import "../css/NavBar.css"

function NavBar(){

    return (
        <nav>
            <div className="left-content">
                <a href="/">MovieApp</a>
            </div>
            <div className="rigth-content">
                <a href="/" >Home</a> 
                <a href="/favorites">Favorites</a>
            </div>
           
        </nav>
    );

}
export default NavBar