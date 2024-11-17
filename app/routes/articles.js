import fetch from 'fetch';
import Ember from 'ember';
import articles from '../data/articles.json'

export default Ember.Route.extend({
  queryParams: {
    category: {
      refreshModel: true,
    },
  },
  async model() {
    return articles.map(article => ({
        ...article,
        content: article.content,
        shortContent: article.content.length > 100 ? article.content.slice(0, 100) + '...' : article.content
    }));
    // const response = await fetch('/data/articles.json');
    // if (response.ok) {
    //   const articles = await response.json();
    //   return articles.map((article) => ({
    //     ...article,
    //     content: article.content,
    //     shortContent:
    //       article.content.length > 100
    //         ? article.content.slice(0, 100) + '...'
    //         : article.content,
    //   }));
    // } else {
    //   console.error('Eroare la încărcarea articolelor');
    //   return [];
    // }
  },
});
