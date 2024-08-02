import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const FormMessage = () => {
  const [text, setText] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  // const [status, setstatus] = useState("");
  const [subject, setSubject] = useState("");
  const path = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to your API
      const response = await axios.post("/email-send", {
        photographerId: path.id,
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
      <form
        onSubmit={handleSubmit}
        className="  flex flex-col px-4 mx-12 border  border-gray-500 rounded-xl  justify-center"
      >
        <label htmlFor="email" className="my-4 text-blue-500 ">
          Email
        </label>
        <input
          type="email"
          placeholder="Your email"
          value={senderEmail}
          className="  border px-4 py-2 rounded-md  text-sm"
          onChange={(e) => setSenderEmail(e.target.value)}
          required
        />
        <label className="my-4 text-blue-500" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          className=" border px-4 py-2 rounded-md  text-sm"
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <label className="my-4 text-blue-500" htmlFor="message">
          Message
        </label>
        <textarea
          placeholder="Message"
          value={text}
          className="  border px-4 py-8 font-normal rounded-md  text-sm"
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="text-sm  my-4 bg-blue-500 text-white py-2 rounded-xl "
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default FormMessage;
