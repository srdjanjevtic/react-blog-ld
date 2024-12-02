import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";

const SinglePost = ({ post }) => {

  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}

        <div className="md:hidden xl:block xl:w-1/3">
          <Image src={post.img || "NIA.jpg"} className="rounded-2xl object-cover" w="735" />
        </div>
  
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold dark:text-slate-400">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800 dark:text-slate-200" to={`/posts?author=${post?.user?.username}`}>{post?.user?.username}</Link>
          <span>on</span>
          <Link className="text-blue-800 dark:text-slate-200" to={`/posts?cat=${post?.category}`}>{post.category}</Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.desc}</p>
        <p className="cutoff-container" dangerouslySetInnerHTML={{ __html: post.content }}></p>
        <Link to={`/${post.slug}`} className="underline text-blue-800 text-xs dark:text-yellow-200">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default SinglePost;