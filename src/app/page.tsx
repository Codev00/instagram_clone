"use client";
import Rightbar from "@/components/Rightbar";
import HomePage from "@/components/HomePage";

import { useLayoutEffect } from "react";
import { currentTheme, darkMode, lightMode } from "@/utils/datatheme";
import { useDispatch } from "react-redux";
import { changeTheme } from "@/redux/theme.slice";

export default function Home() {
   const dispatch = useDispatch();
   useLayoutEffect(() => {
      dispatch(changeTheme(currentTheme()));
   }, []);
   return (
      <div className="flex flex-row gap-10 ">
         <HomePage />
         <Rightbar />
      </div>
   );
}
