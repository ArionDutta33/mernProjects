// import toast, { Toaster } from "react-hot-toast";

import axios from "axios";
import { useState } from "react";
const ModalForm = (props) => {
  //   const [showModal, setshowModal] = useState(false);
  const [text, setText] = useState("");
  // const [status, setstatus] = useState("");
  const [subject, setSubject] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to your API
      const response = await axios.post("/email-send", {
        photographerId: props.id,
        subject,
        text,
      });

      setSubject("");
      setText("");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <div className="bg-gray-400 absolute left-12 -top-24 h-[400px] w-[250px] z-50  px-4 py-4 rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="mt-1 block text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              rows="5"
              className="mt-1 block text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className=" text-sm my-4 bg-blue-500 text-white px-4 py-2 rounded-lg active:bg-blue-600"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
