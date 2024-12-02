import React from "react";
import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* breadcrumb */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>*</span>
        <span className="text-sky-800 dark:text-sky-400">Blogs and Articles</span>
      </div>
      {/* introduction */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="flex flex-col">
          <h1 className=" text-gray-800 text-xl md:text-2xl lg:text-3xl font-bold leading-tight dark:text-white">
            Ullamco anim consequat veniam ad
          </h1>
          <p className="mt-8 text-md md:text-lg leading-normal">
            Ullamco anim consequat veniam ad ad. Ullamco anim consequat veniam
            ad ad. Ullamco anim consequat veniam ad ad.
          </p>
        </div>
        {/* animated button */}
        <Link to="/write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-wide text-sky-600 hover:text-sky-800 animate-spin animated-button"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"
            />
            <text >
              <textPath href="#circlePath" startOffset="0%"  className="dark:fill-slate-200">
                Write your story
              </textPath>
              <textPath href="#circlePath" startOffset="50%" className="dark:fill-slate-200">
                Share your idea
              </textPath>
            </text>
          </svg>
          <button className="bg-sky-600 rounded-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 origin-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              width="65"
              height="65"
              stroke="#fff"
              strokeWidth="3"
              className="animate-spin animated-arrow"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
              {/* <svg
                fill="#000000"
                width="32px"
                height="32px"
                viewBox="0 0 50 50"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>atom</title>
                <path d="M24.687 16.037c2.293 2.473 3.32 4.906 2.429 6.466-0.889 1.556-3.481 1.877-6.738 1.114-0.975 3.259-2.554 5.387-4.341 5.387-1.789 0-3.367-2.135-4.34-5.403-3.293 0.785-5.916 0.47-6.812-1.098-0.891-1.56 0.137-3.996 2.43-6.472-2.337-2.496-3.389-4.96-2.49-6.532 0.9-1.576 3.548-1.887 6.864-1.087 0.974-3.275 2.558-5.416 4.349-5.416 1.79 0 3.369 2.134 4.342 5.401 3.285-0.78 5.904-0.464 6.799 1.102 0.896 1.573-0.157 4.039-2.492 6.538zM5.752 10.041c-0.688 1.204 0.261 3.178 2.27 5.265 0.819-0.799 1.762-1.592 2.812-2.354 0.128-1.266 0.323-2.467 0.59-3.56-2.807-0.721-4.981-0.56-5.672 0.649zM10.721 14.361c-0.72 0.548-1.377 1.104-1.966 1.659 0.597 0.558 1.241 1.118 1.97 1.67-0.030-0.555-0.051-1.116-0.051-1.69 0-0.556 0.018-1.102 0.047-1.639zM10.833 19.094c-1.051-0.759-1.991-1.55-2.813-2.346-1.973 2.068-2.889 4.019-2.207 5.213 0.687 1.201 2.838 1.368 5.62 0.662-0.267-1.087-0.473-2.269-0.6-3.529zM20.089 19.835c-0.446 0.293-0.902 0.581-1.377 0.858-0.482 0.281-0.964 0.539-1.444 0.785 0.823 0.35 1.628 0.655 2.392 0.889 0.179-0.784 0.318-1.639 0.429-2.532zM16.036 27.92c1.369 0 2.584-1.785 3.37-4.557-1.085-0.312-2.231-0.746-3.399-1.274-1.147 0.521-2.269 0.94-3.337 1.253 0.784 2.779 1.997 4.578 3.366 4.578zM12.423 22.342c0.742-0.231 1.518-0.518 2.316-0.858-0.482-0.247-0.967-0.508-1.451-0.79-0.449-0.263-0.881-0.533-1.304-0.81 0.109 0.877 0.264 1.686 0.439 2.458zM11.986 12.156c0.441-0.289 0.893-0.573 1.362-0.848 0.463-0.271 0.926-0.52 1.388-0.758-0.801-0.342-1.585-0.644-2.331-0.877-0.174 0.77-0.309 1.609-0.419 2.483zM16.036 4.080c-1.373 0-2.594 1.802-3.379 4.594 1.067 0.314 2.191 0.745 3.336 1.267 1.172-0.537 2.318-0.966 3.409-1.284-0.784-2.777-1.996-4.577-3.366-4.577zM19.651 9.655c-0.768 0.239-1.57 0.535-2.398 0.891 0.465 0.239 0.932 0.49 1.398 0.763 0.502 0.293 0.982 0.598 1.451 0.908-0.11-0.915-0.269-1.76-0.451-2.562zM20.24 13.604c-0.67-0.466-1.378-0.921-2.126-1.356-0.716-0.418-1.426-0.783-2.128-1.124-0.693 0.338-1.396 0.713-2.101 1.124-0.713 0.415-1.394 0.849-2.035 1.291-0.062 0.797-0.104 1.613-0.104 2.462 0 0.858 0.035 1.693 0.097 2.499 0.627 0.431 1.289 0.852 1.981 1.256 0.736 0.429 1.466 0.804 2.188 1.152 0.713-0.346 1.437-0.729 2.162-1.152 0.719-0.419 1.402-0.855 2.049-1.302 0.061-0.794 0.104-1.607 0.104-2.453 0-0.822-0.030-1.623-0.087-2.397zM26.187 21.961c0.682-1.192-0.242-3.14-2.211-5.203-0.801 0.774-1.718 1.542-2.736 2.281-0.128 1.282-0.326 2.499-0.598 3.604 2.746 0.685 4.865 0.508 5.545-0.682zM21.353 17.63c0.689-0.526 1.321-1.060 1.891-1.591-0.572-0.54-1.189-1.083-1.887-1.618 0.025 0.519 0.043 1.044 0.043 1.579-0.001 0.554-0.019 1.096-0.047 1.63zM26.247 10.041c-0.686-1.199-2.83-1.369-5.605-0.666 0.273 1.118 0.484 2.339 0.61 3.641 1.019 0.745 1.93 1.52 2.728 2.299 2.013-2.091 2.957-4.068 2.267-5.274zM16.2 18.062c-1.177 0-2.131-0.963-2.131-2.152s0.954-2.152 2.131-2.152c1.176 0 2.13 0.964 2.13 2.152 0 1.19-0.954 2.152-2.13 2.152z"></path>
              </svg> */}
            </svg>
          </button>
        </Link>
      </div>
      {/* main categories */}
      <MainCategories />
      {/* featured posts */}
      <FeaturedPosts />
      {/* post list */}
      <div className="">
        <h1 className="my-8 text-2xl text-slate-600 dark:text-slate-400">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
