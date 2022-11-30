const Poster = ({ path, alt }) => {
  return (
    <img
      src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${path}`}
      alt={`${alt} image`}
    />
  );
};
export default Poster;
