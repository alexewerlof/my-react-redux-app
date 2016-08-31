import {createStore} from 'redux';
import ACTIONS from './actions';

var INIT_STORE = {
  running: false,
  startTime: 0,
  elapsedTime: 0
};

function reducer(state = INIT_STORE, action) {
  switch (action.type) {
    case ACTIONS.START:
      return {...state, running: true, startTime: action.payload};
    case ACTIONS.STOP:
      return {...state, running: false};
    case ACTIONS.SET_ELAPSED:
      return state.running ? {...state, elapsedTime: action.payload - state.startTime} : state;
    default:
      return state;
  }
}

var store = createStore(reducer);

export default store;
