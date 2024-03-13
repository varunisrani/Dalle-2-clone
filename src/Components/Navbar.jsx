import { auth } from "../Auth/firebase";

const Navbar = () => {
  const logout = async () => {
    await auth.signOut();
  };
  return (
    <div className="flex flex-row ">
      <h1 className="absolute left-0 top-0 font-bold text-xl mt-5 ml-5">
        DALL.E 2
      </h1>
      <button
        className="absolute top-0 right-0 bg-purple-500 w-20 p-5 rounded-lg mt-5 mr-5 flex items-center justify-center text-white"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
