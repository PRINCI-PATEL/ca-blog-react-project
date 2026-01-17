import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../api/blogs";

const BlogDetail = ({ blogId }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId),
    enabled: !!blogId,
  });

  if (!blogId) return <p>Select a blog to view details</p>;
  if (isLoading) return <p>Loading blog...</p>;

  return (
    <div>
      <img
        src={data.coverImage}
        alt=""
        className="w-full h-60 object-cover rounded mb-4"
      />

      <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
      <p className="text-sm text-gray-500 mb-4">
        {data.category} • {data.date}
      </p>

      <p className="leading-relaxed">{data.content}</p>
    </div>
  );
};

export default BlogDetail;
