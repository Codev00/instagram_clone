import React from "react";

const NavItem = ({
   icon,
   activeIcon,
   isActive,
   title,
   onClick,
}: {
   icon: JSX.Element;
   activeIcon: JSX.Element;
   isActive: boolean;
   title: string;
   onClick: () => void;
}) => {
   return (
      <div
         className={`cursor-pointer flex items-center  flex-row my-[4px] p-3 text-2xl hover:bg-[#e1e1e1] rounded-xl transition-all peer`}
         onClick={onClick}
      >
         {isActive ? activeIcon : icon}
         <p className={`text-base ${isActive && "font-bold"} pl-4 `}>{title}</p>
      </div>
   );
};

export default NavItem;
