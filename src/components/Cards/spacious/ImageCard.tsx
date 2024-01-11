import React, { useRef, useEffect } from "react";

interface ImageCardProps {
  image: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (image) {
      const imageWidth = image.width;
      const imageHeight = image.height;

      const aspectRatio = imageWidth / imageHeight;
      const containerWidth = imageRef.current!.parentElement!.offsetWidth;

      const adjustedHeight = containerWidth / aspectRatio;

      imageRef.current!.style.height = `${adjustedHeight}px`;
      imageRef.current!.style.width = "100%";
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "30rem",
        backgroundColor: "black",
        borderRadius: "1rem",
      }}
    >
      <img
        ref={imageRef}
        src={image}
        alt="Card img"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          margin: "auto",
          borderRadius: "1rem",
        }}
      />
    </div>
  );
};

export default ImageCard;
