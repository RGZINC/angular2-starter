import 'core-js/es6';
import 'core-js/es7/reflect';
import 'ts-helpers';
import '../shims/shims_for_IE';
require('zone.js/dist/zone');

import { enableProdMode, provide } from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { APP_BASE_HREF } from '@angular/common/index';
import { RioSampleAppComponent } from './containers/sample-app';

declare let __PRODUCTION__: any;

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require('zone.js/dist/long-stack-trace-zone');
}

bootstrap(RioSampleAppComponent, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '/' })
]);
