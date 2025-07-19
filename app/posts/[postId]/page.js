import React from 'react';

const SinglePost = async ({params}) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, 
    {
      cache: 'force-cache',
      next: {
        revalidate: 5, // Revalidate every 10 seconds
      }
    });
  const post = await res.json();
  const {postId} = params;
  return (
    <div style={{padding: '20px', margin: '20px', backgroundColor: 'orangered', color: 'white'}}>
      
      <p>{postId}</p>
      <h2>{post.title}</h2>
      <hr/>
      <p>{post.body}</p>
    </div>
  );
}

export default SinglePost;
