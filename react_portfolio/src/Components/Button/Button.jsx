const Button = (props) => {
  return (
    <button className="text-lg bg-blue-900 px-4 py-2 rounded-lg  tracking-tight font-bold bg-">
      {props.text}
    </button>
  );
};

export default Button;
