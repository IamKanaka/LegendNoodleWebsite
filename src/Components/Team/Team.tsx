import "./Team.css";
interface descDev{
    picture_path:string,
    name:string,
    role:string,
    ig_link:string,
    facebook_link:string
}



function Devteam(){
    const dev_profile:descDev[] = [{
            facebook_link:"https://www.facebook.com/HengkubpomHC",
            ig_link:"https://www.instagram.com/iam_kanaka/",
            name: "Kanok Pongkiartikul",
            role: "Programmer",
            picture_path: "/src/img/profile/kanok.jpg"
        },
        {
            facebook_link:"https://www.facebook.com/profile.php?id=100042337551381",
            ig_link:"https://www.instagram.com/coolerthan.miggie/",
            name: "Kawinpop Auenukroh",
            role: "Sound Engineer",
            picture_path: "/src/img/profile/kawinpop.jpg"
        },
        {
            facebook_link:"https://www.facebook.com/xXMoNoKumAXx",
            ig_link:"https://www.instagram.com/monuay_/",
            name: "Phornphrom Chinbunnak",
            role: "3D Artist",
            picture_path: "/src/img/profile/phornphrom.jpg"
        },
        {
            facebook_link:"https://www.facebook.com/tsurugi.kyousuke.9231",
            ig_link:"https://www.instagram.com/kawfang.w/",
            name: "Wiratchadaporn Chueathong",
            role: "2D Artist",
            picture_path: "/src/img/profile/wiratchadaporn.jpg"
        }
    ]
    return (
        <>
            <div className="Teambg">
                <div className="contentblock">
                    {dev_profile.map((value:descDev)=>{
                        return <DevCard facebook_link={value.facebook_link} ig_link={value.ig_link} name={value.name} picture_path={value.picture_path} role={value.role} />
                    })}
                    
                </div>

            </div>

        </>
    );
}

function DevCard(devser:descDev){
    return (
        <>
        <div className="DevParent">
            <div className="DevBlock">
                <img className="profile_img" src={devser.picture_path} alt="profile" />
                <h4 title={devser.name}>{devser.name}</h4>
                <h5>{devser.role}</h5>
            </div>
            
            <div className="SocialMedia">
                    <a href={devser.facebook_link} target="_blank"><img src="/src/img/icon/facebook.svg" /></a>
                    <a href={devser.ig_link} target="_blank"><img src="/src/img/icon/instagram.svg" /></a>
                </div>
        </div>
        </>
    );
}

export default Devteam;