import axios from "axios";

export default class FakeYoutubeClient {
  async search() {
    return axios.get("/videos/search.json");
  }
  async videos() {
    return axios.get("/videos/popular.json");
  }
}

// import axios from "axios";

// export default class FakeYoutubeClient {
//   async search() {
//     // return query ? this.#searchByKeyword(query) : this.#mostPopular();
//     return axios.get("/videos/search.json");
//   }
//   async videos() {
//     // return query ? this.#searchByKeyword(query) : this.#mostPopular();
//     return axios.get("/videos/popular.json");
//   }
// async #searchByKeyword(query) {
//   return axios
//     .get(`/videos/search.json`)
//     .then((res) => res.data.items)
//     .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
// }

// async #mostPopular() {
//   return axios.get(`/videos/popular.json`).then((res) => console.log(res));
// }
// }
