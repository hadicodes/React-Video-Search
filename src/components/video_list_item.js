import React from "react";
// import VideoListItem from "./video_list_item";

const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;


  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list-media">
        <div className="media-left">
          <img src={imageURL} alt="" className="media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
