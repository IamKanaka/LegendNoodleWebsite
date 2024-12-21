import { Outlet } from "react-router";
import "./navbar.css";

function Navbar(){
    return (
        <>
        <div className="bg">
            <div className="left-menu">
            <img className="logo" src="/src/img/logo.png" alt="logo" />
            <div className="block-menu">
                
                <button className="btn">Game</button>
                <button className="btn">Guide</button>
                <button className="btn">Team</button>
            </div>
            </div>
            <div className="right-menu">
                
            <button className="download">Download</button>
            </div>
        </div>
        <Outlet />
        </>
    );
}

export default Navbar;