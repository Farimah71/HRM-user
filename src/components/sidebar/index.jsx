import { UserProfile, Navbar } from "..";

export const Sidebar = ({ isShow }) => {
  // ---------- store ----------
  // const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);

  // ---------- render jsx ----------
  return (
    <section className={`w-265 fixed top-[68px] h-full duration-500 ease-in-out bg-white pt-8 pb-28 overflow-y-auto overflow-x-hidden flex flex-col gap-y-8 no-scroll z-30 ${ isShow ? "left-0" : "-left-80" }`}>
      <UserProfile />
      <Navbar />
    </section>
  );
};
