import Link from "next/link";

const Header: React.FC = () => {
  return(
    <div className="w-full my-2 py-3 bg-gray-600 text-white flex justify-between items-center">
      <div className="mx-auto">
        <ul className="flex space-x-4 mx-2 ">
          <li className="hover:underline">
            <Link href="/home">Home</Link>
          </li>
          <li className="hover:underline ">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:underline">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="hover:underline">
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;