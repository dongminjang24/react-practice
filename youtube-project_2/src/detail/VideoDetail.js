import React from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import { useYoutubeApi } from "../context/YoutubeApiContex";
import { useQuery } from "@tanstack/react-query";
import Related from "./components/related";
const VideoDetail = () => {
  const id = useParams("id");
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: video,
  } = useQuery(["videos", id.id], () => youtube.detail(id.id), {
    staleTime: 10000 * 50 * 10,
  });
  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }
  // console.log(video);

  // console.log(video);
  const { snippet } = video;
  // console.log(snippet.title);

  //////////

  return (
    <>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${id.id}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <h1>{snippet.channelTitle}</h1>
      <p>{snippet.title}</p>
      <Related id={id}></Related>;
    </>
  );
};

export default VideoDetail;
