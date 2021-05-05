const Iframe = ({ video }) => {
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Iframe;
