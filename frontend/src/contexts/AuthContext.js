// import { createContext, useContext, useState, useEffect } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { updateProfile } from "firebase/auth";

// import auth from "../config/firebase";
// import { signOut } from "firebase/auth"; // Add this import

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
  

//   function register(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }

//   function login(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }
//   function updateUserProfile(user, profile) {
//     return updateProfile(user, profile);
// }
// function logout() {
//     return signOut(auth);
// }
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     login,
//     register,
//     error,
//     setError,
//     updateUserProfile,
//     logout,
//   };



//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }