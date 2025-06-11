import { PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";
// import React from "react";
import Header from "@/components/layout/Header";
import React from "react";



const Posts: React.FC<PostProps> = ({ posts }) => {

  return(
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2"> 
        {
          posts?.map(({userId, title, body}, index) => 
            <PostCard 
            key={index}
            title={title}
            userId={userId}
            body={body}
            />
          )
        }
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

   return {
    props: {
      posts
    }
  }
}

export default Posts;