import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { parseQueryParams, updateQueryParams } from '../utils/query-params'

export default class ArticleListComponent extends Component {
    @service router;
    @tracked searchTerm = '';
    @tracked selectedCategory = '';
    @tracked selectedDate = '';
    @tracked selectedAuthor = '';
    @tracked startDate = '';
    @tracked endDate = '';
    @tracked isLoading = false;
    @tracked articlesToShow = 6;
    @tracked totalArticles = this.args.articles.length;

    constructor() {
        super(...arguments);
        const urlParams = this.getUrlParams();
        this.selectedCategory = urlParams.category || '';
        this.searchTerm = urlParams.searchTerm || '';
        this.selectedDate = urlParams.date || '';
        this.selectedAuthor = urlParams.author || '';
        this.startDate = urlParams.startDate || '';
        this.endDate = urlParams.endDate || '';
    }

    getUrlParams() {
        return parseQueryParams(this.router.currentURL);
    }

    get filteredArticles() {
        let articles = this.args.articles;

        if (this.searchTerm) {
            articles = articles.filter(article =>
                article.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                article.content.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        }

        if (this.selectedCategory) {
            articles = articles.filter(article => article.category === this.selectedCategory);
        }

        if (this.startDate && this.endDate) {
            articles = articles.filter(article => {
                const articleDate = new Date(article.date);
                const start = new Date(this.startDate);
                const end = new Date(this.endDate);
                return articleDate >= start && articleDate <= end;
            });
        }

        if (this.selectedAuthor) {
            articles = articles.filter(article =>
                article.author.toLowerCase().includes(this.selectedAuthor.toLowerCase())
            );
        }

        return articles.slice(0, this.articlesToShow);
    }

    @action
    updateSearchTerm(event) {
        this.searchTerm = event.target.value;
        this.articlesToShow = 6;
    }

    @action
    updateCategory(event) {
        const selectedCategory = event.target.value;
        this.selectedCategory = selectedCategory;
        this.articlesToShow = 6;
        console.log(selectedCategory);
        
        updateQueryParams(this.router, { category: selectedCategory });
    }

    @action
    updateDate(event) {
        const selectedDate = event.target.value;
        this.selectedDate = selectedDate;
        this.articlesToShow = 6;
        console.log(selectedDate);
        
        updateQueryParams(this.router, { date: selectedDate });
    }

    @action
    updateAuthorFilter(event) {
        this.selectedAuthor = event.target.value;
        this.articlesToShow = 6;
    }

    @action
    updateStartDate(event) {
        this.startDate = event.target.value;
        this.articlesToShow = 6;
        updateQueryParams(this.router, { startDate: this.startDate });
    }

    @action
    updateEndDate(event) {
        this.endDate = event.target.value;
        this.articlesToShow = 6;
        updateQueryParams(this.router, { endDate: this.endDate });
    }

    @action
    resetFilters() {
        this.selectedCategory = '';
        this.searchTerm = '';
        this.selectedDate = '';
        this.selectedAuthor = '';
        this.startDate = '';
        this.endDate = '';
        this.router.transitionTo({ queryParams: {  } });
    }

    @action
    loadMoreArticles() {
        if (this.totalArticles > this.filteredArticles.length) {
            this.isLoading = true;
            setTimeout(() => {
                this.articlesToShow += 6;
                this.isLoading = false;
            }, 1000);
        }
    }
}
