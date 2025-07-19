import React from 'react';

const Article = async ({article}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${article}`);
  const articleData = await res.json();
  return (
      <div style={{backgroundColor: 'teal', padding: '20px', borderRadius: '10px'}}>
        <h2>{articleData.title}</h2>
        <p>{articleData.body}</p>
        <p>Author ID: {articleData.userId}</p>
        <p>Article ID: {articleData.id}</p>
      </div>
  );
}

export default Article;
