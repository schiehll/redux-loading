const loadingMiddleware = ({dispatch}) => {
  return next => action => {
    const {meta} = action
    if (!meta || !meta.hasOwnProperty('loading')) {
      return next(action)
    }

    if(meta.loading){
      dispatch({type: 'LOADING'})
    }
    else{
      dispatch({type: 'LOADED'})
    }

    return next(action)
  }
}

export default loadingMiddleware