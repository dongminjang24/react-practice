import React from "react";
import { formatAgo } from "../../util/date";
import { useNavigate } from "react-router-dom";
const VideoCard = ({ video }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  console.log(video);
  return (
    <li
      onClick={() => {
        navigate(`/videos/watch/${video.id}`);
      }}
    >
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold my-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p>{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
};

export default VideoCard;
