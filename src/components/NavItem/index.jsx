import style from "./Navitem.module.css";

function NavItem({ icon, activeIcon, isActive, title, onClick }) {
   return (
      <div className={`${style.navItem}`}>
         {isActive ? activeIcon : icon}
         <p
            className={`textbase pl-4`}
            style={{ fontWeight: isActive ? "600" : "normal" }}
         >
            {title}
         </p>
      </div>
   );
}

export default NavItem;
