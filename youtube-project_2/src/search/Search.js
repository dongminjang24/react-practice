import React from "react";
import { useParams } from "react-router-dom";
// import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/videoCard/videoCard";

// import Youtube from "../api/youtube";
// import FakeYoutube from "../api/fakeYoutubeClient";
import { useYoutubeApi } from "../context/YoutubeApiContex";
const Search = () => {
  const { youtube } = useYoutubeApi();
  //   const location = useLocation();
  const { query } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ["뮤", query],
    () => youtube.search(query)
    // {
    // const youtube = new FakeYoutube();
    // return youtube.search(query);
    // }
  );
  // console.log(query);
  console.log(videos);
  // useEffect(() => {
  //     // console.log(location.pathname.split('/').slice(-1)[0]);
  //   }, [ location ])
  return (
    <div>
      Videos{query ? `🔍${query}` : "🔥"}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video}></VideoCard>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
