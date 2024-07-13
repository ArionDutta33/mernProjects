import { useState, useEffect } from "react";
import { useRef } from "react";
import { uploadFile } from "./services/api";
function App() {
  const ref = useRef();
  const [file, setFile] = useState("");
  useEffect(() => {
    const getIMage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile(data);
      }
    };
    getIMage();
  }, [file]);
  const onUploadClick = () => {
    ref.current.click();
  };
  console.log(file);
  const logo = `https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&w=300`;
  return (
    <>
      <div className="container">
        <div className="bg-red-500 h-[50vh]">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
        <div className="bg-zinc-600 h-[50vh] flex items-center justify-center">
          <div className="wrapper bg-white w-80 h-96 text-center flex flex-col items-center justify-center">
            <h1 className="font-bold  text-xl">Simple file sharing</h1>
            <p className="text-sm text-gray-600 my-4">
              Upload and share the download link
            </p>
            <button
              className=" text-sm  bg-green-500 px-4 py-2 rounded-md text-white"
              onClick={() => {
                onUploadClick();
              }}
            >
              Upload
            </button>
            <input
              className="hidden"
              ref={ref}
              type="file"
              name=""
              id=""
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
