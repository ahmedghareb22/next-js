import React from "react";
import Link from "next/link";
const PostsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 5, // Revalidate every 10 seconds
    },
  });
  const posts = await res.json();
  return (
    <div>
      {posts.map((p) => {
        return (
          <Link key={p.id} href={`/posts/${p.id}`}>
            <div
              style={{
                backgroundColor: "teal",
                color: "white",
                padding: "20px",
                margin: "20px",
                fontSize: "20px",
              }}
            >
              {p.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PostsPage;
