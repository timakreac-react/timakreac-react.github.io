import React from "react";
import { observer } from "mobx-react";
import store from "~/store";
import "./assets/card.css";

@observer
class Card extends React.Component {
  gameCardBg() {
    if (store.gameCard.screenshots) {
      let hash = store.gameCard.screenshots[0].image_id;
      let size = "1080p";
      let coverMask = `https://images.igdb.com/igdb/image/upload/t_${size}/${hash}.jpg`;
      return coverMask;
    }
  }
  gameCardImg() {
    if (store.gameCard.cover) {
      let hash = store.gameCard.cover.image_id;
      let size = "cover_big";
      let coverMask = `https://images.igdb.com/igdb/image/upload/t_${size}/${hash}.jpg`;
      return coverMask;
    }
  }
  componentDidMount = () => {
    store.getCardGameBySlug(this.props.match.params.id);
  };
  render() {
    let genres;
    let platforms;
    if (store.gameCard.genres) {
      genres = store.gameCard.genres.map((genre, i) => {
        return (
          <span key={i}>
            {i > 0 ? ", " : ""}
            {genre.name}
          </span>
        );
      });
    }
    if (store.gameCard.platforms) {
      platforms = store.gameCard.platforms.map((platform, i) => {
        return (
          <span key={i}>
            {i > 0 ? ", " : ""}
            {platform.abbreviation}
          </span>
        );
      });
    }

    return (
      <div className="card">
        <div className="card-header">
          <div className="card-bg">
            <img src={this.gameCardBg()} alt="what" />
          </div>
          <div className="container">
            <svg
              className="card-rating"
              width="105px"
              height="105px"
              style={{ width: "105px", textAlign: "center" }}
            >
              <circle cx="55" cy="55" r="50" fill="#FFFFFF" />
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#F3F3F3"
                fill="none"
                strokeDasharray="251.2 251.2"
                d="M55 15 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
              />
              <path
                className="gauge-progress"
                strokeLinecap="round"
                strokeWidth="5"
                fill="none"
                d="M55 15 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
                style={{
                  strokeDasharray: `${parseInt(store.gameCard.total_rating) *
                    2.48}, 251.2`
                }}
              />
              <text
                x="55"
                y="60"
                textAnchor="middle"
                dy="7"
                fill="#34373b"
                fontSize="34"
              >
                {store.gameCard ? parseInt(store.gameCard.total_rating) : "0"}
              </text>
            </svg>
            <a href="/" className="card-logo header-logo">
              Game
              <span>Box</span>
            </a>
            <div className="card-img">
              <img src={this.gameCardImg()} alt="what" />
            </div>
            <div className="d-flex">
              <div className="card-wrapText">
                <div className="card-title">
                  {store.gameCard ? store.gameCard.name : ""}
                </div>
                <div className="card-date">
                  {store.gameCard.release_dates
                    ? store.gameCard.release_dates[0].human
                    : "date"}
                </div>
                <div className="card-company">
                  {store.gameCard.involved_companies
                    ? store.gameCard.involved_companies[0].company.name
                    : "company"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="container">
            <div className="card-genre">
              <div className="card-img-mob">
                <img src="gameCardImg" alt="what" />
              </div>
              <span className="card-genre_title">Genres: </span>
              {genres}
            </div>
            <div className="card-descr">
              <span>
                Description:&nbsp;
                <br />
              </span>
              {store.gameCard ? store.gameCard.summary : "..."}
            </div>
            <div className="card-platform">
              <span className="card-platform_title">Platforms: </span>
              {platforms}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
