import React from "react";
import Image from "next/image";
const Avatar = ({
   url,
   size,
   callBack,
}: {
   url: string;
   size: number;
   callBack: () => void;
}) => {
   return (
      <Image
         src={url}
         width={size}
         height={size}
         onClick={callBack}
         alt="Avatar"
         className="rounded-full cursor-pointer "
      />
   );
};

export default Avatar;
