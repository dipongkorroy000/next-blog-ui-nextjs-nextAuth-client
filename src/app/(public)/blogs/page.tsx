import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IPost } from "@/types";

export const metadata = {
  title: "All Blocks | Next Blogs",
  description: "Browse all blog posts on web development, next.js react, and more. stay updated with the latest tutorials and articles.",
};

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, { cache: "no-store" });
  const { data: posts } = await res.json();

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>

      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto my-5">
        {posts.map((post: IPost) => (
          <BlogCard key={post.id} post={post}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
