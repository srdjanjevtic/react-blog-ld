import SinglePost from "./SinglePost";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const fetchPosts = async (pageParam, searchParams, token) => {
  const searchParamsObj = Object.fromEntries([...searchParams]);

  console.log(searchParamsObj);

  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam, limit: 10, ...searchParamsObj },
    headers,
  });

  return res.data;
};

const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getToken, isSignedIn } = useAuth();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    refetch
  } = useInfiniteQuery({
    queryKey: ["posts", searchParams.toString(), isSignedIn],
    queryFn: async ({ pageParam = 1 }) => {
      const token = isSignedIn ? await getToken() : null;
      return fetchPosts(pageParam, searchParams, token);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  if (isFetching && !isFetchingNextPage) return "Loading...";
  if (error) return "Something went wrong!";

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        allPosts.length > 0 ? (
          <p>
            <b>All posts loaded!</b>
          </p>
        ) : (
          <p>
            <b>No posts found!</b>
          </p>
        )
      }
    >
      {allPosts.map((post) => (
        <SinglePost key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
