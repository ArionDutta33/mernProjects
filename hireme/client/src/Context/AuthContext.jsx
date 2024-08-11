// // import { useEffect, useState } from "react";
// // import AuthContext from "./AuthContext";
// // import Cookies from "js-cookie";

// // const AuthContextProvider = ({ children }) => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   useEffect(() => {
//     const token = Cookies.get("jwttoken");
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const login = () => {
//     const token = Cookies.get("jwttoken");
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   };

//   return <AuthContext.Provider>{children}</AuthContext.Provider>;
// };

// export default AuthContextProvider;
