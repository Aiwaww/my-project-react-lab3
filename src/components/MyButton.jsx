export const MyButton = ({ text = 'Start', type = 'button', onClick }) => {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {text.toUpperCase()}
    </button>
  );
};
