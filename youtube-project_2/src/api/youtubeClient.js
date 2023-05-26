import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(params) {
    return this.httpClient.get("search", params);
  }

  async videos(params) {
    return this.httpClient.get("videos", params);
  }

  async detail(params) {
    return this.httpClient.get("videos", params);
  }
  async related(params) {
    return this.httpClient.get("search", params);
  }
}

// async #searchByKeyword(query) {
//   return this.httpClient
//     .get("search", {
//       params: {
//         part: "snippet",
//         maxResults: 25,
//         type: "video",
//         q: query,
//       },
//     })
//     // .then((res) => res.data.items)
//     // .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
// }

// async #mostPopular() {
//   return this.httpClient
//     .get("videos", {
//       params: {
//         part: "snippet",
//         maxResults: 25,
//         chart: "mostPopular",
//       },
//     })
//     // .then((res) => res.data.items);
// }
// }
