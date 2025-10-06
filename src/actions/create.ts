"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const create = async (data: FormData) => {
  // console.log(data);

  const blogInfo = Object.fromEntries(data.entries());

  const modifiedData = {
    ...blogInfo,
    tags: blogInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    authorId: 1,
    isFeatured: Boolean(blogInfo.isFeatured)
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(modifiedData),
  });
  const result = await res.json();

  if(result?.id) {
    revalidateTag("BLOGS"); // reload home page 
    revalidatePath("/blogs"); // reload blogs page
    redirect("/blogs");
  }

  return result
};
