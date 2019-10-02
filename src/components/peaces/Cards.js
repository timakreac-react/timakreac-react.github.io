import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import store from "~/store";

@observer
class Cards extends React.Component {
  cardCover(card) {
    let hash = card.cover.image_id;
    let size = "720p";
    let coverMask = `https://images.igdb.com/igdb/image/upload/t_${size}/${hash}.jpg`;
    return coverMask;
  }

  render() {
    const gameCards = store.gameCards.map((card, i) => {
      let genres = card.genres.map((genre, i) => {
        return (
          <span className="games-cardBody_genre" key={i}>
            {i > 0 ? ", " : ""}
            {genre.name}
          </span>
        );
      });

      return (
        <div className="games-card" key={i}>
          <div className="games-card_img">
            <img src={this.cardCover(card)} alt={card.slug} />
            <span>{card.release_dates[0].y}</span>
          </div>
          <div className="games-cardBody">
            <h3 className="games-cardBody_title">
              <Link
                to={`/games/genre/${card.slug}`}
                className="games-changeGenre"
              >
                {card.name}
              </Link>
            </h3>
            {genres}
            <div className="games-cardBody_rating">
              {parseInt(card.total_rating)}
            </div>
          </div>
        </div>
      );
    });
    return (
      <main className="games">
        <div className="container">
          <Link to="/genres" className="games-changeGenre">
            ← Back to genres
          </Link>
          <h2 className="games-title">
            Genre:&nbsp;
            {store.chosenGenre.name
              ? store.chosenGenre.name
              : store.chosenGenre.slug}
          </h2>

          <div className="games-cards">{gameCards}</div>
        </div>
      </main>
    );
  }
}

export default Cards;
