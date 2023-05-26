import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../../context/YoutubeApiContex";
const Related = ({ id }) => {
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: relatedData,
  } = useQuery(["related", id], () => youtube.related(id.id));
  console.log(relatedData);
  //   console.log(snippet);
  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      {relatedData.map((v) => {
        return (
          <>
            {/* {v.id.videoId} */}
            <img src={v.snippet.thumbnails.medium.url} alt="" />
            <p>{v.snippet.title}</p>
          </>
        );
      })}
    </div>
  );
};

export default Related;
