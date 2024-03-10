// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useAuth } from "../../contexts/AuthContext";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";


// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handlePasswordChange = (e) => setPassword(e.target.value);
//   const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

//   const navigate = useNavigate();
//   const { currentUser, register, setError } = useAuth(); // Get setError as well
// const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (currentUser) {
//       navigate("/");
//     }
//   }, [currentUser, navigate]);

//   async function handleFormSubmit(e) {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       return setError("Passwords do not match"); // Replace the alert with this
//     }

//     try {
//       setError(""); // Remove error when trying to register
//       setLoading(true);
//       await register(email, password);
//       navigate("/profile");
//     } catch (e) {
//       setError("Failed to register"); // Replace the alert with this
//     }

//     setLoading(false);
//   }
//   return (
//     <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-4 text-3xl text-center tracking-tight font-light dark:text-white">
//             Register your account
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <input
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={email}
//                 onChange={handleEmailChange}
//                 placeholder="Email address"
//               />
//             </div>
//             <div>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 value={password}
//                 onChange={handlePasswordChange}
//                 placeholder="Password"
//               />
//             </div>
//             <div>
//               <input
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 value={confirmPassword}
//                 onChange={handleConfirmPasswordChange}
//                 placeholder="Confirm Password"
//               />
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-800 hover:bg-sky-900"
//             >
//               Register
//             </button>
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="text-sm">
//               <Link
//                 to="/login"
//                 className="text-blue-600 hover:underline dark:text-blue-500"
//               >
//                 Already have an account? Login
//               </Link>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
