import { useEffect, useRef } from "react";
export default function VideoFeed() {
  const videoRef = useRef(null);
  const displayMediaOptions = {
    video: {
      displaySurface: "window",
    },
    audio: false,
  };
  useEffect(() => {
    const video: any = videoRef.current;

    if (video) {
      navigator.mediaDevices
        .getDisplayMedia(displayMediaOptions)
        .then((stream) => {
          video.srcObject = stream;
          // video.play();
        })
        .catch((error: any) => {
          console.error("Error accessing Camera:", error);
        });
    }
  }, [videoRef]);
  return (
    <>
      <video className="bg-lime-100  rounded-xl grow" ref={videoRef} controls>
        {/* <source type="video/mp4" /> */}
      </video>
    </>
  );
}
