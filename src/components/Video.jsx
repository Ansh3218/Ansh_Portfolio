"use client";
const Video = () => {
  return (
    <>
      <div className="w-full h-full">
        <video
          src="/videos/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Video;
