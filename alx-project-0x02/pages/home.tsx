import Header from "@/components/layout/Header"
import Card from "@/components/common/Card"
import PostModal from "@/components/common/PostModal"
import {  CardProps } from "@/interface"
import { title } from "process"
import React, { useState } from "react"


const CardData: CardProps[] = [
  {
    titleId: 1,
    title: "Title 1",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, laudantium fugit. At quo reiciendis ex nulla dolore, id sit ipsa natus eum explicabo rem nesciunt maxime, placeat ipsam. Ducimus, architecto."
  },
  {
    titleId: 2,
    title: "Title 2",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, laudantium fugit. At quo reiciendis ex nulla dolore, id sit ipsa natus eum explicabo rem nesciunt maxime, placeat ipsam. Ducimus, architecto."
  },
  {
    titleId: 3,
    title: "Title 3",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, laudantium fugit. At quo reiciendis ex nulla dolore, id sit ipsa natus eum explicabo rem nesciunt maxime, placeat ipsam. Ducimus, architecto."
  }
]

const Home: React.FC<CardProps[]> = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<CardProps | null>(null);

  const handleAddPost = (newPost: CardProps) => {
    setPost({ ...newPost, titleId: CardData.length + 1 });
  };
  return(
    <div>
      <Header />
      <h1 className="text-3xl font-bold m-4" >Home Page</h1>
      <div className="flex justify-between m-4 mt-6">
        <h1 className="text-2xl font-bold" >Posts</h1>
        <button onClick={() => setModalOpen(true)}
          className="bg-gray-400 px-4 py-2 rounded-full shadow-lg hover:bg-gray-500 hover:shadow-xl transition-colors duration-700">Add Post</button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {CardData?.map(({title, content}, index) => 
          <Card
          key={index}
          title={title}
          content={content}
          />
          )
        }
          
      </div>
      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  )
}


export default Home;