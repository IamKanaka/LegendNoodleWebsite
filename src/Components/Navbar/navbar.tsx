import { Outlet } from "react-router";
import "./navbar.css";

function Navbar(){
    return (
        <>
        <div className="bg">
            <div className="left-menu">
            <img className="logo" src="/src/img/logo.png" alt="logo" />
            <div className="block-menu">
                
                <button className="btn">Game Info</button>
                <button className="btn">Tutorial</button>
                <button className="btn">Devloper Team <img src="/src/img/icon/dropdown.svg" alt="dropdown" /></button>
            </div>
            </div>
            <div className="right-menu">
                
            <button className="download">Download <img src="/src/img/icon/download.svg" alt="download" /></button>
            </div>
        </div>
        <Outlet />
        </>
    );
}

export default Navbar;