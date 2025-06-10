import { ButtonProps } from "@/interface";
import React from "react";

const PostButton: React.FC<ButtonProps> = ({name, size, shape}) => {
  return(
    <div className={`${size} ${shape} bg-gray-400 max-w-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 `}>
      {name}
    </div>
  )
}

export default PostButton;