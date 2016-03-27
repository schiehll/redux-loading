const loadingReducer = (state = {
  pending: 0,
  done: true
}, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        pending: state.pending + 1,
        done: false
      }
    case 'LOADED':
      const pending = state.pending - 1
      return {
        pending,
        done: pending === 0 ? true : false 
      }
    default:
      return state
  }
}

export default loadingReducer