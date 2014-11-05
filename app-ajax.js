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
  scaffold = document.querySelector('#scaffold');
  ajax = document.querySelector('#ajax');
  pages = document.querySelector('#pages');
  var keys = document.querySelector('#keys');

  // Allow selecting pages by num keypad. Dynamically add
  // [1, template.pages.length] to key mappings.
  var keysToAdd = Array.apply(null, template.pages).map(function(x, i) {
    return i + 1;
  }).reduce(function(x, y) {
    return x + ' ' + y;
  });
  keys.keys += ' ' + keysToAdd;

  // Use URL hash for initial route. Otherwise, use the first page.
  this.route = this.route || DEFAULT_ROUTE;
});

template.keyHandler = function(e, detail, sender) {
  // Select page by num key.
  var num = parseInt(detail.key);
  if (!isNaN(num) && num <= this.pages.length) {
    pages.selectIndex(num - 1);
    return;
  }

  switch (detail.key) {
    case 'left':
    case 'up':
      pages.selectPrevious();
      break;
    case 'right':
    case 'down':
      pages.selectNext();
      break;
    case 'space':
      detail.shift ? pages.selectPrevious() : pages.selectNext();
      break;
  }
};

})();
