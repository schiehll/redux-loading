import test from 'ava'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import loadingReducer from '../src/loadingReducer'
import loadingMiddleware from '../src/loadingMiddleware'

test.beforeEach(t => {
  t.context.store = createStore(
    combineReducers({
      loading: loadingReducer
    }), 
    applyMiddleware(loadingMiddleware)
  )
})

test('should dispatch a LOADING action', t => {
  const {dispatch, getState} = t.context.store

  const action = {
    type: 'SOME_ACTION',
    meta: {
      loading: true
    }
  }

  dispatch(action)

  const expected = {
    loading: {
      pending: 1,
      done: false
    }
  }
  const actual = getState()

  t.same(expected.loading.pending, actual.loading.pending)
  t.same(expected.loading.done, actual.loading.done)
})

test('should dispatch a LOADED action', t => {
  const {dispatch, getState} = t.context.store

  let action = {
    type: 'SOME_ACTION',
    meta: {
      loading: true
    }
  }

  dispatch(action)

  action = {
    type: 'SOME_OTHER_ACTION',
    meta: {
      loading: false
    }
  }
  
  dispatch(action)

  const expected = {
    loading: {
      pending: 0,
      done: true
    }
  }
  const actual = getState()

  t.same(expected.loading.pending, actual.loading.pending)
  t.same(expected.loading.done, actual.loading.done)
})