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
      var pending = state.pending > 0 ? state.pending - 1 : state.pending;
      return {
        pending: pending,
        done: pending === 0 ? true : false
      };
    default:
      return state;
  }
};

exports.default = loadingReducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU0saUJBQWlCLFNBQWpCLGNBQWlCLEdBR1Q7TUFIVSw4REFBUTtBQUM5QixhQUFTLENBQVQ7QUFDQSxVQUFNLElBQU47bUJBQ1k7TUFBWCxzQkFBVzs7QUFDWixVQUFRLE9BQU8sSUFBUDtBQUNOLFNBQUssU0FBTDtBQUNFLGFBQU87QUFDTCxpQkFBUyxNQUFNLE9BQU4sR0FBZ0IsQ0FBaEI7QUFDVCxjQUFNLEtBQU47T0FGRixDQURGO0FBREYsU0FNTyxRQUFMO0FBQ0UsVUFBTSxVQUFVLE1BQU0sT0FBTixHQUFnQixDQUFoQixHQUFvQixNQUFNLE9BQU4sR0FBZ0IsQ0FBaEIsR0FBb0IsTUFBTSxPQUFOLENBRDFEO0FBRUUsYUFBTztBQUNMLHdCQURLO0FBRUwsY0FBTSxZQUFZLENBQVosR0FBZ0IsSUFBaEIsR0FBdUIsS0FBdkI7T0FGUixDQUZGO0FBTkY7QUFhSSxhQUFPLEtBQVAsQ0FERjtBQVpGLEdBRFk7Q0FIUzs7a0JBcUJSIiwiZmlsZSI6ImxvYWRpbmdSZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZGluZ1JlZHVjZXIgPSAoc3RhdGUgPSB7XHJcbiAgcGVuZGluZzogMCxcclxuICBkb25lOiB0cnVlXHJcbn0sIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0xPQURJTkcnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBlbmRpbmc6IHN0YXRlLnBlbmRpbmcgKyAxLFxyXG4gICAgICAgIGRvbmU6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIGNhc2UgJ0xPQURFRCc6XHJcbiAgICAgIGNvbnN0IHBlbmRpbmcgPSBzdGF0ZS5wZW5kaW5nID4gMCA/IHN0YXRlLnBlbmRpbmcgLSAxIDogc3RhdGUucGVuZGluZ1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBlbmRpbmcsXHJcbiAgICAgICAgZG9uZTogcGVuZGluZyA9PT0gMCA/IHRydWUgOiBmYWxzZSBcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkaW5nUmVkdWNlciJdfQ==