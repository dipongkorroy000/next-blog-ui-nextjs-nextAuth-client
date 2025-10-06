import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { IPost } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, { next: { tags: ["BLOGS"] } }); // 30s after reload data
  const { data: posts } = await res.json();
  // console.log(posts);

  return (
    <section>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>

      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
        {posts.slice(0, 3).map((post: IPost) => (
          <BlogCard key={post.id} post={post}></BlogCard>
        ))}
      </div>
    </section>
  );
}
