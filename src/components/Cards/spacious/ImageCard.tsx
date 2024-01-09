import React, { useRef, useEffect } from "react";

interface ImageCardProps {
  image: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (image) {
      const imageWidth = image.naturalWidth;
      const imageHeight = image.naturalHeight;

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
        alt="Image"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Use "cover" for images to fill the container
          margin: "auto",
          borderRadius: "1rem",
        }}
      />
    </div>
  );
};

export default ImageCard;
