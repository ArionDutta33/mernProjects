import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AccountPage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);
  let { subpage } = useParams();
  //   if (subpage === "profile") {
  //     subpage = "profile";
  //   }
  subpage = subpage || "profile";

  async function handleLogout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }
  console.log(subpage);
  if (!ready) {
    return "LOADING.....";
  }
  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  function linkClasses(type = null) {
    let classes = "py-2 px-6";
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full";
    }
    return classes;
  }
  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <nav className="mt-8 w-full flex justify-center gap-4 mb-8">
        <Link className={linkClasses("profile")} to={"/account"}>
          My profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          My bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          My places
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name}({user.email}) <br />
          <button
            onClick={handleLogout}
            className="primary text-white max-w-sm mt-2"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
