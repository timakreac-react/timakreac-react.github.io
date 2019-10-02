import React from "react";
import { observer } from "mobx-react";
import store from "~/store";

@observer
class Footer extends React.Component {
  onInstall = () => {
    store.installPrompt.prompt();
  };
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="d-flex jcsb aic">
            <a href="#" className="footer-logo">
              Game
              <span>Box</span>
            </a>
            <ul className="footer-menu">
              <li>
                <a href="#" className="footer-menu_link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-menu_link">
                  Games
                </a>
              </li>
              <li>
                <a href="#" className="footer-menu_link">
                  Ratings
                </a>
              </li>
              <li>
                <a href="#" className="footer-menu_link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="d-flex jcsb aic">
            <span className="designed">Designed by ITL</span>
            <button className="install" onClick={this.onInstall}>
              Install as App
            </button>
            <div className="footer-social">
              <a href="#">
                <img src="/img/facebook.svg" alt="facebook" />
              </a>
              <a href="#">
                <img src="/img/pinterest.svg" alt="pinterest" />
              </a>
              <a href="#">
                <img src="/img/twitter.svg" alt="twitter" />
              </a>
              <a href="#">
                <img src="/img/linkedin.svg" alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
