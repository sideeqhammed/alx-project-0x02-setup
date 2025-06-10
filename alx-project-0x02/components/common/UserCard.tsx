import { UserProps } from "@/interface";

const UserCard: React.FC<UserProps> = ({ name,email,username }) => {
  return(
    <div className="w-full max-w-xl mx-auto p-4 bg-gray-300 my-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className=" my-4">
        <h2 className="text-xl font-bold text-gray-800">Name: {name}</h2>
      </div>
      <p className="text-lg font-bold">Username: {username}</p>
      <p className="text-gray-800">Email: {email}</p>
    </div>
  )
}

export default UserCard;