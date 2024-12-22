import "./homepage.css";


function Homepage(){
    return (
        <>
            <div>
                <video src="/src/video/LegendNoodleGamePlay.mp4" className="main-video" autoPlay muted loop></video>
                <div className="CenterBox">
                    <h2>LegendNoodle</h2>
                    <p>Get ready to cook up a storm and show off your amazing culinary skills. Let's crush those sales targets!</p>
                    <button className="playbutton">Cook Now <img src="/src/img/icon/noodle.svg" alt="noodle" /></button>
                </div>
            </div>
        </>
    );
}

export default Homepage;