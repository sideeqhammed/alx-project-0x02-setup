import Header from "@/components/layout/Header"
import { ButtonProps } from "@/interfaces"
import PostButton from "@/components/common/Button"

const ButtonData: ButtonProps[] = [
  {
    name: "Button1",
    size: "sm",
    shape: "rounded-sm"
  },
  {
    name: "Button2",
    size: "md",
    shape: "rounded-md"
  },
  {
    name: "Button3",
    size: "lg",
    shape: "rounded-full"
  }
]

const About: React.FC<ButtonProps> = () => {
  return(
    <div>
      <Header />
      <h1 className="text-2xl font-bold mx-4">About</h1>
      <div className="flex justify-between items-center mx-auto my-2 max-w-1/2">
        {
          ButtonData?.map((button, index) => 
          <PostButton
          key={index}
          name={button.name}
          size={button.size}
          shape={button.shape}
          />
          )
        }
      </div>
    </div>
  )
}

export default About;