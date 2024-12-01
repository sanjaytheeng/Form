const Button = ({ onClick, label }) => {
  return (
    <button type="submit" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
