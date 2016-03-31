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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nTWlkZGxld2FyZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU0sb0JBQW9CLFNBQXBCLGlCQUFvQixPQUFnQjtNQUFkLHlCQUFjOztBQUN4QyxTQUFPO1dBQVEsa0JBQVU7VUFDaEIsT0FBUSxPQUFSLEtBRGdCOztBQUV2QixVQUFJLENBQUMsSUFBRCxJQUFTLENBQUMsS0FBSyxjQUFMLENBQW9CLFNBQXBCLENBQUQsRUFBaUM7QUFDNUMsZUFBTyxLQUFLLE1BQUwsQ0FBUCxDQUQ0QztPQUE5Qzs7QUFJQSxVQUFHLEtBQUssT0FBTCxFQUFhO0FBQ2QsaUJBQVMsRUFBQyxNQUFNLFNBQU4sRUFBVixFQURjO09BQWhCLE1BR0k7QUFDRixpQkFBUyxFQUFDLE1BQU0sUUFBTixFQUFWLEVBREU7T0FISjs7QUFPQSxhQUFPLEtBQUssTUFBTCxDQUFQLENBYnVCO0tBQVY7R0FBUixDQURpQztDQUFoQjs7a0JBa0JYIiwiZmlsZSI6ImxvYWRpbmdNaWRkbGV3YXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZGluZ01pZGRsZXdhcmUgPSAoe2Rpc3BhdGNofSkgPT4ge1xyXG4gIHJldHVybiBuZXh0ID0+IGFjdGlvbiA9PiB7XHJcbiAgICBjb25zdCB7bWV0YX0gPSBhY3Rpb25cclxuICAgIGlmICghbWV0YSB8fCAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgnbG9hZGluZycpKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KGFjdGlvbilcclxuICAgIH1cclxuXHJcbiAgICBpZihtZXRhLmxvYWRpbmcpe1xyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0xPQURJTkcnfSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTE9BREVEJ30pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ01pZGRsZXdhcmUiXX0=