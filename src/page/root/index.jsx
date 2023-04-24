import SideBar from "../../components/Sidebar";
import style from "./root.module.css";

function RootPage() {
   return (
      <div className={`${style.layout}`}>
         <SideBar />
         <div>MainContent</div>
      </div>
   );
}

export default RootPage;
