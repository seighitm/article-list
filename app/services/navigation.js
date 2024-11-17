import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class NavigationService extends Service {
  @service router;

  navigateTo(route, model) {
    this.router.transitionTo(route, model);
  }
}
