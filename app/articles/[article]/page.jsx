import React, { Suspense } from 'react';
import Article from './components/Article';

const ArticlePage = async ({params}) => {
  const { article } = params;

  return (
    <div>
      <h1>Article Page</h1>
      <p>This is the article page content.</p>
      <p>Here you can read the full article.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
    <hr/>
    <Suspense fallback={<div>Loading article details...</div>}>
      <Article article={article} />
    </Suspense>
    </div>
  );
}

export default ArticlePage;
