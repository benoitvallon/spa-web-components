(function() {
"use strict";

var DEFAULT_ROUTE = 'one';

var template = document.querySelector('template[is="auto-binding"]');
var ajax, pages, scaffold;
var cache = {};

template.pages = [
  {name: 'Intro', hash: 'one', url: '/docs/start/tutorial/intro.html'},
  {name: 'Step 1', hash: 'two', url: '/docs/start/tutorial/step-1.html'},
  {name: 'Step 2', hash: 'three', url: '/docs/start/tutorial/step-2.html'},
  {name: 'Step 3', hash: 'four', url: '/docs/start/tutorial/step-3.html'},
  {name: 'Step 4', hash: 'five', url: '/docs/start/tutorial/step-4.html'},
];

template.addEventListener('template-bound', function(e) {
  // Use URL hash for initial route. Otherwise, use the first page.
  this.route = this.route || DEFAULT_ROUTE;
});

})();
