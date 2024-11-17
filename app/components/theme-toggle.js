import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ThemeToggleComponent extends Component {
    @service theme;

    constructor() {
        super(...arguments);
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    get currentTheme() {
        return this.theme.theme === 'light' ? 'Lumină' : 'Întunecată';
    }

    toggleTheme() {
        this.theme.toggleTheme();
    }
}