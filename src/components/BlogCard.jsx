const BlogCard = ({ blog, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border rounded p-3 hover:bg-gray-100"
    >
      <h3 className="font-semibold">{blog.title}</h3>
      <p className="text-sm text-gray-600">{blog.category}</p>
      <p className="text-sm mt-1">{blog.description}</p>
    </div>
  );
};

export default BlogCard;

