import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class InfiniteScrollComponent extends Component {
    @action setupObserver(element) {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) this.args.onLoadMore();
            },
            { rootMargin: '100px' }
        );
        observer.observe(element);
    }
}
