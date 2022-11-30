import "./Button.css";
const Button = ({ onClick, label, disabled }) => {
  return (
    <button className="button" disabled={disabled} onClick={(e) => onClick(e)}>
      {label}
    </button>
  );
};
export default Button;
