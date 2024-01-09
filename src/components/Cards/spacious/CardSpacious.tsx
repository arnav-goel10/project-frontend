import React, { useState, useEffect } from "react";
import LikeComment from "../LikeComment";
import VideoCard from "./VideoCard"; // Import the VideoCard component

interface Props {
  image?: string;
  video?: string;
  user_id: string;
  title: string;
  text: string;
  like_count: number;
  comments_count: number;
}

const CardSpacious: React.FC<Props> = ({ image, title, text, video }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        width: "auto",
        backgroundColor: isHovered ? "lightgrey" : "white",
        padding: "0.5rem 1rem",
        borderRadius: "1rem",
        position: "relative",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "normal",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 style={{ marginLeft: "0.25rem" }}>{title}</h1>
      {image || video ? (
        <>
          {image && (
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "2rem",
                marginTop: "1rem",
              }}
            />
          )}
          {video && <VideoCard video={video} />}
        </>
      ) : (
        <p style={{ overflowWrap: "break-word" }}>{text}</p>
      )}
      <LikeComment />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "1px",
          backgroundColor: "black",
        }}
      />
    </div>
  );
};

export default CardSpacious;
