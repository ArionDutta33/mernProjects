import Button from "../Button/Button";

const HeroText = () => {
  return (
    <main className=" px-4">
      <div className="text-center text-2xl py-4 ">
        <span className="text-green-400">Hello !</span> I am Arion Dutta
      </div>
      <div className="text-center text-lg tracking-wide text-gray-400">
        <div>MERN stack & Flutter developer</div>
      </div>
      <div className="main py-10 leading-loose text-gray-400 px-4">
        Hi there! My name is Arion Dutta and I’m{" "}
        <span className="px-2">Computer Science Engineering student</span> from
        Assam, India. I love all things tech{" "}
        <span className="px-4">and coding, I love to explore tech and</span>{" "}
        would absolutely love to collaborate with others to create amazing tech
        solutions
      </div>
      <div className="flex justify-center">
        <Button text="Connect on Github" />
      </div>
    </main>
  );
};

export default HeroText;
