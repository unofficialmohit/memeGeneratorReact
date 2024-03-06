import React from "react";
import Troll from "./assets/troll-face.png";
function Header(){
return(
    <div className="nav-bar">
    <img src={Troll} className="troll"></img>
    <div className="sitename">Meme Generator</div>
    <div className="end">Made by mohit</div>
    </div>
    )
}
export default Header;