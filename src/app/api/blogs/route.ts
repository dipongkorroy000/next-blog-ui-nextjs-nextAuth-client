import { NextResponse } from "next/server";

export const blogs = [
  {
    id: 5,
    title: "abc",
    content: "adfsf",
    thumbnail: "",
    isFeatured: true,
    tags: ["https://i.ibb.co.com/4ZWJVf1c/mahastangar.jpg"],
    views: 0,
    authorId: 1,
    createdAt: "2025-10-06T03:01:15.033Z",
    updatedAt: "2025-10-06T03:01:15.033Z",
    author: {
      id: 1,
      name: "fahim",
      email: "fahim@gamil.com",
      password: "1234",
      role: "USER",
      phone: "01712336554",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-10-02T04:26:02.720Z",
      updatedAt: "2025-10-02T04:26:02.720Z",
    },
  },
  {
    id: 4,
    title: "tititle test for data",
    content: "post contern",
    thumbnail: "https://i.ibb.co.com/4ZWJVf1c/mahastangar.jpg",
    isFeatured: true,
    tags: ["text", "file", "nextjs"],
    views: 0,
    authorId: 1,
    createdAt: "2025-10-06T02:47:33.792Z",
    updatedAt: "2025-10-06T02:47:33.792Z",
    author: {
      id: 1,
      name: "fahim",
      email: "fahim@gamil.com",
      password: "1234",
      role: "USER",
      phone: "01712336554",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-10-02T04:26:02.720Z",
      updatedAt: "2025-10-02T04:26:02.720Z",
    },
  },
  {
    id: 3,
    title: "This is post title 3",
    content: "this is post content",
    thumbnail: "https://i.ibb.co.com/4ZWJVf1c/mahastangar.jpg",
    isFeatured: true,
    tags: ["pro"],
    views: 17,
    authorId: 1,
    createdAt: "2025-10-02T06:13:52.061Z",
    updatedAt: "2025-10-06T02:48:02.269Z",
    author: {
      id: 1,
      name: "fahim",
      email: "fahim@gamil.com",
      password: "1234",
      role: "USER",
      phone: "01712336554",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-10-02T04:26:02.720Z",
      updatedAt: "2025-10-02T04:26:02.720Z",
    },
  },
  {
    id: 2,
    title: "This is post title 2",
    content: "this is post content",
    thumbnail: "https://i.ibb.co.com/4ZWJVf1c/mahastangar.jpg",
    isFeatured: true,
    tags: ["blog", "ph", "web"],
    views: 20,
    authorId: 1,
    createdAt: "2025-10-02T06:11:03.502Z",
    updatedAt: "2025-10-05T15:57:41.855Z",
    author: {
      id: 1,
      name: "fahim",
      email: "fahim@gamil.com",
      password: "1234",
      role: "USER",
      phone: "01712336554",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-10-02T04:26:02.720Z",
      updatedAt: "2025-10-02T04:26:02.720Z",
    },
  },
  {
    id: 1,
    title: "This is post title",
    content: "this is post content 1",
    thumbnail: "https://i.ibb.co.com/4ZWJVf1c/mahastangar.jpg",
    isFeatured: false,
    tags: ["blog", "ph", "dev"],
    views: 22,
    authorId: 1,
    createdAt: "2025-10-02T06:09:34.348Z",
    updatedAt: "2025-10-06T02:48:09.207Z",
    author: {
      id: 1,
      name: "fahim",
      email: "fahim@gamil.com",
      password: "1234",
      role: "USER",
      phone: "01712336554",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-10-02T04:26:02.720Z",
      updatedAt: "2025-10-02T04:26:02.720Z",
    },
  },
];

export const GET = async () => {
  return Response.json(blogs);
};

export const POST = async (request: Request) => {
  const blog = await request.json();

  const newBlog = { ...blog, id: blogs.length + 1 };

  blogs.push(newBlog);

  return new NextResponse(JSON.stringify(newBlog), { status: 201, headers: { "content-type": "application/json" } });
};
