import React from 'react';
import { useState, useEffect } from 'react'

export default function NewsArticleList() {
     const [state, setState] = useState({
       articles: []
     })

     // use effect will be called AFTER the first time the component renders
     useEffect(
       function() {
         setState:

             fetch("https://jsonplaceholder.typicode.com/posts")
               .then(response => response.json())
               // call setState with the new articles, this will cause the component to re-render
               .then(articles => setState({
                 articles: articles
               }));
       },
       // pass in empty array, this array will never change so the callback will only be called once
       []
     );



  return (
    <ul>
       {
         state.articles.map(article => <li key={article.id}> {article.title} </li> )
       }
    </ul>
  );
}
