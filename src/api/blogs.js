const API_URL = "http://localhost:3007/blogs";

export const getBlogs = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export const getBlogById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
};
