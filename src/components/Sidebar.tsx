"use client";
import React from "react";
import Image from "next/image";
import NavItem from "./NavItem";
import { useRouter } from "next/navigation";
import { RootState, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { changeTheme } from "@/redux/theme.slice";
import { currentTheme, darkMode, lightMode } from "@/utils/datatheme";
import { useSelector } from "react-redux";
import { setTabActive } from "@/redux/home.slice";

interface NavType {
   icon: JSX.Element;
   activeIcon: JSX.Element;
   isActive: boolean;
   title: string;
   onClick: () => void;
}
const Sidebar = () => {
   const router = useRouter();
   const theme = useAppSelector((state) => state.theme.theme);
   const tabActive = useSelector((state: RootState) => state.home.tabActive);
   const dispatch = useDispatch();
   const sidebar: NavType[] = [
      {
         icon: <i className="fi fi-rr-home flex items-center "></i>,
         activeIcon: <i className="fi fi-sr-home   flex items-center "></i>,
         title: "Home",
         isActive: tabActive === "",
         onClick: () => {
            router.push("/");
            dispatch(setTabActive(""));
         },
      },
      {
         icon: <i className="fi fi-rr-search flex items-center"></i>,
         activeIcon: <i className="fi fi-br-search flex items-center"></i>,
         isActive: tabActive === "Search",
         title: "Search",
         onClick: () => {
            console.log("Search");
         },
      },
      {
         icon: <i className="fi fi-bs-navigation flex items-center"></i>,
         activeIcon: <i className="fi fi-sr-navigation flex items-center"></i>,
         isActive: false,
         title: "Explore",
         onClick: () => {
            console.log("Explore");
         },
      },
      {
         icon: <i className="fi fi-rr-clapperboard-play flex items-center"></i>,
         activeIcon: (
            <i className="fi fi-sr-clapperboard-play flex items-center"></i>
         ),
         isActive: false,
         title: "Reels",
         onClick: () => {
            console.log("Reels");
         },
      },
      {
         icon: (
            <i className="fi fi-brands-facebook-messenger  flex items-center"></i>
         ),
         activeIcon: (
            <i className="fi fi-brands-facebook-messenger flex items-center"></i>
         ),
         isActive: tabActive === "messenges",
         title: "Messages",
         onClick: () => {
            router.push("/messages");
            dispatch(setTabActive("/messages"));
         },
      },
      {
         icon: <i className="fi fi-rs-heart flex items-center"></i>,
         activeIcon: <i className="fi fi-ss-heart flex items-center"></i>,
         isActive: false,
         title: "Notification",
         onClick: () => {
            console.log("Notification");
         },
      },
      {
         icon: <i className="fi fi-rr-square-plus flex items-center"></i>,
         activeIcon: <i className="fi fi-sr-square-plus flex items-center"></i>,
         isActive: false,
         title: "Create",
         onClick: () => {
            console.log("Create");
         },
      },
   ];
   return (
      <div className="w-[244px] h-screen xl:w-[355px] p-3 flex flex-col border-r-[#333333] border-r-[1px] ">
         <div className={`cursor-pointer mb-2 mt-5 px-3 pt-5 pb-4`}>
            <Image
               src={"/next.svg"}
               width={150}
               height={150}
               alt="logo"
               className={`${theme === "dark" && "invert"}`}
            />
         </div>
         <div className="flex flex-col w-full h-full justify-between transition ease-in-out duration-1000">
            <div className="flex flex-col gap-[2px] overflow-auto  scrollbar-hide">
               {sidebar.map((item, index) => (
                  <NavItem
                     key={index}
                     icon={item.icon}
                     activeIcon={item.activeIcon}
                     isActive={item.isActive}
                     title={item.title}
                     onClick={item.onClick}
                  />
               ))}
               <NavItem
                  icon={
                     <Image
                        src={"/avatar.jpg"}
                        width={24}
                        height={24}
                        alt="avatar"
                        className="rounded-full peer:hover:border-2 border-lime-100"
                     />
                  }
                  activeIcon={
                     <Image
                        src={"/avatar.jpg"}
                        width={24}
                        height={24}
                        alt="avatar"
                        className="rounded-full border-2 border-lime-100"
                     />
                  }
                  isActive={false}
                  title="Profile"
                  onClick={() => {
                     console.log("Profile");
                  }}
               />
            </div>

            <div className="dropdown dropdown-top dropdown-hover">
               <div
                  className={`cursor-pointer flex items-center  flex-row my-[4px] p-3 text-2xl ${
                     theme === "light"
                        ? "hover:bg-[#e1e1e1]"
                        : "hover:bg-slate-800"
                  } rounded-xl transition-all peer`}
                  tabIndex={0}
               >
                  <i className="fi fi-sr-menu-burger flex items-center"></i>
                  <p className={`text-base  pl-4 `}>More</p>
               </div>

               <div
                  tabIndex={0}
                  className={`dropdown-content h-[300px] z-[1] menu p-2 shadow ${
                     theme === "dark" ? "bg-slate-700 " : "bg-slate-200"
                  } rounded-box w-full flex flex-col justify-between`}
               >
                  <ul>
                     <li
                        className={`h-[46px] flex items-center justify-center text-lg font-bold  cursor-pointer ${
                           theme === "dark"
                              ? "hover:bg-slate-600 "
                              : "hover:bg-slate-100"
                        } rounded-box`}
                        onClick={() => dispatch(changeTheme(darkMode()))}
                     >
                        Dark Mode <i className="fi fi-br-moon-stars"></i>
                     </li>
                     <li
                        className={`h-[46px] flex items-center justify-center text-lg font-bold  cursor-pointer ${
                           theme === "dark"
                              ? "hover:bg-slate-600 "
                              : "hover:bg-slate-100"
                        } rounded-box`}
                        onClick={() => dispatch(changeTheme(lightMode()))}
                     >
                        Light Mode <i className="fi fi-br-brightness"></i>
                     </li>
                  </ul>
                  <div className="border-t border-slate-500 pt-1">
                     <span
                        className={`h-[46px] flex items-center justify-center text-lg font-bold  cursor-pointer ${
                           theme === "dark"
                              ? "hover:bg-slate-600 "
                              : "hover:bg-slate-100"
                        } rounded-box`}
                     >
                        Log out
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
