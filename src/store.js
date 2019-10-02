import { observable, computed, action } from "mobx";
import axios from "axios";

class Store {
  installPrompt = null;
  API_KEY = "faf5c7efb16c8bb8b6c70d768702728d";
  baseUrl = "https://api-v3.igdb.com/";
  proxyUrl = "https://cors-anywhere.herokuapp.com/";
  @observable gameCards = [];
  @observable gameCard = [];
  @observable theBestCard = [];
  @observable chosenGenre = {
    name: "",
    slug: ""
  };

  @computed get canInstall() {
    return (
      "BeforeInstallPromptEvent" in window &&
      this.installPrompt instanceof BeforeInstallPromptEvent
    );
  }

  @action setInstallPrompt(data) {
    this.installPrompt = data;
  }

  @action setChosenGenre(name, slug) {
    this.chosenGenre.name = name;
    this.chosenGenre.slug = slug;
  }

  @action getGameCards = slug => {
    axios(this.proxyUrl + this.baseUrl + "games", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": this.API_KEY
      },
      data: `f name, slug, cover.image_id, genres.name, genres.slug, total_rating, screenshots.image_id, involved_companies.company.name, release_dates.human,release_dates.y;
        w cover != null & total_rating != null & screenshots != null & involved_companies != null & release_dates != null & summary != null
        & genres.slug = "${slug}";
        limit 12;`
    })
      .then(res => {
        this.gameCards = res.data;
        this.chosenGenre.slug = slug;
        let max = res.data[0].total_rating;
        for (let i = 1; i < res.data.length; i++) {
          if (res.data[i].total_rating > max) {
            max = res.data[i].total_rating;
            this.theBestCard = res.data[i];
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action getCardGameBySlug(slug) {
    axios(this.proxyUrl + this.baseUrl + "games", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": this.API_KEY
      },
      data: `f name, slug, summary,platforms.abbreviation, cover.image_id, genres.name, genres.slug, total_rating, screenshots.image_id, involved_companies.company.name, release_dates.human;
      w cover != null & total_rating != null & screenshots != null & involved_companies != null & release_dates != null 
      & slug = "${slug}";
      limit 1;`
    })
      .then(res => {
        this.gameCard = res.data[0];
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default new Store();
