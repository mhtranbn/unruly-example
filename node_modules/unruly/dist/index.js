// The Least App Configuration
// @author Daniel Sont

'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var file = (0, _path.join)((0, _path.dirname)(require.main.filename), 'app.config');
var block = _fs2['default'].readFileSync(file, 'UTF-8');

var config = {};

var pairs = block.split("\n").map(function (x) {
	return x.trim();
}).map(function (x) {
	return x.split(/\s*=\s*/);
}).filter(function (x) {
	return x[0].length > 0;
}).map(function (_ref) {
	var _ref2 = _slicedToArray(_ref, 2);

	var k = _ref2[0];
	var v = _ref2[1];
	return [k.replace(/[-\s]/g, '_'), v];
}).map(function (_ref3) {
	var _ref32 = _slicedToArray(_ref3, 2);

	var k = _ref32[0];
	var v = _ref32[1];
	return [k.toLowerCase(), k.toUpperCase(), v];
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = pairs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var _step$value = _slicedToArray(_step.value, 3);

		var k = _step$value[0];
		var K = _step$value[1];
		var value = _step$value[2];

		config[k] = typeof process.env[K] !== 'undefined' ? process.env[K] : value;
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator['return']) {
			_iterator['return']();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

exports['default'] = config;
module.exports = exports['default'];
