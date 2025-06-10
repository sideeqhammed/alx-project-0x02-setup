import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title,userId,body }) => {
  return(
    <div className="max-w-xl mx-auto p-4 bg-gray-300 my-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className=" my-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-lg font-bold">{userId}</p>
      <p className="text-gray-800">{body}</p>
    </div>
  )
}

export default PostCard;