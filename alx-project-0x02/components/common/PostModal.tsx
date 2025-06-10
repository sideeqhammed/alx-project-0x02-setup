import { CardProps, PostModalProps } from "@/interface";
import React, {useState} from "react";

const PostModal: React.FC<PostModalProps> = ({onClose, onSubmit}) => {
  const [post, setPost] = useState<CardProps>({
    titleId: 1,
    title: "",
    content: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setPost((prevPost) => ({...prevPost, [name]: value}));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };

  return(
    <div className="fixed inset-0 bg-gray-600 opacity-97 flex justify-center items-center">
      <div className="w-full max-w-md bg-gray-300 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Write a new Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4"> <label htmlFor="title" >Title</label>
            <input 
              type="string"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              className="w-full bg-white border px-2 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter post title"
            />
          </div>
          <div className="mb-4"><label htmlFor="content">Content</label>
            <textarea 
              id="content"
              name="content"
              value={post.content}
              onChange={handleChange}
              rows={4}
              className="w-full bg-white border px-2 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter post content"
            />
          </div>
          <div className="flex justify-between items-center">
            <button onClick={onClose}
              className="bg-gray-500 px-4 py-2 rounded-full">Cancel</button>
            <button type="submit"
              className="bg-gray-500 px-4 py-2 rounded-full">Add Post</button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default PostModal;