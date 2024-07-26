import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleLogin(e) {
    e.preventDefault();
    try {
      await axios.post("/login", { email, password });
      toast.success("Successfully logged in");
    } catch (error) {
      toast.error("Something went wrong");
    }
  }
  return (
    <>
      <Toaster />
      <div className="mt-4 grow flex items-center justify-around ">
        <div className="mb-64">
          <h1 className="text-4xl text-center mb-4">Login</h1>
          <form className="max-w-md mx-auto  " onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <button className="primary">Login</button>
            <div className="text-center py-2 text-gray-500">
              Don&apos;t have an account yet?{" "}
              <Link className="text-black underline" to={"/register"}>
                Register now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}