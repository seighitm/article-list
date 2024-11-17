import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ThemeService extends Service {
  @tracked theme = 'light';

  constructor() {
    super(...arguments);
    this.loadTheme();
  }

  loadTheme() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = localStorage.getItem('theme') || 'light';
      this.theme = storedTheme;
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', this.theme);
    }
    this.applyTheme();
  }

  applyTheme() {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('color-scheme', this.theme);
      document.documentElement.style['color-scheme'] = this.theme;
      document.documentElement.classList.toggle('light', this.theme === 'light');
      document.documentElement.classList.toggle('dark', this.theme === 'dark');
    }
  }
}
