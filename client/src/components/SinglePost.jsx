import { Link } from "react-router-dom";
import Image from "../components/Image";

const SinglePost = () => {
return (
  <div className="flex flex-col lg:flex-row gap-8 mb-12">
    {/* image */}
    <div className="md:hidden lg:block xl:w-2/5 my-auto">
      <Image
        w="735"
        src="https://ik.imagekit.io/jsdogs/public/postImg.jpeg"
        className="rounded-2xl object-cover"
      />
    </div>
    {/* details */}
    <div className="flex flex-col gap-4 xl:w-3/5">
      <Link to="/test" className="text-4xl font-semibold">
        Post Title
      </Link>
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <span>Written by</span>
        <Link className="text-blue-800" to="/test">
          John Doe
        </Link>
        <span>on</span>
        <Link className="text-blue-800">Web Design</Link>
        <span>2 days ago</span>
      </div>
      <p>
        Ea aute irure cupidatat enim mollit excepteur velit id cillum ea nisi
        sint. Occaecat nulla ea esse laborum ullamco anim id. Non dolor occaecat
        dolore ad fugiat tempor sint sint aute officia. Qui irure est id ea
        eiusmod incididunt ullamco veniam veniam Lorem sit reprehenderit ipsum
        labore. Sit anim fugiat sunt consequat commodo culpa duis tempor in et
        proident.
      </p>
            <Link className="underline text-blue-800 text-sm">Read More</Link>
    </div>
  </div>
);
};

export default SinglePost;
