const Buttons = (props) => {
  return (
    <button className="bg-blue-400 text-white px-4 my-4 py-2 rounded-md  text-xs">
      {props.name}
    </button>
  );
};

export default Buttons;
