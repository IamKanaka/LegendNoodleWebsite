import "./navbar.css";

function Navbar(){
    return (
        <div className="bg">
            
            <div className="left-menu">
                
                <button className="btn">Tutorial</button>
                <button className="btn">Credit</button>
                <button className="btn">Media</button>
            </div>
            <img className="logo" src="https://img.itch.zone/aW1nLzE4NDE2MjQ5LnBuZw==/315x250%23c/zRo0lB.png" alt="logo" />
            <div className="right-menu">
                
            <button className="btn">Download</button>
            </div>
        </div>
    );
}

export default Navbar;