var legacyBrowser = require('./lib/legacy-browsers')

var el

var cache = {}

if (typeof document != 'undefined') {
 el = document.createElement('p')

 /**
  * We test every property on vendor prefix requirement.
  * Once tested, result is cached. It gives us up to 70% perf boost.
  * http://jsperf.com/element-style-object-access-vs-plain-object
  *
  * Prefill cache with known css properties and styles to reduce amount of
  * properties we need to feature test at runtime.
  * http://davidwalsh.name/vendor-prefix
  */
 cache = (function() {
  var computed = window.getComputedStyle(document.documentElement, '')
  var cache = {}

  for (var key in computed) {
   cache[key + computed[key]] = { value: computed[key], property: key }
  }

  return cache
 }())
}

/**
 * Test if a property and value are supported by legacy browser, returns supported legacy property and value with vendor
 * prefix if required. Returns original property and value if not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {Style} The new Style Object with property and value
 * @api public
 */



module.exports.supportedStyles = function (property, value) {

 var cacheKey = property + value;

 if (cache[cacheKey] != null) { return cache[cacheKey]; }

 cache[cacheKey] = {value: value, property: property}

 // Test value as it is.
 el.style[property] = value;

 // Value and property are supported as they are.
 if (el.style[property] == value) {
  return cache[cacheKey];
 } else {

  // Get value and prop from legacy browser
  if(legacyBrowser.props[property]) property = legacyBrowser.props[property];
  if(legacyBrowser.values[value]) value = legacyBrowser.values[value];

  // Test value and prop from legacy browser
  el.style[property] = value;

  // Legacy value and prop are supported by this browser
  if (el.style[property] == value)  {
   cache[cacheKey].value = value;
   cache[cacheKey].property = property;
  }
  else {
   cache[cacheKey] = false;
  }
  return cache[cacheKey];
 }

};


