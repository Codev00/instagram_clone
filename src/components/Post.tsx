import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { Post, User } from "@/data/type";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Image from "next/image";

const Post = ({ post }: { post: Post }) => {
   const Users = useSelector((state: RootState) => state.posts.users);
   const [user, setUser] = useState<User | undefined>();
   const [isLike, setIsLike] = useState(false);
   useEffect(() => {
      const res = Users.find((user) => user.id === post.userId);
      if (res) setUser(res!);
   }, [post]);
   return (
      <div className=" mb-3 pb-[20px] border-b border-slate-300">
         <div className="flex items-center w-full h-[58px]">
            <div className="flex flex-row items-center gap-2 w-full">
               <div className="w-[42px] h-[42px] flex items-center justify-center  ml-1">
                  <div className="rounded-full p-[2px] bg-gradient-to-tr from-[#FCD900] via-[#E3581B] to-[#BD16E0]">
                     <div className="rounded-full p-[2px] bg-white ">
                        <Avatar
                           url={user?.avatar!}
                           size={32}
                           callBack={() => console.log("Avatar")}
                        />
                     </div>
                  </div>
               </div>
               <div className="w-full h-full flex flex-row items-center justify-between">
                  <div>
                     <span>{user?.name}</span>
                     {" •"} <span className="text-sm">1 days </span>
                     {" • "}
                     <span className="text-sm text-primary">Follow</span>
                  </div>
                  <div>
                     <i className="fi fi-br-menu-dots cursor-pointer text-[16px]"></i>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <Image
               src={post.image}
               width={470}
               height={400}
               alt="post"
               className="fits-cover rounded-lg"
            />
         </div>
         <div className="w-full">
            <div className="w-full flex flex-row items-center justify-between h-[46px]">
               <div className="flex flex-row items-center -translate-x-2">
                  {isLike == false ? (
                     <i
                        className="fi fi-rs-heart text-2xl/[24px] /[24px] cursor-pointer w-[40px] h-[40px] p-2"
                        onClick={() => setIsLike(!isLike)}
                     ></i>
                  ) : (
                     <i
                        className="fi fi-ss-heart text-2xl/[24px]  text-red-500 cursor-pointer w-[40px] h-[40px] p-2"
                        onClick={() => setIsLike(!isLike)}
                     ></i>
                  )}

                  <i className="fi fi-rr-comment-alt-middle cursor-pointer text-2xl/[24px]  w-[40px] h-[40px] p-2"></i>
                  <i className="fi fi-rs-paper-plane cursor-pointer text-2xl/[24px]  w-[40px] h-[40px] p-2"></i>
               </div>
               <i className="fi fi-br-bookmark cursor-pointer text-2xl/[24px]  w-[40px] h-[40px] p-2"></i>
            </div>
            <div className="text-[14px]">
               <span className="font-medium">{post.likes}</span> likes
            </div>
            <div className="text-[14px]">
               <span className="font-medium">{user?.name}: </span>{" "}
               <span>{post?.description}</span>
            </div>
            <div>
               <span className="text-[14px] text-slate-600 cursor-pointer">
                  See all comments...
               </span>
            </div>

            <div className="relative flex flex-row items-center">
               <textarea
                  placeholder="Add comments"
                  autoCorrect="off"
                  autoComplete="off"
                  className="textarea w-full p-0 min-h-[30px] border-none resize-none !h-[25px] max-h-[80px] focus:outline-none "
               />
               <i className="fi fi-rr-smile  "></i>
            </div>
         </div>
      </div>
   );
};

export default Post;
