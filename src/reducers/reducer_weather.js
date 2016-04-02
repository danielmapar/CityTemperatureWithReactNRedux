import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

  switch(action.type) {
    case FETCH_WEATHER:
      // Add on to the existent state - NEVER UPDATE STATE
      // state.push(action.payload.data);

      // Concat does not change the state
      // it returns a new instance of state
      //return state.concat([action.payload.data]);
      return [action.payload.data, ...state]; // Unpack entries inside array and
      // insert in the new array - ES6
  }
  return state;
}
