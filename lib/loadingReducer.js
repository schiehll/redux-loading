'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var loadingReducer = function loadingReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {
    pending: 0,
    done: true
  } : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'LOADING':
      return {
        pending: state.pending + 1,
        done: false
      };
    case 'LOADED':
      var pending = state.pending - 1;
      return {
        pending: pending,
        done: pending === 0 ? true : false
      };
    default:
      return state;
  }
};

exports.default = loadingReducer;