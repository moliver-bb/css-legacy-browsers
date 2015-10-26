# css-legacy-browsers
CSS legacy browser support detection and property testing. Provides a list of proprietary legacy browser properties that can be matched to current styles.

## uses
```javascript
var cssLegacyBrowsers = require('css-legacy-browsers')

console.log(cssLegacyBrowsers.supportedStyles('display', 'flex')) //in IE10 returns {property: 'display', value: '-ms-flexbox'} 
```

Tests if value and property are supported on current browser, returns new property/value object if supported, returns false if not supported

## Legacy Browsers currently supported
* IE10 (-ms-)
* Mozzila Firefox Gecko (-moz-)  
...more to come

## License

MIT
