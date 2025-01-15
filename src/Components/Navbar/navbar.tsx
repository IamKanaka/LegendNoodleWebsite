import { Navigate, Outlet, useNavigate } from "react-router";
import "./navbar.css";

function Navbar(){
    const nav = useNavigate();
    return (
        <>
        <div className="bg">
            <div className="left-menu">
            <img className="logo" src="/src/img/logo.png" alt="logo" onClick={()=> nav('')} />
            <div className="block-menu">
                
                <div className="DropDown">
                    <div className="btn">Game Info<img src="/src/img/icon/dropdown.svg" alt="dropdown" /></div>
                    <div className="ContentDropDown">
                        <button className="dropbtn">Character</button>
                        <button className="dropbtn">Character</button>
                        <button className="dropbtn">Character</button>
                    </div>
                </div>
                <button className="btn">Tutorial</button>
                <button className="btn" onClick={()=> nav('/Team')}>Devloper Team</button>
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