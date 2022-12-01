import "./ScrollTop.css";
import top from "../../assets/Images/pngegg.png";
const ScrollTop = () => {
  const onScrollHandler = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="scroll-top">
      <button onClick={onScrollHandler}>
        <img src={top} alt="scroll to top image" />
      </button>
    </div>
  );
};
export default ScrollTop;
