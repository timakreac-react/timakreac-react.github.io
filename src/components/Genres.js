import React from "react";
import { observer } from "mobx-react";
import store from "~/store";
import { Link } from "react-router-dom";
import "./assets/genres.css";

@observer
class Genres extends React.Component {
  render() {
    let genres = [
      {
        name: "Point-and-click",
        slug: "point-and-click"
      },
      {
        name: "Fighting",
        slug: "fighting"
      },
      {
        name: "Shooter",
        slug: "shooter"
      },
      {
        name: "Music",
        slug: "music"
      },
      {
        name: "Platform",
        slug: "platform"
      },
      {
        name: "Puzzle",
        slug: "puzzle"
      },
      {
        name: "Racing",
        slug: "racing"
      },
      {
        name: "Real Time Strategy (RTS)",
        slug: "real-time-strategy-rts"
      },
      {
        name: "Role-playing (RPG)",
        slug: "role-playing-rpg"
      },
      {
        name: "Simulator",
        slug: "simulator"
      },
      {
        name: "Sport",
        slug: "sport"
      },
      {
        name: "Strategy",
        slug: "strategy"
      },
      {
        name: "Turn-based strategy (TBS)",
        slug: "turn-based-strategy-tbs"
      },
      {
        name: "Tactical",
        slug: "tactical"
      },
      {
        name: "Hack and slash/Beat 'em up",
        slug: "hack-and-slash-beat-em-up"
      },
      {
        name: "Quiz/Trivia",
        slug: "quiz-trivia"
      },
      {
        name: "Pinball",
        slug: "pinball"
      },
      {
        name: "Adventure",
        slug: "adventure"
      },
      {
        name: "Indie",
        slug: "indie"
      },
      {
        name: "Arcade",
        slug: "arcade"
      }
    ];

    let genresLink = genres.map(genre => {
      return (
        <li key={genre.slug}>
          <Link to={"/games/" + genre.slug}>
            <span
              data-slug={genre.slug}
              onClick={store.setChosenGenre(genre.name, genre.slug)}
            >
              {genre.name}
            </span>
          </Link>
        </li>
      );
    });

    return (
      <div id="genres">
        <h2>Choose genre of the games:</h2>
        <ul>{genresLink}</ul>
      </div>
    );
  }
}

export default Genres;
