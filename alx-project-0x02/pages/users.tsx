import UserCard from "@/components/common/UserCard"
import Header from "@/components/layout/Header"
import { UserProps } from "@/interfaces"

const Users: React.FC<UserProps> = ({users}) => {
  return(
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2"> 
          {
          users?.map(({name, email, username}, index) => 
            <UserCard
              key={index}
              name={name}
              username={username}
              email={email}
              />
            )
        }
      </div>
    </div>
  )
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
};

export default Users;