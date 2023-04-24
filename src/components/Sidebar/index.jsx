import style from "./Sidebar.module.css";
import { Logo } from "../images";
function SideBar() {
   return (
      <div className={`${style.sidebar}`}>
         <div className="cursor-pointer mb-2 px-3 pt-5 pb4">
            <Logo />
         </div>
      </div>
   );
}

export default SideBar;
