import { Outlet } from "react-router";
import "./navbar.css";

function Navbar(){
    return (
        <>
        <div className="bg">
            
            <div className="left-menu">
                
                <button className="btn">Tutorial</button>
                <button className="btn">Credit</button>
                <button className="btn">Media</button>
            </div>
            <img className="logo" src="/src/img/logo.png" alt="logo" />
            <div className="right-menu">
                
            <button className="btn">Download</button>
            </div>
        </div>
        <Outlet />
        </>
    );
}

export default Navbar;