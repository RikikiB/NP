import "./App.css";
import React from "react";
// import { Player } from "video-react";
import BootStrapDropdown from "react-bootstrap/Dropdown";
import BootStrapDropdownButton from "react-bootstrap/DropdownButton";
import BootStrapCard from "react-bootstrap/Card";
import BootStrapCard1 from "react-bootstrap/Card";
import BootStrapButton from "react-bootstrap/Button";
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
          <BootStrapCard1>
            <div className="Kiki">
              <BootStrapCard.Body>
                <BootStrapCard.Img src={Kiki} alt="Kiki" />
                <div className="Ki">Kiki</div>
                <div className="stats1">Followers</div>
                <p>1.2 Mil</p>
                <div className="buttons">
                  <BootStrapButton className="follow">
                    Follow
                  </BootStrapButton>
                  <BootStrapButton className="message">
                    Message
                  </BootStrapButton>
                </div>
              </BootStrapCard.Body>
            </div>
          </BootStrapCard1>
          <h1>TOP FRIENDS</h1>
          <div className="Container">
            <BootStrapCard1>
              <div className="Jazzy">
                <BootStrapCard.Body>
                  <BootStrapCard.Img
                    right="50px"
                    src={Jazzy}
                    alt="Jasmene"
                  />
                  <div className="Jaz">Jazzy</div>
                  <div className="stats">Followers</div>
                  <span>132</span>
                  <div className="btn">
                    <BootStrapButton className="follow">
                      Follow
                    </BootStrapButton>
                    <BootStrapButton className="message">
                      Message
                    </BootStrapButton>
                  </div>
                </BootStrapCard.Body>
              </div>
            </BootStrapCard1>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
