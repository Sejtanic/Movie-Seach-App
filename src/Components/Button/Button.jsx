import "./Button.css";
const Button = ({ onClick, label }) => {
  return (
    <button className="button" onClick={(e) => onClick(e)}>
      {label}
    </button>
  );
};
export default Button;
