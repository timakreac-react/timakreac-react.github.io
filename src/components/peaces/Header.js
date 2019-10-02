import React from "react";
import { observer } from "mobx-react";
import store from "~/store";
import { Link } from "react-router-dom";

@observer
class Header extends React.Component {
  theBestBg() {
    if (store.theBestCard.screenshots) {
      let hash = store.theBestCard.screenshots[0].image_id;
      return {
        background: `url(https://images.igdb.com/igdb/image/upload/t_1080p/${hash}.jpg)`
      };
    }
  }

  render() {
    return (
      <header className="header" style={this.theBestBg()}>
        <div className="container d-flex jcsb">
          <div className="d-flex col">
            <a href="/" className="header-logo">
              Game
              <span>Box</span>
            </a>
            <h1 className="header-gameTitle">
              {store.theBestCard.name
                ? store.theBestCard.name
                : "Name of the game"}
            </h1>
            <div className="header-gameInfo">
              <span className="header-gameInfo_date">
                {store.theBestCard.release_dates
                  ? store.theBestCard.release_dates[0].human
                  : "date"}
              </span>
              <span className="header-gameInfo_studio">
                {store.theBestCard.involved_companies
                  ? store.theBestCard.involved_companies[0].company.name
                  : "company"}
              </span>
            </div>
            <Link
              className="header-btn"
              to={`/games/${store.chosenGenre.slug}/${store.theBestCard.slug}`}
            >
              View info
            </Link>
          </div>
          <div className="header-gameRating d-flex jcsb">
            <div>
              <h4 className="header-gameRating_title">Rating</h4>
              <p className="header-gameRating_base">
                Based on {store.gameCards.length}
                <br />
                member ratings
              </p>
            </div>
            <span className="header-gameRating_value">
              {store.theBestCard.total_rating
                ? parseInt(store.theBestCard.total_rating)
                : "0"}
            </span>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
