import React, { useState, useEffect } from "react";
import LikeComment from "../LikeComment";
import VideoCard from "./VideoCard"; // Import the VideoCard component
import { cardcontent } from "./CardSpaciousList";
import { useTheme } from "@mui/material";

const CardSpacious: React.FC<cardcontent> = ({
  image,
  title,
  text,
  video,
  user_id,
  comments_count,
  like_count,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const theme = useTheme();
  return (
    <div
      style={{
        width: "auto",
        backgroundColor: isHovered
          ? theme.palette.mode === "dark"
            ? "#131F24"
            : "#F2F4F5"
          : theme.palette.mode === "dark"
          ? "#0B1416"
          : "white",
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
      <h1 style={{ marginLeft: "0.25rem", color: theme.palette.text.primary }}>
        {title}
      </h1>
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
      <LikeComment likeCount={like_count} commentsCount={comments_count} />
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
