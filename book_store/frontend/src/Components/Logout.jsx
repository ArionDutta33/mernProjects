import { useAuth } from "../Context/AuthProvider";
import toast from "react-hot-toast";
const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-3 py-3 bg-red-300 text-white rounded-md cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
