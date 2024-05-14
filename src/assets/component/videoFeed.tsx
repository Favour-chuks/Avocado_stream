import { useRef } from "react";
export default function VideoFeed() {
  const videoRef = useRef(null);
  // const handleStream = async () => {
  //   const video: any = await videoRef.current;
  //   const displayMediaOptions = {
  //     video: {
  //       displaySurface: "window"
  //     },
  //     audio: false,
  //   };
  //   if (video) {
  //     navigator.mediaDevices
  //       .getDisplayMedia(displayMediaOptions)
  //       .then((stream) => {
  //         video.srcObject = stream;
  //         // video.play();
  //       })
  //       .catch((error: any) => {
  //         console.error("Error accessing Camera:", error);
  //       });
  //   }
  // };

  let mediaRecorder: any, mimeType;

  const startStream = async () => {
    let stream = await recordScreen();
    mimeType = "video/webm";
        mediaRecorder = createRecorder(stream, mimeType);
  }

  const stopStream = async () => {
    mediaRecorder?.stop();
  //   mediaRecorder?.getTracks().forEach((track:any) => {
  //     if (track.readyState == 'live') {
  //         track.stop();
  //     }
  // });
    
  };

  const recordScreen = async () => {
    const video: any = await videoRef.current;
    return await navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: { displaySurface: "screen" },
      })
      .then((streamVideo) => {
        video.srcObject = streamVideo;
      })
      .catch((error: any) => {
        console.table(error.message);
      });
  };

  const createRecorder = (stream: any, mimeType: any) => {
    // the stream data is stored in this array
    let recordedChunks: any = [];

    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = function (e) {
      if (e.data.size > 0) {
        recordedChunks.push(e.data);
      }
    };
    mediaRecorder.onstop = function () {
      // saveFile(recordedChunks);
      recordedChunks = [];
    };
    mediaRecorder.start(200); // For every 200ms the stream data will be stored in a separate chunk.
    return mediaRecorder;
  };

  // const saveFile = (recordedChunks: any) => {
  //   const blob: any = new Blob(recordedChunks, {
  //     type: "video/webm",
  //   });
  //   let filename = window.prompt("Enter file name"),
  //     downloadLink = document.createElement("a");
  //   downloadLink.href = URL.createObjectURL(blob);
  //   downloadLink.download = `${filename}.webm`;

  //   document.body.appendChild(downloadLink);
  //   downloadLink.click();
  //   URL.revokeObjectURL(blob); // clear from memory
  //   document.body.removeChild(downloadLink);
  // };
  return (
    <>
      <video
        className="videoplayer bg-lime-100  rounded-xl grow"
        autoPlay
        ref={videoRef}
        // onPlay={handleStream}
        controls>
        <source type="video/mp4" />
      </video>
      <div className="playercontrols">
        <button
          onClick={startStream}
          className="playbutton rounded-full bg-lime-500 hover:bg-lime-200 px-2 py-2.5">
          Play
        </button>
        <button
          onClick={stopStream}
          className="playbutton rounded-full bg-lime-500 hover:bg-lime-200 px-2 py-2.5">
          Pause
        </button>
      </div>
    </>
  );
}
