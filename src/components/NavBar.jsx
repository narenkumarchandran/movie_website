import "../css/NavBar.css"

function NavBar(){

    return (
        <header>
            <div className="left-content">
                <a href="/">MovieApp</a>
            </div>
            <div className="rigth-content">
                <a href="/" >Home</a> 
                <a href="/favorites">Favorites</a>
            </div>
           
        </header>
    );

}
export default NavBar