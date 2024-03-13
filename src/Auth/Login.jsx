import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";

import Landing from "../Components/Landing";

const Login = () => {
  const [submitting] = useState(false);
  const google = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Add user data to the users table

      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center h-screen bg-black">
          <ClipLoader
            color="purple" // Change color to your preference
            loading={loading || submitting}
            size={120}
            aria-label="Loading Spinner"
            className="ml-10"
            data-testid="loader"
          />
        </div>
      </>
    );
  }
  return (
    <div className="flex justify-center items-center absolute inset-0 bg-black">
      {user ? (
        <div>
          <Landing />
        </div>
      ) : (
        <div className="flex flex-col">
          <h1 className="uppercase text-7xl text-white">DALL·E</h1>
          <button
            className="w-100 p-2 bg-purple-500 rounded-lg text-white mt-10 font-medium"
            onClick={google}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
