// import toast, { Toaster } from "react-hot-toast";

import axios from "axios";
import { useState } from "react";
const ModalForm = (props) => {
  //   const [showModal, setshowModal] = useState(false);
  const [text, setText] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  // const [status, setstatus] = useState("");
  const [subject, setSubject] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to your API
      const response = await axios.post("/email-send", {
        photographerId: props.id,
        subject,
        senderEmail,
        text,
      });

      setSubject("");
      setText("");
      setSenderEmail("");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <div className="bg-gray-400 absolute left-12 -top-24 h-[400px] w-[250px] z-50  px-4 py-4 rounded-xl">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
