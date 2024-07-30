import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import AccountNaviagtion from "../AccountNavigation";
import axios from "axios";
import PlacesPage from "./PlacesPage";

export default function ProfilePage() {
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

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <AccountNaviagtion />
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
      {subpage === "places" && <PlacesPage />}
    </div>
  );
}
