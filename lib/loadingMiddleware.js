'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var loadingMiddleware = function loadingMiddleware(_ref) {
  var dispatch = _ref.dispatch;

  return function (next) {
    return function (action) {
      var meta = action.meta;

      if (!meta || !meta.hasOwnProperty('loading')) {
        return next(action);
      }

      if (meta.loading) {
        dispatch({ type: 'LOADING' });
      } else {
        dispatch({ type: 'LOADED' });
      }

      return next(action);
    };
  };
};

exports.default = loadingMiddleware;