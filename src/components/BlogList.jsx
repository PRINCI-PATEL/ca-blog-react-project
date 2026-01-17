import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../api/blogs";
import BlogCard from "./BlogCard";

const BlogList = ({ onSelect }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <p>Loading blogs...</p>;
  if (isError) return <p>Error loading blogs</p>;

  return (
    <div className="space-y-4">
      {data.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={() => onSelect(blog.id)}
        />
      ))}
    </div>
  );
};

export default BlogList;
