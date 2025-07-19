import Link from 'next/link';
import React from 'react';

const ArticlesPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const articles = await res.json()
  return (
    <div>
      <h1>articles ArticlesPage</h1> 
        <div>
          {articles.map((article)=>{
            return(
              <Link key={article.id} href={`/articles/${article.id}`}>
                <div style={{backgroundColor: 'blue', color: 'white', padding: '20px', margin: '20px', fontSize: '20px', borderRadius: '10px'}}>
                  {article.title}
                </div>
              </Link>
            )
          })}
        </div>
    </div>
  );
}

export default ArticlesPage;
