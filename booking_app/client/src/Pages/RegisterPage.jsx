import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import axios from "axios";
import { Link } from "react-router-dom";
export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function registerUser(e) {
    e.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      toast.success("Registration successfull");
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <>
      <Toaster />
      <div className="mt-4 grow flex items-center justify-around ">
        <div className="mb-64">
          <h1 className="text-4xl text-center mb-4">Register</h1>
          <form className="max-w-md mx-auto  " onSubmit={registerUser}>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(curr) => setName(curr.target.value)}
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(curr) => {
                setEmail(curr.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(curr) => {
                setPassword(curr.target.value);
              }}
            />
            <button className="primary">Register</button>
            <div className="text-center py-2 text-gray-500">
              Already a member?{" "}
              <Link className="text-black underline" to={"/login"}>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
