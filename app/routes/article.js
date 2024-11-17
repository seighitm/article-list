import Route from '@ember/routing/route';
import fetch from "fetch"
import Ember from 'ember';
import articles from '../data/articles.json'

export default Ember.Route.extend({
    queryParams: {
      category: {
        refreshModel: true
      }
    },
    async model(params) {
      return articles.find((article) => article.id === params.id);
      // try {
      //   const response = await fetch('/data/articles.json');
      //   if (!response.ok) {
      //     throw new Error('Failed to load article');
      //   }
      //   const articles = await response.json();
      //   return articles.find((article) => article.id === params.id);
      // } catch (error) {
      //   console.error('Error fetching article:', error);
      //   return null;
      // }
    }
  });