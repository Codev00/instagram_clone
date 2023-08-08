"use client";
import React from "react";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Rightbar = () => {
   const User = useSelector((state: RootState) => state.posts.users);
   const currentUser = {
      id: 0,
      name: "Ken Ken",
      urlName: "zken.z1",
   };
   return (
      <div className="w-[319px] pt-[30px] mb-[30px]">
         <div className="flex flex-col">
            <div className="flex flex-row items-center gap-4 mt-4 mb-[10px]">
               <Avatar
                  url="/avatar.jpg"
                  size={56}
                  callBack={() => console.log("Avatar")}
               />
               <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col">
                     <span className="text-sm font-semibold">
                        {currentUser.urlName}
                     </span>
                     <span className="text-slate-500 text-sm">
                        {currentUser.name}
                     </span>
                  </div>
                  <span className="text-sm text-blue-700 cursor-pointer  ">
                     Switch
                  </span>
               </div>
            </div>
            <div className="w-full text-sm flex flex-row items-center justify-between h-[20px]  py-1 ">
               <span className="text-slate-500">Suggestions For You</span>

               <span className="font-bold cursor-pointer">See All</span>
            </div>
            <div className="py-2 mb-3">
               {User.slice(0, 5).map((user, index) => (
                  <div
                     className="flex flex-row items-center gap-3 py-2"
                     key={index}
                  >
                     <Avatar
                        url={user.avatar}
                        size={32}
                        callBack={() => console.log("Avatar")}
                     />
                     <div className="text-sm flex flex-row justify-between items-center w-full">
                        <span className="cursor-pointer">{user.urlName}</span>
                        <span className="text-blue-700 cursor-pointer">
                           Follow
                        </span>
                     </div>
                  </div>
               ))}
            </div>
            <div className="w-full text-xs   text-slate-500 mb-4">
               <span className="cursor-pointer">Giới thiệu </span> &bull;
               <span className="cursor-pointer"> Trợ giúp </span> &bull;
               <span className="cursor-pointer"> API </span> &bull;
               <span className="cursor-pointer"> Việc làm </span> &bull;
               <span className="cursor-pointer"> Quyền riêng tư </span> &bull;
               <span className="cursor-pointer"> Điều khoản </span> &bull;
               <span className="cursor-pointer"> Vị trí </span> &bull;
               <span className="cursor-pointer"> Ngôn ngữ </span> &bull;
               <span className="cursor-pointer"> Meta đã xác định</span>
            </div>
            <div className="text-xs text-slate-500">
               <span>&copy; INSTAGRAM FROM META</span>
            </div>
         </div>
      </div>
   );
};

export default Rightbar;
