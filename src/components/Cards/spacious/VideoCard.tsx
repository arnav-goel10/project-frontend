import React, { useRef, useEffect } from "react";

interface VideoCardProps {
  video: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      const aspectRatio = videoWidth / videoHeight;
      const containerWidth = videoRef.current!.parentElement!.offsetWidth;

      const adjustedHeight = containerWidth / aspectRatio;

      if (adjustedHeight > 300) {
        videoRef.current!.style.height = "30rem";
        videoRef.current!.style.width = "auto";
      } else {
        videoRef.current!.style.height = `${adjustedHeight}px`;
        videoRef.current!.style.width = "100%";
      }
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
      <video
        ref={videoRef}
        src={video}
        controls
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

export default VideoCard;
