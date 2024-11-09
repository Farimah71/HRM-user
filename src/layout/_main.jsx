import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Footer } from "../components";
// ++++++++++ images import ++++++++++
import Logo from "../assets/images/logo.png";

export const MainLayout = () => {
  // ---------- hooks ----------
  const { t } = useTranslation();

  // ---------- render jsx ----------
  return (
    <div className="relative min-h-screen overflow-hidden overflow-y-auto flex flex-col py-4 items-center justify-between gap-y-16">
      <div className="absolute w-[150%] rounded-b-50 h-[840px] left-1/2 -translate-x-1/2 -top-[400px] bg-gradient-orange"></div>
      
      <Outlet />

      <div className="flex flex-col items-center gap-y-8 justify-self-end">
        <img src={Logo} alt="logo" />
        <Footer />
        
      </div>
    </div>
  );
};
