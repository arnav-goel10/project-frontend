import { useState } from "react";
import LikeComment from "../LikeComment";

interface Props {
  image?: string;
  video?: string;
  user_id: string;
  title: string;
  text: string;
  like_count: number;
  comments_count: number;
}

const CardSpacious = ({ image, title, text, video }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        style={{
          width: "auto",
          backgroundColor: isHovered ? "lightgrey" : "white",
          padding: "0.5rem 1rem",
          borderRadius: "1rem",
          position: "relative",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 style={{ marginLeft: "1rem" }}>{title}</h2>
        {image || video ? (
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
        ) : (
          <p>{text.slice(0, 300)}...</p>
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
    </>
  );
};

export default CardSpacious;
