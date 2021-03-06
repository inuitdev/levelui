var dom = require('dom-events');

var root = '../';

var header = require(root + 'lib/header');
var query = require(root + 'lib/query');
var put = require(root + 'lib/put');
var settings = require(root + 'lib/settings');
var connections = require(root + 'lib/connections');

exports.init = function header() {

  var q = document.querySelector.bind(document);

  var queryBtn = q('header a.query');
  var putBtn = q('header a.put');
  var connectionsBtn = q('header a.connections');
  var settingsBtn = q('header a.settings');

  var querySection = q('section.query');
  var putSection = q('section.put');
  var connectionsSection = q('section.connections');
  var settingsSection = q('section.settings');

  querySection.style.display = 'none';
  putSection.style.display = 'none';
  settingsSection.style.display = 'none';
  connectionsSection.style.display = 'block';

  function setActive(el) {
    var active = document.querySelector('a.active')
    if (active) {
      active.classList.remove('active');
    }
    el.classList.add('active');
  }

  function show(el) {
    var selector = 'section[style*="display: block"]';
    var prev = document.querySelector(selector);
    prev.style.display = 'none';
    prev.style.zIndex = 0;
    el.style.display = 'block';
    el.style.zIndex = 1;
  }

  dom.on(queryBtn, 'click', function() {
    setActive(queryBtn);
    show(querySection);
    query.onShow();
  });

  dom.on(putBtn, 'click', function() {
    setActive(putBtn);
    show(putSection);
    put.onShow();
  });

  dom.on(connectionsBtn, 'click', function() {
    setActive(connectionsBtn);
    show(connectionsSection);
    connections.onShow();
  });

  dom.on(settingsBtn, 'click', function() {
    setActive(settingsBtn);
    show(settingsSection);
    settings.onShow();
  });

};

