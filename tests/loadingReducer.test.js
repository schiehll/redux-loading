import test from 'ava'
import loadingReducer from '../src/loadingReducer'

test.beforeEach(t => {
  t.context.initialState = {
    pending: 0,
    done: true
  }
})

test('should return the initial state', t => {
  const expected = t.context.initialState
  const actual = loadingReducer(undefined, {type: 'UNKNOW_ACTION'})
  
  t.same(expected, actual)
})

test('should handle the LOADING action', t => {
  const expected = {
    pending: 1,
    done: false
  }

  const actual = loadingReducer(t.context.initialState, {type: 'LOADING'})
  
  t.same(expected, actual)
})

test('should handle multiples LOADING actions', t => {
  const expected = {
    pending: 2,
    done: false
  }

  let actual = loadingReducer(t.context.initialState, {type: 'LOADING'})
  actual = loadingReducer(actual, {type: 'LOADING'})
  
  t.same(expected, actual)
})

test('should handle the LOADED action', t => {
  const expected = {
    pending: 0,
    done: true
  }

  let actual = loadingReducer(expected, {type: 'LOADING'})
  actual = loadingReducer(actual, {type: 'LOADED'})
  
  t.same(expected, actual)
})

test('should handle multiples LOADED actions', t => {
  const expected = {
    pending: 1,
    done: false
  }

  let actual = loadingReducer(t.context.initialState, {type: 'LOADING'})
  actual = loadingReducer(actual, {type: 'LOADING'})
  actual = loadingReducer(actual, {type: 'LOADED'})
  
  t.same(expected, actual)
})