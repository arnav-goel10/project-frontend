import { Button } from "@mui/material";
import React from "react";
import LikeComment from "./LikeComment";

interface Props {
  image?: string;
  title: string;
  text: string;
  video?: string;
}

const CardSpacious = ({ image, title, text, video }: Props) => {
  return (
    <div
      style={{
        width: "auto",
        backgroundColor: "red",
        padding: "0.5rem 1rem",
        borderRadius: "1rem",
      }}
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
    </div>
  );
};

export default CardSpacious;
