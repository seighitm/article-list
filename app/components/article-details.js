import Component from '@glimmer/component';
import config from 'articles/config/environment';

export default class ArticleDetailsComponent extends Component {
    get apiUrl() {
        return config.apiUrl;
    }
}
