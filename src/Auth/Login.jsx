import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";
import Landing from "../Components/Landing";

const Login = () => {
  const [submitting, setSubmitting] = useState(false);
  const [user, loading] = useAuthState(auth);

  const google = async () => {
    try {
      setSubmitting(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (err) {
      console.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  if (loading || submitting) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <ClipLoader color="#8B5CF6" size={120} />
      </div>
    );
  }

  if (user) {
    return <Landing />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black to-purple-900 text-white p-4">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-black bg-opacity-50 p-10 rounded-xl shadow-2xl"
      >
        <div>
          <motion.h1 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            DALL·E 2
          </motion.h1>
       
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            onClick={google}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-purple-500 group-hover:text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </span>
            Sign in with Google
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
