import "./App.css";
import Footer from "./Footer.js";
import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import { Player } from "video-react";
import BootStrapDropdown from "react-bootstrap/Dropdown";
import BootStrapDropdownButton from "react-bootstrap/DropdownButton";
import BootStrapCard from "react-bootstrap/Card";
import BootStrapCard1 from "react-bootstrap/Card";
import BootStrapButton from "react-bootstrap/Button";
import Sha from "./Sha.png";
import FBook from "./facebook.png";
import Insta from "./facebook.png";
import Kiki from "./Kiki.png";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsSnapchat,
} from "react-icons/bs";
import Video from "./Components/Video.js";
import Kiki1 from "./Ki2.png";
// const [fbLogin, setFbLogin] = useState();

// import { Footer } from "react-bootstrap/lib/Modal";
// align
// "start"|"end"}
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
// import { library } from "@font-awesome/font-awesome-svg-core";

function App() {
  return (
    <>
      <div className="Room">
        <Router>
          <div className="Nav">
            <ul>
              <button>
                <img src={FBook} />
              </button>
            </ul>
            <ul>
              <BsTwitter />
            </ul>
            <ul>
              <BsInstagram />
            </ul>
            <ul>
              <BsSnapchat />
            </ul>
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
                  <BootStrapButton>Login</BootStrapButton>
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
            <div className="Video">
              <Video />
            </div>
            <div className="Top1">
              Top Photo
              <img src={Kiki1}></img>
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
                <div className="SW">
                  <BootStrapCard.Body>
                    <BootStrapCard.Img
                      right="50px"
                      src={Sha}
                      alt="Sharron"
                    />
                    <div className="Sha">Sha</div>
                    <div className="stats">Followers</div>
                    <span>1,871</span>
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
          <Footer />
        </Router>
      </div>
    </>
  );
}
export default App;
