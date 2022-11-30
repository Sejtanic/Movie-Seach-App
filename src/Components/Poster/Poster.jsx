const Poster = ({ path }) => {
  return (
    <img
      src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${path}`}
      alt=""
    />
  );
};
export default Poster;
