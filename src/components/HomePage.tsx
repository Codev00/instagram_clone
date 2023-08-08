"use client";
import { useEffect, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import React from "react";
import Avatar from "./Avatar";
import { userData } from "@/data/user.data";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Post from "./Post";
import { useDispatch } from "react-redux";
import { getPost, getUser } from "@/redux/post.slice";
import { postData } from "@/data/post.data";

const Home = () => {
   const Posts = useSelector((state: RootState) => state.posts.posts);
   const distpatch = useDispatch();
   useEffect(() => {
      distpatch(getUser(userData));
      distpatch(getPost(postData));
   });
   const ref =
      useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
   const { events } = useDraggable(ref);
   return (
      <div className="w-[630px] h-screen overflow-auto scrollbar-hide">
         <div className="h-[8px]"></div>
         <div
            className="w-full flex flex-row items-center gap-3 py-4 mt-4 whitespace-nowrap overflow-x-hidden"
            {...events}
            ref={ref}
         >
            {userData.map((user) => (
               <div
                  className="flex flex-col items-center w-[66px] gap-2"
                  key={user.id}
               >
                  <div className="rounded-full p-[3px] bg-gradient-to-tr from-[#FCD900] via-[#E3581B] to-[#BD16E0]">
                     <div className="rounded-full p-[1px] bg-white ">
                        <Avatar
                           url={user.avatar}
                           size={56}
                           callBack={() => console.log("Avatar")}
                        />
                     </div>
                  </div>
                  <p className="text-xs text-ellipsis overflow-hidden max-w-[60px]">
                     {user.name}
                  </p>
               </div>
            ))}
         </div>
         <div className="w-full h-full flex flex-col items-center ">
            <div className="w-[470px] h-full ">
               <div className="mt-4">
                  {Posts.map((post, index) => (
                     <Post post={post} key={index} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
