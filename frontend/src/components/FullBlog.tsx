import { BlogProp } from "../hooks";
import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";

const FullBlog = ({ blog }: { blog: BlogProp }) => {

  return (
    <>
      <Appbar />
      <div className="grid w-screen md:w-[75%] m-auto grid-cols-12 px-10 w-full pt-8">
        <div className="p-6 col-span-8 ">
          <h1 className="text-4xl font-extrabold">{blog.title}</h1>
          <p className="text-zinc-500 font-medium">Posted on Novenmer 12, 2024</p>
          <div className="font-medium text-xl text-gray-700 m-2">{blog.content}</div>
        </div>
        <div className="col-span-4  p-6">
          <div className="font-medium text-slate-700 pl-3">Author</div>
          <div className=" w-full flex">
            <div className="m-2 flex flex-col justify-center">
              <Avatar size="big" name={blog.author.username.toUpperCase()} />
            </div>
            <div>
            <div className="text-xl font-extrabold">{blog.author.username.toUpperCase()[0] + blog.author.username.slice(1, blog.author.username.length)}</div>
            <div className="text-md font-base text-gray-700 ">Random catch phrase to catch the users attention</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullBlog;
