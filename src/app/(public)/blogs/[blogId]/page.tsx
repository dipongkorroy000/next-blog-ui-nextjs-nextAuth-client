import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { getBlogById } from "@/services/postServices";
import { IPost } from "@/types";

export const generateMetadata = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;

  const post = await getBlogById(blogId);

  return { title: post?.title, description: post?.content };
};

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const { data: posts } = await res.json();
  return posts.slice(0, 2).map((post: IPost) => ({ blogId: String(post.id) }));
};

const BlogDetailsPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;

  const post = await getBlogById(blogId);

  return (
    <div className="py-32 px-4 max-w-7xl mx-auto">
      <BlogDetailsCard blog={post}></BlogDetailsCard>
    </div>
  );
};

export default BlogDetailsPage;
