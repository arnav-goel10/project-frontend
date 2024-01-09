import React from "react";

interface Props {
  image?: string;
  title: string;
  text: string;
  video?: string;
}

const CardSpacious = ({ image, title, text, video }: Props) => {
  return (
    <div style={{ width: "auto" }}>
      <h2>{title}</h2>
      {image || video ? (
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "2rem",
          }}
        />
      ) : (
        <p>{text.slice(0, 300)}...</p>
      )}
    </div>
  );
};

export default CardSpacious;
