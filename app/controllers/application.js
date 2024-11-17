import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { log } from 'qunit';

export default class ApplicationController extends Controller {
    @service router;
}
  