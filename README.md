# redux-loading 

> Loading control with Redux

[![travis build](https://img.shields.io/travis/schiehll/redux-loading.svg?style=flat-square)](https://travis-ci.org/schiehll/redux-loading)
[![Coverage Status](https://coveralls.io/repos/github/schiehll/redux-loading/badge.svg?branch=master)](https://coveralls.io/github/schiehll/redux-loading?branch=master)
[![version](https://img.shields.io/npm/v/redux-loading.svg?style=flat-square)](http://npm.im/redux-loading)
[![MIT License](https://img.shields.io/npm/l/redux-loading.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## Example

```js
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {loadingReducer, loadingMiddleware} from 'redux-loading'

const store = createStore(
  combineReducers({
    loading: loadingReducer
  }), 
  applyMiddleware(loadingMiddleware)
)

let action = {
  type: 'SOME_ACTION',
  meta: {
    loading: true
  }
}

store.dispatch(action)

let state = store.getState()
//state = {loading: {pending: 1, done: false}}

action = {
  type: 'SOME_OTHER_ACTION',
  meta: {
    loading: false
  }
}

store.dispatch(action)

state = store.getState()
//state = {loading: {pending: 0, done: true}}
```