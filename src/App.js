import "./App.css";
import React from "react";
// import { Player } from "video-react";
import BootStrapDropdown from "react-bootstrap/Dropdown";
import BootStrapDropdownButton from "react-bootstrap/DropdownButton";
import BootStrapCard from "react-bootstrap/Card";
import Jazzy from "./Jazzy.png";
import Kiki from "./Kiki.png";
import Top1 from "./Top1.mp4";
// align
// "start"|"end"}

function App() {
  return (
    <>
      <div className="Room">
        <div className="Nav">
          <ul>FB</ul>
          <ul>TW</ul>
          <ul>IG</ul>
          <ul>SC</ul>
        </div>
        <div className="Dropdown">
          <BootStrapDropdownButton
            id="dropdown-basic-button"
            title="Dropdown button"
          >
            <div className="DropdownMenu">
              <BootStrapDropdown.Item href="#/action-1">
                Home
              </BootStrapDropdown.Item>
              <BootStrapDropdown.Item href="#/action-2">
                Accounts
              </BootStrapDropdown.Item>
              <BootStrapDropdown.Item href="#/action-3">
                Rooms
              </BootStrapDropdown.Item>
              <BootStrapDropdown.Item href="#/action-3">
                Settings
              </BootStrapDropdown.Item>
              <BootStrapDropdown.Item href="#/action-3">
                Help
              </BootStrapDropdown.Item>
            </div>
          </BootStrapDropdownButton>
        </div>
        <div className="h-divider">
          <div className="shadow">Rekishia's Room</div>
          <div className="Player"></div>
          <div className="Top">
            {/* <Player>
                playsInline={true}
                src={Top1}
              </Player> */}
          </div>
          <BootStrapCard>
            <div className="Kiki">
              <img src={Kiki} alt="Kiki" />
              <div className="Ki">Kiki</div>
              <div className="stats1">Followers</div>
              <p>1.2 Mil</p>

              {/* <span></span> 
                  <span>132</span>
                </div>
              </div> */}
              <div className="buttons">
                <button className="follow">Follow</button>
                <button className="message">Message</button>
              </div>
            </div>
          </BootStrapCard>
          <h1>TOP FRIENDS</h1>
          <div className="Container">
            <BootStrapCard>
              <div className="Jazzy">
                <img src={Jazzy} alt="Jasmene" />
                <div className="Jaz">Jazzy</div>
                <div className="stats">Followers</div>
                <span>132</span>
                {/* <span></span> 
                  <span>132</span>
                </div>
              </div> */}
                <div className="btn">
                  <button className="follow">Follow</button>
                  <button className="message">Message</button>
                </div>
              </div>
            </BootStrapCard>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
