import { changeTheme } from "@/redux/theme.slice";
import { log } from "console";

export const currentTheme = () => {
   const currentTheme = localStorage.getItem("theme");
   if (currentTheme) {
      if (currentTheme === "light") {
         document.documentElement.setAttribute("data-theme", "light");
      } else {
         document.documentElement.setAttribute("data-theme", "night");
      }
   }
   console.log(currentTheme);

   return currentTheme;
};

export const darkMode = () => {
   localStorage.setItem("theme", "dark");
   document.documentElement.setAttribute("data-theme", "night");

   return "dark";
};
export const lightMode = () => {
   localStorage.setItem("theme", "light");
   document.documentElement.setAttribute("data-theme", "light");
   return "light";
};
