import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, HeaderWrapper } from "../components";

export const PanelLayout = () => {
  // ---------- state ----------
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  // ---------- functions ----------
  const toggleSidebar = () => setIsShowSidebar(currState => !currState)

  // ---------- render jsx ----------
  return (
    <section className="h-screen flex flex-col overflow-hidden">
      <HeaderWrapper toggleSidebar={toggleSidebar} isShowSidebar={isShowSidebar}/>

      <section className={`relative w-full h-screen flex gap-y-12 overflow-y-auto`}>
        <Sidebar isShow={isShowSidebar}/>
        <div className={`relative p-8 duration-500 ease-in-out ${ !isShowSidebar ? "left-0 w-full px-48" : "left-64 w-[calc(100%-265px)]" }`}>
          <Outlet />
        </div>
      </section>
    </section>
  );
};
