import React from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import { useYoutubeApi } from "../context/YoutubeApiContex";
import { useQuery } from "@tanstack/react-query";
const VideoDetail = () => {
  const id = useParams("id");
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: video,
  } = useQuery(["videos", id.id], () => youtube.detail(id.id));
  console.log(video);
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
      <h1>{video?.title}</h1>
      <h1>{video?.channelTitle}</h1>

      {/* <p>{video?.description}</p> */}
    </>
  );
};

export default VideoDetail;
