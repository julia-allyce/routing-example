import can from 'can/';
import route from 'can/route/';
import $ from 'jquery';
import 'can/route/pushstate/';

import 'style.less!';
import appTemplate from 'index.stache!';

var AppState = can.Map.extend({});
var app = new AppState();

route(':page', { page: 'home' });
route(':page/:slug', { slug: null });

can.route.map(app);
can.route.ready();
$('body').append(appTemplate(app));
